import fa from "moment/src/locale/fa";
import moment from "jalali-moment";
import { toFarsiNumber } from "../../utils/functions";

const MainSection = ({ date = moment().locale("fa", fa), onDaysClick }) => {
  return (
    <div className="grid grid-cols-7 gap-2 h-full">
      {[
        ...new Array(
          parseInt(date.clone().startOf("jMonth").format("d")) + 1 === 7
            ? 0
            : parseInt(date.clone().startOf("jMonth").format("d")) + 1
        ),
      ].map((_, i) => (
        <div key={`blank-days-${i}`} className="col-span-1 bg-white h-full" />
      ))}
      {[...new Array(date.jDaysInMonth())].map((item, i) => {
        const day = date
          .clone()
          .locale("fa", fa)
          .startOf("jMonth")
          .add(i, "jDay");

        const miladi = date
          .clone()
          .locale("en")
          .startOf("jMonth")
          .add(i, "jDay");

        return (
          <button
            onClick={() => onDaysClick(day)}
            key={`calendar-day-${i}`}
            className={`col-span-1  hover:bg-teal-500 group ${
              moment().locale("fa").format("jYYYY/jMMMM/jD") ===
              day.format("jYYYY/jMMMM/jD")
                ? "bg-blue-500 text-white"
                : parseInt(day.format("d")) === 5
                ? "bg-red-400 text-white"
                : "bg-gray-100 text-gray-400"
            }  h-full flex justify-end items-start pt-1 pl-2 relative`}
          >
            <span className="font-bold group-hover:text-white text-2xl">
              {toFarsiNumber(day.format("D"))}
            </span>
            <span className="absolute right-1 group-hover:text-white bottom-1 text-[10px]">
              {miladi.format("MMM | D")}
            </span>
          </button>
        );
      })}
    </div>
  );
};
export default MainSection;
