import React, { Component } from "react";
import Header from "parts/admin/Header";
import Sidebar from "parts/admin/Sidebar";
import Title from "parts/admin/widget/Title";
import ListPatientTable from "parts/admin/listPatient/listPatientTable";
import InputText from "elements/forms/InputText";
import Button from "elements/Button";
export default class listPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      addPatientFormname: "",
      addPatientFormgender: "",
      addPatientFormphoto: "",
      addPatientFormphone: "",
      addPatientFormaddress: "",
      addPatientFormnik: "",
      addPatientFormbirthdate: "",
      addPatientFormemail: "",
      checkedRadioOption: "perempuan",
    };
  }

  onRadioGenderChange = (event) => {
    this.setState({
      checkedRadioOption: event.target.value,
    });
  };

  handleModal = (condition) => {
    this.setState({
      showModal: condition,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("kesubmit");
    // console.log(document.getElementById("name"));
  };

  render() {
    return (
      <>
        <Header className="z-20"></Header>
        <div className="relative ml-16 mr-2 mt-16 z-0 md:ml-68 md:mr-4 md:mt-18">
          <Title title="List Pasien"></Title>
          <div className="flex justify-end">
            <Button
              className="bg-blue py-2 px-4 mx-3 rounded-xl text-white flex shadow hover:bg-navy hover:-translate-y-1 transform transition ease-in-out duration-200 "
              href=""
              onClick={() => this.handleModal(true)}
            >
              <div className="mr-1">Tambah Pasien </div>
              <span className="">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <rect x="0" y="0" width="24" height="24" />
                    <circle
                      fill="#ffffff"
                      opacity="0.3"
                      cx="12"
                      cy="12"
                      r="10"
                    />
                    <path
                      d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z"
                      fill="#ffffff"
                    />
                  </g>
                </svg>
              </span>
            </Button>
          </div>
          <ListPatientTable></ListPatientTable>
        </div>
        <Sidebar></Sidebar>

        {/* Modal start */}

        {this.state.showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-70 transitionFadeIn-1-fast">
              <div className="relative w-1/2 max-w-3xl">
                {/*content*/}
                <div className=" rounded-lg shadow-lg relative flex flex-col  w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid  rounded-t">
                    <h3 className="text-3xl font-semibold">Tambah Pasien</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => this.handleModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <form
                    method="post"
                    className="w-full px-4"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="w-full px-5 mb-5">
                      <div className="mb-6">
                        <label htmlFor="name" className="text-pink">
                          Nama :
                        </label>
                        <InputText
                          id="name"
                          name="name"
                          placeholder="Cth : Rifa Rahmalia"
                          className="mb-2"
                        ></InputText>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="gender" className="text-pink ">
                          Jenis Kelamin :
                        </label>
                        <div className="  mb-2">
                          <label className="mr-2 text-pink font-bold">
                            <input
                              type="radio"
                              value="perempuan"
                              checked={
                                this.state.checkedRadioOption === "perempuan"
                              }
                              onChange={this.onRadioGenderChange}
                            />
                            <span className="mx-2">Perempuan</span>
                          </label>
                          <label className="mr-2 text-blue font-bold">
                            <input
                              type="radio"
                              value="laki-laki"
                              checked={
                                this.state.checkedRadioOption === "laki-laki"
                              }
                              onChange={this.onRadioGenderChange}
                            />
                            <span className="mx-2">Laki - Laki</span>
                          </label>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="text-pink ">
                          Email :
                        </label>
                        <InputText
                          id="email"
                          name="email"
                          placeholder="Cth : Rifa@email.com"
                          className="mb-2"
                        ></InputText>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="phone" className="text-pink ">
                          No HP :
                        </label>
                        <InputText
                          id="phone"
                          name="phone"
                          placeholder="Cth : KitaSehat_123"
                        ></InputText>
                      </div>{" "}
                      <div className="mb-6">
                        <label htmlFor="photo" className="text-pink ">
                          Photo :
                        </label>
                        <InputText
                          id="photo"
                          name="photo"
                          placeholder="Cth : /images/123"
                        ></InputText>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="address" className="text-pink ">
                          Alamat :
                        </label>
                        <InputText
                          id="address"
                          name="address"
                          placeholder="Cth : link harum manis rt02/02 no 430"
                        ></InputText>
                      </div>{" "}
                      <div className="mb-6">
                        <label htmlFor="nik" className="text-pink ">
                          Nik :
                        </label>
                        <InputText
                          id="nik"
                          name="nik"
                          placeholder="Cth : 1964865498"
                        ></InputText>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="bg-red rounded-xl text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 transform hover:-translate-y-1"
                        type="button"
                        onClick={() => this.handleModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-blue rounded-xl text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 transform hover:-translate-y-1"
                        type="button"
                        onClick={this.handleSubmit}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
}
