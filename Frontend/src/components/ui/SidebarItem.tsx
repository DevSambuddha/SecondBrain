import { ReactElement } from "react";

export const SidebarItem = ({
  text,
  icons,
}: {
  text: string;
  icons: ReactElement;
}) => {
  return (
    <div className="flex flex-row pl-4 justify-start items-center cursor-pointer text-gray-400">
      <div className="p-2">{icons}</div>
      <div className="p-2">{text}</div>
    </div>
  );
};
