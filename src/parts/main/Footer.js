import React from "react";
import Button from "elements/Button";

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
    <footer className=" w-full  bg-hero-pattern">
      <div className="flex justify-center transform translate-y-10">
        <div className="bg-pink w-4/6 h-20 rounded-3xl ring-4 ring-white md:w-5/6 md:h-12 text-center text-white py-4 text-sm md:text-base md:py-2">
          <div className="md:inline-block">Butuh Bantuan?</div>
          <div className="md:inline-block">
            <Button isExternal className="bg-blue py-1 px-4  mx-2 rounded-full">
              Click disini
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 text-center md:text-justify ">
        <div className="">{maps_list}</div>
        <div className="md:flex ">
          <div className="md:p-2 md:w-1/3 text-center border-r-2">
            {contactPerson}
            <br />
          </div>
          <div className="md:p-2 md:w-1/3 text-center border-r-2">
            {address}
            <br />
          </div>
          <div className="md:p-2 md:w-1/3  text-center">
            <div className="text-pink my-1 text-sm">Our Social Media</div>
            <div className=" flex justify-center px-2 ">
              <div className="p-2 transform hover:-translate-y-1 duration-100 hover:scale-125">
                <Button
                  href="https://www.facebook.com/getfitwithphysio"
                  type="link"
                  isExternal
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="images/icons/facebook.png"
                    alt="facebook"
                    className="w-8"
                  ></img>
                </Button>
              </div>
              <div className="p-2 transform hover:-translate-y-1 duration-100 hover:scale-125">
                <Button
                  href="https://www.instagram.com/getfitwithphysio/"
                  type="link"
                  isExternal
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="images/icons/instagram.png"
                    alt="instagram"
                    className="w-8"
                  ></img>
                </Button>
              </div>
              <div className="p-2 transform hover:-translate-y-1 duration-100 hover:scale-125">
                <img
                  src="images/icons/telegram.png"
                  alt="telegram"
                  className="w-8"
                ></img>
              </div>
              <div className="p-2 transform hover:-translate-y-1 duration-100 hover:scale-125">
                <img
                  src="images/icons/youtube.png"
                  alt="youtube"
                  className="w-8"
                ></img>
              </div>
              <div className="p-2 transform hover:-translate-y-1 duration-100 hover:scale-125">
                <Button
                  href="https://www.tiktok.com/@getfitwithphysio"
                  type="link"
                  isExternal
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="images/icons/tiktok.png"
                    alt="tiktok"
                    className="w-8"
                  ></img>
                </Button>
              </div>
              <div className="p-2 transform hover:-translate-y-1 duration-100 hover:scale-125">
                <img
                  src="images/icons/twitter.png"
                  alt="twitter"
                  className="w-8"
                ></img>
              </div>
            </div>
          </div>
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
      <div className="mx-auto ">
        <div className="mt-16 rounded-t-5xl  bg-pink  flex flex-col items-center">
          <div className="w-2/3 text-center py-6">
            <p className="text-sm text-white ">© 2021 Getfit With Physio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
