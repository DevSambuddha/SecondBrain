import { useState } from "react";
import Buttons from "../components/ui/Buttons";
import { Card, CardProps } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/SideBar";
import { useContent } from "../hooks/useContent";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
              variant="secondary"
              size="lg"
              text="Share Brain"
              IconLast={<ShareIcon size="lg" />}
              onClick={() => {}}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {content.map(({ type, title, link }: CardProps) => {
              return <Card title={title} link={link} type={type} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
