import Input from "@/components/input";
import { use, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img src="/images/logo.png" alt="logo" className="h-12" />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                Sign in
              </h2>
              <div className="flex flex-col gap-4">
                <Input
                  id="name"
                  label="Username"
                  value={name}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                />
                <Input
                  id="password"
                  label="Password"
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                />
                <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
                  Login
                </button>
                <p className="text-neutral-500 mt-12">
                  First time using Netflix?
                  <span className="text-white ml-1 hover:underline cursor-pointer">
                    Create new account! 
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Auth;
