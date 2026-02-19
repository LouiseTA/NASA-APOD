export default function DatePicker(props) {
  const { selectedDate, handleDateChange } = props;

  return (
    <div className="datePickerContainer">
      <label htmlFor="date-picker">Pick a date:</label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
        min="1995-06-16"
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
}
