import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "elements/Button";
import InputText from "elements/forms/InputText";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nik: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div
        className="bg-cover h-screen "
        // style={{ backgroundImage: "url(/images/ImageTestimonialLinea.jpg)" }}
      >
        {/* <img
        className="absolute object-cover"
        src="/images/ImageTestimonialLine.jpg"
      ></img> */}
        <div className="flex items-center justify-center h-full  w-full px-5 ">
          <div>
            <div className="w-full md:w-144 rounded-3xl  items-center mb-5 ring-2 ring-pink shadow-md bg-gray-100">
              <div className="grid grid-cols-1 gap-2 place-content-between h-full py-10 ">
                <div className="w-full h-full border-b-2 text-center px-5 text-pink">
                  <h1>Formulir Registerasi</h1>
                </div>
                <form method="post" onSubmit={this.handleSubmit}>
                  <div className="w-full px-5 mb-5">
                    <label htmlFor="name" className="text-pink font-bold">
                      Nama :
                    </label>
                    <InputText
                      id="name"
                      name="name"
                      value={this.state.name}
                      placeholder="Cth : Rifa Rahmalia"
                    ></InputText>
                    <label htmlFor="nik" className="text-pink font-bold">
                      NIK :
                    </label>
                    <InputText
                      id="nik"
                      name="nik"
                      value={this.state.nik}
                      placeholder="Cth : 30711235432456"
                    ></InputText>
                    <label htmlFor="email" className="text-pink font-bold">
                      Email :
                    </label>
                    <InputText
                      id="email"
                      name="email"
                      value={this.state.email}
                      placeholder="Cth : Rifa@email.com"
                    ></InputText>
                    <label htmlFor="password" className="text-pink font-bold">
                      Password :
                    </label>
                    <InputText
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      placeholder="Cth : KitaSehat_123"
                    ></InputText>
                  </div>
                  <div className="w-full flex justify-center">
                    <Button className="bg-pink px-3 py-1 shadow-sm rounded-3xl text-white">
                      Submit
                    </Button>
                  </div>
                </form>
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
      </div>
    );
  }
}
