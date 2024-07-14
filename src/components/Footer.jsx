import { AiOutlineFacebook } from "react-icons/ai";
import Logo from "./UI/Logo";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-slate-200 p-4 flex flex-wrap md:flex-nowrap">
      <div className="w-6/12">
        <Logo />
      </div>
      <div className="w-6/12 ">
        <h3 className="text-lg font-medium text-slate-800">Delivery Time</h3>
        <p className="text-slate-800 font-medium">Sunday - Thursday</p>
        <span className="text-slate-700">10:00am - 11:00pm</span>
        <p className="text-slate-800 font-medium">Friday - Saturday</p>
        <span className="text-slate-700">Off day</span>
      </div>
      <div className="w-6/12">
        <h3 className="text-lg font-medium text-slate-800">Contact</h3>
        <p className="text-slate-800 font-medium">
          Location:
          <span className="text-slate-700 font-normal ml-1">
            3 Armada Way, London, UK
          </span>
        </p>
        <p className="text-slate-800 font-medium">
          Phone:
          <span className="text-slate-700 font-normal ml-1">028 847 3329</span>
        </p>
        <p className="text-slate-800 font-medium">
          Email:
          <span className="text-slate-700 font-normal ml-1">
            example@gmail.com
          </span>
        </p>
      </div>
      <div className="w-6/12">
        <h3 className="text-lg font-medium text-slate-800">Newsletter</h3>
        <span className="text-slate-700">Subscribe our newsletter</span>
        <div className="flex items-center">
          <p className="text-slate-800 font-medium">Follow:</p>
          <AiOutlineFacebook className="text-orange-600 ml-2"/>
          <FaInstagram className="text-orange-600 ml-2"/>
          <CiYoutube className="text-orange-600 ml-2"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
