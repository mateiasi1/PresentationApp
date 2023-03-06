import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="relative">
                <div className="bg-gradient-to-r from-gradientBgFrom to-gradientBgTo h-[350px]"></div>
                <div className="bg-gradient-to-r from-gradientBgFrom clip-path-home to-gradientBgTo h-[250px]"></div>
            </div>
            <main className="min-h-screen absolute top-16 w-full">
                {children}
            </main>
            <Footer />
        </>
    );
}
