import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import DataContext from "../../Context/DataContext";

const MessageBanner = () => {
  const { messageBanner, setMessageBanner } = useContext(DataContext);
  return (
    <div
      style={{
        backgroundColor: messageBanner.split(" ").includes("Added")
          ? "#28A745"
          : "#DC3545",
      }}
      className="fixed z-50 right-4 bottom-8 text-white text-2xl pb-4 pt-5 pl-4 pr-8"
    >
      <IoMdClose
        className="text-white text-xl absolute h-[25px] w-[25px] bg-hotBlue top-0 right-0 cursor-pointer"
        onClick={() => setMessageBanner(null)}
      />
      {messageBanner}
    </div>
  );
};

export default MessageBanner;
