import CrossIcon from "../../icons/CrossIcon";
import Buttons from "./Buttons";
import { Input } from "./Input";

export interface CreateContentModalProps {
  open: boolean;
  onClose?: () => void;
}

export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  return (
    <div>
      {open && (
        <div className="flex w-screen h-screen bg-slate-300 fixed top-0 left-0 z-10 opacity-60">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="bg-white rounded-md p-4 text-center opacity-100 z-20">
              <div className="flex justify-end">
                <div onClick={onClose}>
                  <CrossIcon size="sm" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 mt-4">
                <Input placeholder="Title" />
                <Input placeholder="Link" />
              </div>
              <div className="flex mt-2 justify-center">
                <Buttons variant="primary" size="lg" text="Add Content" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
