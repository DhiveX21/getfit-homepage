import React, { useState } from "react";

import { Link } from "react-router-dom";

import Button from "elements/Button";
import LogoImageWhite from "assets/images/logo_white.png";
import "assets/index.css";

export default function Header(props) {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <header
      className={[
        "w-full z-50 px-4 bg-pink rounded-b-6xl md:rounded-none mb-20",
        props.position,
      ].join(" ")}
    >
      <div className="container mx-auto py-5 ">
        <div className="flex flex-stretch items-center">
          <div className=" items-center flex">
            <Button
              className="font-bold text-white text-xl"
              href=""
              type="link"
            >
              <span className="flex justify-between">
                {" "}
                <img
                  className="object-contain h-7 w-full mr-2"
                  src={LogoImageWhite}
                  alt="LogoWhite.png"
                ></img>
                GetFitwithPhysio
              </span>
            </Button>
          </div>
          <div className="w-full" />
          <div className="w-full">
            <ul
              className="fixed bg-pink inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center md:text-sm md:text-center md:float-right"
              id="menu"
            >
              <li className="mx-3 py-6 md:py-0">
                <Link className="text-white hover:underline" to="/aboutUs">
                  Tentang Kami
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link className="text-white hover:underline" to="/promo">
                  Promo
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link className="text-white hover:underline" to="/service">
                  Layanan Kami
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link
                  className="text-white hover:underline"
                  to="/errorMaintenance"
                >
                  Daftar
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto">
            <ul className="items-center flex">
              <li className="ml-6 block md:hidden">
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
              </li>
              {/* <li className="ml-6">
                <a
                  id="header-cart"
                  className="flex items-center justify-center w-8 h-8 text-yellow md:text-white"
                  href="/errorMaintenance"
                >
                  <svg
                    className="fill-current"
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                  >
                    <path d="M10.8754 18.7312C9.61762 18.7312 8.59436 19.7115 8.59436 20.9164C8.59436 22.1214 9.61762 23.1017 10.8754 23.1017C12.1331 23.1017 13.1564 22.1214 13.1564 20.9164C13.1563 19.7115 12.1331 18.7312 10.8754 18.7312ZM10.8754 21.8814C10.3199 21.8814 9.86796 21.4485 9.86796 20.9163C9.86796 20.3842 10.3199 19.9512 10.8754 19.9512C11.4308 19.9512 11.8828 20.3842 11.8828 20.9163C11.8828 21.4486 11.4308 21.8814 10.8754 21.8814Z" />
                    <path d="M18.8764 18.7312C17.6186 18.7312 16.5953 19.7115 16.5953 20.9164C16.5953 22.1214 17.6186 23.1017 18.8764 23.1017C20.1342 23.1017 21.1575 22.1214 21.1575 20.9164C21.1574 19.7115 20.1341 18.7312 18.8764 18.7312ZM18.8764 21.8814C18.3209 21.8814 17.869 21.4485 17.869 20.9163C17.869 20.3842 18.3209 19.9512 18.8764 19.9512C19.4319 19.9512 19.8838 20.3842 19.8838 20.9163C19.8838 21.4486 19.4319 21.8814 18.8764 21.8814Z" />
                    <path d="M19.438 7.2262H10.3122C9.96051 7.2262 9.67542 7.49932 9.67542 7.83626C9.67542 8.1732 9.96056 8.44632 10.3122 8.44632H19.438C19.7897 8.44632 20.0748 8.1732 20.0748 7.83626C20.0748 7.49927 19.7897 7.2262 19.438 7.2262Z" />
                    <path d="M18.9414 10.3942H10.8089C10.4572 10.3942 10.1721 10.6673 10.1721 11.0042C10.1721 11.3412 10.4572 11.6143 10.8089 11.6143H18.9413C19.293 11.6143 19.5781 11.3412 19.5781 11.0042C19.5781 10.6673 19.293 10.3942 18.9414 10.3942Z" />
                    <path d="M25.6499 4.508C25.407 4.22245 25.0472 4.05871 24.6626 4.05871H4.82655L4.42595 2.19571C4.34232 1.80709 4.06563 1.48078 3.68565 1.32272L0.890528 0.160438C0.567841 0.0261566 0.192825 0.168008 0.0528584 0.477043C-0.0872597 0.786176 0.0608116 1.14549 0.383347 1.27957L3.17852 2.4419L6.2598 16.7708C6.38117 17.3351 6.90578 17.7446 7.50723 17.7446H22.7635C23.1152 17.7446 23.4003 17.4715 23.4003 17.1346C23.4003 16.7976 23.1152 16.5245 22.7635 16.5245H7.50728L7.13247 14.7815H22.8814C23.4828 14.7815 24.0075 14.3719 24.1288 13.8076L25.9101 5.52488C25.9876 5.16421 25.8928 4.79349 25.6499 4.508ZM22.8814 13.5615H6.87012L5.08895 5.27879L24.6626 5.27884L22.8814 13.5615Z" />
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>

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
                                    to="/errorMaintenance"
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
      </div>
    </header>
  );
}
