import { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};
const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (id: number) => {
    if (id === activeIndex) {
      setIsOpen(!isOpen);
    } else {
      setActiveIndex(id);
      setIsOpen(true);
    }
  };
  return (
    <div id="faq" className="md:max-w-2xl lg:max-w-6xl w-full md:mx-auto p-2 lg:p-5 bg-gray-50 flex flex-col-reverse justify-center items-center space-y-10 md:flex-row md:justify-around md:items-start">
      <div className="space-y-10">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold hidden md:block">Frequently Asked Questions</h1>
        <p className="text-base md:text-lg lg:text-xl">Is your issue not covered on the list?</p>
        <div className="space-y-5">
          <span className="flex items-center gap-3">
            <img
              src="/images/customer-service-avatar.svg"
              alt="customer service"
              className="w-10 h-10 md:w-16 md:h-16"
            />
            <span>
              <h5>Ready to help</h5>
              <h3 className="font-bold">Faith</h3>
            </span>
          </span>
          <span className="flex items-center gap-3">
            <img src="/images/call-us.svg" alt="call us" className="w-10 h-10 md:w-16 md:h-16" />
            <span>
              <h5>Give us a call</h5>
              <h3 className="font-bold">(254) 712 123 234</h3>
            </span>
          </span>
          <span className="flex items-center gap-3">
            <img src="/images/mail-us.svg" alt="mail us" className="w-10 h-10 md:w-16 md:h-16" />
            <span>
              <h5>Send us an email</h5>
              <h3 className="font-bold">info@ngatia.co.ke</h3>
            </span>
          </span>
        </div>
        <button
          type="button"
          className="bg-black p-3 rounded-md text-[#f1f1f1] text-sm md:text-base"
        >
          Enquire Now
        </button>
      </div>
      <div className="space-y-2 w-full md:w-[50%]">
      <h1 className="text-lg md:text-xl lg:text-3xl font-bold md:hidden">Frequently Asked Questions</h1>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            onClick={() => handleOnClick(faq.id)}
            className="bg-[#f1f1f1] py-2 md:py-5 px-5 md:px-10 rounded-lg cursor-pointer space-y-5"
          >
            <span className="flex justify-between">
              <h2 className="text-base md:text-lg lg:text-xl font-bold">{faq.question}</h2>
              {activeIndex === faq.id && isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </span>
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                activeIndex === faq.id && isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {activeIndex === faq.id && isOpen && (
                <p className="text-sm md:text-base lg:text-lg text-start transition-all duration-1500">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
const faqs: FAQ[] = [
  {
    id: 1,
    question: "What are the legal services you provide?",
    answer:
      "We provide a wide range of legal services including property law, conveyancing, landlord & tenant law, alternative dispute resolution, commercial law, corporate law, personal injuries & insurance law.",
  },
  {
    id: 2,
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by filling out the contact form on our website or by calling our office during business hours.",
  },
  {
    id: 3,
    question: "What are your fees?",
    answer:
      "Our fees vary depending on the type of service you require. We offer a free initial consultation to discuss your needs and provide a quote.",
  },
  {
    id: 4,
    question: "How long have you been in business?",
    answer:
      "We have been in business for over 20 years, serving the legal needs of our community.",
  },
  {
    id: 5,
    question: "Do you offer pro bono services?",
    answer:
      "We are committed to serving our community and offer pro bono services on a case-by-case basis.",
  },
];
