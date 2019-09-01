// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FullPage from './pages/FullPage';
import HomePage from './pages/HomePage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import settings from './settings';

let theme = createMuiTheme({
  palette: {
    primary: settings.theme.primaryColor.import,
    secondary: settings.theme.secondaryColor.import,
    type: settings.theme.type,
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" name="full" component={FullPage} />
            <Route exact path="/home" name="home" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
