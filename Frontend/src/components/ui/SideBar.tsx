import { TwitterIcon } from "../../icons/TwitterIcon";
import { SidebarItem } from "./SidebarItem";
import { MainIcon } from "../../icons/MainIcon";
import Youtube from "../../icons/Youtube";

export const SideBar = () => {
  return (
    <div className="flex flex-col h-full w-74  bg-white border-r border-gray-200 shadow fixed top-0 left-0">
      <div>
        <div className="flex flex-row text-3xl text-bold py-4 px-2 justify-start items-center">
          <span>
            <MainIcon size="lg" />
          </span>
          <div className="ml-2 text-[var(--color-primary)]">Second Brain</div>
        </div>
        <div>
          <SidebarItem text="Twitter" icons={<TwitterIcon size="lg" />} />
          <SidebarItem text="Youtube" icons={<Youtube size="lg" />} />
        </div>
      </div>
    </div>
  );
};
