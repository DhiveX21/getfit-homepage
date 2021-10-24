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
                <div className="flex flex-wrap content-between justify-center rounded-3xl bg-white shadow-lg ring-pink ring-4 h-128">
                  <div className="h-1/6 my-5">
                    {/* <div className="relative">
                      <img
                        className="absolute w-32 -top-28 z-10"
                        src={item.image}
                      ></img>
                    </div> */}
                    <div className="h-full flex flex-wrap  items-center">
                      {" "}
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
                  <div className="h-3/6 overflow-hidden mb-8 px-10 text-center flex flex-wrap items-center">
                    <div className="text-pink font-bold">
                      {item.description}
                    </div>
                  </div>
                  <div className="h-1/6">
                    <Button
                      isInternal
                      className="bg-pink py-2 px-10 rounded-3xl text-white ring-gray-400 ring-4 "
                      type="link"
                      href={`/detail_service/${item.service_id}`}
                    >
                      Beli
                    </Button>
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
