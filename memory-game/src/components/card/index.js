import React, { useState, useEffect } from "react";
import SingleCard from "../SingleCard";
import "./style.css";
const cardImages = [
  { src: "/images/owl.png", matched: false },
  { src: "/images/brain.png", matched: false },
  { src: "/images/lemon.png", matched: false },
  { src: "/images/child.png", matched: false },
  { src: "/images/human.png", matched: false },
  { src: "/images/kiki.png", matched: false },
  { src: "/images/lobster.png", matched: false },
  { src: "/images/pacman.png", matched: false },
];

function Card() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
    setTurns(0);
  };
  
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(()=> resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log("card", cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };
  return (
    <div>
      <h1 style={{ color: "white" }}> Memory Game </h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card} 
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched } 
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
