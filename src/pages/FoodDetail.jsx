import { useParams } from "react-router-dom";
import title from "../utils/title";
import { products } from "../assets/data";
import Banner from "../components/UI/Banner";
import Button from "../components/UI/Button";
import Reviews from "../components/Reviews";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Card from "../components/UI/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const FoodDetailPage = () => {
  title("Foods");
  const dispatch = useDispatch();
  const { foodId } = useParams();
  const product = products.find((product) => product.id === foodId);
  const { id, name, price, imgUrl, category } = product;
  const similarProduct = products.filter(
    (product) => product.category === category && product.id !== id
  );
  const description = <p className="text-slate-700">{product.desc}</p>;
  const [tab, setTab] = useState("review");
  const [slide, setSlide] = useState(2);

  const handleAddItem = (id, name, price, imgUrl) => {
    dispatch(cartActions.addItem({ id, name, price, imgUrl }));
  };

  return (
    <>
      <Banner name={name} />

      <div className="my-8 flex justify-center">
        <div className="w-11/12">
          <div className="flex justify-evenly items-center md:w-6/12 md:justify-start gap-8">
            <div className="w-5/12">
              <img className="w-11/12" src={imgUrl} alt={`image ${title}`} />
            </div>
            <div className="">
              <h3 className="text-lg font-medium text-slate-800">{title}</h3>
              <div className="flex justify-between my-2">
                <span className="text-lg font-medium text-orange-600">
                  ${price}
                </span>
                <span className="text-slate-800">{category}</span>
              </div>
              <div>
                <Button onClick={() => handleAddItem(id, name, price, imgUrl)}>
                  Add Cart
                </Button>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="flex">
              <div
                className={`px-4 py-2 hover:cursor-pointer ease-in duration-150 ${
                  tab === "review" ? "rounded bg-slate-200" : ""
                }`}
                onClick={() => setTab("review")}
              >
                <h3 className="text-lg font-medium text-slate-800">Reviews</h3>
              </div>
              <div
                className={`px-4 py-2 hover:cursor-pointer ease-in duration-150 ${
                  tab === "description" ? "rounded bg-slate-200" : "bg-none"
                }`}
                onClick={() => setTab("description")}
              >
                <h3 className="text-lg font-medium text-slate-800">
                  Description
                </h3>
              </div>
            </div>
            <div className="mt-4">
              {tab === "review" && <Reviews />}
              {tab === "description" && description}
            </div>
          </div>

          <div>
            <h3 className="text-slate-800 font-medium">You might also like</h3>
            <div className="mt-6 flex flex-wrap">
              <Swiper
                spaceBetween={30}
                modules={[Navigation, Autoplay]}
                loop={true}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{ 
                  375: {
                    slidesPerView: 2
                  },
                  768: {
                    slidesPerView: 3
                  },
                  1024: {
                    slidesPerView: 4
                  }
                 }}
                className="w-full"
              >
                {similarProduct.map((product) => (
                  <SwiperSlide>
                    <Card key={product.id} product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetailPage;
