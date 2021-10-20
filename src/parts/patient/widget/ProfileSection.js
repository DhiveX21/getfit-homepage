import React from "react";

export default function ProfileSection() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col shadow-lg px-1 rounded-xl py-2 md:w-2/3">
          <div className="self-center hidden md:block">
            <img
              className="w-40 h-40 rounded-full border-b-4 border-l-2 border-r-2 border-pink"
              src="/images/patient/photo/Rifa Rahmalia.jpeg"
              alt="patient"
            ></img>
          </div>
          <div className="md:self-center  md:text-center flex">
            <div className=" md:hidden ">
              <img
                className="rounded-xl bg-cover border-r-4 border-pink w-40"
                src="/images/patient/photo/Rifa Rahmalia.jpeg"
                alt="patient"
              ></img>
            </div>
            <div className="m-2  p-1 text-gray-500 text-lg">
              <div className="text-xl font-bold text-pink">
                Rifa Rahmalia. Amd. Ft
              </div>
              <div className="text-sm">0895619258715</div>
              <div className="text-sm text-pink">Perempuan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
