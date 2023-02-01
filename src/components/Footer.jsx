import React from "react";
import LOGO from "../images/LOGO.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <footer className="md:grid flex flex-col-reverse gap-10 md:grid-cols-2 lg:grid-cols-4 bg-[#F8F8F8] py-20">
      <div className=" text-center md:text-start w-[50%] m-auto space-y-5">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <img className="" src={LOGO} alt="logo" />
          <h1 className="font-semibold">
            Lasles<span className="font-black">VPN</span>
          </h1>
        </div>
        <p className="text-slate-500">
          Lasles <span className="font-bold"> VPN </span> is a private virtual
          network that has unique features and has high security.
        </p>
        <div className="flex justify-center md:justify-start gap-5">
          <div className="bg-red-50 cursor-pointer hover:shadow-md p-2 rounded-full text-red-500">
            <FacebookOutlinedIcon />
          </div>
          <div className="bg-red-50 cursor-pointer hover:shadow-md p-2 rounded-full text-red-500">
            <TwitterIcon />
          </div>
          <div className="bg-red-50 cursor-pointer hover:shadow-md p-2 rounded-full text-red-500">
            <InstagramIcon />
          </div>
        </div>
        <p className="text-slate-400">©2020LaslesVPN</p>
      </div>
      <ul className="m-auto text-center md:text-start">
        <li className="font-bold">Product</li>
        <li className="cursor-pointer hover:text-slate-500">Download </li>
        <li className="cursor-pointer hover:text-slate-500">Pricing</li>
        <li className="cursor-pointer hover:text-slate-500">Locations</li>
        <li className="cursor-pointer hover:text-slate-500">Server</li>
        <li className="cursor-pointer hover:text-slate-500">Countries</li>
        <li className="cursor-pointer hover:text-slate-500">Blog</li>
      </ul>
      <ul className="m-auto text-center md:text-start">
        <li className="font-bold">Engage</li>
        <li className="cursor-pointer hover:text-slate-500">LaslesVPN ? </li>
        <li className="cursor-pointer hover:text-slate-500">FAQ</li>
        <li className="cursor-pointer hover:text-slate-500">Tutorials</li>
        <li className="cursor-pointer hover:text-slate-500">About Us</li>
        <li className="cursor-pointer hover:text-slate-500">Privacy Policy</li>
        <li className="cursor-pointer hover:text-slate-500">
          Terms of Service
        </li>
      </ul>
      <ul className="m-auto text-center md:text-start">
        <li className="font-bold">Earn Money</li>
        <li className="cursor-pointer hover:text-slate-500">Affiliate </li>
        <li className="cursor-pointer hover:text-slate-500">Become Partner</li>
      </ul>
    </footer>
  );
}

export default Footer;
