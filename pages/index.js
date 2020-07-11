import Head from "next/head";
import Logo from "../components/Logo";
import { get } from "lodash";
import withAuthUserInfo from "utils/wrappers/withAuthUserInfo";
import withAuthUser from "utils/wrappers/withAuthUser";
import Link from "next/link";
import UserWall from "features/walls/UserWall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TagBar = () => {
  return (
    <div className="tags p-4 flex flex-row w-full items-center border-b border-gray-200 text-gray-600 gap-4">
      <div>All</div>
      <div>#nature</div>
    </div>
  );
};

const SignedIn = () => {
  return (
    <div className="bg-gray-100">
      <div className="container px-4 flex flex-row bg-white min-h-screen mx-auto border border-t-0 border-b-0 border-gray-200">
        <div className="flex-1 pr-4  pt-4 pb-4"></div>
        <div
          className="flex-none border border-t-0 border-b-0 border-gray-200"
          style={{ minWidth: 800 }}
        >
          <div className="header p-4">
            <h1 className="text-inter-2xl font-extrabold">Home</h1>
          </div>
          <div className="editor bg-gray-100 border-b border-t p-4 flex flex-col ">
            <div>
              <div className="bg-white  inline-flex border rounded-full mb-4">
                <div className="pl-2 pr-2 rounded-full border border-green-600 bg-green-600 text-white mr-2">
                  Completed
                </div>
                <div className="pr-2 rounded-full">To-do</div>
              </div>
            </div>
            editor
          </div>
          <div className="border-b p-4">
            <a
              href="#"
              className="flex-shrink-0 group block focus:outline-none mb-4"
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1234753414762024962/EoVhb0jK_400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="mb-1 text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
                    <span className="underline text-green-700">
                      Sergio Mattei
                    </span>{" "}
                    completed a task in{" "}
                    <span className="underline text-green-700">Makerlog</span>
                  </p>
                  <p className="text-xs leading-4 font-medium text-gray-600 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
                    🔥 100
                  </p>
                </div>
              </div>
            </a>

            <h3 className="text-inter-xl font-semibold leading-normal">
              <span className="text-green-500">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>{" "}
              Did a 7 mile run 🏃‍♂️
            </h3>
            <p className="text-gray-800">
              Today I basically did quite the run, which I really enjoyed...
              Lots of trees!
            </p>
          </div>
        </div>
        <div className="flex-1 pl-4 pt-4 pb-4"></div>
      </div>
    </div>
  );
};

function Home(props) {
  return (
    <div>
      Welcome to 4dot.{" "}
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
}

function Index(props) {
  console.log(props);
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, "AuthUser", null);
  return AuthUser ? <SignedIn /> : <Home />;
}

export default withAuthUser(withAuthUserInfo(Index));
