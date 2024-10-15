import { gql } from "@apollo/client";
import { useCallback, useRef, useState } from "react";
import { IPluginPublishFiles } from "../Plugin.types";
import AbstractDesign from "./AbstractDesign";
import Form from "./Form";
import cookie from "cookie";
import axios from "axios";
import JSZip from "jszip";
import PublishProgress from "./PublishProgress";
import { AccountInfo } from "@tago-io/sdk/out/modules/Account/account.types";
import { ProfileListInfo } from "@tago-io/sdk/out/modules/Account/profile.types";
import { apolloClient } from "../../../pages/_app";

/**
 * Query to fetch the url to upload plugins.
 */
const QUERY = gql`
  query ($profileID: String!, $active: Boolean) {
    pluginUpload(profileID: $profileID, active: $active)
  }
`;

/**
 * Props.
 */
interface IPublishProps {
  account: AccountInfo;
  profiles: ProfileListInfo[];
}

/**
 * Component that handles publishing a plugin.
 */
function Publish(props: IPublishProps) {
  const [profileID, setProfileID] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [publishingError, setPublishingError] = useState("");
  const [publishingProgress, setPublishingProgress] = useState(0);
  const abortController = useRef<AbortController>(null);
  const lastPercentage = useRef(0);

  const { account, profiles } = props;

  /**
   * Does the actual request to upload the file.
   */
  const upload = useCallback(async (url: string, file: Blob) => {
    try {
      if (abortController.current?.signal?.aborted) {
        console.log("Aborted before reaching upload request.");
        return;
      }

      if (file.size > 100000000) {
        // > 100mb
        throw new Error("Compressed file size should be at most 100 MB.");
      }

      await axios({
        url,
        method: "PUT",
        data: file,
        signal: abortController.current.signal,
        onUploadProgress: (e) => {
          const percent = Math.min(50 + ((e.loaded / e.total) * 100) / 2, 99);
          setPublishingProgress(percent);
        },
      });

      setPublishingProgress(100);
    } catch (ex) {
      setPublishingError(ex?.message);
    }
  }, []);

  /**
   * Cancels the publish.
   */
  const cancelPublish = useCallback(() => {
    setPublishing(false);
    setPublishingProgress(0);
    setPublishingError("");
    lastPercentage.current = 0;
    abortController.current.abort();
  }, [abortController]);

  /**
   * Fetches the upload URL from the server.
   */
  const fetchUploadURL = useCallback(async (profileID: string, visible: boolean) => {
    const { data } = await apolloClient.query({
      query: QUERY,
      variables: { profileID, active: visible },
      context: { headers: { token: cookie.parse(document.cookie)?.token } },
    });

    const url = data.pluginUpload;
    return url;
  }, []);

  /**
   * Called when the zip bundling makes progress.
   */
  const onZipBundleProgress = useCallback(({ percent }) => {
    const shouldOutput = percent === 100 || percent > lastPercentage.current + 5;
    if (shouldOutput) {
      // only outputs every 5% or at 100% to not overwhelm the client
      lastPercentage.current = percent;
      setPublishingProgress(percent / 2);
    }
  }, []);

  /**
   * Generates and returns a .zip file blob.
   */
  const generateZip = useCallback(
    async (files: IPluginPublishFiles): Promise<Blob> => {
      const zip = new JSZip();
      for (const key in files) {
        zip.file(key, files[key]);
      }
      return await zip.generateAsync({ type: "blob" }, onZipBundleProgress);
    },
    [onZipBundleProgress]
  );

  /**
   * Publishes the plugin version.
   */
  const publish = useCallback(
    async (files: IPluginPublishFiles, profileID: string, visible: boolean) => {
      setPublishing(true);
      setProfileID(profileID);

      abortController.current = new AbortController();

      const url = await fetchUploadURL(profileID, visible);
      const blob = await generateZip(files);

      await upload(url, blob);
    },
    [fetchUploadURL, upload, generateZip]
  );

  return (
    <div className="publish page-max-width">
      <div className="left-side">
        {publishing ? (
          <PublishProgress
            account={account}
            error={publishingError}
            onCancel={cancelPublish}
            profileID={profileID}
            profiles={profiles}
            progress={publishingProgress}
          />
        ) : (
          <Form profiles={profiles} onPublish={publish} />
        )}
      </div>

      <AbstractDesign />

      <style jsx>{`
        .publish {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
          margin-top: 40px;
        }

        .publish .left-side {
          display: flex;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.04);
          border-radius: 7px;
          padding: 20px;
          flex: 1;
          min-height: 400px;
        }

        @media screen and (max-width: 1200px) {
          .publish :global(.abstract-design) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Publish;
