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
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(
    (card) => {
      if (choiceOne && choiceTwo) {
        setDisabled(true);

        if (choiceOne.src === choiceTwo.src) {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.src === choiceOne.src) {
                setScore(score + 50);
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
          resetTurn();
        } else {
          setTimeout(() => resetTurn(), 1000);
        }
      }
    },
    [choiceOne, choiceTwo]
  );

  console.log("card", cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
    setScore(score - 10);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}> Memory Game </h1>
      <button onClick={shuffleCards}>New Game</button>
      <h2 style={{ color: "white", marginTop: 20, marginBottom: 10 }}>
        Score: {score}
      </h2>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}
export default Card;
