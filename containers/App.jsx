import React, { Component, PropTypes } from 'react';
// import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
// import connect from 'react-redux';
import { connect } from 'react-redux';

import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import MyRawTheme from '../components/materialUiRawThemeFile';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

// const App = (todos, actions) => (
//   <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
//     <div>
//       <Header addTodo={actions.addTodo} />
//       <MainSection todos={todos} actions={actions} />
//     </div>
//   </MuiThemeProvider>
// );

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(MyRawTheme)}>
        <div>
          <Header addTodo={actions.addTodo} />
          <MainSection todos={todos} actions={actions} />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
