const Description = () => {
    return(
    <p className="text-[color:white] md:text-sm lg:text-base font-manrope py-5 w-4/5">For more than <span className="lg:text-2xl">{new Date().getFullYear() - new Date("2017-01-01").getFullYear() }</span> years I've been working on improving existing web applications and developing new ones from scratch using the latest technologies. My career started as a Quality Assurance Engineer and in the last <span className="lg:text-2xl">{new Date().getFullYear() - new Date("2021-01-01").getFullYear() }</span> years I've switched sides to the Development Department.</p>
    )
}

export default Description;