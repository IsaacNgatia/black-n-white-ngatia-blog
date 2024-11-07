import PracticeAreaModal from "./PracticeArea";

const practiceAreasData = [
  {
    id: 1,
    title: "Property, Conveyancing, Land Landlord & Tenant Law",
    description:
      "Deserunt do et do eiusmod tempor nisi laboris minim ea ex ullamco velit ...",
    richDescription:
      "Our team of experts specializes in all aspects of property law, including conveyancing, landlord and tenant disputes, and land transactions. We ensure that our clients' interests are protected and their rights are upheld.",
  },
  {
    id: 2,
    title: "Alternative Dispute Resolution",
    description:
      "Deserunt do et do eiusmod tempor nisi laboris minim ea ex ullamco velit ...",
    richDescription:
      "We offer alternative dispute resolution services, including mediation and arbitration, to help clients resolve disputes in a cost-effective and efficient manner. Our experienced team will guide you through the process to achieve a mutually beneficial outcome.",
  },
  {
    id: 3,
    title: "Commercial Law",
    description:
      "Deserunt do et do eiusmod tempor nisi laboris minim ea ex ullamco velit ...",
    richDescription:
      "Our commercial law practice covers a wide range of services, including contract drafting and negotiation, business formation and restructuring, and dispute resolution. We help businesses navigate complex legal issues to achieve their goals.",
  },
  {
    id: 4,
    title: "Corporate Law",
    description:
      "Deserunt do et do eiusmod tempor nisi laboris minim ea ex ullamco velit ...",
    richDescription:
      "Our corporate law team advises on all aspects of corporate law, including company formation, mergers and acquisitions, and corporate governance. We ensure that our clients comply with all relevant regulations and laws.",
  },
  {
    id: 5,
    title: "Personal Injuries & Insurance Law",
    description:
      "Deserunt do et do eiusmod tempor nisi laboris minim ea ex ullamco velit ...",
    richDescription:
      "We specialize in personal injuries and insurance law, providing expert representation to individuals and businesses in claims related to personal injuries, insurance disputes, and workers' compensation. Our goal is to secure fair compensation for our clients.",
  },
];

const PracticeAreas = () => {
  return (
    <div id="practice-areas" className="mx-4 md:max-w-2xl lg:max-w-6xl md:mx-auto bg-black rounded-lg text-white grid grid-cols-1 lg:grid-cols-3 p-8 md:p-10 justify-around space-x-10 gap-8">
      <div className="space-y-7 my-auto lg:max-w-1/4">
        <h2 className="uppercase font-bold text-3xl md:text-4xl">
          Our Practice Areas
        </h2>
        <p className="text-justify text-base md:text-lg">
          Laborum excepteur aute labore reprehenderit eiusmod. Deserunt eiusmod
          esse fugiat sit officia commodo deserunt aliqua irure non mollit. Non
          aliqua laborum aliqua ut culpa id excepteur sit ad culpa ea.
        </p>
        <button
          type="button"
          className="bg-gray-50 p-3 text-base md:text-lg rounded-lg text-black"
        >
          Free Consultation
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2">
        {practiceAreasData.map((area, index) => (
          <div key={index} className="space-y-7">
            <div className="flex items-start justify-center gap-1 cursor-pointer hover:bg-gray-50 hover:text-black lg:p-2 rounded-md">
              <img
                src="/images/tick.png"
                alt={`Area ${index + 1}`}
                className="bg-gray-50 rounded-full size-5 mt-[5px]"
              />
              <PracticeAreaModal practiceArea={area} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeAreas;
