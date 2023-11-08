import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import SocialLogIn from "../../Components/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result)
        toast.success("Successfully Log In!!");
        // Navigate After Login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="md:w-1/2 mx-auto w-full lg:w-1/3">
      <form onSubmit={handleLoginUser} className="my-20 border p-10 ">
        <h2 className="text-2xl font-bold mb-5">Login Your Account</h2>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-2"
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <input type="checkbox" name="checked" className="mr-2" required />
              <span>Remember Me</span>
            </div>
            <div>
              <Link href="" className="text-[#eb347a] hover:underline">
                Forget Password
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-white w-full p-3  font-semibold"
          >
            Login
          </button>

          <div>
            <span>
              Already have an account?{" "}
              <Link to="/register" className="text-[#eb347a] hover:underline">
                Register
              </Link>
            </span>
          </div>

          <hr />
          <p className="text-center">Or</p>

          <SocialLogIn></SocialLogIn>
        </div>
      </form>
    </div>
  );
};

export default Login;
