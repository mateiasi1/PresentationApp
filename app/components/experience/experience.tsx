import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import ExperienceCard from "./experienceCard/card";

const ExperiencePage = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-[80%] justify-evenly">
                <ExperienceCard
                    title="TOKERO Crypto Exchange"
                    position="Full stack Web Developer"
                    period="(2021 - 2023)"
                    description="<p>As a Developer</p>
                <ul>
                <li>I was working as the only developer on one of the products,
                PrimaCriptomoneda.ro, which is a learning platform containing courses
                meant to help the beginners learn about cryptocurrency and educate
                users for the platform workflows.</li>
                <li>I was also working on an improved version of the above mentioned app, now rebranded as EduElla.ro.</li>
                <li>I was also working on the company’s main application for crypto exchange.</li>
                </ul>
                <p>Other responsibilities</p>
                <ul><li>Mediating the discussions
                between TOKERO and the launchpad projects’ CEOs/CTOs/third party
                team in order to be sure that the tokens transfer and unlocks are made
                correctly.<li>
                </ul>
                "
                    shortDescription="Rewritten a legacy ASP.NET Core application towards a modern tech stack using .Net Core, NextJS and Material UI"
                />
                {/* <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2"></div>
            </div> */}
            </div>
        </div>
    );
};

export default ExperiencePage;
