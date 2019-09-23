import React from 'react';
import './App.css';
import FruitContainer from './components/FruitContainer'

function App() {

  const fruitList = [
    'Acai', 
    'Aceola',
    'Apple',
    'Apricots',
    'Avocado',
    'Banana',
    'Blackberry',
    'Blueberries',
    'Camu Camu berry',
    'Cherries',
    'Coconut',
    'Cranberry',
    'Cucumber',
    'Currents',
    'Dates',
    'Durian',
    'Fig',
    'Goji berries',
    'Gooseberry',
    'Grapefruit',
    'Grapes',
    'Jackfruit',
    'Kiwi',
    'Kumquat',
    'Lemon',
    'Lime',
    'Lucuma',
    'Lychee',
    'Mango',
    'Mangosteen',
    'Melon',
    'Mulberry',
    'Nectarine',
    'Orange',
    'Papaya',
    'Passion Fruit',
    'Peach',
    'Pear',
    'Pineapple',
    'Plum',
    'Pomegranate',
    'Pomelo',
    'Prickly Pear',
    'Prunes',
    'Raspberries',
    'Strawberries',
    'Tangerine/Clementine',
    'Watermelon',
  ];

  return (
    <div className="App">
      <h1> Fruit Filter</h1>
      <FruitContainer fruits={fruitList} />
    </div>
  );
}

export default App;
