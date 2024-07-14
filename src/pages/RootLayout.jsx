import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/UI/Modal";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

const RootLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userProceed, setUserProceed] = useState('');

  const handleToggleCart = () => {
    setOpenModal(!openModal);
    setUserProceed('cart');
  };

  const handleToggleMenu = () => {
    setOpenModal(!openModal);
    setUserProceed('menu');
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setUserProceed('');
  };

  return (
    <>
      <Header toggleCart={handleToggleCart} openModal={openModal} userProceed={userProceed} toggleMenu={handleToggleMenu}/>
      <main className="mt-24">
        <Outlet />
        {openModal && (
          <Modal
            close={handleCloseModal}
            className={`${userProceed === 'cart' ? 'w-10/12 min-h-52' : 'w-5/12 min-h-[60vh]'} top-0 right-1 lg:right-8 rounded-b-md lg:w-5/12  bg-white`}
          >
            {userProceed === 'cart' && <Cart closeCart ={handleCloseModal}/>}
            {userProceed === 'menu' && <Menu closeMenu={handleCloseModal}/>}
          </Modal>
        )}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
