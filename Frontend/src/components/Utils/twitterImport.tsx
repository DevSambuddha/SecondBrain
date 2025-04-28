import { useEffect } from "react";

declare global {
  interface Window {
    twttr: any;
  }
}

interface TwitterEmbedProps {
  tweetUrl: string;
}

export const TwitterEmbed = ({ tweetUrl }: TwitterEmbedProps) => {
  useEffect(() => {
    const scriptId = "twitter-wjs";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    }
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <a href={tweetUrl}></a>
    </blockquote>
  );
};
