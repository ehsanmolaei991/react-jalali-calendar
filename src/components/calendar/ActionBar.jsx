const ActionBar = ({
  handlePrevMonth,
  handleNextMonth,
  handleOpenMonthModal,
  handleOpenYearModal,
  date,
}) => {
  return (
    <div className="flex justify-between items-center">
      <button
        className="px-3 py-2 bg-teal-500 hover:bg-teal-600 rounded-full text-white"
        onClick={handlePrevMonth}
      >
        ماه قبل
      </button>
      <span className="bg-teal-500 h-0.5 mx-2 flex-1" />
      <div className="flex px-3 py-1 border border-teal-500 rounded-full">
        <button
          onClick={() => handleOpenMonthModal(true)}
          className="font-bold text-gray-700 hover:text-teal-400"
        >
          {date.format("jMMMM")}
        </button>
        <span className="mx-2">|</span>
        <button
          onClick={() => handleOpenYearModal(true)}
          className="font-bold text-gray-700 hover:text-teal-400"
        >
          {date.format("jYYYY")}
        </button>
      </div>
      <span className="bg-teal-500 h-0.5 mx-2 flex-1" />
      <button
        className="px-3 py-2 bg-teal-500 hover:bg-teal-600 rounded-full text-white"
        onClick={handleNextMonth}
      >
        ماه بعد
      </button>
    </div>
  );
};
export default ActionBar;
