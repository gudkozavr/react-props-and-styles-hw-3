import { useState } from "react";
import style from "./Rating.module.css";

export default function Rating() {
  const ratingList = [
    { title: "schlecht", url: "https://i.imgur.com/L0Fcwhx.jpeg" },
    { title: "ok", url: "https://i.imgur.com/409w583.jpeg" },
    { title: "gut", url: "https://i.imgur.com/ZaLUPuK.jpeg" },
    { title: "super", url: "https://i.imgur.com/kHMysK3.jpeg" },
    { title: "supi-supi", url: "https://i.imgur.com/sQXEqUK.jpeg" },
  ];
  function handleRating(e) {
    setRatingValue(e.target.id);
    console.log(e.target.id);
  }
  const [ratingValue, setRatingValue] = useState(0);
  return (
    <>
      <div className={style.div}>
        <img src={ratingList[ratingValue].url} alt="" />
        {ratingList.map((el, idx) => {
          return (
            <button onClick={handleRating} id={idx} key={idx}>
              {el.title}
            </button>
          );
        })}
      </div>
    </>
  );
}
