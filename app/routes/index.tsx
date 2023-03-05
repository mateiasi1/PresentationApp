import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import EmailButton from "~/components/home/email/emailButton";
import PresentationText from "~/components/home/presentationText/text";
import Layout from "~/components/layout/layout";
import devImage from "../../public/images/background.png";

export default function Index() {
    return (
        // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <div>
            <Layout>
                <div className="bg-gradient-to-r from-gradientBgFrom to-gradientBgTo h-[350px]">
                    <div className=" flex flex-row justify-around min-h-screen py-10 px-10">
                        <div className="h-full w-2/4">
                            <PresentationText />
                        </div>
                        <img
                            src={devImage}
                            alt="..."
                            className="relative z-10"
                        />
                    </div>
                </div>
                <div className="bg-gradient-to-r from-gradientBgFrom clip-path-home to-gradientBgTo h-[250px]">
                    <div className=" flex flex-row justify-around min-h-screen py-10 px-10">
                        <div className="h-full w-2/4">
                            <EmailButton />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
