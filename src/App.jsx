import { styled } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/header";

const BackgroundMain = styled.div`
  background-color: #182343;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundMain>
        <Header/>
      </BackgroundMain>
    </>
  );
}

export default App;
