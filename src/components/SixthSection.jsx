import React from "react";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import carousel from "../images/carousel.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function SixthSection() {
  return (
    <div className="my-20">
      <div className="text-center xl:w-[35%] space-y-5 m-auto">
        <h1 className="font-bold text-[20px] md:text-[40px]">
          Trusted by Thousands of Happy Customer
        </h1>
        <p className="text-slate-500">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 my-10 w-[80%] m-auto gap-10">
        {/*  */}
        <div className="border-[3px] rounded-lg p-10 space-y-5 ">
          <div className="flex flex-wrap gap-5">
            <div className="m-auto xs:m-0">
              <img className="" src={user1} alt="user" />
            </div>
            <div>
              <h1 className="font-bold">Viezh Robert</h1>
              <p>Warsaw, Poland</p>
            </div>
          </div>
          <p>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
        {/*  */}
        <div className="border-[3px] rounded-lg p-10 space-y-5 ">
          <div className="flex flex-wrap gap-5">
            <div className="m-auto xs:m-0">
              <img className="" src={user2} alt="user" />
            </div>
            <div>
              <h1 className="font-bold">Yessica Christy</h1>
              <p>Shanxi, China</p>
            </div>
          </div>
          <p>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
        {/*  */}
        <div className="border-[3px] rounded-lg p-10 space-y-5 ">
          <div className="flex flex-wrap gap-5">
            <div className="m-auto xs:m-0">
              <img className="" src={user3} alt="user" />
            </div>
            <div>
              <h1 className="font-bold">Kim Young Jou</h1>
              <p>Seoul, South Korea</p>
            </div>
          </div>
          <p>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="flex justify-between items-center w-[80%] m-auto">
        <div className="hidden sm:flex">
          <img src={carousel} alt="carousel" />
        </div>
        <div className="flex m-auto sm:m-0 gap-5">
          <div className="border hover:bg-red-500 hover:text-white cursor-pointer border-red-500 text-red-500 p-3 rounded-full">
            <ArrowBackIcon />
          </div>
          <div className=" text-white bg-red-500 p-3 rounded-full cursor-pointer">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
      {/* Relative */}
      <div className="flex flex-wrap px-5 space-y-5 text-center md:text-start items-center rounded-xl shadow-lg md:px-20 p-10 justify-between lg:w-[60%] m-auto my-20">
        <div className="md:w-[48%] m-auto md:m-0">
          <h1 className="font-bold text-[20px] md:text-[35px]">
            Subscribe Now for Get Special Features!
          </h1>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className="m-auto md:m-0">
          <button className=" px-10 py-3 shadow-lg hover:shadow-[#F5383859] bg-red-500 rounded-lg text-white font-bold ">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
