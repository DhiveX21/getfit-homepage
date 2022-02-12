import React from "react";
import PilihKelas from "parts/main/Promo";
import "./style/PilihKelasPage.css";

export default function PilihKelasPage() {
  return (
    <>
      <section className="pilih-kelas">
        <div className="pilih-kelas__wrapper">
          <div className="pilih-kelas__illustration">
            <div className="pilih-kelas__illustration__title">
              <h2>Sekarang Kamu Kelas berapa sih?</h2>
            </div>
            <div class="pilih-kelas__illustration__img">
              <picture>
                <img
                  src="/images/gambar-profil.svg"
                  alt="illustration pilih kelas"
                />
              </picture>
            </div>
          </div>
          <div class="pilih-kelas__menu">
            <div class="pilih-kelas__menu__title">
              <h2>Pilih Kelas</h2>
            </div>
            <div class="pilih-kelas__menu__card">
              <div class="pilih-kelas__menu__card__item">
                <div class="pilih-kelas__menu__card__item__title">
                  <h3>Alumni</h3>
                </div>
                <div class="pilih-kelas__menu__card__item__desc">
                  <span>
                    Ayo Semangat , Kita Belajar Bersama untuk mencapai cita-cita
                    mu...
                  </span>
                </div>
              </div>
            </div>
            <div class="pilih-kelas__menu__card">
              <div class="pilih-kelas__menu__card__item">
                <div class="pilih-kelas__menu__card__item__title">
                  <h3>Alumni</h3>
                </div>
                <div class="pilih-kelas__menu__card__item__desc">
                  <span>
                    Ayo Semangat , Kita Belajar Bersama untuk mencapai cita-cita
                    mu...
                  </span>
                </div>
              </div>
            </div>
            <div class="pilih-kelas__menu__card">
              <div class="pilih-kelas__menu__card__item">
                <div class="pilih-kelas__menu__card__item__title">
                  <h3>Alumni</h3>
                </div>
                <div class="pilih-kelas__menu__card__item__desc">
                  <span>
                    Ayo Semangat , Kita Belajar Bersama untuk mencapai cita-cita
                    mu...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
