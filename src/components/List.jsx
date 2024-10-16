import { useState } from "react";

export default function List() {
  const peopleList = [
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ];

  const [peoples, setPeoples] = useState(peopleList);

  function handleRemove(idToRemove) {
    setPeoples((prevPeoples) =>
      prevPeoples.filter((person) => person.id != idToRemove)
    );
  }
  return (
    <ul>
      {peoples.map((el) => {
        return (
          <div key={el.id}>
            <li>{el.name}</li>
            <button onClick={() => handleRemove(el.id)} id={el.id}>
              delete
            </button>
          </div>
        );
      })}
    </ul>
  );
}
