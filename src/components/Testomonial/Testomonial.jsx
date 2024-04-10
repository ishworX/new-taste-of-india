import React from 'react';
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Brent Fra",
    text: "Food was excellent, I agree that the spice level is a bit understated but my mild-medium was perfect. What impressed me the most however was how detailed and careful they were with my wife'sLactose allergy. They labeled the take out containers so that we clearly knew which foods were dairy free. Well done, we will be return customers",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Eliseo Sana",
    text: "I eat here regularly, The taste and quality are consistently amazing.Always hot Fresh the waiting time takes a longer time then usually so order ahead for pick up (20 min). Best Indian food in the country by Far! Highly recommend!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Sarah H",
    text: "Amazing food. We tried several different dishes and desserts, and they were all excellent, from mild to spicy. I especially enjoyed the Chef's Special paneer, and the chicken vindaloo.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 1,
    name: "Blake Hellewell",
    text: "Great food and good portions for next days lunch. Deffinitley will be back and or ordering for lunch during work breaks. Tried the lamb but looking forward to trying goat for the first time.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 1,
    name: "Kendra Rutledge",
    text: "After Skip the dishes did not deliver our order we called the restaurant back and reordered directly through them. They were very friendly and even called us later to ensure we recieved our food. They went above and bevond. The food was exactly to order and delicious.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 1,
    name: "Hamza Al",
    text: "Excellent customer service, the best indian food in Lethbridge. Try the lamb beryani, and the tandoori chicken…All Halal.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 1,
    name: "Kelli-Rae Tamaki",
    text: "Awesome vegan food and they're very careful to not cross contaminate ❤️ Also they've never screwed up an order! Awesome 👌",
    img: "https://picsum.photos/103/103",
  },
];


const Testomonial = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
                You can relay on our amazing features list and also our customer services will be great experience for you without doubt
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testomonial;