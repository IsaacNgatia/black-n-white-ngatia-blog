const Hero = () => {
  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-5 md:mx-auto lg:space-y-8 space-y-4 mt-4">
      <h1 className="font-bold text-4xl text-center">
        <span className=" text-gray-900 text-2xl md:text-5xl relative select-none">Ngatia Wambugu & Company<span className="font-medium absolute -top-3 text-3xl">&reg;</span></span>
      </h1>
      <br />
      <div className="space-y-3 text-start ">
        <p className="text-lg">
          At Ngatia Wambugu & Company, we believe in the power of law to shape
          the future. Our team of dedicated professionals is committed to
          providing exceptional legal services that empower our clients to
          achieve their goals. Whether you're facing a complex legal challenge
          or seeking strategic advice, Ngatia Wambugu & Company is here to guide
          you through every step of the process.
        </p>
        <p className="text-lg">
          A boutique law firm located int he prestigious Windsor Golf Hotel &
          Country Club in Nairobi. We specialize in Alternative Dispute
          Resolution, Commercial Law, Personal Injuries & Insuarance Law,
          Corporate Law and Property, Conveyancing, Land Landlord & Tenant Law.
        </p>
      </div>
      <div className="bg-gray-50 rounded-3xl shadow-2xl md:w-full mx-auto py-10 px-5 flex flex-col md:flex-row justify-evenly gap-5 h-auto">
        <span className="space-y-4">
          {/* <h2 className="text-2xl font-bold">01</h2> */}
          <h2 className="text-3xl font-bold">Transactions</h2>
          <p>
            Enim officia consequat sit cupidatat excepteur do deserunt
            consectetur in voluptate enim. Occaecat tempor quis reprehenderit ea
            laborum proident aliqua in sunt reprehenderit occaecat ad. Voluptate
          </p>
        </span>
        <div className="h-auto w-[1px] bg-gray-400"></div>
        <span className="space-y-4">
          {/* <h2 className="text-2xl font-bold">02</h2> */}
          <h2 className="text-3xl font-bold">Litigation</h2>
          <p>
            Enim officia consequat sit cupidatat excepteur do deserunt
            consectetur in voluptate enim. Occaecat tempor quis reprehenderit ea
            laborum proident aliqua in sunt reprehenderit occaecat ad. Voluptate
          </p>
        </span>
        <div className="h-auto w-[1px] bg-gray-400"></div>
        <span className="space-y-4">
          {/* <h2 className="text-2xl font-bold">03</h2> */}
          <h2 className="text-3xl font-bold">Converyancing</h2>
          <p>
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
