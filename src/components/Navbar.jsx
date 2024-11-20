import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex gap-4 justify-center mt-3">
           <Link to="/auth/winter" className="btn bg-sky-500 font-semibold text-white">Winter Spacial</Link>
           {
            user && user?.email ? <button onClick={logOut} className="btn bg-green-500 font-semibold text-white">Log-Out</button> : <Link to="/auth/login" className="btn bg-green-500 font-semibold text-white"><CiLogin />Login Here</Link>
           } 
           <Link to="/auth/register" className="btn bg bg-green-500 font-semibold text-white">Register Here</Link> 
           <div>{user && user.email}</div>
        </div>
    );
};

export default Navbar;