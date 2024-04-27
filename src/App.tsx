import React, {useRef, useState} from 'react';
import './App.css';
import { HomeView } from './views/home_view'
import { ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useReactToPrint} from "react-to-print";

function App() {

  const [theme, setTheme] = useState(
      createTheme({
          "palette": {
              "primary": {
                  "main": "#077D8DFF"
              },
              "secondary": {
                  "main": "#077D8DFF"
              }
          },
          "typography": {
              "fontFamily": "Quicksand"
          },
          "spacing": 6
      })
  )

  return (
      <ThemeProvider theme={theme}>
          <HomeView/>
      </ThemeProvider>
  );
}

export default App;
