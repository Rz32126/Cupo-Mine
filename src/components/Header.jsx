import { MdCardGiftcard } from "react-icons/md";
import { SiHomepage } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { MdPageview } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-around">
           <div className="flex">
             <h1 className="text-sky-600 font-bold text-3xl">Cupo_Mine</h1>
             <p className="text-red-600 font-bold text-3xl mt-1 ml-2"><MdCardGiftcard /></p>
           </div>
           <div className="lg:flex gap-4 font-semibold text-green-500 text-xl">
            <Link to="/" className="btn font-semibold text-green-500 text-xl"><SiHomepage />Home</Link>
            <Link to="/pages" className="btn font-semibold text-green-500 text-xl"><MdPageview />Pages</Link>
            <Link to="/blogs" className="btn font-semibold text-green-500 text-xl"><FaBlog />Blogs</Link>
            <Link to="/support" className="btn font-semibold text-green-500 text-xl"><BiSupport />Support</Link>
           </div>

        </div>
    );
};

export default Header;