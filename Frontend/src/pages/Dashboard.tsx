import { useState } from "react";
import Buttons from "../components/ui/Buttons";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/ui/SideBar";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
            <Card
              title="Sambuddha"
              link="https://www.youtube.com/watch?v=SBcQT-SRu50"
              type="youtube"
            />
            <Card
              title="Sambuddha"
              link="https://x.com/elonmusk/status/1916694738482483411"
              type="twitter"
            />
          </div>
        </div>
      </div>
    </>
  );
};
