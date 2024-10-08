import { styled } from "styled-components";
import ScoreBoard from "../Score";
import PropTypes from "prop-types";


const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const HeaderStyled = styled.header`
  width: 60%;
  height: 20vh;
  border: 2px solid #3d4c6a;
  border-radius: 20px;
  display: flex;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        color: white;
        font-size: 6vh;
    }
`


function Header({userScore}) {
  return (
    <HeaderContainer>
      <HeaderStyled>
        <HeaderText>
          <h3>ROCK</h3>
          <h3>PAPER</h3>
          <h3>SCISSORS</h3>
        </HeaderText>
        <div className="score">
            <h3>score</h3>
            <ScoreBoard score={userScore}/>
        </div>
      </HeaderStyled>
    </HeaderContainer>
  );
}

Header.propTypes = {
  userScore: PropTypes.number.isRequired,
};

export default Header;
