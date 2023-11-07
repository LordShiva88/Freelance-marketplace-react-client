import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/testimonials");
      setTestimonials(response.data);
    };
    fetchData();
  }, []);
  console.log(testimonials);

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
              <div className="h-auto p-8 bg-white rounded-md border mr-2 dark:bg-gray-800 mt-10">
                <p className=" text-gray-500 dark:text-gray-400">
                  {testimonial.details}
                </p>

                <div className="flex flex-grow items-center mt-6 -mx-2">
                  <img className={testimonial?.image} alt="" />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.company_name}
                    </span>
                  </div>
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
