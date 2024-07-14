import React from "react";
import Banner from "../components/UI/Banner";
import Button from "../components/UI/Button";
import { useSelector } from "react-redux";
import title from "../utils/title";

const CheckoutPage = () => {
  title("Checkout");
  const subTotal = useSelector((state) => state.cart.totalPrice);
  const shipping = 10;
  return (
    <div>
      <Banner name="Checkout" />
      <section className="flex justify-center my-8">
        <div className="w-11/12">
          <h2 className="text-slate-800 font-medium text-2xl mb-6">
            Shipping Address
          </h2>
          <div className="flex items-start gap-4">
            <form
              className="md:w-7/12 lg:w-5/12 flex flex-wrap gap-4 p-4 rounded shadow shadow-slate-200 bg-slate-200"
              action=""
            >
              <input
                className="px-3 py-2 w-full border-[1px] border-slate-300 focus-visible:outline-none text-slate-800"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="px-3 py-2 w-full border-[1px] border-slate-300 focus-visible:outline-none text-slate-800"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="px-3 py-2 w-full border-[1px] border-slate-300 focus-visible:outline-none text-slate-800"
                type="text"
                placeholder="Number phone"
              />
              <input
                className="px-3 py-2 w-full border-[1px] border-slate-300 focus-visible:outline-none text-slate-800"
                type="text"
                placeholder="Location"
              />
              <div>
                <Button>Payment</Button>
              </div>
            </form>

            <div className="p-4 rounded bg-slate-200 shadow shadow-slate-200 ">
              <p className="text-base text-slate-700">
                Subtotal:{" "}
                <span className="text-lg font-medium text-slate-800">
                  ${subTotal}
                </span>
              </p>
              <p className="text-base text-slate-700">
                Shipping:{" "}
                <span className="text-lg font-medium text-slate-800">
                  ${shipping}
                </span>
              </p>
              <p className="text-base text-slate-700">
                Total:{" "}
                <span className="text-lg font-medium text-slate-800">
                  ${subTotal + shipping}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
