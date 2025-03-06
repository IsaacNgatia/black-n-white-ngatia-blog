import PracticeAreaModal from "./PracticeArea";

const practiceAreasData = [
  {
    id: 1,
    title: "Debt Recovery",
    description:
      "Expert services to recover outstanding debts efficiently and professionally.",
    richDescription:
      "Our team provides comprehensive debt recovery solutions, helping businesses and individuals recover unpaid debts promptly and effectively. We employ proven strategies to ensure compliance with legal requirements while achieving the best outcomes for our clients.",
  },
  {
    id: 2,
    title: "Conveyancing and Real Estate",
    description:
      "Comprehensive legal services for property transactions and disputes.",
    richDescription:
      "Our experts handle all aspects of property law, from conveyancing and real estate transactions to resolving landlord-tenant disputes. We guide clients through the complexities of property law, ensuring their interests are safeguarded at every step.",
  },
  {
    id: 3,
    title: "Alternative Dispute Resolution",
    description:
      "Resolve disputes amicably through mediation and arbitration services.",
    richDescription:
      "We offer cost-effective alternative dispute resolution services, including mediation and arbitration. Our team helps parties navigate conflicts efficiently and reach mutually beneficial agreements, minimizing the need for prolonged litigation.",
  },
  {
    id: 4,
    title: "Intellectual Property",
    description:
      "Safeguard your ideas and creations with our intellectual property services.",
    richDescription:
      "We provide expert advice and representation in all areas of intellectual property, including trademarks, patents, copyrights, and trade secrets. Our services are tailored to protect your innovations and ensure your intellectual assets remain secure.",
  },
  {
    id: 5,
    title: "Employment and Labour",
    description:
      "Protecting employers and employees with expert labor law guidance.",
    richDescription:
      "Our employment and labor law team advises on workplace policies, employment contracts, and dispute resolution. We assist businesses and individuals in navigating complex employment issues while ensuring compliance with labor regulations.",
  },
  {
    id: 6,
    title: "Banking and Finance Services",
    description:
      "Expert legal guidance in banking and finance-related matters.",
    richDescription:
      "We provide comprehensive legal support for banking and financial institutions, including regulatory compliance, loan agreements, and financial restructuring. Our goal is to help clients navigate the complexities of financial law effectively. We also offer top-notch legal advice to banks, financial institutions, and clients involved in securities transactions.We provide comprehensive support for property transactions, including drafting and reviewing agreements, handling disputes, and facilitating conveyancing services. ",
  },
  {
    id: 7,
    title: "Civil Litigation",
    description:
      "Strong representation in civil disputes to protect your rights.",
    richDescription:
      "Our civil litigation team represents clients in a wide range of disputes, including contract disagreements, property issues, and personal injury claims. We focus on achieving fair and just outcomes while safeguarding your legal interests.",
  },
];


const PracticeAreas = () => {
  return (
    <div
      id="practice-areas"
      className="mx-2 md:max-w-2xl lg:max-w-6xl md:mx-auto bg-black rounded-lg text-white grid grid-cols-1 lg:grid-cols-3 p-6 md:p-10 justify-around gap-8"
    >
      <div className="space-y-7 my-auto lg:max-w-1/4">
        <h2 className="uppercase font-bold text-4xl md:text-4xl">
          Our Practice Areas
        </h2>
        <p className="text-justify text-base md:text-lg">
          We specialize in providing comprehensive legal services across a range
          of key practice areas. Explore how we can assist you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-2 lg:gap-4">
        {practiceAreasData.map((area, index) => (
          <div key={index} className="space-y-7">
            <div className="flex items-start justify-center gap-1 cursor-pointer bg-gray-50 text-black hover:bg-black hover:text-gray-50 hover:ring-gray-50 ring-2 hover:shadow-gray-300 hover:shadow-lg lg:p-2 rounded-md">
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
