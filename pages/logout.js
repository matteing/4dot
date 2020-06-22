import React, { Component } from "react";
import Spinner from "components/Spinner";
import Logo from "components/Logo";
import { useFirebaseAuth } from "../utils/firebase";
import { auth } from "utils/firebase";

const LogoutPage = () => {
  const { initializing, user } = useFirebaseAuth();
  auth.signOut();
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          {initializing || user ? (
            <div>
              <Spinner />
              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                Signing you out
              </h2>
              <p className="mt-3 text-gray-600 leading-normal">
                One moment, please...
              </p>
            </div>
          ) : (
            <div>
              <Logo />
              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                Signed out
              </h2>
              <p className="mt-3 text-gray-600 leading-normal">
                All done. Feel free to close the tab.
              </p>
            </div>
          )}
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
export default LogoutPage;
