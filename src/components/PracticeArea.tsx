import { useEffect, useState } from "react";

interface PracticeAreaModalProps {
  practiceArea: {
    id: number;
    title: string;
    description: string;
    richDescription: string[];
  };
}

const PracticeAreaModal = ({ practiceArea }: PracticeAreaModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedRichDesc, setSelectedRichDesc] = useState<string[]>([]);

  const handleOpenModal = (title: string, richDescription: string[]) => {
    setSelectedTitle(title);
    setSelectedRichDesc(richDescription);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-col w-full">
        <button
          onClick={() =>
            handleOpenModal(practiceArea.title, practiceArea.richDescription)
          }
          className=""
        >
          <h4 className="text-lg font-bold text-start">{practiceArea.title}</h4>
          <p className="text-start">{practiceArea.description}</p>
        </button>
        <button
          onClick={() =>
            handleOpenModal(practiceArea.title, practiceArea.richDescription)
          }
          className="bg-gray-50 transition-all duration-600 p-2 text-sm rounded-sm rounded-b-none text-black ml-auto border-t border-l shadow-md"
        >
          Learn More
        </button>
      </div>

      {isOpen && (
        <div
          className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto px-4 py-6"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 md:p-8 md:w-[75%] lg:w-1/2 space-y-5 flex flex-col max-h-full overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button at the top right for small screens */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-900 text-black hover:text-white transition-all duration-300 text-sm px-3 py-1 rounded-lg md:hidden"
            >
              Close
            </button>

            <h2 className="text-2xl text-black font-bold text-center mt-6 md:mt-0">
              {selectedTitle}
            </h2>
            {selectedRichDesc.map((desc, index) => (
              <p
                key={index}
                className="text-base text-black text-justify cursor-default"
              >
                {desc}
              </p>
            ))}

            {/* Desktop Close button */}
            <div className="hidden md:flex justify-end pt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-50 hover:bg-gray-900 hover:text-white transition-all duration-300 px-4 py-2 text-base md:text-lg rounded-lg text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeAreaModal;
