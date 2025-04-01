import PracticeAreaModal from "./PracticeArea";

const practiceAreasData = [
  {
    id: 1,
    title: "Commercial and Corporate Transactions",
    description:
      " Comprehensive legal support for corporate finance and capital markets.",
    richDescription: [
      "Kenya's rapidly growing economy is driven by a dynamic financial services industry. As regulations evolve, businesses in this sector require sophisticated legal support to navigate compliance challenges and seize emerging opportunities.",
      "At Ngatia Wambugu & Company Advocates, we provide cutting-edge legal solutions in asset-based financing, structured debt and equity transactions, and corporate finance. Our expertise spans the full spectrum of financial players, including equity investors, lenders, banks, insurance firms, and joint ventures.",
      "We stand out for our ability to handle complex transactions with a strategic, end-to-end approach. Our services cover tax advisory, project finance, insolvency, banking, insurance, mergers and acquisitions, real estate, and regulatory compliance. From negotiation and structuring to documentation and legal due diligence, we ensure seamless execution of financial and securities transactions—helping our clients achieve their business objectives with confidence.",
    ],
  },
  {
    id: 2,
    title: "Conveyancing and Real Estate",
    description:
      "Comprehensive legal services for property transactions and disputes.",
    richDescription: [
      "At Ngatia Wambugu & Co. Advocates, we recognize the vital role that land and property play in society. We provide comprehensive legal services in real estate transactions, including drafting and registering charges, mortgages, debentures, and land transfers. Our expertise also covers subdivisions, amalgamations, changes of use, and the registration of cautions and caveats.",
      "Beyond transactions, we offer strategic advice on project structuring, development, financing, regulatory compliance, and construction-related contracts. Whether representing individuals or real estate developers, we leverage our extensive experience to structure, negotiate, and document project and financing agreements—ensuring smooth execution and successful completion tailored to our clients' needs.",
    ],
  },
  {
    id: 3,
    title: "Litigation and Alternative Dispute Resolution",
    description:
      "Strong representation in civil disputes to protect your rights.",
    richDescription: [
      "Ngatia Wambugu & Company Advocates provides comprehensive legal advice and representation across various practice areas. We handle cases in commercial litigation, judicial review, constitutional petitions, intellectual property disputes, procurement, employment and labor matters, insurance litigation, and succession cases.",
      "Beyond litigation, we are committed to delivering practical, cost-effective dispute resolution strategies. Our advocates have extensive experience representing clients before arbitral tribunals and actively promote alternative dispute resolution methods such as arbitration, mediation, negotiation, and conciliation—helping clients achieve efficient and favorable outcomes.",
    ],
  },
  {
    id: 4,
    title: "Intellectual Property Trademarks, Patents and Copyrights",
    description:
      "Safeguard your ideas and creations with our intellectual property services.",
    richDescription: [
      "In today's competitive market, brand visibility is essential to business success. A product's ability to stand out and attract consumers directly impacts its commercial viability. Protecting Intellectual Property (IP) through proper registration and commercialization—such as licensing, merchandising, and distributorship agreements—is vital for businesses seeking a competitive edge.",
      "At Ngatia Wambugu & Company Advocates, we offer a full range of IP services, including the registration of trademarks, patents, utility models, industrial designs, and copyrights. We also handle renewals, assignments, and licensing of IP rights, as well as drafting license agreements and deeds of assignment.",
      "Our team is skilled in prosecuting and litigating IP disputes, helping clients safeguard their rights against infringement, counterfeiting, misappropriation, and unfair competition. With deep market insight, we take a strategic, commercially driven approach that enhances efficiency, minimizes costs, and maximizes protection for our clients’ intellectual assets.",
    ],
  },
  {
    id: 5,
    title: "Employment and Labour Relation",
    description:
      "Protecting employers and employees with expert labor law guidance.",
    richDescription: [
      "At Ngatia Wambugu & Company Advocates, we provide legal representation to both employers and employees in employment disputes. We also offer comprehensive advisory services to corporate entities on all aspects of employment and labor law, including employee contracts, executive compensation, benefit plans, consultancy agreements, and the drafting and review of HR policies.",
      "Renowned for our cutting-edge counsel, we assist clients with severance agreements, stock options, equity, and other incentive compensation plans—key elements in corporate restructuring and investment deals. Additionally, we support businesses across various industries with labor law compliance, developing tailored compliance programs, conducting in-house training, and equipping staff with strategies to minimize legal risks.",
    ],
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
