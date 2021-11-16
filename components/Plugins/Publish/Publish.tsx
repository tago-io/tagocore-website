import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { IPluginPublishFiles } from "../Plugin.types";
import AbstractDesign from "./AbstractDesign";
import Form from "./Form";
import { gql } from "apollo-boost";
import axios from "axios";

/**
 * Query to fetch the url to upload plugins.
 */
const QUERY = gql`
  query {
    ALPINE_ARM64: pluginUpload(platform: ALPINE_ARM64)
    ALPINE_X64: pluginUpload(platform: ALPINE_X64)
    LINUX_ARM64: pluginUpload(platform: LINUX_ARM64)
    LINUX_ARM7: pluginUpload(platform: LINUX_ARM7)
    LINUX_X64: pluginUpload(platform: LINUX_X64)
    MACOS_ARM64: pluginUpload(platform: MACOS_ARM64)
    MACOS_X64: pluginUpload(platform: MACOS_X64)
    WINDOWS_ARM64: pluginUpload(platform: WINDOWS_ARM64)
    WINDOWS_X64: pluginUpload(platform: WINDOWS_X64)
    ANY: pluginUpload(platform: ANY)
  }
`;

/**
 * Component that handles publishing/submitting a plugin.
 */
function Publish() {
  const [publishing, setPublishing] = useState(false);
  const [files, setFiles] = useState<IPluginPublishFiles>({});
  const [step, setStep] = useState(0);
  const { data: urls } = useQuery(QUERY, {
    skip: !publishing,
  });

  /**
   * Does the actual request to upload the file.
   */
  const doRequestUpload = useCallback((url: string, file: File) => {
    return axios({
      url,
      method: "PUT",
      data: file,
    });
  }, []);

  /**
   */
  const publish = useCallback(async () => {
    const promises = [];

    for (const key in files) {
      promises.push(doRequestUpload(urls[key], files[key]));
    }

    await Promise.all(promises);

    setStep(3);
  }, [urls, files, doRequestUpload]);

  /**
   */
  const startPublishProcess = useCallback((files: IPluginPublishFiles) => {
    setPublishing(true);
    setFiles(files);
  }, []);

  /**
   */
  useEffect(() => {
    if (urls && step === 0) {
      publish();
      setStep(1);
    }
  }, [urls, step, publish]);

  return (
    <div className="publish page-max-width">
      <Form publishing={publishing} step={step} onPublish={startPublishProcess} />

      <AbstractDesign />

      <style jsx>{`
        .publish {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          margin-bottom: 40px;
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
