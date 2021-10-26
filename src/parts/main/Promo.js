import React, { useEffect } from "react";
import SectionTitle from "elements/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Promo(props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out-quart",
    });
  }, []);
  const promo_list = props.data.map((item, index) => (
    <div className="group promo mb-24" key={index}>
      <div className="card-promo w-full h-full rounded-3xl bg-white shadow-lg flex content-center items-center flex-col relative mb-20 lg:mb-0 hover:bg-pink hover:text-white">
        <div className="img p-3 ">
          <img
            src={item.image}
            alt={item.name}
            className="transform-gpu h-80 border-4 border-white rounded-4xl group-hover:transition duration-300  group-hover:-translate-y-24"
          ></img>
        </div>
        <div className="desc transform-gpu  bg-white text-pink absolute text-center grid grid-cols-1 w-full p-6 pb-8 h-2/4 lg:p-3 opacity-0 group-hover:transition duration-300 group-hover:opacity-100 group-hover:translate-y-3/4 md:group-hover:translate-y-2/4 lg:group-hover:translate-y-3/4">
          <h3 className="font-extrabold italic">{item.promo_name}</h3>
          <h5 className="font-bold text-blue">Discount {item.discount}%</h5>
          <p className="text-sm overflow-scroll lg:overflow-hidden text-g">
            {item.description}
          </p>
        </div>
        <a
          // href="/promodetail"
          href={`https://api.whatsapp.com/send?phone=6282114272426&text=Halo%20Getfit%20Saya%20tertarik%20dengan%20promo%20${item.promo_name}%20bolehkah%20saya%20mendapatkan%20detailnya?.`}
          target="_blank"
          rel="noreferrer"
          className="btn transform-gpu bg-white text-pink rounded-4xl py-2 px-8 border-4 border-white
          group-hover:bg-pink
          group-hover:text-white
          group-hover:border-4 
         group-hover:transition duration-300
         group-hover:opacity-100 group-hover:-translate-y-2/4 "
        >
          {" "}
          Beli Sekarang
        </a>
      </div>
    </div>
  ));

  return (
    <section className="promo-section p-5 m-0 box-border">
      <SectionTitle preTitle="Our Limited" Title="Promo" />
      <div
        className="list-promo md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8 lg:mx-32"
        data-aos="fade-down"
      >
        {promo_list}
      </div>
    </section>
  );
}
