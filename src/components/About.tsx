const About = () => {
  return (
    <div id="about" className="flex flex-wrap gap-10 items-center justify-center md:max-w-2xl lg:max-w-6xl mx-2 md:mx-auto mt-4">
      <div className="space-y-4 md:space-y-8">
        <h5 className="uppercase text-3xl lg:text-4xl font-semibold text-center">About Us</h5>
        <h2 className="text-lg md:text-xl lg:text-3xl uppercase font-bold text-center">
          Always make the best decision by choosing us
        </h2> 
        <p className="text-base md:text-lg lg:text-xl">
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
