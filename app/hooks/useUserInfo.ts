"use client";
import { useState, useEffect } from "react";
import { UserInfo } from "./interfacees/UserInfo";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const updateUser = (newUserInfo: UserInfo) => {
    sessionStorage.setItem("userInfo", JSON.stringify(newUserInfo));
    setUserInfo(newUserInfo);
  };

  return { userInfo, updateUser };
};

export default useUserInfo;
