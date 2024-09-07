import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import UseAuth from "../../Hooks/UseAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = UseAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const pass = form.get("password");
    console.log(name, photo, email, pass);

    // Checking The Password requirements
    if (pass.length < 6) {
      toast.error("Password Can not be less then 6 charecter", {});
      return;
    } else if (!/[A-Z]/.test(pass)) {
      toast.error("Password must be one UpperCase Charecter", {});
      return;
    } else if (!/[a-z]/.test(pass)) {
      toast.error("Password must be one LowerCase Charecter", {});
      return;
    }

    // Creating The User by Calling The Function
    createUser(email, pass).then(() => {
      e.target.reset();
      toast.success("Register Successfully");
      navigate("/");
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => console.log("Success"))
        .catch((error) => {
          console.error(error);
        })
        .catch((error) => {
          console.error(error);
          toast.error("This Mail Has Already been Used");
        });
    });
  };
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="hero-content mt-16">
          <div className="flex-col w-[600px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Welcome Back To </h2>
              <h1 className="text-5xl font-bold">
                <span className="text-black">Furni</span>{" "}
                <span className="text-blue-500">Flex</span>
              </h1>
              <p className="font-base pt-2">
                Signup For Purchase Your Desire Products
              </p>
            </div>
            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="flex gap-6">
                  {/*First Name */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your First Name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Last Name (Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative form-control ">
                  <input
                    className="input input-bordered"
                    placeholder="Password"
                    type={showPass ? "text" : "password"}
                    name="password"
                    id=""
                    required
                  />
                  <p
                    className="absolute top-4 right-2"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-black text-white">Sign In</button>
                </div>
              </form>
              <div className="divider">OR</div>

              <p className="pb-6 mx-auto">
                Already Have an Account?{" "}
                <NavLink to="/login" className="font-semibold text-blue-600">
                  SignIn
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="max-h-[700px] min-w-[600px] my-24"
            src="https://i.ibb.co/w4hdDPx/vincent-wachowiak-Yh7-HRBSc-ECs-unsplash.jpg"
            alt=""
          />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default Register;
