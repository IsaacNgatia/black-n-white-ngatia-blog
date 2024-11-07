const Hero = () => {
  return (
    <div id="home" className="md:max-w-2xl lg:max-w-6xl mx-5 md:mx-auto lg:space-y-10 space-y-2 md:space-y-5">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl uppercase">
        Welcome to <br />
        <span className="italic text-gray-900">Ngatia Wambugu & Company</span>
      </h1>
      <div className="space-y-3 text-start">
        <p className="text-base md:text-lg lg:text-xl">
          At Ngatia Wambugu & Company, we believe in the power of law to shape
          the future. Our team of dedicated professionals is committed to
          providing exceptional legal services that empower our clients to
          achieve their goals. Whether you're facing a complex legal challenge
          or seeking strategic advice, Ngatia Wambugu & Company is here to guide
          you through every step of the process.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          A boutique law firm located in the prestigious Windsor Golf Hotel &
          Country Club in Nairobi. We specialize in Alternative Dispute
          Resolution, Commercial Law, Personal Injuries & Insurance Law,
          Corporate Law, and Property, Conveyancing, Land, Landlord & Tenant
          Law.
        </p>
      </div>
      <div className="bg-gray-50 rounded-3xl shadow-2xl w-auto mx-auto py-10 px-5 flex flex-col md:flex-row justify-evenly gap-5 h-auto">
        <span className="space-y-4">
          <h2 className="text-lg  md:text-xl lg:text-2xl font-bold">01</h2>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Mission</h2>
          <p className="text-base md:text-lg lg:text-xl">
            Enim officia consequat sit cupidatat excepteur do deserunt
            consectetur in voluptate enim. Occaecat tempor quis reprehenderit ea
            laborum proident aliqua in sunt reprehenderit occaecat ad. Voluptate
          </p>
        </span>
        <div className="h-auto w-full md:w-[1px] bg-gray-400"></div>
        <span className="space-y-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">02</h2>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Vision</h2>
          <p className="text-base md:text-lg lg:text-xl">
            Enim officia consequat sit cupidatat excepteur do deserunt
            consectetur in voluptate enim. Occaecat tempor quis reprehenderit ea
            laborum proident aliqua in sunt reprehenderit occaecat ad. Voluptate
          </p>
        </span>
        <div className="h-auto w-full md:w-[1px] bg-gray-400"></div>
        <span className="space-y-4">
          <h2 className="text-lg  md:text-xl lg:text-2xl font-bold">03</h2>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Core Values
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            Enim officia consequat sit cupidatat excepteur do deserunt
            consectetur in voluptate enim. Occaecat tempor quis reprehenderit ea
            laborum proident aliqua in sunt reprehenderit occaecat ad. Voluptate
          </p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
