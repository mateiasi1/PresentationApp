import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
