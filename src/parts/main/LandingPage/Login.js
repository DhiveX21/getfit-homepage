import React from "react";
import { Link } from "react-router-dom";
import Forms from "elements/forms";

export default function Login() {
  let template = {
    fields: [
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
    ],
  };

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="bg-cover mb-20">
      <div className="flex flex-col items-center h-full w-full px-5">
        <div className="w-full h-full text-center font-extrabold text-7xl px-5 mb-5 text-pink">
          Login
        </div>
        <div className="w-full px-2 max-w-xl rounded-xl mb-5 shadow-md bg-gray-100">
          <div className="grid grid-cols-1 gap-2 place-content-between h-full py-5 ">
            <Forms template={template} onSubmit={onSubmit} />
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          Belum punya akun? ... Daftar
          <span className="mx-2">
            <Link
              to="/registration"
              className="text-white py-1 px-1 rounded-full bg-pink shadow"
            >
              di sini
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
