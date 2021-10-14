import React from "react";
import SectionTitle from "elements/SectionTitle";

export default function Achievement() {
  return (
    <section className="h-screen md:h-auto mb-20 ">
      <SectionTitle preTitle="Our Proud" Title="Achievement" />
      <div className="flex flex-col px-5 md:flex-row lg:px-40">
        <img
          className="w-full max-h-96 object-cover mr-4 rounded-3xl mb-4 md:w-1/2"
          src="/images/service/service3.jpg"
          alt="service"
        ></img>
        <div className="w-full flex flex-col text-center md:text-left self-center lg:self-auto">
          <div className="font-bold text-2xl text-pink">
            Seagames Physio Vendor
          </div>
          <div className="text-gray-700 font-bold mb-4">Seagames</div>
          <div className="text-gray-700 text-sm text-justify">
            Menjadi vendor Fisioterapi di ajang seagames 2026. Dengan Predikat
            pelayanan memuaskan Menjadi vendor Fisioterapi di ajang seagames
            2026. Dengan Predikat pelayanan memuaskan Menjadi vendor Fisioterapi
            di ajang seagames 2026. Dengan Predikat pelayanan memuaskan Menjadi
            vendor Fisioterapi di ajang seagames 2026. Dengan Predikat pelayanan
            memuaskan Menjadi vendor Fisioterapi di ajang seagames 2026. Dengan
            Predikat pelayanan memuaskan .
          </div>
        </div>
      </div>
    </section>
  );
}
