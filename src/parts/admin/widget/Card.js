import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="relative">
        <div className="flex flex-wrap ">
          {/* begin card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-1">
            <div className="bg-pink shadow rounded text-white flex flex-wrap items-center px-2 h-24">
              {/* card svg */}
              <div className="border-r-2 border-white pr-2">
                <span className="w-72 h-72">
                  <svg
                    className="w-16 h-16 md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <polygon points="0 0 24 0 24 24 0 24" />
                      <path
                        d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                        fill="#ffffff"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                        fill="#ffffff"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </span>
              </div>
              {/* card content */}
              <div className="pl-6">
                <div className=" font-light text-sm">Total Appointment</div>
                <div className="font-bold">
                  50 <span className="font-light">Orang</span>
                </div>
              </div>
            </div>
          </div>
          {/* begin card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-1">
            <div className="bg-pink shadow rounded text-white flex flex-wrap items-center px-2 h-24">
              {/* card svg */}
              <div className="border-r-2 border-white pr-2">
                <span className="">
                  <svg
                    className="w-16 h-16 md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g>
                        <polygon points="0 0 24 0 24 24 0 24" />
                      </g>
                      <path
                        d="M12,4 L12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,10.9603196 17.7360885,9.96126435 17.2402578,9.07513926 L18.9856052,8.09853149 C19.6473536,9.28117708 20,10.6161442 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z"
                        fill="#ffffff"
                        fillRule="nonzero"
                        opacity="0.3"
                        transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
                      />
                    </g>
                  </svg>
                </span>
              </div>
              {/* card content */}
              <div className="pl-6">
                <div className="font-light text-sm">Pending Appointment</div>
                <div className="font-bold">
                  2 <span className="font-light">Appointment</span>
                </div>
              </div>
            </div>
          </div>
          {/* begin card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-1">
            <div className="bg-pink shadow rounded text-white flex flex-wrap items-center px-2 h-24">
              {/* card svg */}
              <div className="border-r-2 border-white pr-2">
                <span className="">
                  <svg
                    className="w-16 h-16 md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <polygon points="0 0 24 0 24 24 0 24" />
                      <path
                        d="M6.26193932,17.6476484 C5.90425297,18.0684559 5.27315905,18.1196257 4.85235158,17.7619393 C4.43154411,17.404253 4.38037434,16.773159 4.73806068,16.3523516 L13.2380607,6.35235158 C13.6013618,5.92493855 14.2451015,5.87991302 14.6643638,6.25259068 L19.1643638,10.2525907 C19.5771466,10.6195087 19.6143273,11.2515811 19.2474093,11.6643638 C18.8804913,12.0771466 18.2484189,12.1143273 17.8356362,11.7474093 L14.0997854,8.42665306 L6.26193932,17.6476484 Z"
                        fill="#ffffff"
                        fillRule="nonzero"
                        transform="translate(11.999995, 12.000002) rotate(-180.000000) translate(-11.999995, -12.000002) "
                      />
                    </g>
                  </svg>
                </span>
              </div>
              {/* card content */}
              <div className="pl-6">
                <div className=" font-light text-sm">Success Appointment</div>
                <div className="text-base font-bold">
                  776 <span className="font-light">Orang</span>
                </div>
              </div>
            </div>
          </div>
          {/* begin card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-1">
            <div className="bg-pink shadow rounded text-white flex flex-wrap items-center px-2 h-24">
              {/* card svg */}
              <div className="border-r-2 border-white pr-2">
                <span className="">
                  <svg
                    className="w-16 h-16 md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
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
                      <rect
                        fill="#ffffff"
                        opacity="0.3"
                        x="11.5"
                        y="2"
                        width="2"
                        height="4"
                        rx="1"
                      />
                      <rect
                        fill="#ffffff"
                        opacity="0.3"
                        x="11.5"
                        y="16"
                        width="2"
                        height="5"
                        rx="1"
                      />
                      <path
                        d="M15.493,8.044 C15.2143319,7.68933156 14.8501689,7.40750104 14.4005,7.1985 C13.9508311,6.98949895 13.5170021,6.885 13.099,6.885 C12.8836656,6.885 12.6651678,6.90399981 12.4435,6.942 C12.2218322,6.98000019 12.0223342,7.05283279 11.845,7.1605 C11.6676658,7.2681672 11.5188339,7.40749914 11.3985,7.5785 C11.2781661,7.74950085 11.218,7.96799867 11.218,8.234 C11.218,8.46200114 11.2654995,8.65199924 11.3605,8.804 C11.4555005,8.95600076 11.5948324,9.08899943 11.7785,9.203 C11.9621676,9.31700057 12.1806654,9.42149952 12.434,9.5165 C12.6873346,9.61150047 12.9723317,9.70966616 13.289,9.811 C13.7450023,9.96300076 14.2199975,10.1308324 14.714,10.3145 C15.2080025,10.4981676 15.6576646,10.7419985 16.063,11.046 C16.4683354,11.3500015 16.8039987,11.7268311 17.07,12.1765 C17.3360013,12.6261689 17.469,13.1866633 17.469,13.858 C17.469,14.6306705 17.3265014,15.2988305 17.0415,15.8625 C16.7564986,16.4261695 16.3733357,16.8916648 15.892,17.259 C15.4106643,17.6263352 14.8596698,17.8986658 14.239,18.076 C13.6183302,18.2533342 12.97867,18.342 12.32,18.342 C11.3573285,18.342 10.4263378,18.1741683 9.527,17.8385 C8.62766217,17.5028317 7.88033631,17.0246698 7.285,16.404 L9.413,14.238 C9.74233498,14.6433354 10.176164,14.9821653 10.7145,15.2545 C11.252836,15.5268347 11.7879973,15.663 12.32,15.663 C12.5606679,15.663 12.7949989,15.6376669 13.023,15.587 C13.2510011,15.5363331 13.4504991,15.4540006 13.6215,15.34 C13.7925009,15.2259994 13.9286662,15.0740009 14.03,14.884 C14.1313338,14.693999 14.182,14.4660013 14.182,14.2 C14.182,13.9466654 14.1186673,13.7313342 13.992,13.554 C13.8653327,13.3766658 13.6848345,13.2151674 13.4505,13.0695 C13.2161655,12.9238326 12.9248351,12.7908339 12.5765,12.6705 C12.2281649,12.5501661 11.8323355,12.420334 11.389,12.281 C10.9583312,12.141666 10.5371687,11.9770009 10.1255,11.787 C9.71383127,11.596999 9.34650161,11.3531682 9.0235,11.0555 C8.70049838,10.7578318 8.44083431,10.3968355 8.2445,9.9725 C8.04816568,9.54816454 7.95,9.03200304 7.95,8.424 C7.95,7.67666293 8.10199848,7.03700266 8.406,6.505 C8.71000152,5.97299734 9.10899753,5.53600171 9.603,5.194 C10.0970025,4.85199829 10.6543302,4.60183412 11.275,4.4435 C11.8956698,4.28516587 12.5226635,4.206 13.156,4.206 C13.9160038,4.206 14.6918294,4.34533194 15.4835,4.624 C16.2751706,4.90266806 16.9686637,5.31433061 17.564,5.859 L15.493,8.044 Z"
                        fill="#ffffff"
                      />
                    </g>
                  </svg>
                </span>
              </div>
              {/* card content */}
              <div className="pl-6">
                <div className=" font-light text-sm">Total Earning</div>
                <div className="text-base font-bold">
                  <span className="font-light">Rp.</span> 117.550.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
