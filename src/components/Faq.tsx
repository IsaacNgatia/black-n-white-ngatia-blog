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
    <div
      id="faq"
      className="md:max-w-2xl lg:max-w-6xl w-full md:mx-auto p-2 lg:p-5 bg-gray-50 flex flex-col-reverse justify-center items-start space-y-10 md:flex-row md:justify-around md:items-start mt-4"
    >
      <div className="space-y-10 mx-2 md:mx-0">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold hidden md:block">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
          Is your issue not covered on the list?
        </p>
        <div className="space-y-5">
          <span className="flex items-center gap-3">
            <img
              src="/images/customer-service-avatar-male.svg"
              alt="customer service"
              className="w-10 h-10 md:w-16 md:h-16"
            />
            <span>
              <h5>Ready to help</h5>
              <h3 className="font-bold">Billy</h3>
            </span>
          </span>
          <span className="flex items-center gap-3">
            <img
              src="/images/call-us.svg"
              alt="call us"
              className="w-10 h-10 md:w-16 md:h-16"
            />
            <span>
              <h5>Give us a call</h5>
              <a href="tel:+254726395910" className="font-bold">
                (254) 726 395 910
              </a>
            </span>
          </span>
          <span className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-whatsapp w-7 h-7 md:w-10 md:h-10"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            {/* <img src="/images/mail-us.svg" alt="mail us" className="w-10 h-10 md:w-16 md:h-16" /> */}
            <span>
              <h5>Whatsapp Us</h5>
              <a
                className="font-bold"
                href="https://wa.me/+254726395910"
                target="_blank"
                rel="noopener noreferrer"
              >
                +254726395910
              </a>
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
        <h1 className="text-lg font-bold md:hidden">
          Frequently Asked Questions
        </h1>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            onClick={() => handleOnClick(faq.id)}
            className="bg-[#f1f1f1] py-2 md:py-5 px-5 md:px-10 rounded-lg cursor-pointer space-y-5"
          >
            <span className="flex justify-between">
              <h2 className="text-base md:text-lg lg:text-xl font-bold">
                {faq.question}
              </h2>
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
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                maxHeight: isOpen ? "1000px" : "0",
                opacity: isOpen ? 1 : 0,
                marginTop: isOpen ? "1.25rem" : "0",
              }}
              // className={`overflow-hidden transition-all duration-1000 ${
              //   activeIndex === faq.id && isOpen ? "max-h-96" : "max-h-0"
              // }`}
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
