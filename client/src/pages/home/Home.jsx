import React from "react";
import Sidebar from "../../components/sidebar/Sdebar";
import MessageContainer from "../../components/message/MessageContainer";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="main flex sm:h-[600px] md:h-[700px] w-full max-w-5xl rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
