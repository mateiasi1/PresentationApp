const EmailButton = () => {
    return (
        <a href="/contact">
            <button className="bg-customTurquiose text-buttonText text-white font-bold py-3 px-5 border border-blue-700 rounded-[4px] border-customTurquiose bg-blue-600 text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex">
                Contact me
            </button>
        </a>
    );
};
export default EmailButton;
