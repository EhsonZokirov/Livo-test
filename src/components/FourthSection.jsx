import React from "react";
import BoxPlan from "../images/squareIMGcard.png";
import DoneIcon from '@mui/icons-material/Done';
import Buttons from "./Buttons";
function FourthSection() {
  return (
    <div className=" py-10">
      <div className="text-center xl:w-[30%] space-y-5 m-auto">
        <h1 className="font-bold text-[20px] md:text-[40px]">Choose Your Plan</h1>
        <p className="text-slate-500">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 w-[80%] m-auto my-20">
        <div className="m-auto space-y-10 border-[3px] p-10 bg-white rounded-xl ">
            <div>
                <img className="m-auto" src={BoxPlan} alt="Box Plan" />
                <h1 className="font-bold text-center">Free Plan</h1>
            </div>
            <ul className="m-auto grid gap-5">
                <li> <DoneIcon color='success'/> Unlimited Bandwitch</li>
                <li> <DoneIcon color='success'/> Encrypted Connection</li>
                <li> <DoneIcon color='success'/> No Traffic Logs</li>
                <li> <DoneIcon color='success'/> Works on All Devices</li>
            </ul>
            <div className="text-center pt-20">
                <h1 className="font-bold">Free</h1>
                <Buttons title='Select'/>
            </div>
        </div>
        <div className="m-auto space-y-10 border-[3px] p-10 bg-white rounded-xl ">
            <div>
                <img className="m-auto" src={BoxPlan} alt="Box Plan" />
                <h1 className="font-bold text-center">Standard Plan</h1>
            </div>
            <ul className="m-auto grid gap-5">
                <li> <DoneIcon color='success'/> Unlimited Bandwitch</li>
                <li> <DoneIcon color='success'/> Encrypted Connection</li>
                <li> <DoneIcon color='success'/> No Traffic Logs</li>
                <li> <DoneIcon color='success'/> Works on All Devices</li>
                <li> <DoneIcon color='success'/> Connect Anyware</li>
            </ul>
            <div className="text-center pt-7">
                <h1 className="font-bold">$9 <span className="text-slate-400">/ mo</span> </h1>
                <Buttons title='Select'/>
            </div>
        </div>
        <div className="m-auto space-y-10 border-[3px] p-10 bg-white rounded-xl ">
            <div>
                <img className="m-auto" src={BoxPlan} alt="Box Plan" />
                <h1 className="font-bold text-center">Premium Plan</h1>
            </div>
            <ul className="m-auto grid gap-5">
                <li> <DoneIcon color='success'/> Unlimited Bandwitch</li>
                <li> <DoneIcon color='success'/> Encrypted Connection</li>
                <li> <DoneIcon color='success'/> No Traffic Logs</li>
                <li> <DoneIcon color='success'/> Works on All Devices</li>
                <li> <DoneIcon color='success'/> Connect Anyware</li>
                <li> <DoneIcon color='success'/> Get New Features</li>
            </ul>
            <div className="text-center ">
                <h1 className="font-bold">$12 <span className="text-slate-400">/ mo</span> </h1>
                <Buttons title='Select'/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
