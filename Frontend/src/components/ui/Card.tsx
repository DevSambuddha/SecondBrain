import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TwitterEmbed } from "../Utils/twitterImport";

export interface CardProps {
  title: string;
  link: string;
  type: "document" | "twitter" | "facebook" | "youtube" | "link";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div>
      <div className="bg-white max-w-72 p-4 rounded-md border border-gray-200 min-w-72  min-h-48 ">
        <div className="flex justify-between text-md">
          <div className="flex">
            <div className="text-gray-400 pr-2">
              <ShareIcon size="md" />
            </div>
            {title}
          </div>
          <div className="flex">
            <div className="text-gray-400 pr-2">
              <a href={link} target="_blank" rel="noreferrer">
                <ShareIcon size="md" />
              </a>
            </div>
            <div className="text-gray-400">
              <DeleteIcon size="md" />
            </div>
          </div>
        </div>
        <div className="pt-4 pb-2">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <TwitterEmbed tweetUrl={link.replace("x.com", "twitter.com")} />
          )}
        </div>
      </div>
    </div>
  );
};
