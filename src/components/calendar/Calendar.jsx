import moment from "jalali-moment";
import fa from "moment/src/locale/fa";
import { useState } from "react";
import MainSection from "./MainSection";
import SelectYearModal from "./SelectYearModal";
import SelectMonthModal from "./SelectMonthModal";
import WeekDays from "./WeekDays";
import ActionBar from "./ActionBar";

const Calendar = ({ onDaysClick = (date) => {} }) => {
  const [m, setChange] = useState(moment().locale("fa", fa));
  const [isSelectMonthModalOpen, setIsSelectMonthModalOpen] = useState(false);
  const [isSelectYearModalOpen, setIsSelectYearModalOpen] = useState(false);

  const handlePrevMonth = () => {
    setChange(m.clone().add(-1, "jMonth"));
  };
  const handleNextMonth = () => {
    setChange(m.clone().add(1, "jMonth"));
  };
  const handleChangeMonth = (monthId) => {
    setChange(m.clone().jMonth(monthId));
    setIsSelectMonthModalOpen(false);
  };
  const handleChangeYear = (year) => {
    setChange(m.clone().jYear(year));
    setIsSelectYearModalOpen(false);
  };
  const handleGoToday = () => {
    setChange(moment().locale("fa", fa));
  };
  return (
    <div className="shadow border p-5 rounded w-[550px] h-[550px] my-10 mx-auto flex flex-col relative">
      {/* ActionBar */}
      <ActionBar
        date={m}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleOpenMonthModal={(value) => setIsSelectMonthModalOpen(value)}
        handleOpenYearModal={(value) => setIsSelectYearModalOpen(value)}
      />

      {/* WeeksDays */}
      <WeekDays />

      {/* Change Month Modal */}
      <SelectMonthModal
        isOpen={isSelectMonthModalOpen}
        onChange={handleChangeMonth}
      />

      {/* Change Year Modal */}
      <SelectYearModal
        isOpen={isSelectYearModalOpen}
        onHandleClose={() => setIsSelectYearModalOpen(false)}
        onChange={handleChangeYear}
      />

      {/* Main Calendar */}
      <MainSection onDaysClick={onDaysClick} date={m} />

      {/* Go Today Btn */}
      <button
        onClick={handleGoToday}
        className="bg-teal-500 my-3 rounded-lg px-4 py-2 text-white hover:bg-teal-600"
      >
        برو به امروز
      </button>
    </div>
  );
};
export default Calendar;
