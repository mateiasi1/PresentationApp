import AboutMe from "./aboutMe";
import logo from "../../../public/images/logo.png";
import { useState } from "react";
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavClick = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <div>
            <nav className="relative flex items-center justify-between flex-wrap text-[color:white] bg-grayColor p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="/" className="flex flex-row items-center">
                        <img src={logo} className="h-12 w-12" />

                        <span className="font-semibold text-xl tracking-tight">
                            Dragoș Mateiași
                        </span>
                    </a>
                </div>
                <section className="MOBILE-MENU flex lg:hidden z-10">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={handleNavClick}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 bg-[color:white]"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 bg-[color:white]"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 bg-[color:white]"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={handleNavClick}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600 text-grayColor"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]  text-grayColor">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/#responsive-header">Blog</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/my-journey">My journey</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/skills">Skills</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/experience">Experience</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto justify-end hidden lg:visible">
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
            <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
        </div>
    );
};

export default Header;
