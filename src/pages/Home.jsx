import Button from "../components/UI/Button";
import { FaCar } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import title from "../utils/title";
import { Link } from "react-router-dom";
import heroImage from "/images/hero.png";
import quickImg from "/images/quick.png";
import deinImg from "/images/dein.png";
import pickupImg from "/images/pickup.png";
import breadIcon from "/images/icon-bread.png";
import pizzaIcon from "/images/icon-pizza.png";
import burgerIcon from "/images/icon-burger.png";
import networkImg from '/images/network.png';
import locationImg from '/images/location.png'
import { products, feedbacks } from "../assets/data";
import Card from "../components/UI/Card";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  title("Home");
  const allProduct = products;
  const pizzaProducts = products.filter(
    (product) => product.category === "Pizza"
  );
  const breadProducts = products.filter(
    (product) => product.category === "Bread"
  );
  const burgerProducts = products.filter(
    (product) => product.category === "Burger"
  );
  const [selected, setSelected] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState(allProduct);

  return (
    <div className="flex flex-col items-center">
      <section className="mt-8 w-11/12 md:flex items-center">
        <div className="md:w-6/12">
          <h1 className="text-center text-4xl font-semibold font-mono text-orange-600 tracking-tighter md:text-left">
            <span className="text-xl text-slate-800">
              Easy way to make an order <br />
            </span>
            HUNGRY?
            <span className="text-slate-800"> Just wait food at </span>
            your door
          </h1>
          <div className="mt-4 flex justify-evenly items-center md:justify-start">
            <Button>
              <Link to="foods">Order now</Link>
            </Button>
            <span className="text-slate-700 ml-4">See all foods</span>
          </div>
          <div className="mt-4 flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <FaCar className="text-orange-600 mr-2" />
              <span className="text-slate-700">No shipping charge</span>
            </div>
            <div className="flex items-center">
              <IoShieldCheckmarkOutline className="text-orange-600 mr-2" />
              <span className="text-slate-700">100% secure checkout</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:w-6/12">
          <img className="w-10/12" src={heroImage} alt="image hero" />
        </div>
      </section>

      <section className="mt-8 w-11/12">
        <div className="md:flex justify-center">
          <h2 className="text-3xl text-slate-800 font-semibold font-mono tracking-tighter text-center md:w-6/12">
            <span className="text-xl text-orange-600">
              What we serve <br />
            </span>
            Just sit back at home we will
            <span className="text-orange-600"> take care</span>
          </h2>
        </div>
        <div className="mt-4 md:flex justify-between gap-4">
          <div className="flex flex-col items-center text-center mt-6">
            <img className="w-20" src={quickImg} alt="image Quick Delivery" />
            <h4 className="text-slate-800 font-medium text-lg">
              Quick Delivery
            </h4>
            <p className="text-slate-700">
              lorem ipsum dolor sit amet, verial bake at meniued. Holo rius
              tadest bedo.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-6">
            <img className="w-20" src={deinImg} alt="image Super Dine in" />
            <h4 className="text-slate-800 font-medium text-lg">
              Super Dine in
            </h4>
            <p className="text-slate-700">
              lorem ipsum dolor sit amet, verial bake at meniued. Holo rius
              tadest bedo.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-6">
            <img className="w-20" src={pickupImg} alt="image Easy Pick Up" />
            <h4 className="text-slate-800 font-medium text-lg">Easy Pick Up</h4>
            <p className="text-slate-700">
              lorem ipsum dolor sit amet, verial bake at meniued. Holo rius
              tadest bedo.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 w-11/12">
        <h2 className="text-center text-3xl text-slate-800 font-mono font-semibold">
          Popular Foods
        </h2>
        <div className="px-4 py-2 rounded-md bg-orange-600 flex justify-around items-end mt-6 md:px-[20%]">
          <div
            className={`px-2 py-1 rounded font-medium hover:cursor-pointer hover:bg-slate-50 hover:text-orange-600 ease-in duration-100 ${
              selected === "all"
                ? "bg-slate-50 text-orange-600"
                : "text-slate-50"
            }`}
            onClick={() => {
              setSelectedProducts(allProduct);
              setSelected("all");
            }}
          >
            All
          </div>
          <div
            className={`px-2 py-1 flex items-end rounded font-medium hover:cursor-pointer hover:bg-slate-50 hover:text-orange-600 ease-in duration-100 ${
              selected === "bread"
                ? "bg-slate-50 text-orange-600"
                : "text-slate-50"
            }`}
            onClick={() => {
              setSelectedProducts(breadProducts);
              setSelected("bread");
            }}
          >
            <img className="w-6 mr-2" src={breadIcon} alt="icon bread" />
            <span>Bread</span>
          </div>
          <div
            className={`px-2 py-1 flex items-end rounded font-medium hover:cursor-pointer hover:bg-slate-50 hover:text-orange-600 ease-in duration-100 ${
              selected === "burger"
                ? "bg-slate-50 text-orange-600"
                : "text-slate-50"
            }`}
            onClick={() => {
              setSelectedProducts(burgerProducts);
              setSelected("burger");
            }}
          >
            <img className="w-6 mr-2" src={burgerIcon} alt="icon burger" />
            <span>Burger</span>
          </div>
          <div
            className={`px-2 py-1 flex items-end rounded font-medium hover:cursor-pointer hover:bg-slate-50 hover:text-orange-600 ease-in duration-100 ${
              selected === "pizza"
                ? "bg-slate-50 text-orange-600"
                : "text-slate-50"
            }`}
            onClick={() => {
              setSelectedProducts(pizzaProducts);
              setSelected("pizza");
            }}
          >
            <img className="w-6 mr-2" src={pizzaIcon} alt="icon pizza" />
            <span>Pizza</span>
          </div>
        </div>

        <div className="mt-6 flex gap-4 lg:gap-7 flex-wrap">
          {selectedProducts.map((product) => (
            <Card key={product.id} product={product} link={`foods/${product.id}`}/>
          ))}
        </div>
      </section>

      <section className="mt-8 w-11/12 md:flex flex-row-reverse justify-between items-center gap-4">
        <div className="md:w-6/12">
          <h2 className="text-center md:text-left text-3xl text-slate-800 font-mono font-semibold tracking-tighter">
            Why <span className="text-orange-600">Tasty Treat</span>
          </h2>
          <p className="mt-4 text-slate-700 text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium veritatis vel velit pariatur aperiam laboriosam
            distinctio.
          </p>
          <div className="mt-4">
            <div className="mt-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaRegCircleCheck className="text-orange-600 mr-2" />
                <h3 className="text-slate-800 font-medium text-lg">
                  Fresh and tasty foods
                </h3>
              </div>
              <p className="text-slate-700 text-center mt-2 md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaRegCircleCheck className="text-orange-600 mr-2" />
                <h3 className="text-slate-800 font-medium text-lg">
                  Quality support
                </h3>
              </div>
              <p className="text-slate-700 text-center mt-2 md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaRegCircleCheck className="text-orange-600 mr-2" />
                <h3 className="text-slate-800 font-medium text-lg">
                  Order from any location
                </h3>
              </div>
              <p className="text-slate-700 text-center mt-2 md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center md:w-5/12">
          <img className="w-11/12 md:w-full" src={locationImg} alt="image location" />
        </div>
      </section>

      <section className="my-8 w-11/12 md:flex justify-between items-center">
      <div className="md:w-6/12">
        <h2 className="text-3xl text-slate-800 font-semibold font-mono text-center tracking-tight md:text-left">
          <span className="text-xl text-orange-600">
            Testimonial <br />
          </span>
          What our <span className="text-orange-600">customers</span> are saying
        </h2>
        <p className="text-slate-700 text-center mt-4 md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          veritatis vel velit pariatur aperiam laboriosam distinctio, recusandae
          beatae ipsum eligendi!
        </p>
        <div className="mt-6 flex">
          <Swiper
            spaceBetween={80}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div
                  on
                  key={feedback.id}
                  className="border-[1px] border-slate-200 rounded-md p-4 shadow shadow-slate-300"
                >
                  <div>
                    <p className="text-slate-700">{feedback.feedback}</p>
                  </div>
                  <div className="mt-2 flex items-start gap-3">
                    <img
                      className="w-16 rounded"
                      src={feedback.avatar}
                      alt={`avater ${feedback.name}`}
                    />
                    <div>
                      <p className="text-slate-800 font-medium">
                        {feedback.name}
                      </p>
                      <span className="text-sm text-slate-700 flex items-center">
                        <CiLocationOn className="mr-1" />
                        {feedback.location}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <div className="mt-6 flex justify-center md:w-5/12">
        <img className="w-10/12 md:w-full" src={networkImg} alt="network image" />
      </div>
      </section>
    </div>
  );
};

export default HomePage;
