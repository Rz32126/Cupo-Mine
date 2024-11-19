import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="flex gap-4 justify-center mt-3">
           <div className="btn bg-sky-500 font-semibold text-white">Winter Spacial</div>
           <div className="btn bg-green-500 font-semibold text-white"><CiLogin />Login Here</div> 
           <div className="btn bg bg-green-500 font-semibold text-white">Register Here</div> 
        </div>
    );
};

export default Navbar;