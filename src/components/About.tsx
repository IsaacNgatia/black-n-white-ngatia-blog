const About = () => {
  return (
    <div id="about" className="flex flex-wrap gap-10 items-center justify-center md:max-w-2xl lg:max-w-6xl mx-5 md:mx-auto">
      <img
        src="/images/letterhead-logo.jpg"
        alt="about"
        className="w-full md:w-[50%] rounded-sm"
      />
      <div className="space-y-5">
        <h5 className="uppercase text-lg md:text-2xl lg:text-4xl font-semibold">About Us</h5>
        <h2 className="text-lg md:text-xl lg:text-3xl uppercase font-bold">
          Always make the best decision by choosing us
        </h2> 
        <p className="text-justify text-base md:text-lg lg:text-xl">
          A law firm is a professional organization that provides legal services
          to individuals, businesses, and organizations. Our law firm is
          dedicated to providing exceptional legal representation and guidance
          to our clients, with a focus on building long-term relationships and
          delivering results.
        </p>
      </div>
    </div>
  );
};

export default About;
