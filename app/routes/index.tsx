import Header from "~/components/header/header";
import devImage from "../../public/images/background.jpg";

export default function Index() {
  return (
    // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <div>
      <img src={devImage} alt="..."  className="absolute"/>
   <Header />
    </div>
  );
}
