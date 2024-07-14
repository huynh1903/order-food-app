import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const Card = ({ product, link }) => {
  const dispatch = useDispatch();
  const { id, name, price, imgUrl } = product;
  const handleAddItem = () => {
    dispatch(cartActions.addItem({ id, name, price, imgUrl }));
  };

  return (
    <>
      <div className="w-40 h-[58vw] md:w-[29vw] md:h-[36vw] lg:w-[21vw] lg:h-[23vw] rounded-md overflow-hidden border-[1px] border-slate-200 flex flex-col justify-between">
        <div className="flex justify-center p-[3vw]">
          <Link
            to={link}
            className="w-8/12 md:max-w-[60%] hover:cursor-pointer ease-in duration-150"
          >
            <img
              className="w-full hover:scale-110 hover:cursor-pointer ease-in duration-200 "
              src={imgUrl}
              alt={`image + ${name}`}
            />
          </Link>
        </div>
        <div className="h-3/6 bg-slate-200 p-[2vw] flex flex-col justify-between">
          <h3 className="text-center text-slate-800 font-medium">{name}</h3>
          <div className="flex justify-between items-center mt-2">
            <div>
              <span className="text-lg text-orange-600 font-semibold">
                ${price}
              </span>
            </div>
            <div onClick={handleAddItem}>
              <Button>Add Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
