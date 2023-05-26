import { listWeekDays } from "../../constants/calendar";

const WeekDays = () => {
  return (
    <div className="grid grid-cols-7 gpa-2 my-3">
      {listWeekDays.map((day, i) => (
        <span className="grid-span-1 text-center" key={`days-week-${i}`}>
          {day.title}
        </span>
      ))}
    </div>
  );
};
export default WeekDays;
