import Description from "../description/description";

const PresentationText = () => {
    return (
        <div>
            <h1 className="mb-4 leading-none tracking-tight  md:text-5xl lg:text-6xl text-[color:white] font-{800} font-manrope">
                Mateiași Dragoș Ștefan
            </h1>
            <h2 className="text-customTurquiose md:text-2xl lg:text-3xl font-manrope">
                Software Developer
            </h2>
            <Description />
        </div>
    );
};

export default PresentationText;
