import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/UI/Button";
import { cartActions } from "../store/cart-slice";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = ({closeCart}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItem(id));
  };
  const handleAddItem = (id) => {
    dispatch(cartActions.addItem({ id }));
  };
  const handleDeleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <div className="flex justify-between flex-col p-4">
      <div className="min-h-52 max-h-[70vh] overflow-y-scroll scroll-sm">
        {cartItems.length > 0 && (
          <div className="p-4 min-h-52 flex flex-col justify-between items-center">
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-2"
                >
                  <div className="w-2/12">
                    <img
                      className="w-10/12 h-auto"
                      src={item.imgUrl}
                      alt={`image + ${item.name}`}
                    />
                  </div>
                  <div className="w-8/12">
                    <div className="mb-2 flex justify-between items-center">
                      <p className="text-slate-800 font-medium">{item.name}</p>
                      <div
                        className="p-2 hover:cursor-pointer hover:text-orange-600 ease-in duration-150 text-xl text-slate-800"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <MdDelete />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className=" flex justify-between items-center">
                        <Button onClick={() => handleAddItem(item.id)}>
                          +
                        </Button>
                        <span className="w-8 text-center text-slate-800 font-medium">
                          {item.quantity}
                        </span>
                        <Button onClick={() => handleRemoveItem(item.id)}>
                          -
                        </Button>
                      </div>
                      <p className="text-lg font-medium text-orange-600">
                        ${item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {cartItems.length === 0 && (
          <p className="text-slate-700 font-medium text-center text-lg mt-20">
            You haven't ordered anything yet
          </p>
        )}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg text-slate-800 font-medium ">
          Total: ${totalPrice}
        </span>
        {totalPrice ? <Button onClick={closeCart}><Link to='checkout'>Checkout</Link></Button> : ""}
      </div>
    </div>
  );
};

export default Cart;
