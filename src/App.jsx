import { useState, useEffect } from "react";
import { styled } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/header";
import Main from "./components/Main";

const BackgroundMain = styled.div`
  background-color: #182343;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
`;

function App() {
  const [userScore, setUserScore] = useState(() => {
    const savedScore = localStorage.getItem("userScore");
    return savedScore !== null ? parseInt(savedScore, 10) : 0;
  });

  const [computerChoice, setComputerChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [screen, setScreen] = useState("initial");
  const [winner, setWinner] = useState("");
  

  const choices = ["pedra", "papel", "tesoura", "lagarto", "spock"];

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "draw";
    if (
      (userChoice === "pedra" &&
        (computerChoice === "tesoura" || computerChoice === "lagarto")) ||
      (userChoice === "papel" &&
        (computerChoice === "pedra" || computerChoice === "spock")) ||
      (userChoice === "tesoura" &&
        (computerChoice === "papel" || computerChoice === "lagarto")) ||
      (userChoice === "lagarto" &&
        (computerChoice === "spock" || computerChoice === "papel")) ||
      (userChoice === "spock" &&
        (computerChoice === "tesoura" || computerChoice === "pedra"))
    ) {
      return "user";
    }
    return "computer";
  };

  const handleUserChoice = (userChoice) => {
    const computerChoice = getRandomChoice();
    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
    const winner = determineWinner(userChoice, computerChoice);
    setWinner(winner);
    setTimeout(() => {
      setScreen("loading");      
    }, 1000);
    setTimeout(() => {
      setScreen("choices");      
    }, 2000);
    setTimeout(() => {
      setScreen("result");
      if (winner === "user") {
        setUserScore((prevScore) => prevScore + 1);
      }
    }, 3000);
    setTimeout(() => {
      setScreen("initial");      
    }, 6000);
  };

  useEffect(() => {
    localStorage.setItem("userScore", userScore);
  }, [userScore]);

  return (
    <>
      <GlobalStyle />
      <BackgroundMain>
        <Header userScore={userScore} />
        <Main
          onUserChoice={handleUserChoice}
          computerChoice={computerChoice}
          userChoice={userChoice}
          screen={screen}
          winner={winner}
        />
      </BackgroundMain>
    </>
  );
}

export default App;
