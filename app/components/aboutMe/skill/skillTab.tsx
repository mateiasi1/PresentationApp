import remix from "../../../../public/images/remix.ico";
import nextJS from "../../../../public/images/nextJs.png";
import typescript from "../../../../public/images/typescript.png";
import react from "../../../../public/images/react.png";
import tailwind from "../../../../public/images/tailwind.svg";
import javascript from "../../../../public/images/javascript.png";
import ssms from "../../../../public/images/ssms.png";
import netCore from "../../../../public/images/netCore.png";
import cSharp from "../../../../public/images/CSharp.png";
import jira from "../../../../public/images/jira.png";
import materialUI from "../../../../public/images/materialUI.png";

const SkillTab = () => {
    return (
        <div className="flex flex-row w-full justify-evenly">
            <div
                className="rounded overflow-hidden shadow-lg p-6  text-[color:white] flex flex-col justify-center bg-grayColor"
                style={{ borderRadius: 20, width: "60%" }}
            >
                <div>
                    <p>Primary</p>
                    <p>
                        Skills that I'm further improving and I'm looking
                        forward to working with in the future
                    </p>
                </div>
                <div>
                    <div className="pt-5 flex flex-row gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={remix}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">Remix</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="beginner"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "20%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={nextJS}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">Next JS</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="intermediate"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "60%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 flex flex-row gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={typescript}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">Typescript</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="proficient"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "90%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={react}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">React</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="proficient"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "90%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 flex flex-row gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={tailwind}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">Tailwind</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="intermediate"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "60%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={javascript}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">Javascript</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="intermediate"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "80%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 flex flex-row gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={ssms}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">SSMS</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="intermediate"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "80%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={react}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">React Native</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="beginner"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "30%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 flex flex-row gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={materialUI}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">Material UI</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="proficient"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "80%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={jira}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">Jira</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="proficient"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "80%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="rounded overflow-hidden shadow-lg p-6 w-1/2 text-[color:white] flex flex-col  bg-grayColor"
                style={{ borderRadius: 20, width: "30%" }}
            >
                <div>
                    <p>Legacy</p>
                    <p>
                        Skills that I've accumulated over the years and I'm not
                        looking to further improve or work with in the future
                    </p>
                </div>
                <div>
                    <div className="pt-5 flex flex-row gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={ssms}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">SSMS</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="intermediate"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "70%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={netCore}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">.Net Core</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="proficient"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "80%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 flex flex-row gap-4">
                        <div className="w-1/2">
                            <div className="flex flex-row items-center">
                                <img
                                    src={cSharp}
                                    alt="journey"
                                    className="h-8 w-8"
                                />
                                <p className="pl-2">C#</p>
                            </div>
                            <div
                                className="col-span-2 w-full border border-slate-700 bg-slate-200 h-4 mt-2"
                                title="proficient"
                                style={{ borderRadius: 20 }}
                            >
                                <div
                                    className="h-full  bg-customTurquiose scale-x-100"
                                    style={{
                                        width: "80%",
                                        borderRadius: 20,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillTab;
