import React, { useEffect } from "react";

import Button from "elements/Button";
import SectionTitle from "elements/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

import "react-multi-carousel/lib/styles.css";

export default function ServiceDetail(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-quart",
    });
  }, []);
  function number_format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <section className="service px-5 lg:px-10 mb-20 md:mb-40">
      <SectionTitle preTitle="Our Excelent" Title="Service" />

      <div className="w-full mt-8 mb-16" data-aos="fade-up">
        <div className="flex flex-col gap-8 justify-center items-center w-full lg:grid lg:grid-cols-3 lg:gap-8">
          {props.data.map((item, index) => {
            const discount_display = item.discount === 0 ? "hidden" : "";

            return (
              <div key={index}>
                <div className="flex flex-wrap content-between justify-center rounded-3xl border-b-4  border-pink  shadow-lg h-144">
                  <div className="h-1/2 ">
                    <img
                      className="rounded-3xl"
                      src="images/service/service1.png"
                      alt="services"
                    ></img>
                  </div>
                  <div className="h-1/2 flex flex-col mb-4 justify-between pb-5">
                    <div className="my-5">
                      {/* <div className="relative">
                    <img
                      className="absolute w-32 -top-28 z-10"
                      src={item.image}
                    ></img>
                  </div> */}
                      <div className="h-full flex flex-wrap  items-center">
                        <div className="text-7xl font-bold text-pink z-10 text-center w-full">
                          Rp.
                          {number_format(item.price - item.discount)}
                        </div>
                        <div
                          className={[
                            "text-base text-gray-700 font-bold text-center line-through w-full",
                            discount_display,
                          ].join(" ")}
                        >
                          Rp.{number_format(item.price)}
                        </div>
                        <div
                          className={[
                            "text-base  font-bold text-center w-full text-blue",
                            discount_display,
                          ].join(" ")}
                        >
                          Disc. Rp.{number_format(item.discount)}
                        </div>
                      </div>
                    </div>
                    <div className=" overflow-hidden mb-8 px-10 text-center flex flex-wrap items-center">
                      <div className="text-gray-500 ">{item.description}</div>
                    </div>
                    <div className="self-center">
                      <Button
                        isExternal
                        target="_blank"
                        className="bg-pink py-2 px-10 rounded-3xl text-white transform transition ease-in-out duration-200  hover:bg-blue  hover:-translate-y-1  "
                        type="link"
                        // href={`/detail_service/${item.service_id}`}
                        href={`https://api.whatsapp.com/send?phone=6282114272426&text=Halo%20Getfit%20Saya%20tertarik%20dengan%20promo%20${item.description}%20bolehkah%20saya%20mendapatkan%20detailnya?.`}
                      >
                        Beli
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
