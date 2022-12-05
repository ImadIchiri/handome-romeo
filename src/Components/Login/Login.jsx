import { signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleImage from "../../assets/images/googleBrand.png";
import { useAuthContext } from "../../Context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { logUserIn } = useAuthContext();
  const navigate = useNavigate();

  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate(redirectPath, { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await logUserIn(email, password);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh_-_100px)] bg-white items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-4">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
            Log in to your account
          </h2>
          <div className="mt-4 flex justify-center">
            <button
              onClick={loginWithGoogle}
              className="flex justify-center items-center py-1 border border-gray-300 w-full"
            >
              <img
                className="w-10 object-cover cursor-pointer mr-3"
                src={GoogleImage}
                alt=""
              />
              <span className="text-xl">Continue with google</span>
            </button>
          </div>
        </div>
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
          {error ? (
            <div>
              <h2 className="text-center text-white bg-red-500 py-1">
                {error}
              </h2>
            </div>
          ) : null}
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mb-3 relative block w-full text-xl appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-mainColor focus:outline-none"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full text-xl appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-mainColor focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center border border-transparent bg-secondaryColor opacity-90 py-2 px-4 text-sm font-medium text-white hover:opacity-100 focus:outline-none focus:ring-2 focus:opacity-100 focus:ring-offset-2"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-base text-gray-600">
          Do not have an account?
          <Link
            to="/register"
            className="mx-2 underline hover:text-secondaryColor"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
