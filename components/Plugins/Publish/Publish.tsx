import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { IPluginPublishFiles } from "../Plugin.types";
import AbstractDesign from "./AbstractDesign";
import Form from "./Form";
import { gql } from "apollo-boost";
import axios from "axios";
import JSZip from "jszip";

/**
 * Query to fetch the url to upload plugins.
 */
const QUERY = gql`
  query {
    pluginUpload
  }
`;

/**
 * Component that handles publishing a plugin.
 */
function Publish(props) {
  const [publishing, setPublishing] = useState(false);
  const [files, setFiles] = useState<IPluginPublishFiles>({});
  const [step, setStep] = useState(0);
  const { data } = useQuery<{ pluginUpload: string }>(QUERY, { skip: !publishing });

  const url = data?.pluginUpload;

  /**
   * Does the actual request to upload the file.
   */
  const upload = useCallback(
    async (file: Blob) => {
      await axios({
        url,
        method: "PUT",
        data: file,
      });
      setStep(3);
    },
    [url]
  );

  /**
   */
  const onBundleProgress = useCallback(({ percent }) => {
    console.log(percent);
  }, []);

  /**
   * Organizes all the files into a single bundle then sends that bundle.
   * After this, the step is increased.
   */
  const publish = useCallback(async () => {
    const zip = new JSZip();

    for (const key in files) {
      zip.file(key, files[key]);
    }

    zip.generateAsync({ type: "blob" }, onBundleProgress).then(upload);
  }, [files, upload, onBundleProgress]);

  /**
   * Starts the publishing process. This will set a state that will
   * in turn fetch the data from the graphql server and get the upload urls.
   */
  const startPublishProcess = useCallback((files: IPluginPublishFiles) => {
    setPublishing(true);
    setFiles(files);
  }, []);

  /**
   * Starts uploading the files once the urls are valid.
   */
  useEffect(() => {
    if (url && step === 0) {
      publish();
      setStep(1);
    }
  }, [url, step, publish]);

  return (
    <div className="publish page-max-width">
      <Form profiles={props.profiles} publishing={publishing} step={step} onPublish={startPublishProcess} />

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
