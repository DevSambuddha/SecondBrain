import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useContent = () => {
  const [content, setContent] = useState<any>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setContent(response.data.content);
    };
    fetchContent();
  }, []);

  return content;
};
