import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title="noodle" 
          ingredients={['powder','water']}
          instructions="Mix ingredients"
          img="noodle.jpg"
          />
      </div>
    );
  }
}

export default RecipeApp;
