import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const[error,setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
        userLogin(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");

        })
        .catch((err) => {
            setError({...error , login: err.code})
        });
    };
    return (
        <div>
            <div className="hero bg-base-200 mt-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-green-400 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <h1 className="font-bold text-center text-blue-800 text-xl">Login Here</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password"
           type={showPassword ? 'text' : 'password'}
            placeholder="password" className="input input-bordered" required />
          <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-5 top-12">
          {
            showPassword ? <FaRegEyeSlash /> : <FaEye></FaEye>
          }
          </button>
          {
            error.login && <label className="label text-red-600">
            {error.login}
          </label>
          }
          <label className="label">
            <Link to="/auth/forget " className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-sky-500">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold mb-3">Don't Have Account.<Link className="text-red-600 ml-2" to="/auth/register">Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;