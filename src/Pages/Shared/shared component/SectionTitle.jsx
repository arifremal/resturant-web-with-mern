const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 my-8 mx-auto">
            <p className="text-yellow-500 text-center mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase text-center border-y-2 py-2 border-yellow-500" >{heading}</h3>
        </div>
    );
};

export default SectionTitle;