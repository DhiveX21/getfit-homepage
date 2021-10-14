import React from "react";

export default function Footer(props) {
  const maps_list = props.data.map((item, key) => (
    <iframe
      title={key}
      key={key}
      className="ring-4 p-2 mb-8 ring-pink rounded-3xl w-full"
      src={item.maps}
      loading="lazy"
    ></iframe>
  ));

  const contactPerson = props.data.map((item, i) => (
    <div key={i}>
      <div className="text-pink my-1 text-sm">Contact Person {i + 1}</div>
      <div className="text-gray-700 text-sm">{item.phone_number}</div>
    </div>
  ));

  const address = props.data.map((item, i) => (
    <div key={i}>
      <div className="text-pink my-1 text-sm">Address {i + 1}</div>
      <div className="text-gray-700 text-sm ">{item.address}</div>
    </div>
  ));

  return (
    <footer className=" w-full bg-opacity-20 bg-hero-pattern">
      <div className="flex flex-col justify-center p-6 text-center">
        <div className="">{maps_list}</div>
        <div className="">
          {contactPerson}
          <br />
          {address}
          <div className=""></div>
          {/* <div className=" ">Our Service Links</div>
          <div className=" ">
            <Button
              className=""
              type="link"
              href="about-us/"
              isInternal
              isPrimary
            >
              Tentang Kami
            </Button>
          </div>
          <div className="">
            {" "}
            <Button
              className=""
              type="link"
              href="service/"
              isInternal
              isPrimary
            >
              Produk Kami
            </Button>
          </div> */}
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © 2021 Getfit With Physio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
