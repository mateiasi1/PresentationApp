import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import journey from "../../../public/images/journey.png";
import journeyInactive from "../../../public/images/journey_inactive.png";
import skills from "../../../public/images/skills.png";
import skillsInactive from "../../../public/images/skills_inactive.png";
import experience from "../../../public/images/experience.png";
import experienceInactive from "../../../public/images/experience_inactive.png";

export default function AboutMe() {
    return (
        <div className=" text-right bg-grayColor">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        About me
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-grayColor shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="/my-journey">
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-violet-500 text-white"
                                                    : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {active ? (
                                                <img
                                                    src={journey}
                                                    alt="journey"
                                                    className="h-7 w-6 mr-2"
                                                />
                                            ) : (
                                                <img
                                                    src={journeyInactive}
                                                    alt="journey inactive"
                                                    className="h-7 w-6 mr-2"
                                                />
                                            )}
                                            My journey
                                        </button>
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="/skills">
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-violet-500 text-white"
                                                    : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {active ? (
                                                <img
                                                    src={skills}
                                                    alt="journey"
                                                    className="h-7 w-6 mr-2"
                                                />
                                            ) : (
                                                <img
                                                    src={skillsInactive}
                                                    alt="journey"
                                                    className="h-7 w-6 mr-2"
                                                />
                                            )}
                                            Skills
                                        </button>
                                    </a>
                                )}
                            </Menu.Item>

                            <Menu.Item>
                                {({ active }) => (
                                    <a href="/experience">
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-violet-500 text-white"
                                                    : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {active ? (
                                                <img
                                                    src={experience}
                                                    alt="journey"
                                                    className="h-7 w-7 mr-2"
                                                />
                                            ) : (
                                                <img
                                                    src={experienceInactive}
                                                    alt="journey"
                                                    className="h-7 w-7 mr-2"
                                                />
                                            )}
                                            Experience
                                        </button>
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
