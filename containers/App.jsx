import React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import mui, { AppBar } from 'material-ui';
import MyRawTheme from '../components/materialUiRawThemeFile';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
// import { connect } from 'react-redux';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
    <div>
      <Header />
      <MainSection />
    </div>
  </MuiThemeProvider>
);

export default App;
