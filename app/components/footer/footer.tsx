import linkedIn from "../../../public/images/linkedIn.png";
import gitHub from "../../../public/images/github.png";

const Footer = () => {
    return (
        <div className="flex flex-col items-center pt-10">
            <div className="flex flex-row w-1/5 justify-around pb-5">
                <a href="https://ro.linkedin.com/in/dragos-mateiasi-1784b014a">
                    <img src={linkedIn} alt="..." className="h-10 w-10" />
                </a>
                <a href="https://github.com/mateiasi1?tab=repositories">
                    <img src={gitHub} alt="..." className="h-10 w-10" />
                </a>
            </div>
            <div className="pb-5">
                <p>
                    All rights reserved © Dragoș Mateiași 2023-
                    {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};
export default Footer;
