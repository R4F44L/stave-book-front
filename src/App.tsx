import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
