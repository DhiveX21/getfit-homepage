import React from "react";
import Button from "elements/Button";

export default function error_maintenance() {
  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url("images/error_maintenance.png")` }}
    >
      <div className="flex items-center h-full">
        <div className="w-1/2 text-center flex flex-col justify-center px-12 font-bold">
          <div className="text-6xl text-pink m-5">
            Hmm, Sepertinya Sedang Ada Perbaikan disini... <br />
            Ayo kita kembali
          </div>
          <div>
            <Button
              isInternal
              type="link"
              href="/"
              className="bg-pink px-12 text-white py-2 rounded-full"
            >
              Kembali
            </Button>
          </div>
        </div>
        <div className="w-1/2 text-center flex flex-col justify-center">
          {/* <img src="images/error_maintenance.png"></img> */}
        </div>
      </div>
    </div>
  );
}
