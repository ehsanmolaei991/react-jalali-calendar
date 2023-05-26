import { listMonthDays } from "../../constants/calendar";

const SelectMonthModal = ({ isOpen, onChange }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute right-0 top-0 w-full h-full bg-white z-10 transition-all p-3 flex flex-col">
          <div className="px-3 flex items-center">
            <span className="bg-teal-500 h-0.5 mx-2 flex-1" />
            <span className="py-1 px-2 border border-teal-500 rounded-full">
              انتخاب ماه
            </span>
            <span className="bg-teal-500 h-0.5 mx-2 flex-1" />
          </div>

          <div className="grid grid-cols-3 gap-2 h-full p-3">
            {listMonthDays.map((month, i) => (
              <button
                key={`month-${month.id}`}
                onClick={() => onChange(month.id)}
                className="grid-span-1 rounded-lg bg-gray-100 hover:bg-teal-500 hover:text-white h-full"
              >
                {month.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default SelectMonthModal;
