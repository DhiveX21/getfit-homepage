import React from "react";
import { Link } from "react-router-dom";
import Forms from "elements/forms";

export default function Register() {
  let template = {
    title: "Job Application Form",
    fields: [
      {
        title: "Nama Lengkap",
        type: "text",
        name: "name",
        placeholder: "Cth : Rifa Rahmalia",
        validationProps: {
          required: "Nama Lengkap Harus di isi.",
        },
      },
      {
        title: "Email",
        type: "email",
        name: "email",
        placeholder: "Cth : Rifa@mail.com",
        validationProps: {
          required: "Email Harus di isi.",
        },
      },
      {
        title: "Password",
        type: "password",
        name: "password",
        placeholder: "Cth : Rfa12345",
        validationProps: {
          required: "Password Harus di isi.",
        },
      },
      {
        title: "Jenis Kelamin",
        type: "radio",
        name: "gender",
        options: [
          {
            value: "perempuan",
            optionLabel: "Perempuan",
          },
          { value: "laki-laki", optionLabel: "Laki - Laki" },
        ],

        validationProps: {
          required: "Nama Lengkap Harus di isi.",
        },
      },
      {
        title: "Nomor Telefon",
        type: "number",
        name: "phone",
        placeholder: "Cth : 021123456789",
        validationProps: {
          required: { value: true, message: "Nomor Telefon Harus di isi." },
          minLength: { value: 10, message: "Minimal 10 Angka" },
          pattern: {
            value: /[0][0-9]{10}/i,
            message: "Harus berupa Angka yang di awali 0",
          },
        },
      },
      {
        title: "Alamat",
        type: "textarea",
        name: "address",
        placeholder:
          "Cth : Jl. Johar No.1A, RT.5/RW.3, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350",
        validationProps: {
          required: "Alamat Harus di isi.",
        },
      },
      {
        title: "NIK",
        type: "number",
        name: "nik",
        placeholder: "Cth : 3173011106970002",
        validationProps: {
          required: { value: true, message: "Nomor Telefon Harus di isi." },
          minLength: { value: 10, message: "Minimal 10 Angka" },
          pattern: {
            value: /[0-9]{10}/i,
            message: "Harus berupa Angka yang di awali 0",
          },
        },
      },
      {
        title: "Tanggal Lahir",
        type: "datepicker",
        name: "birthdate",
        placeholder: "Cth : 12/06/97",
        validationProps: {
          required: { value: true, message: "Nomor Telefon Harus di isi." },
        },
      },
    ],
  };

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div
      className="bg-cover mb-20"
      // style={{ backgroundImage: "url(/images/ImageTestimonialLinea.jpg)" }}
    >
      <div className="flex flex-col items-center h-full w-full px-5">
        <div className="w-full h-full text-center font-extrabold text-7xl px-5 mb-5 text-pink">
          Sign up
        </div>
        <div className="w-full px-2 max-w-xl rounded-xl mb-5 shadow-md bg-gray-100">
          <div className="grid grid-cols-1 gap-2 place-content-between h-full py-5 ">
            {/* <form method="post" onSubmit={handleSubmit}>
                <div className="w-full px-5 mb-5"> */}
            <Forms template={template} onSubmit={onSubmit} />
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          Sudah punya akun?... Login
          <span>
            {" "}
            <Link
              to="/login"
              className="text-white py-1 px-1 rounded-full bg-pink"
            >
              di sini
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
