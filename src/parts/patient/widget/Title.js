import React from "react";

export default function Title(props) {
  return (
    <div className="flex flex-wrap items-baseline shadow my-3 rounded">
      <div className="text-pink font-bold text-2xl mr-1  px-2">
        {props.title}
      </div>
      <div className="border-l-2 px-2">{props.subTitle}</div>
    </div>
  );
}
