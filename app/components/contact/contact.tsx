import ContactForm from "./contactForm";

const ContactPage = () => {
    return (
        <div>
            <h1 className="text-center pt-5 font-bold md:text-lg lg:text-xl ">
                Send me a message
            </h1>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
