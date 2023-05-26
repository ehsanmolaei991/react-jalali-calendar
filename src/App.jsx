import Calendar from "./components/calendar/Calendar";

function App() {
  return (
    <>
      <main>
        <Calendar
          onDaysClick={(date) => {
            console.log("Jalali", date.format("jYYYY/jMMMM/jD"));
            console.log("Gregorian", date.locale("en").format("YYYY/MMMM/D"));
          }}
        />
      </main>
    </>
  );
}

export default App;
