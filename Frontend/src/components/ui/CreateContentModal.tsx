import { useRef, useState } from "react";
import CrossIcon from "../../icons/CrossIcon";
import Buttons from "./Buttons";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export enum ContentType {
  Document = "document",
  Twitter = "twitter",
  Youtube = "youtube",
  link = "link",
}

export interface CreateContentModalProps {
  open: boolean;
  onClose?: () => void;
}

export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Twitter);

  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    onClose?.();
  };

  return (
    <div>
      {open && (
        <div className="flex justify-center items-center fixed top-0 left-0 z-10 w-screen h-screen ">
          <div className="flex w-screen h-screen bg-slate-300 fixed top-0 left-0 z-10 opacity-60"></div>
          <div>
            <div className="flex items-center justify-center w-full h-full">
              <div className="bg-white rounded-md p-4 text-center opacity-100 z-20">
                <div className="flex justify-end">
                  <div onClick={onClose}>
                    <CrossIcon size="sm" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Input ref={titleRef} placeholder="Title" type="text" />
                  <Input ref={linkRef} placeholder="Link" type="text" />
                </div>
                <div className="flex gap-4 mt-4">
                  <Buttons
                    size="md"
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Twitter)}
                  />
                  <Buttons
                    size="md"
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Youtube)}
                  />
                  <Buttons
                    size="md"
                    text="Link"
                    variant={
                      type === ContentType.link ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.link)}
                  />
                  <Buttons
                    size="md"
                    text="Document"
                    variant={
                      type === ContentType.Document ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Document)}
                  />
                </div>
                <div className="flex mt-2 justify-center">
                  <Buttons
                    onClick={addContent}
                    variant="primary"
                    size="lg"
                    text="Add Content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
