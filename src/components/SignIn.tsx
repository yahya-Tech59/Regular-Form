import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }

    if (password.length < 4) {
      setErrors({ ...errors, password: "password must be at least 4 chars" });
      return;
    }

    console.log("form Submitted");
  };

  return (
    <div className="flex ml-80">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col ml-[16rem] mr-80 mb-12 mt-28 gap-1 bg-white shadow-slate-300 shadow-sm w-[35rem] h-[40rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div>
            <h2 className="text-3xl ml-48">Sign In</h2>
            <h2 className="text-lg ml-32 mt-2">Sign In to stay Connected</h2>
          </div>

          <div className="flex flex-col mt-4 gap-5">
            <div>
              <span className="flex flex-col gap-1">
                <label>Email </label>
                <input
                  type="text"
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[30rem]"
                  placeholder="xyz@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              {errors.email && (
                <p className="text-red-400 ml-2">{errors.email}</p>
              )}
            </div>

            <div>
              <span className="flex flex-col gap-1">
                <label>Password</label>
                <input
                  type="password"
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[30rem]"
                  placeholder="xxxxxx"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
              {errors.password && (
                <p className="text-red-400 ml-2">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex mt-6 gap-4 ">
            <input type="checkbox" />
            <p>Remember Me ?</p>
            <a className="text-sky-600 ml-[12rem]">Forget Password</a>
          </div>
          <button
            type="submit"
            className="p-1 mr-1 rounded-lg w-28 h-12 ml-48 mt-10 bg-blue-700 text-white text-xl"
          >
            Sign In
          </button>
        </div>

        <div className="flex flex-col">
          <h2 className="relative bottom-10 text-center">
            or Sign In with other Account?
          </h2>

          <div className="flex justify-center gap-3 ">
            <FcGoogle />
            <FaFacebook />
            <FaInstagramSquare />
            <AiFillLinkedin />
          </div>
        </div>
      </form>
    </div>
  );
};
