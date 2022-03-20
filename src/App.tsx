import Button from 'components/atoms/Button';
import Typography from 'components/atoms/Typography';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <Typography variant="h2">Example header</Typography>
      <Typography>Example paragraph</Typography>
      <Button>Example Button</Button>
    </ThemeProvider>
  );
}

export default App;
