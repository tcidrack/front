import './App.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {

  const [value, setValue] = React.useState(30);

  const [loading, setLoading] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  const vol = <div className="App">
  <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
    <VolumeDown />
    <Slider aria-label="Volume" value={value} onChange={handleChange} />
    <VolumeUp />
  </Stack>
</div>
{value > 70 && <Alert className='alerta' severity="warning">Cuidado! Ouvir música com o fone muito alto pode ocasionar danos no longo prazo.</Alert>}

  return (
    <>
      <ThemeProvider theme={theme}>
        { loading ? <CircularProgress className='App'/> :   vol
        
        }

        
      </ThemeProvider>
    </>
  );
}

export default App;
