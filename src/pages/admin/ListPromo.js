import React, { useState } from "react";
import Header from "parts/admin/Header";
import Sidebar from "parts/admin/Sidebar";
import Title from "parts/admin/widget/Title";
import ListPromoTable from "parts/admin/listPromo/listPromoTable";
import Button from "elements/Button";
import Forms from "elements/forms";

export default function ListPromo(props) {
  const [ShowModal, setShowModal] = useState(false);

  let template = {
    fields: [
      {
        title: "Nama Promo",
        type: "text",
        name: "promo_name",
        placeholder: "Cth : Diskon Besar Kemerdekaan Indonesia",
        validationProps: {
          required: "Nama Promo Harus di isi.",
        },
      },
      {
        title: "Total Diskon / %",
        type: "number",
        name: "discount",
        placeholder: "Cth : 50",
        validationProps: {
          required: "Diskon Harus di isi.",
        },
      },
      {
        title: "Deskripsi",
        type: "textarea",
        name: "description",
        placeholder:
          "Cth : Diskon Selama bulan Agustus di mulai dari 17 Agustus",
        validationProps: {
          required: "Deskripsi Harus di isi.",
        },
      },
    ],
  };

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <Header className="z-20"></Header>
      <div className="relative ml-16 mr-2 mt-16 z-0 md:ml-68 md:mr-4 md:mt-18">
        <Title title="List Promo"></Title>
        <div className="flex justify-end">
          <Button
            className="bg-blue py-2 px-4 mx-3 rounded-xl text-white flex shadow hover:bg-navy hover:-translate-y-1 transform transition ease-in-out duration-200 "
            href=""
            onClick={() => setShowModal(true)}
          >
            <div className="mr-1">Tambah Promo </div>
            <span className="">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <rect x="0" y="0" width="24" height="24" />
                  <circle fill="#ffffff" opacity="0.3" cx="12" cy="12" r="10" />
                  <path
                    d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </span>
          </Button>
        </div>
        <ListPromoTable></ListPromoTable>
      </div>
      <Sidebar></Sidebar>
      {ShowModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-70 transitionFadeIn-1-fast">
            <div className="relative w-full md:w-3/4 lg:1/2 max-w-3xl">
              {/*content*/}
              <div className=" mb-12 rounded-lg shadow-lg relative flex flex-col  w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl  px-4 rounded-tl-xl rounded-br-xl font-semibold">
                    Tambah Promo
                  </h3>
                  <Button
                    className="bg-red py-2 px-4 rounded-xl text-white flex shadow hover:bg-navy hover:-translate-y-1 transform transition ease-in-out duration-200 "
                    href=""
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </Button>
                </div>
                <div className="bg-cover mb-5">
                  <div className="flex flex-col items-center h-full w-full px-5">
                    <div className="w-full px-2 max-w-2xl rounded-xl ">
                      <div className="grid grid-cols-1 gap-2 place-content-between h-full py-5 ">
                        <Forms template={template} onSubmit={onSubmit} />
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
    </>
  );
}
