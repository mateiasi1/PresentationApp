import skillsPage from "../../../../public/images/skills-page.png";
import SkillTab from "./skillTab";

const SkillsPage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-around pt-10 px-10">
                <div
                    style={{ width: "60%" }}
                    className="flex flex-col justify-center"
                >
                    <p className="mb-4 leading-none tracking-tight  md:text-4xl lg:text-5xl font-{800} font-manrope  px-7 pt-8 text-[color:white]">
                        What technologies have I worked with?
                    </p>
                    <p className="flex justify-center mb-4 leading-none tracking-tight  md:text-4xl lg:text-5xl font-{800} font-manrope px-7 text-homeTextInsideRadiusColor rounded-homeTextRadius bg-[color:white] bg-opacity-100 p-2 w-3/4">
                        Check my skills below
                    </p>
                </div>
                <div style={{ width: "40%" }} className="flex justify-center">
                    <img src={skillsPage} alt="journey" />
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <SkillTab />
            </div>
        </div>
    );
};
export default SkillsPage;
