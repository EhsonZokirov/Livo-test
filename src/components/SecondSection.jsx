import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorageIcon from "@mui/icons-material/Storage";
function SecondSection() {
  return (
    <div className="grid md:grid-cols-3 m-auto w-[80%] my-20 shadow-md rounded-lg p-5 ">
      <div className="flex items-center gap-5 m-auto py-10 ">
        <div className="bg-red-100 text-red-500 rounded-full p-2">
          <PersonIcon />
        </div>
        <div className="text-[20px]">
          <h1 className="font-black ">90+</h1>
          <p className="text-slate-400">Users</p>
        </div>
      </div>
      <div className="flex items-center gap-5 m-auto py-10 ">
        <div className="bg-red-100 text-red-500 rounded-full p-2">
          <LocationOnIcon />
        </div>
        <div className="text-[20px]">
          <h1 className="font-black ">30+</h1>
          <p className="text-slate-400">Locations</p>
        </div>
      </div>
      <div className="flex items-center gap-5 m-auto py-10">
        <div className="bg-red-100 text-red-500 rounded-full p-2">
          <StorageIcon />
        </div>
        <div className="text-[20px]">
          <h1 className="font-black ">50+</h1>
          <p className="text-slate-400">Servers</p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
