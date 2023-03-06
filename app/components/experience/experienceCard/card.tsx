import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { FC } from "react";

type Props = {
    title: string;
    position: string;
    period: string;
    description: string;
    shortDescription: string;
};
const ExperienceCard: FC<Props> = ({
    title,
    position,
    period,
    description,
    shortDescription,
}) => {
    return (
        <>
            <Disclosure>
                {({ open }) => (
                    <div
                        className="text-[color:white] flex flex-col justify-center bg-grayColor p-2"
                        style={{ borderRadius: "20px" }}
                    >
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="font-extrabold text-3xl ">
                                {title}
                            </span>
                            <p className="font-extrabold text-xl pt-2">
                                {position}
                            </p>
                            <p className="font-extrabold text-xl pt-2">
                                {period}
                            </p>
                            <p className="text-sm font-normal pt-2">
                                {shortDescription}
                            </p>
                            <ChevronUpIcon
                                className={`${
                                    open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            {description}
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
        </>
    );
};
export default ExperienceCard;
