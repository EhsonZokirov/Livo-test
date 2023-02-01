import React from "react";
import img2 from "../images/img2.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function ThirdSection() {
  return (
    <div className="grid md:grid-cols-2 gap-20 w-[80%] m-auto my-10">
      <div>
        <img className="m-auto" src={img2} alt="person design" />
      </div>
      <div className="space-y-5 m-auto">
        <h1 className=" text-[25px]  md:text-[50px] font-bold">We Provide Many Features You Can Use</h1>
        <p className="text-slate-400 md:w-[80%]">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <li className="list-none ">
          <CheckCircleIcon color="success" /> Powerfull online protection.
        </li>
        <li className="list-none ">
          <CheckCircleIcon color="success" /> Internet without borders.
        </li>
        <li className="list-none ">
          <CheckCircleIcon color="success" /> Supercharged VPN
        </li>
        <li className="list-none ">
          <CheckCircleIcon color="success" /> No specific time limits.
        </li>
      </div>
    </div>
  );
}

export default ThirdSection;
