import { useState } from "react";

const ContactForm = () => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubjectChange = (event: any) => {
        setSubject(event.target.value);
    };

    const handleMessageChange = (event: any) => {
        setMessage(event.target.value);
    };
    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handleSubmit = async (event: any) => {};

    return (
        <div className="flex flex-row justify-center">
            <div
                className="max-w-sm overflow-hidden shadow-lg p-5 w-3/4 bg-[color:white]"
                style={{ borderRadius: 20 }}
            >
                <form className="w-full max-w-lg ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-name"
                            >
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-name"
                                type="text"
                                placeholder="Jane"
                                required
                                onChange={handleNameChange}
                            />
                            <p className="text-red-500 text-xs italic">
                                Please fill out this field.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-email"
                            >
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email"
                                type="email"
                                autoComplete="email"
                                placeholder="example@email.com"
                                required
                                onChange={handleEmailChange}
                            />
                            <p className="text-gray-600 text-xs italic">
                                Review the email and assure it's in a correct
                                format
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Subject
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="text"
                                placeholder="Frontend project collaboration"
                                required
                                onChange={handleSubjectChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-message"
                            >
                                Message
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-message"
                                placeholder="Message"
                                required
                                onChange={handleMessageChange}
                            />
                            <p className="text-gray-600 text-xs italic">
                                Make it as long and as crazy as you'd like
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-xs italic pb-2">
                        By clicking below, you are agreeing to share the above
                        details with Dragoș Mateiași.
                    </p>
                    <button
                        type="submit"
                        className="bg-customTurquiose text-buttonText text-white font-bold py-3 px-5 border border-blue-700 rounded-[4px] border-customTurquiose bg-blue-600 text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex w-full justify-center"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
