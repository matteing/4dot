import Head from "next/head";
import Logo from "../components/Logo";
import { get } from "lodash";
import withAuthUserInfo from "utils/wrappers/withAuthUserInfo";
import withAuthUser from "utils/wrappers/withAuthUser";
import Link from "next/link";
import UserWall from "features/walls/UserWall";

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
    <div>
      <div className="navbar p-4 flex flex-row w-full items-center border-b border-gray-200">
        <div>
          <Logo />
        </div>
        <div className="flex-grow"></div>
        <div className="nav flex justify-center flex-row cursor-pointer">
          <div className="font-bold mr-2">You</div>
          <div className="text-gray-500">Everyone</div>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-black hover:bg-black-500 focus:outline-none focus:border-black focus:shadow-outline-green active:bg-black transition ease-in-out duration-150"
          >
            New dot
          </button>
        </div>
      </div>

      <div className="p-4 bg-gray-100 min-h-screen">
        <UserWall />
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
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, "AuthUser", null);
  return AuthUser ? <SignedIn /> : <Home />;
}

export default withAuthUser(withAuthUserInfo(Index));
