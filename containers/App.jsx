import React from 'react';
import connect from 'react-redux';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../components/materialUiRawThemeFile';

import Header from '../components/Header';
import MainSection from '../components/MainSection';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
    <div>
      <Header />
      <MainSection />
    </div>
  </MuiThemeProvider>
);

export default App;
