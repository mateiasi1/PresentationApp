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
                <div className="bg-gradient-to-r from-gradientBgFrom to-gradientBgTo">
                    <div className=" flex flex-row justify-around min-h-screen py-10 px-10">
                        <div className="h-full w-2/4">
                            <PresentationText />
                            <EmailButton />
                        </div>
                        <img src={devImage} alt="..." className="" />
                    </div>
                </div>
            </Layout>
        </div>
    );
}
