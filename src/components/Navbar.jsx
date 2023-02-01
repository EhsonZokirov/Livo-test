import React from "react";
import LOGO from "../images/LOGO.png";
import Buttons from "./Buttons";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
function Navbar() {
  return (
    <div>
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center p-5 gap-3">
        <div className="flex m-auto items-center gap-2">
          <img className="m-auto" src={LOGO} alt="logo" />
          <h1 className="font-semibold">Lasles<span className="font-black">VPN</span></h1>
        </div>
        <ul className="hidden md:flex justify-center gap-5">
          <li className="cursor-pointer text-slate-500 hover:text-black">About</li>
          <li className="cursor-pointer text-slate-500 hover:text-black">Features</li>
          <li className="cursor-pointer text-slate-500 hover:text-black">Pricing</li>
          <li className="cursor-pointer text-slate-500 hover:text-black">Testimonials</li>
          <li className="cursor-pointer text-slate-500 hover:text-black">Help</li>
        </ul>
        <div className=" hidden sm:flex m-auto gap-5">
          <button className="font-bold">Sign In</button>
          <Buttons />
        </div>
        <div className="flex justify-center m-auto sm:hidden">
            <IconButton>
                <MenuIcon/>
            </IconButton>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
