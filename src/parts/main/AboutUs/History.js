import React from "react";
import SectionTitle from "elements/SectionTitle";
import "assets/index.css";

export default function History(props) {
  return (
    <section className="mb-20">
      <SectionTitle preTitle="Our Precious" Title="History" />

      <div className=" flex justify-center">
        <div className="w-full px-2 lg:w-3/4">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-pink-50">
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-pink bg-opacity-30 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg text-pink mb-1">
                  14 Agustus 2014
                </h3>
                <p className=" text-gray-700 text-sm text-justify">
                  Get Fit with Physio (GFWP) merupakan media edukasi dan promosi
                  kesehatan melalui media sosial Instagram dan Facebook FanPage
                  yang didirikan oleh Faizah Abdullah, seorang praktisi
                  fisioterapi yang juga menikmati perannya sebagai dosen di
                  Universitas Indonesia. Dikemas dengan menggunakan ilustrasi
                  dan bahasa yang ringan, GFWP secara berkala memberikan edukasi
                  berdasarkan bidang ilmu fisioterapi dalam upaya mencegah sakit
                  (preventif) atau meningkatkan kualitas kesehatan (promotif).
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-pink bg-opacity-30 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink shadow"></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-pink bg-opacity-30 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink shadow"></div>
              </div>
              <div className="bg-pink bg-opacity-30 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1 text-pink">
                  14 Agustus 2015
                </h3>
                <p className="text-gray-700 text-sm text-justify">
                  Sejak pertama kali dipublikasikan pada Agustus 2015 hingga
                  awal tahun 2019, akun Instagram GFWP telah diikuti oleh lebih
                  dari 6.900 pengikut aktif baik dalam maupun luar negeri dan
                  sekitar 2.000 lebih pengikut pada akun Facebook FanPage.
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div className="bg-pink bg-opacity-30 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 className="font-semibold text-lg mb-1 text-pink">
                  14 Agusuts 2021
                </h3>
                <p className="text-gray-700 text-sm text-justify">
                  Get Fit With Physio pun aktif dalam memberikan konsultasi
                  kesehatan online dan edukasi melalui kegiatan seminar secara
                  offline. Dalam kegiatan seminar, disampaikan berbagai materi
                  yang ditujukan baik bagi rekan fisioterapis, mahasiswa maupun
                  masyarakat awam.
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-pink bg-opacity-30 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink  shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
