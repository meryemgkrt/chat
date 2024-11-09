import React from "react";
import Sidebar from "../../components/sidebar/Sdebar";
import MessageContainer from "../../components/message/MessageContainer";

const Home = () => {
  return (
    <div className="main  flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-12 md:mt-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
