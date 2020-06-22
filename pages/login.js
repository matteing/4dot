import React, { useState } from "react";
import Logo from "../components/Logo";
import { signInWithTwitter, useFirebaseAuth } from "../utils/firebase";
import Link from "next/link";
import Spinner from "components/Spinner";

const LoginPage = (props) => {
  const [signingIn, setSigningIn] = useState(false);
  const { initializing, user } = useFirebaseAuth();

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm min-w-full">
          <div>
            {signingIn ? <Spinner /> : <Logo />}
            <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
              Sign in to 4dot
            </h2>
            <p className="mt-3 text-gray-600 leading-normal">
              Share what you love, connect with others, and build the ultimate
              inspiration network.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <div className="mt-6">
                  {!initializing && user !== null ? (
                    <div>
                      You're already signed in.{" "}
                      <Link href="/logout">
                        <a className="text-blue-600">Log out</a>
                      </Link>
                    </div>
                  ) : (
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        onClick={(e) => {
                          signInWithTwitter()
                            .then((e) => setSigningIn(false))
                            .catch((e) => setSigningIn(false));
                          setSigningIn(true);
                        }}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>{" "}
                        &nbsp; Sign in with Twitter
                      </button>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginPage;
