import { useState } from "react";
import Buttons from "../components/ui/Buttons";
import { Card, CardProps } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/SideBar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL, FRONTEND_URL } from "../config";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const content = useContent();

  return (
    <>
      <div>
        <div className="">
          <SideBar />
        </div>
        <div className="p-4 ml-72 min-h-screen bg-[var(--color-gray-light)]">
          <CreateContentModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          />
          <div className="flex justify-end gap-4">
            <Buttons
              onClick={() => {
                setModalOpen(true);
              }}
              variant="primary"
              size="lg"
              text="Add Content"
              IconFirst={<PlusIcon size="lg" />}
            />
            <Buttons
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/share`,
                  {
                    share: true,
                  },
                  { headers: { Authorization: localStorage.getItem("token") } }
                );
                response.data.hash;
                const shareURL = `${FRONTEND_URL}/share/${response.data.hash}`;
                {
                  shareURL && (
                    <CopyToClipboard
                      text={shareURL}
                      onCopy={() => setCopied(true)}
                    >
                      <span>Copy to clipboard with span</span>
                    </CopyToClipboard>
                  );
                }
              }}
              variant="secondary"
              size="lg"
              text={copied ? "Copied!" : "Share Brain"}
              IconLast={<ShareIcon size="lg" />}
            />
          </div>

          <div className="flex flex-wrap mt-2 gap-4">
            {content.map(({ type, title, link }: CardProps) => {
              return <Card title={title} link={link} type={type} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
