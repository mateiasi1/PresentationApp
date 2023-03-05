import skillsPage from "../../../../public/images/skills-page.png";
import SkillTab from "./skillTab";

const SkillsPage = () => {
    return (
        <div className="flex flex-row justify-around">
            <div className="w-3/4">
                <p className="mb-4 leading-none tracking-tight  md:text-4xl lg:text-5xl font-{800} font-manrope  px-7 pt-8">
                    What technologies have I worked with?
                </p>
                <p className="flex justify-center mb-4 leading-none tracking-tight  md:text-4xl lg:text-5xl font-{800} font-manrope px-7 text-homeTextRadiusColor rounded-homeTextRadius bg-homeTextInsideRadiusColor bg-opacity-100 p-2 w-3/4">
                    Check my skills below
                </p>
                <SkillTab />
            </div>
            <img src={skillsPage} alt="journey" className="w-1/4" />
        </div>
    );
};
export default SkillsPage;
