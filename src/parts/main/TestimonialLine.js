import React from "react";

import Button from "elements/Button";

export default function TestimonialLine(props) {
  return (
    <section className="mb-20 lg:px-10 ">
      <div className="h-full flex justify-center md:flex bg-pink p-8 md:p-8 lg:rounded-4xl">
        <div className="">
          <div className="text-center text-white lg:text-2xl">
            <div className="mb-5">Apa Kata Orang Tentang Kami?</div>
            <div className="flex justify-center">
              {" "}
              <Button
                type="link"
                href="/errorMaintenance"
                className="shadow-md w-32 text-base font-medium rounded-4xl bg-blue py-2 lg:py-2 lg:w-32 lg:text-base"
              >
                Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
