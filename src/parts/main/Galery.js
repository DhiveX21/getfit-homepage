import React from "react";
import SectionTitle from "elements/SectionTitle";

export default function Galery(props) {
  const photoList = props.data.map((item, index) => (
    <>
      <div
        className={[
          "relative  overflow-hidden ring-4 ring-pink rounded-3xl",
          index === 0 ? "col-span-2 md:row-span-2" : "",
        ].join(" ")}
      >
        <img className="object-cover w-full h-full " src={item.photo}></img>
        <div class="absolute bg-pink w-full py-1 bottom-0 inset-x-0 bg-blue-400 text-white text-sm text-center font-bold ">
          {item.caption}
        </div>
      </div>
    </>
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
