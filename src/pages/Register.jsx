import React from "react";
import title from "../utils/title";
import Banner from "../components/UI/Banner";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  title("Resgiter");
  return (
    <>
      <Banner name="Login" />
      <section className="flex flex-col items-center justify-center py-8 gap-6">
        <div className="w-11/12 flex justify-center">
          <form
            className="w-full md:w-7/12 lg:w-5/12 p-6 rounded bg-slate-200 shadow shadow-slate-200 flex flex-col gap-4"
            action=""
          >
            <input
              className="px-3 py-2 text-slate-800 focus-visible:outline-none"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="px-3 py-2 text-slate-800 focus-visible:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="px-3 py-2 text-slate-800 focus-visible:outline-none"
              type="password"
              placeholder="Enter your password"
            />
            <input
              className="px-3 py-2 text-slate-800 focus-visible:outline-none"
              type="password"
              placeholder="Confirm password"
            />
            <div className="flex justify-center">
              <Button>Resgiter</Button>
            </div>
          </form>
        </div>
        <Link to='../login' className="underline text-slate-700 hover:text-blue-600 ease-in duration-150">
          Already have an account? Go to login
        </Link>
      </section>
    </>
  );
};

export default RegisterPage;
