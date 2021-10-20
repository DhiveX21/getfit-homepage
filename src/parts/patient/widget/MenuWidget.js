import React from "react";

export default function MenuWidget() {
  return (
    <div className="-ml-4  my-4">
      <div>
        <div className="bg-pink text-white shadow w-full h-20 flex px-4 text-center rounded-r-full">
          <div className="text-sm w-1/2 border-r-2 border-white py-2">
            Appointment Terakhir
          </div>
          <div className="text-sm w-1/2 py-2">Sisa Appointment saat ini</div>
        </div>
      </div>
    </div>
  );
}
