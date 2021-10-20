import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "elements/Button";

export default function StickyMenu(props) {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <div className="">
      <div className=""></div>
      <nav className="">
        <div className="lg:hidden bg-pink animate-floating-md p-8 rounded-l-2xl bg-opacity-50 fixed right-0 top-2/4 flex z-50 items-center justify-center w-8 h-8 text-black md:text-white focus:outline-none">
          <Button
            id="menu-toggler"
            className="relative flex z-50 items-center justify-center w-8 h-8 text-white md:text-white focus:outline-none"
            href=""
            onClick={() => setShowModal(true)}
          >
            <span className="">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="16"
                  y="3.2"
                  width="16"
                  height="3.2"
                  rx="1.6"
                  transform="rotate(-180 16 3.2)"
                  fill="white"
                />
                <rect
                  x="16"
                  y="9.60001"
                  width="16"
                  height="3.2"
                  rx="1.6"
                  transform="rotate(-180 16 9.60001)"
                  fill="white"
                />
                <rect
                  x="16"
                  y="16"
                  width="16"
                  height="3.2"
                  rx="1.6"
                  transform="rotate(-180 16 16)"
                  fill="white"
                />
              </svg>
            </span>
          </Button>
        </div>
      </nav>
      {ShowModal ? (
        <>
          <div className="w-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-70 transitionFadeIn-1-fast ">
            <div className="relative w-2/3 max-w-3xl animate-floating-sm">
              {/*content*/}
              <div className=" mb-12 rounded-full ring-8 ring-blue shadow-lg relative flex flex-col  w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5   rounded-t">
                  <h3 className="text-7xl bg-white rounded-tl-xl px-2 rounded-br-xl font-bold text-pink">
                    Menu
                  </h3>
                  <div className="bg-white p-2 rounded-xl">
                    <Button
                      className="bg-red py-2 px-4 rounded-xl text-white flex shadow hover:bg-navy hover:-translate-y-1 transform transition ease-in-out duration-200 "
                      href=""
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </Button>
                  </div>
                </div>

                <div className="bg-cover mb-5">
                  <div className="flex flex-col items-center h-full w-full px-5">
                    <div className="w-full px-2 max-w-2xl rounded-xl ">
                      <div className="grid grid-cols-1 gap-2 place-content-between h-full py-5 ">
                        <div className="w-full text-center">
                          <ul className="" id="menu">
                            <li className="mx-3 py-6 md:py-0">
                              <Link
                                className="text-white w-full bg-pink py-2 px-4 rounded-full text-center hover:underline"
                                to="/aboutUs"
                              >
                                Tentang Kami
                              </Link>
                            </li>
                            <li className="mx-3 py-6 md:py-0">
                              <Link
                                className="text-white w-full bg-pink py-2 px-4 rounded-full text-center hover:underline"
                                to="/promo"
                              >
                                Promo
                              </Link>
                            </li>
                            <li className="mx-3 py-6 md:py-0">
                              <Link
                                className="text-white w-full bg-pink py-2 px-4 rounded-full text-center hover:underline"
                                to="/service"
                              >
                                Layanan Kami
                              </Link>
                            </li>
                            <li className="mx-3 py-6 md:py-0">
                              <Link
                                className="text-white w-full bg-pink py-2 px-4 rounded-full text-center hover:underline"
                                to="/registration"
                              >
                                Daftar
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
