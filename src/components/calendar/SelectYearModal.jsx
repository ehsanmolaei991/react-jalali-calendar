import { useRef } from "react";

const SelectYearModal = ({ onChange, onHandleClose, isOpen }) => {
  const inputYear = useRef();

  return (
    <>
      {isOpen && (
        <div className="absolute right-0 top-0 w-full h-full z-10 transition-all flex flex-col">
          <div className="bg-white p-3 flex flex-col rounded-b-xl">
            <div className="px-3 flex items-center">
              <span className="bg-teal-500 h-0.5 mx-2 flex-1" />
              <span className="py-1 px-2 border border-teal-500 rounded-full">
                انتخاب سال
              </span>
              <span className="bg-teal-500 h-0.5 mx-2 flex-1" />
            </div>

            <input
              ref={inputYear}
              placeholder="1403"
              type="text"
              maxLength={4}
              className="border border-teal-500 px-5 py-2 text-center font-bold max-w-sm mx-auto my-4 rounded-full bg-gray-50"
            />

            <button
              onClick={() => onChange(parseInt(inputYear.current.value))}
              className="bg-teal-500 rounded-lg px-4 py-2 text-white hover:bg-teal-600"
            >
              ثبت
            </button>
          </div>
          <div
            onClick={() => onHandleClose(false)}
            className="bg-black/50 h-full w-full"
          />
        </div>
      )}
    </>
  );
};
export default SelectYearModal;
