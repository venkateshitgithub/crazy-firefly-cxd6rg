import { useState } from "react";
export default function About() {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    setValue((prevState) => [...prevState, { id: new Date(), text: data }]);
    console.log(value);
    setData("");
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder={"search"}
        />
        <button type="submit"> submit</button>
      </form>
      {value.map((each) => (
        <p key={each.id}>{each.text}</p>
      ))}
    </div>
  );
}
