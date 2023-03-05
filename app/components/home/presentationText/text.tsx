import Description from "../description/description";

const PresentationText = () => {
    return (
        <div>
            <h1 className="mb-4 leading-none tracking-tight  md:text-5xl lg:text-6xl text-[color:white] font-{800} font-manrope relative z-10">
                Mateiași Dragoș Ștefan
            </h1>
            <h2 className="text-customTurquiose md:text-2xl lg:text-3xl font-manrope pt-4">
                Software{" "}
                <span className="text-homeTextInsideRadiusColor rounded-homeTextRadius bg-homeTextRadiusColor bg-opacity-100 p-2">
                    Developer
                </span>
            </h2>
            <Description />
        </div>
    );
};

export default PresentationText;
