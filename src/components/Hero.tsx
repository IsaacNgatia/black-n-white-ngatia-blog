const Hero = () => {
 const mainPracticeAreas = [
   {
     id: 1,
     title: "Corporate and Commercial Transactions",
     description:
       "At Ngatia Wambugu & Company Advocates we boasts vast experience in providing advice to different institutions regarding complex commercial transactions. This ranges from ascertaining compliance with the relevant regulatory avenues to drafting registration paperwork for business formation as well as legal representation. Our team ensures smooth and legally sound processes for buying, selling, or leasing properties.",
   },
   {
     id: 2,
     title: "Real Estate & Conveyancing",
     description:
       " We have a vast and diverse portfolio of real estate and commercial lending matters across numerous sectors throughout the country. We are proud to offer counsel and representation to all parties involved in the real estate and financing industry, including vendors, lenders, buyers, proprietors, property managers, and tenants.",
   },
   {
     id: 3,
     title: "Litigation and Dispute Resolution",
     description:
       "We understand that litigation should be the last card. However, where we find no other solutions, then we proceed with litigation all the same. We strive to settle matters under Alternative Dispute Resolution to amicably get off  unnecessary costs.",
   },
 ];

  return (
    <div className="lg:max-w-6xl md:max-w-2xl mx-5 md:mx-auto lg:space-y-8 space-y-4 mt-4">
      <h1 className="font-bold text-4xl text-center">
        <span className=" text-gray-900 text-2xl md:text-5xl relative select-none">
          Ngatia Wambugu & Company
          <span className="font-medium absolute -top-3 text-3xl">&reg;</span>
        </span>
      </h1>
      <br />
      <div className="space-y-3 text-start ">
        <p className="text-lg">
          At Ngatia Wambugu & Company Advocates we strive to provide dedicated
          and exceptional legal services to our clients. Our mission is to
          deliver practicable solutions that meet the unique need of each
          client, with a personal touch deeply rooted in professionalism and
          respect for our clients with the aim of achieving successful outcomes.
          You can trust our seasoned professionals at Ngatia Wambugu & Company
          Advocates to provide the highest level of service to meet your needs.
        </p>
        <p className="text-lg">
          Ngatia Wambugu & Company Advocates is a full-service law firm
          established in 2019 with a strong focus on Civil Litigation,
          Employment & Labour Law, Dispute Resolution and Corporate & Commercial
          Transactions. With a dedicated team of advocates, lawyers and support
          staff, the firm has consistently been able to provide effective legal
          services that suit our clients needs.
        </p>
      </div>
      <div className="bg-gray-50 rounded-3xl shadow-2xl md:w-full mx-auto pt-4">
        <h3 className="text-4xl font-semibold text-center">
          Major Practice Areas
        </h3>
        <div className=" py-10 px-5 flex flex-col md:flex-row justify-evenly gap-5 h-auto">
          {mainPracticeAreas.map((practiceArea, index) => (
            <>
              <span key={practiceArea.id} className="space-y-4 size-1/3 grow-0">
                <h2 className="text-3xl font-bold">{practiceArea.title}</h2>
                <p className="text-justify">{practiceArea.description}</p>
              </span>
              {index !== mainPracticeAreas.length - 1 && (
                <div className="h-auto w-[1px] bg-gray-400"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
