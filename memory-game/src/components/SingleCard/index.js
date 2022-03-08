import React from "react";
import "../card/style.css";
export default function SingleCard({ card, handleChoice , flipped, disabled}) {
  const handleClick = (card) => () => {
    if(!disabled){
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          className="back"
          src={
            "https://i.pinimg.com/736x/9f/6b/11/9f6b11c62e1a61a4ad66e8f3ac729d1d---wallpaper-white-background-wallpaper.jpg"
          }
          onClick={handleClick(card)}
          alt="card back"
        />
      </div>
    </div>
  );
}
