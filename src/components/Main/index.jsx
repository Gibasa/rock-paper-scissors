import { styled, keyframes } from "styled-components";
import PropTypes from "prop-types";

const MainStyled = styled.div`
  position: absolute;
  top: 28%;
  left: 25%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const ImageBase = styled.img`
  margin: 25px;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  padding: 20px;
  object-fit: contain;
  transition: transform 0.3s ease;
  background-color: white;
  &:hover {
    transform: scale(1.4);
  }
`;
const Papel = styled(ImageBase)`
  border: 20px solid #4e6bf5;
`;
const Pedra = styled(ImageBase)`
  border: 20px solid #8958e2;
`;
const Tesoura = styled(ImageBase)`
  border: 20px solid #ebaa1c;
`;
const Lagarto = styled(ImageBase)`
  border: 20px solid #dc3953;
`;
const Spock = styled(ImageBase)`
  border: 20px solid #48bace;
`;

const MainTop = styled.div``;
const MainMid = styled.div`
  display: flex;
  gap: 15vw;
`;
const MainBot = styled.div`
  display: flex;
  gap: 4vw;
  margin-top: 40px;
`;

const Initial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  gap: 20px;
  background-image: url("/images/pentagono.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin-top: 100px;
  img {
    width: 200px;
    height: 200px;
  }
`;
const UserPick = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
    font-size: 2rem;
  }
`;
const HousePick = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
    font-size: 2rem;
  }
  div {
    background-color: #131c36;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    margin: 25px;
  }
`;
const Pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 10px 20px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const Highlight = styled(ImageBase)`
  animation: ${Pulse} 1.5s infinite;
`;

function Main({ onUserChoice, computerChoice, userChoice, screen, winner }) {
  return (
    <MainStyled>
      {screen === "initial" && (
        <Initial>
          <MainTop>
            <span>
              <Tesoura
                src="/images/icon-scissors.svg"
                onClick={() => onUserChoice("tesoura")}
              />
            </span>
          </MainTop>
          <MainMid>
            <span>
              <Spock
                src="/images/icon-spock.svg"
                onClick={() => onUserChoice("spock")}
              />
            </span>
            <span>
              <Papel
                src="/images/icon-paper.svg"
                onClick={() => onUserChoice("papel")}
              />
            </span>
          </MainMid>
          <MainBot>
            <span>
              <Pedra
                src="/images/icon-rock.svg"
                onClick={() => onUserChoice("pedra")}
              />
            </span>
            <span>
              <Lagarto
                src="/images/icon-lizard.svg"
                onClick={() => onUserChoice("lagarto")}
              />
            </span>
          </MainBot>
        </Initial>
      )}
      {screen === "loading" && (
        <Loading>
          <UserPick>
            <h2>YOU PICKED</h2>
            {userChoice === "pedra" && <Pedra src="/images/icon-rock.svg" />}
            {userChoice === "papel" && <Papel src="/images/icon-paper.svg" />}
            {userChoice === "tesoura" && (
              <Tesoura src="/images/icon-scissors.svg" />
            )}
            {userChoice === "lagarto" && (
              <Lagarto src="/images/icon-lizard.svg" />
            )}
            {userChoice === "spock" && <Spock src="/images/icon-spock.svg" />}
          </UserPick>
          <HousePick>
            <h2>THE HOUSE PICKED</h2>
            <div></div>
          </HousePick>
        </Loading>
      )}

      {screen === "choices" && (
        <Loading>
          <UserPick>
            <h2>YOU PICKED</h2>
            {userChoice === "pedra" && <Pedra src="/images/icon-rock.svg" />}
            {userChoice === "papel" && <Papel src="/images/icon-paper.svg" />}
            {userChoice === "tesoura" && (
              <Tesoura src="/images/icon-scissors.svg" />
            )}
            {userChoice === "lagarto" && (
              <Lagarto src="/images/icon-lizard.svg" />
            )}
            {userChoice === "spock" && <Spock src="/images/icon-spock.svg" />}
          </UserPick>
          <HousePick>
            <h2>THE HOUSE PICKED</h2>
            {computerChoice === "pedra" && (
              <Pedra src="/images/icon-rock.svg" />
            )}
            {computerChoice === "papel" && (
              <Papel src="/images/icon-paper.svg" />
            )}
            {computerChoice === "tesoura" && (
              <Tesoura src="/images/icon-scissors.svg" />
            )}
            {computerChoice === "lagarto" && (
              <Lagarto src="/images/icon-lizard.svg" />
            )}
            {computerChoice === "spock" && (
              <Spock src="/images/icon-spock.svg" />
            )}
          </HousePick>
        </Loading>
      )}

      {screen === "result" && (
        <Loading>
          <UserPick>
            <h2>YOU PICKED</h2>
            {userChoice === "pedra" && (
              <Pedra
                src="/images/icon-rock.svg"
                as={winner === "user" ? Highlight : ""}
              />
            )}
            {userChoice === "papel" && (
              <Papel
                src="/images/icon-paper.svg"
                as={winner === "user" ? Highlight : ""}
              />
            )}
            {userChoice === "tesoura" && (
              <Tesoura
                src="/images/icon-scissors.svg"
                as={winner === "user" ? Highlight : ""}
              />
            )}
            {userChoice === "lagarto" && (
              <Lagarto
                src="/images/icon-lizard.svg"
                as={winner === "user" ? Highlight : ""}
              />
            )}
            {userChoice === "spock" && (
              <Spock
                src="/images/icon-spock.svg"
                as={winner === "user" ? Highlight : ""}
              />
            )}
          </UserPick>
          <HousePick>
            <h2>THE HOUSE PICKED</h2>
            {computerChoice === "pedra" && (
              <Pedra
                src="/images/icon-rock.svg"
                as={winner === "computer" ? Highlight : ""}
              />
            )}
            {computerChoice === "papel" && (
              <Papel
                src="/images/icon-paper.svg"
                as={winner === "computer" ? Highlight : ""}
              />
            )}
            {computerChoice === "tesoura" && (
              <Tesoura
                src="/images/icon-scissors.svg"
                as={winner === "computer" ? Highlight : ""}
              />
            )}
            {computerChoice === "lagarto" && (
              <Lagarto
                src="/images/icon-lizard.svg"
                as={winner === "computer" ? Highlight : ""}
              />
            )}
            {computerChoice === "spock" && (
              <Spock
                src="/images/icon-spock.svg"
                as={winner === "computer" ? Highlight : ""}
              />
            )}
          </HousePick>
        </Loading>
      )}
    </MainStyled>
  );
}

Main.propTypes = {
  onUserChoice: PropTypes.func.isRequired,
  computerChoice: PropTypes.string,
  userChoice: PropTypes.string,
  screen: PropTypes.string.isRequired,
  winner: PropTypes.string,
};

export default Main;
