import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import MainContentContainer from './components/MainContentContainer/MainContentContainer';

import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledMain>
      <Header />
      <SearchBar />
      <MainContentContainer />
    </StyledMain>
  );
}

export default App;
