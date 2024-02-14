/* eslint-disable react-hooks/rules-of-hooks */

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostRequest = () => {
  return (
    url: string,
    onSuccess: (data: any) => void,
    onError: (error: any) => void
  ) => {
    return useMutation({
      mutationFn: async (data: any) => {
        const accessToken = sessionStorage.getItem("accessToken");

        // if (!accessToken) {
        //   throw new Error("No access token found in session storage");
        // }

        return await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
      },
      onSuccess,
      onError,
    });
  };
};

export default usePostRequest;
