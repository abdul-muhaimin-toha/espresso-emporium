import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const SignUpPage = () => {
  const [passIsVisible, setPassIsVisible] = useState(false);
  const { createNewUser, googleLogIn, gitHubLogIn } = useAuth();
  const handlePassVisible = () => {
    setPassIsVisible(!passIsVisible);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        fetch("https://espresso-emporium-server-green-xi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            creationTime: user.metadata.creationTime,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        e.target.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch("https://espresso-emporium-server-green-xi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            creationTime: user.metadata.creationTime,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const handleGitHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch("https://espresso-emporium-server-green-xi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            creationTime: user.metadata.creationTime,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <section className="bg-sign-up-background bg-cover">
      <div className="bg-gradient-to-b from-[#222222bd] to-[#222222be] ">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex items-center justify-center py-20">
            <div className="w-full rounded bg-black bg-opacity-60 p-6 shadow-2xl md:w-2/3 md:px-12 md:py-10 lg:w-1/2">
              <h3 className="mb-12 text-4xl font-bold text-primary md:text-5xl">
                Sign Up Now!
              </h3>
              <p></p>
              <form onSubmit={handleFormSubmit} className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-8 border p-4"
                  name="email"
                />
                <div className="relative">
                  <input
                    type={passIsVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className=" w-full border p-4"
                    name="password"
                  />
                  <div
                    onClick={handlePassVisible}
                    className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-primary"
                  >
                    {passIsVisible ? <LuEye /> : <LuEyeOff />}
                  </div>
                </div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="mt-8 cursor-pointer rounded-md bg-primary p-3 font-bold text-black "
                />
              </form>
              <div className="mt-8 flex flex-col gap-3 md:flex-row">
                <button
                  onClick={handleGoogleLogIn}
                  className="w-full rounded-md border-2 border-primary p-3 font-bold text-primary md:w-1/2"
                >
                  Join With Google
                </button>
                <button
                  onClick={handleGitHubLogIn}
                  className="w-full rounded-md border-2 border-primary p-3 font-bold text-primary md:w-1/2"
                >
                  Join With Github
                </button>
              </div>
              <p className="mt-8 text-center font-bold text-white">
                Already have an account?{" "}
                <Link
                  to="/log-in"
                  className="ml-2 text-primary hover:underline"
                >
                  Log In Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
