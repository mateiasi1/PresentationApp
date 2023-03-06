import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import CardTechnology from "./cardTechnology";

type Props = {
    title: string;
    position: string;
    period: string;
    description: string;
    shortDescription: string;
    logoName: string;
    technologies: string[];
};
const ExperienceCard: FC<Props> = ({
    title,
    position,
    period,
    description,
    shortDescription,
    logoName,
    technologies,
}) => {
    return (
        <>
            <Disclosure>
                {({ open }) => (
                    <div
                        className="text-[color:white] flex flex-col justify-center bg-grayColor p-2"
                        style={{ borderRadius: "20px" }}
                    >
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <span className="font-extrabold text-2xl">
                                        {title}
                                    </span>
                                    <div className="flex flex-col ">
                                        <p className="font-extrabold text-xl">
                                            {position}
                                        </p>
                                        <p className="font-extrabold text-xl pt-2">
                                            {period}
                                        </p>
                                    </div>
                                    <p className="text-sm font-normal">
                                        {shortDescription}
                                    </p>
                                </div>
                                <div className="flex flex-row justify-start flex-wrap gap-2 pt-5 ">
                                    {technologies.map((item) => (
                                        <CardTechnology technologyName={item} />
                                    ))}
                                </div>
                            </div>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div>
                                <div className="flex flex-row justify-center pb-2">
                                    <div className=" w-[200px]">
                                        {logoName && (
                                            <img src={logoName} alt={title} />
                                        )}
                                    </div>
                                </div>
                                {description}
                            </div>
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
        </>
    );
};
export default ExperienceCard;
