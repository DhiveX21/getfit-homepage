import React from "react";

import ImageTeam from "assets/images/founder.jpeg";
import SectionTitle from "elements/SectionTitle";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// function carouselTeamData(props) {
//   const alldata = props.data;
//   const eachdata = alldata.map((name) => (
//     <div>
//       <div className="card">
//         <div className="card-body">
//           <div>
//             <img className="" src={ImageTeam} alt=""></img>
//           </div>
//           <div className="text-center">{name}</div>
//         </div>
//       </div>
//     </div>
//   ));
//   return { eachdata };
// }

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Team(props) {
  const carouselTeamData = props.data.map((item, index) => (
    // <div className="container-carousel mb-4">
    //   <div className="card">
    //     <div className="card-body">
    //       <div className="mb-4">
    //         <img className="img-fluid" src={ImageTeam} alt=""></img>
    //       </div>
    //       <div className="team-name text-primary font-weight-bold">
    //         {item.name}
    //       </div>
    //       <div className="team-position text-center mb-4">{item.position}</div>
    //       <div className="team-description text-justify mb-4 text-gray">
    //         {item.description}
    //       </div>
    //       <Button
    //         className="btn"
    //         isPrimary
    //         isExternal
    //         type="link"
    //         href={item.url}
    //         target="_blank"
    //       >
    //         Detail
    //       </Button>
    //     </div>
    //   </div>
    // </div>

    <div
      className="my-10 flex flex-col justify-center items-center  hover:shadow-xl transform hover:scale-105 duration-500"
      key={index}
    >
      <img
        className="w-32 h-32 rounded-full object-cover"
        src={ImageTeam}
        alt={item.name}
      />
      <div className="container w-80 mx-auto  bg-white rounded-xl overflow-hidden ">
        <div className="text-center relative py-14">
          <h1 className="mb-1  text-2xl font-sans font-semibold text-pink hover:text-red cursor-pointer">
            {item.name}
          </h1>
          <div className="text-lg text-gray-600 mb-5 hover:text-gray-900">
            {item.position}
          </div>
          <div className="text-sm text-gray-500 px-5 hover:text-gray-900">
            {item.description}
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="team mb-20">
      <SectionTitle preTitle="Our Hardworking" Title="Team" />
      <div className="">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={300}
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={""}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
          customTransition="transform 100ms ease-in-out"
        >
          {carouselTeamData}
        </Carousel>
      </div>
    </section>
  );
}
