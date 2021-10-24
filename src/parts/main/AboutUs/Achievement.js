import React, { useEffect } from "react";
import SectionTitle from "elements/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Achievement() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <section className=" md:h-auto mb-20 ">
      <SectionTitle preTitle="Our Proud" Title="Achievement" />
      <div className="flex flex-col px-5 md:flex-row lg:px-40">
        <img
          data-aos="fade-down"
          className="w-full max-h-96 object-cover mr-4 rounded-3xl mb-4 md:w-1/2"
          src="images/achievement1.jpg"
          alt="service"
        ></img>
        <div className="w-full flex flex-col text-center md:text-left self-center lg:self-auto">
          <div className="font-bold text-2xl text-pink" data-aos="fade-up">
            Seagames Physio Vendor
          </div>
          <div className="text-gray-700 font-bold mb-4" data-aos="fade-up">
            Seagames
          </div>
          <div
            className="text-gray-700 text-sm text-justify"
            data-aos="fade-up"
          >
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
