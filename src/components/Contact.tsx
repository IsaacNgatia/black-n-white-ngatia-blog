import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+254");
  const [message, setMessage] = useState("");
  const [businessStatus, setBusinessStatus] = useState([]);
  const [businessIsOpen, setBusinessIsOpen] = useState(0)
  const [submittingForm, setSubmittingForm] = useState(false)


  const fetchBusinessStatus = async() => {
    const businessStatusRes = await axios.get('https://node.ngatia.co.ke/api/business-status');
    
    setBusinessStatus(businessStatusRes.data.message);
    if (businessStatusRes.data.status === "open") {
      setBusinessIsOpen(1);
    }
  }
  useEffect(() => { 
    fetchBusinessStatus();
  },[])
  const handleOnClick = (id: number) => {
    setActiveIndex(id);
    setIsOpen(true);
  };
  async function submitContact() {
    setSubmittingForm(true);
    const submitForm = await axios.post(
      "http://node.ngatia.co.ke/api/send-email",
      {
        to: email,
        name: name,
        message: message,
        phone: phone,
      }
    );
    if (submitForm.data.status === 'success') {
      alert('Your message has been sent successfully');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      alert('Failed to send your message. Please try again later.');
    }
    
    setSubmittingForm(false);
  }
  
  return (
    <div
      id="contact"
      className="bg-gray-50 mx-2 md:mx-auto md:max-w-2xl lg:max-w-6xl w-full md:p-5 lg:p-10 space-y-5 md:space-y-10"
    >
      <h5 className=" text-3xl md:text-4xl font-semibold text-center">
        Contact
      </h5>
      <div>
        <h2 className="font-bold text-2xl md:text-3xl text-center">
          Visit Us In Person
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-center">
          For personalized legal guidance and in-depth consultations, we invite
          you to visit our offices. Our team is ready to assist you with your
          legal needs.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9286569166397!2d36.8486340758809!3d-1.2099906355493772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3de7a6093c2d%3A0x6b5386718ea0acfa!2sWindsor%20Golf%20Hotel%20%26%20Country%20Club!5e0!3m2!1ssw!2ske!4v1715255692768!5m2!1ssw!2ske"
            width="100%"
            height="575"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-2xl"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9263550189967!2d36.74464877590317!3d-1.2115550355509472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f23e201e9164d%3A0xeb5aee215a2d18ec!2sFANISI%20HEIGHTS%20KARURA!5e0!3m2!1sen!2ske!4v1741181415879!5m2!1sen!2ske"
            width="100%"
            height="575"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-2xl"
          ></iframe>
        </div>
        <div className="space-y-2 w-full lg:w-[50%]">
          <div
            onClick={() => handleOnClick(1)}
            className="bg-[#f1f1f1] py-5 px-10 rounded-lg space-y-5  "
          >
            <span className="flex justify-between items-center cursor-pointer">
              <h2 className="text-2xl font-bold">Location</h2>
              {activeIndex === 1 && isOpen ? (
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
                activeIndex === 1 && isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {activeIndex === 1 && isOpen ? (
                <div className="text-start transition-all duration-200 ease-out flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span>
                    <a
                      href="https://maps.app.goo.gl/iZ75eBHH1ikX7GKH9"
                      target="_blank"
                      className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    >
                      FANISI HEIGHTS KARURA
                    </a>
                    <p className="text-sm text-gray-500">
                      1st Floor Room 1(Door on your right)
                    </p>
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div
            onClick={() => handleOnClick(2)}
            className="bg-[#f1f1f1] py-5 px-10 rounded-lg space-y-5  "
          >
            <span className="flex justify-between items-center cursor-pointer">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              {activeIndex === 2 && isOpen ? (
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
              className={`overflow-hidden transition-all duration-1000 pt-2 ${
                activeIndex === 2 && isOpen
                  ? "max-h-[400px] lg:max-h-[285px]"
                  : "max-h-0"
              }`}
            >
              {activeIndex === 2 && isOpen && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm md:text-base ">
                    <div className="relative h-auto w-full min-w-[200px]">
                      <input
                        type="text"
                        className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Name
                      </label>
                    </div>
                    <div className="relative h-auto w-full min-w-[200px]">
                      <input
                        type="number"
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Phone Number
                      </label>
                    </div>
                    <div className="relative h-auto w-full min-w-[200px]">
                      <input
                        type="email"
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email Address
                      </label>
                    </div>
                  </div>
                  <div className="relative w-full min-w-[200px] col-span-2">
                    <textarea
                      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Message
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => submitContact()}
                      disabled={submittingForm}
                      className="bg-black p-3 rounded-md text-[#f1f1f1] text-sm"
                    >
                      {submittingForm ? "Submitting ..." : "Submit"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => handleOnClick(3)}
            className="bg-[#f1f1f1] py-5 px-10 rounded-lg  space-y-5  "
          >
            <span className="flex justify-between items-center cursor-pointer">
              <h2 className="text-2xl font-bold">Opening Hours</h2>
              {activeIndex === 3 && isOpen ? (
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
                activeIndex === 3 && isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {activeIndex === 3 && isOpen && (
                <div className="flex flex-col items-start justify-center space-y-2">
                  <span className="flex gap-2 items-center">
                    <h4 className="text-lg font-bold">Monday - Friday:</h4>
                    <p>8.00am - 5.000pm</p>
                  </span>
                  <p className="hidden">
                    <span className="">Now: </span>
                    <span
                      className={`${
                        businessIsOpen ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {businessIsOpen ? "Open" : "Closed"}{" "}
                    </span>
                    <span className="text-black italic text-sm">
                      {" "}
                      {businessStatus}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
