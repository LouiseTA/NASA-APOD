import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DatePicker from "./components/DatePicker";

function App() {
  console.log("VITE KEY:", import.meta.env.VITE_NASA_API_KEY);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleDateChange(event) {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    setData(null);
    setLoading(true);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${selectedDate}`;
      const localKey = `NASA-${selectedDate}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Data of ${selectedDate} fetched from cache");
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Data of ${selectedDate} fetched from API");
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAPIData();
  }, [selectedDate]);

  return (
    <>
      <DatePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      {loading || !data ? (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      ) : (
        <Main data={data} />
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
