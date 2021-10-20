import React, { useState } from "react";
import SectionTitle from "elements/SectionTitle";

export default function Client(props) {
  const [switchActive, setswitchActive] = useState(1);

  const toggleActive = (index) => {
    setswitchActive(index);
  };

  const feedbackContent = props.data.map((item, key) => (
    <div className="flex flex-col" key={key}>
      <div className={switchActive === key ? "" : " hidden"}>
        <div className="mb-6 lg:px-72">
          <q className="text-pink font-bold text-7xl ">
            <span className="text-gray-700 text-lg font-light">
              {item.content}
            </span>
          </q>
        </div>
      </div>
      <div className={switchActive === key ? "" : "hidden"}>
        <div className="text-pink font-extrabold">{item.name}</div>
        <span className="text-gray-500 font-light text-sm">
          {item.occupation}
        </span>
      </div>
    </div>
  ));

  const feedbackPhoto = props.data.map((item, key) => (
    <div className="flex flex-row justify-center mb-12" key={key}>
      <img
        className={
          switchActive === key
            ? "rounded-full  w-20 h-20 p-1 mx-3 ring-2 ring-pink transition duration-500 ease-in-out transform scale-125"
            : "rounded-full  w-16 h-16 p-1 mx-3 ring-2 ring-pink transition duration-500 ease-in-out transform scale-100"
        }
        src={item.photo}
        alt="feedbackphoto"
        onClick={() => toggleActive(key)}
      ></img>
    </div>
  ));

  return (
    <section>
      <div className="flex flex-col text-center ">
        <SectionTitle preTitle="What Our" Title="Client Say?"></SectionTitle>
        <div className="flex justify-center mb-6">{feedbackContent}</div>
        <div className="flex justify-center">{feedbackPhoto}</div>
      </div>
    </section>
  );
}
