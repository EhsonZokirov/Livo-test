import React from "react";
import KARTA from "../images/KARTA.png";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";

function FivethSection() {
  return (
    <div className=" py-10">
      <div className="text-center xl:w-[30%] space-y-5 m-auto">
        <h1 className="font-bold text-[20px] md:text-[40px]">
          Huge Global Network of Fast VPN
        </h1>
        <p className="text-slate-500">
          See <span className="font-bold">LaslesVPN</span> everywhere to make it
          easier for you when you move locations.
        </p>
      </div>
      <div>
        <img className="m-auto my-20" src={KARTA} alt="KARTA" />
      </div>
      <div className="grid md:grid-cols-5 w-[80%] gap-5 m-auto items-center">
        <div>
          <img className="m-auto" src={logo1} alt="Netflix" />
        </div>
        <div>
          <img className="m-auto" src={logo2} alt="reddit" />
        </div>
        <div>
          <img className="m-auto" src={logo3} alt="Amazon" />
        </div>
        <div>
          <img className="m-auto" src={logo4} alt="Discord" />
        </div>
        <div>
          <img className="m-auto" src={logo5} alt="Spotify" />
        </div>
      </div>
    </div>
  );
}

export default FivethSection;
