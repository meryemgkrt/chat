import React from "react";
import Sidebar from "../../components/sidebar/Sdebar";
import MessageContainer from "../../components/message/MessageContainer";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
