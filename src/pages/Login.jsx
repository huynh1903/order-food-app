import { Link } from "react-router-dom";
import Banner from "../components/UI/Banner";
import Button from "../components/UI/Button";
import title from "../utils/title";

const LoginPage = () => {
  title("Login");
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
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="px-3 py-2 text-slate-800 focus-visible:outline-none"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex justify-center">
              <Button>Login</Button>
            </div>
          </form>
        </div>
        <Link to='../register' className="underline text-slate-700 hover:text-blue-600 ease-in duration-150">
          Don't have an account? Create now!
        </Link>
      </section>
    </>
  );
};

export default LoginPage;
