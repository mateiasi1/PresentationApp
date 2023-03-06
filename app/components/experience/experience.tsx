import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import ExperienceCard from "./experienceCard/card";
import tokero from "../../../public/images/tokero.png";
import netrom from "../../../public/images/netrom.png";
import star from "../../../public/images/star.png";

const ExperiencePage = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-[40%] justify-evenly gap-5">
                <ExperienceCard
                    title="TOKERO Crypto Exchange"
                    position="Full stack Web Developer"
                    period="(2022 - 2023)"
                    description="As a Developer
                
                I was working as the only developer on one of the products,
                PrimaCriptomoneda.ro, which is a learning platform containing courses
                meant to help the beginners learn about cryptocurrency and educate
                users for the platform workflows.
                I was also working on an improved version of the above mentioned app, now rebranded as EduElla.ro.
                I was also working on the company’s main application for crypto exchange.
                Other responsibilities
                Mediating the discussions
                between TOKERO and the launchpad projects’ CEOs/CTOs/third party
                team in order to be sure that the tokens transfer and unlocks are made
                correctly.
                "
                    shortDescription="Rewritten a legacy ASP.NET Core application towards a modern tech stack using .Net Core, NextJS and Material UI"
                    logoName={tokero}
                    technologies={[
                        "React",
                        "TypeScript",
                        "SCSS",
                        ".Net Core",
                        "C#",
                        "NextJS",
                        "CSS Modules",
                        "Redux",
                        "Entity Framework Core",
                        "SQL Server",
                        "ASP.NET MVC",
                    ]}
                />
                <ExperienceCard
                    title="Prima Criptomoneda & EduElla"
                    position="Full stack Web Developer"
                    period="(2021 - 2022)"
                    description="As a Developer
                I was working as the only developer on one of the products,
                PrimaCriptomoneda.ro, which is a learning platform containing courses
                meant to help the beginners learn about cryptocurrency and educate
                users for the platform workflows.
                I was also working on an improved version of the above mentioned app, now rebranded as EduElla.ro.
                I was also working on the company’s main application for crypto exchange.
                Other responsibilities
               Mediating the discussions
                between TOKERO and the launchpad projects’ CEOs/CTOs/third party
                team in order to be sure that the tokens transfer and unlocks are made
                correctly.
                "
                    shortDescription="Rewritten a legacy ASP.NET Core application towards a modern tech stack using .Net Core, NextJS and Material UI"
                    logoName={tokero}
                    technologies={[
                        "Material UI",
                        ".Net Core",
                        "C#",
                        "Entity Framework Core",
                        "SQL Server",
                        "React",
                        "TypeScript",
                        "NextJS",
                        "CSS Modules",
                        "React Context",
                    ]}
                />
                <ExperienceCard
                    title="NetRom Client (NDA)"
                    position="Quality Assurance Engineer"
                    period="(2018 - 2021)"
                    description="
                    I developed an automated build system with Jenkins
                    I started developing an installer using WiX Installer
                    I did the management from the QA point of view for 3
                    projects and I improved the project workflow
                    I revised the technical documentation to ensure the compliance and
                    integrity of the application and to reduce the risks by improving the
                    software’s security
                    I designed test scenarios and test cases
                    I created the test data for the scenarios and test cases
                    
                    "
                    shortDescription="Rewritten a legacy ASP.NET Core application towards a modern tech stack using .Net Core, NextJS and Material UI"
                    logoName={netrom}
                    technologies={[
                        "Jira",
                        "Jenkins",
                        "C#",
                        "WiX Installer",
                        "SQL Server",
                    ]}
                />
                <ExperienceCard
                    title="Star Storage"
                    position="Junior Quality Assurance Engineer"
                    period="(2017 - 2018)"
                    description="
                    I did the management from the QA point of view for 2
                    projects and I improved the project workflow
                    I revised the technical documentation to ensure the compliance
                    I designed test scenarios and test cases
                    I created the test data for the scenarios and test cases
                    "
                    shortDescription="Rewritten a legacy ASP.NET Core application towards a modern tech stack using .Net Core, NextJS and Material UI"
                    logoName={star}
                    technologies={[
                        "Jira",
                        "Jenkins",
                        "C#",
                        "WiX Installer",
                        "SQL Server",
                    ]}
                />
            </div>
        </div>
    );
};

export default ExperiencePage;
