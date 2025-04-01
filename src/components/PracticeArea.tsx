import { useState } from "react";

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
          className="fixed transition-all duration-500 ease-in top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-8 md:w-[75%] lg:w-1/2 space-y-5 flex flex-col cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl text-black font-bold text-center">
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
            <button
              onClick={handleCloseModal}
              className="bg-gray-50 hover:bg-gray-900 hover:text-gray-50 transition-all duration-600 p-3 text-base md:text-lg rounded-lg text-black ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeAreaModal;
