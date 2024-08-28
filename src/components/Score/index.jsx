import {styled} from "styled-components"
import PropTypes from "prop-types";


const ScoreStyled = styled.div`
    background-color: white;
    height: 80%;
    width: auto;   
`

function ScoreBoard({score}){
    return(
        <ScoreStyled>
            <h3>{score}</h3>
            
        </ScoreStyled>
    )
}

ScoreBoard.propTypes = {
    score: PropTypes.number.isRequired,
  };

export default ScoreBoard