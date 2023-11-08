import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/testimonials");
      setTestimonials(response.data);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-[#eb347a]">Testimonial</span>
        </h2>
        <p className="text-gray-500">What Our Customer says</p>
        <div className="flex justify-center">
          <hr className="border w-52 h-1 bg-[#eb347a] "></hr>
        </div>
      </div>
      <div className="md:px-10 p-3 my-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, ide) => (
            <div key={ide}>
              <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-4 py-20  rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100 whitespace-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 dark:text-violet-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    {testimonial.details}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 dark:text-violet-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
                  />
                  <p className="text-xl font-semibold leadi">
                    {testimonial.name}
                  </p>
                  <p className="text-sm uppercase">
                    {testimonial.company_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
