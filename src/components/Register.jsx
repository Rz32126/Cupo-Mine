


import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';

const Register = () => {  
    const { createNewUser, setUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        
        if (password.length < 6) {
            setError({...error, password: "Password must be more than 6 characters"});
            return;
        }

       
        setError({});

        
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

              
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Registration Successful!");
                        navigate("/");
                    })
                    .catch(err => {
                        toast.error("Failed to update profile: " + err.message);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({ general: errorMessage }); 
                toast.error("Registration failed: " + errorMessage);
            });
    }

  
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Logged in with Google!");
                navigate("/");
            })
            .catch(error => {
                toast.error("Google login failed: " + error.message);
            });
    };

    return (
        <div>
            <div className="hero bg-base-200 mt-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-green-300 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="font-bold text-center text-blue-800 text-xl mt-2">Register Here</h1>
                        <div className="mt-6 text-center">
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn bg-gray-300 text-orange-500">
                                <FaGoogle /> Login With Google
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body"> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                {error.password && <label className="label text-red-600">{error.password}</label>}
                            </div>
                            {error.general && <label className="label text-red-600">{error.general}</label>}
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-500">Register</button>
                            </div>
                        </form>
                        <p className="text-center font-semibold mb-3">
                            Already Have an account? 
                            <Link className="text-red-600 ml-2" to="/auth/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
