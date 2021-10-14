import React from "react";
import SectionTitle from "elements/SectionTitle";
import Button from "elements/Button";

export default function VideoOpening(props) {
  return (
    <div className="mb-20 lg:mb-10">
      <div className="flex flex-col text-center px-5 ">
        <SectionTitle preTitle="Let see Our" Title="Activity" />

        <div className="lg:flex lg:flex-row lg:items-center">
          <video
            className="w-full h-full rounded-3xl ring-4 ring-pink my-3 lg:w-1/2  lg:mr-4"
            controls
            src={props.data.url}
            poster={props.data.thumbnail}
            type="video/mp4"
          ></video>
          <div className="text-gray-700 text-sm p-32 hidden lg:block">
            <div className="text-center text-3xl font-bold text-pink">
              Gimana?
            </div>
            <div className="text-center text-xl font-bold mb-5">
              Seru Kan!!? ...Cek Treatment kami di sini yukk..
            </div>
            <div
              className="flex justify-center transitionIn-1-slow"
              id="detail-button"
            >
              <Button
                className="group shadow-md w-32 text-sm font-medium rounded-4xl bg-pink py-2 lg:py-2 lg:w-32 hero-detail-button hover:bg-blue hover:shadow-lg   hover:-translate-y-1 transform transition ease-in-out duration-200 "
                data-replace='{ "-translate-y-1": "translate-y-10" }'
                type="link"
                href="/service"
              >
                <p className="text-white hero-detail-text">Detail</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
