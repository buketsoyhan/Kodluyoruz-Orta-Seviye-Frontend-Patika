import React, { useState } from "react";

export default function State() {
  const [name, setName] = useState("Buket");
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Kubra", "Omer"]);
  const [adress, setAdress] = useState({ city: "Ankara", zip: "0606" });
  return (
    <div>
      <h1>Merhaba {name}</h1>
      <h1>Yaşım {age}</h1>

      <button
        onClick={() => {
          name === "Buket" ? setName("Batu") : setName("Buket");
          age === 24 ? setAge(21) : setAge(24);
        }}
      >
        Click Me
      </button>

      <br></br>
      <br></br>

      <h1>Frieds</h1>
      {friends.map((friend) => (
        <div>{friend}</div>
      ))}

      <button
        onClick={() => {
          setFriends([...friends, "Ayda"]);
        }}
      >
        Add friend
      </button>

      <br></br>
      <br></br>
      <h1>Adress</h1>

      <div>
        {adress.city}
        {adress.zip}
      </div>
      <button
        onClick={() => {
          setAdress({ ...adress, city: "İstanbul" });
        }}
      >
        Change the adress
      </button>
    </div>
  );
}
