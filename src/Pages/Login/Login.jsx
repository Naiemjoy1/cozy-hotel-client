import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useAuth from "../../Components/hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // toast.success("Login Successfully");
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        // toast.error("Login Failed Try Again");
      });
  };
  return (
    <div className="min-h-[calc(100vh-246px)] flex justify-center items-center my-10 container mx-auto">
      <div className="w-1/2 ">
        <img
          src="https://i.ibb.co/0BsT0Fy/pexels-vaishnav-devadas-415764-2086676.jpg"
          alt=""
        />
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className=" text-center">
            <p className=" font-robotoslab text-5xl font-light">Welcome Back</p>
            <p className=" font-robotoslab text-xl font-light">cozystay</p>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className=" text-red-600">This field is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className=" relative ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: true,
                })}
              />
              <span
                className=" absolute top-4 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
              </span>
            </div>
            {errors.password && (
              <span className=" text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Login</button>
          </div>
          <p className=" text-center mt-5">
            Don&apos;t have and account?{" "}
            <Link className=" text-primary font-semibold" to="/register">
              Registration
            </Link>
          </p>
          <div className="divider divider-primary">Or continue with</div>
          <SocialLogin></SocialLogin>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
