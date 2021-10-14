import React, { Component } from "react";
import Button from "elements/Button";
import { Link } from "react-router-dom";

import InputText from "elements/forms/InputText";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

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
        <div className="flex items-center justify-center h-full w-full ">
          <div>
            <div className="w-full rounded-3xl ring-2 ring-pink shadow-md bg-gray-100 md:w-96  mb-5">
              <div className="grid grid-cols-1 gap-2 place-content-between h-full w-full">
                <div className="w-full h-20 flex items-center justify-center border-b-2 text-center text-white bg-pink rounded-t-3xl mb-5">
                  <h1 className="font-bold text-3xl">login</h1>
                </div>
                <form method="post" onSubmit={this.handleSubmit}>
                  <div className="w-full px-5 mb-5">
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
                  <div className="w-full h-20 flex justify-center items-center">
                    <Button
                      type="submit"
                      className="bg-pink px-5 py-2 shadow-sm rounded-3xl text-white"
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500">
              Belum punya akun? Daftar
              <span>
                {" "}
                <Link
                  to="/registration"
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
