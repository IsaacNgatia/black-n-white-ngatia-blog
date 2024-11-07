import { useState } from 'react';

interface PracticeAreaModalProps {
  practiceArea: {
    id: number;
    title: string;
    description: string;
    richDescription: string;
  };
}

const PracticeAreaModal = ({ practiceArea }: PracticeAreaModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [selectedRichDesc, setSelectedRichDesc] = useState('');

  const handleOpenModal = (title: string, description: string, richDescription: string) => {
    setSelectedTitle(title)
    setSelectedDescription(description)
    setSelectedRichDesc(richDescription)
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };  
  return (
    <>
    <button  onClick={() => handleOpenModal(practiceArea.title, practiceArea.description , practiceArea.richDescription)} className="">
              <span className="text-lg font-bold">
                {practiceArea.title}
              </span>
              - {practiceArea.description}
            </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={handleCloseModal}>
          <div className="bg-white rounded-lg p-8 w-1/2" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg text-black font-bold">{selectedTitle}</h2>
            <p className="text-base text-black my-2">{selectedDescription}</p>
            <p className="text-base text-black">{selectedRichDesc}</p>
            <button onClick={handleCloseModal} className="bg-gray-50 p-3 text-base md:text-lg rounded-lg text-black">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeAreaModal;

