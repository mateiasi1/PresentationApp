import AboutMe from "./aboutMe";
import logo from "../../../public/images/logo.png";
const Header = () => {
    return (
        <nav className="relative flex items-center justify-between flex-wrap text-[color:white] bg-grayColor p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a href="/" className="flex flex-row items-center">
                    <img src={logo} className="h-12 w-12" />

                    <span className="font-semibold text-xl tracking-tight">
                        Dragoș Mateiași
                    </span>
                </a>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
                <div>
                    <div className="text-sm flex flex-row items-center">
                        <a
                            href="/contact"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Contact
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Blog
                        </a>
                        <AboutMe />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
