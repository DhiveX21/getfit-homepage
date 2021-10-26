import React, { useEffect } from "react";
import SectionTitle from "elements/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Galery(props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out-quart",
    });
  }, []);

  const photoList = props.data.map((item, index) => (
    <div key={index}>
      <div
        data-aos="fade-up"
        className={[
          "relative  overflow-hidden ring-4 ring-pink rounded-3xl",
          index === 0 ? "col-span-2 md:row-span-2" : "",
        ].join(" ")}
      >
        <img
          className="object-cover w-full h-full "
          src={item.photo}
          alt="galery"
        ></img>
        <div className="absolute bg-pink w-full py-1 bottom-0 inset-x-0 bg-blue-400 text-white text-sm text-center font-bold ">
          {item.caption}
        </div>
      </div>
    </div>
  ));
  return (
    <section className="promo-section m-0 box-border mb-20 ">
      <SectionTitle preTitle="Our Colorful" Title="Galery" />
      <div className="grid grid-rows-1 gap-4 p-5 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
        {photoList}
      </div>
    </section>
  );
}
