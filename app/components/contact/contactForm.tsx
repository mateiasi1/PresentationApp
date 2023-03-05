const ContactForm = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 w-3/4">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
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
                                htmlFor="grid-password"
                            >
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="text"
                                placeholder="example@email.com"
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
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Message
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                placeholder="Message"
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
                    <button className="bg-customTurquiose text-buttonText text-white font-bold py-3 px-5 border border-blue-700 rounded-[4px] border-customTurquiose bg-blue-600 text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex w-full justify-center">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
