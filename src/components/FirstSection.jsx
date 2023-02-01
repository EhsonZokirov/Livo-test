import React from "react";
import img1 from "../images/img1.png";
function FirstSection() {
  return (
    <div className="grid md:grid-cols-2 md:w-[75%] gap-5 m-auto my-20">
      <div className="m-auto">
        <div className="md:space-y-10 space-y-5 text-center md:text-start">
          <h1 className="lg:text-[50px] font-bold ">
            Want anything to be easy with
            <span className="font-extrabold"> LaslesVPN.</span>
          </h1>
          <p className="text-slate-500 px-10 md:px-0">
            Provide a network for all your needs with ease and fun using
            <span className="font-bold"> LaslesVPN</span> discover interesting features from us.
          </p>
          <button className="bg-[#F53838] px-8 py-2 rounded-xl hover:shadow-[#F5383859] shadow-lg text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
      <div className="m-auto">
        <img className="m-auto" src={img1} alt="img Design" />
      </div>
    </div>
  );
}

export default FirstSection;
