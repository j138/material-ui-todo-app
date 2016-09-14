// import React from 'react';
import React, { PropTypes, Component } from 'react';
import { AppBar } from 'material-ui';
import TodoTextInput from './TodoTextInput';

const defaultStyle = {
  marginLeft: 20,
};

// function handleSave(text) {
//   if (text.length !== 0) {
//     this.props.addTodo(text);
//   }
// }

// const header = () => (
//   <header>
//     <AppBar title="React + Redux + Material UI Boilrplate" />
//     <h1 style={defaultStyle} >todos</h1>
//     <TodoTextInput
//       newTodo
//       onSave={handleSave.bind(this)}
//       placeholder="What needs to be done?"
//     />
//   </header>
// );

class Header extends Component {
  // static get childContextTypes() {
  //   return { muiTheme: React.PropTypes.object };
  // }
  // getChildContext(){
  //   return {  muiTheme: Styles.ThemeManager.getMuiTheme(MyRawTheme)};
  // }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header>
        <AppBar title="React + Redux + Material UI Boilrplate" />
        <h1 style={defaultStyle}>todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave.bind(this)}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
