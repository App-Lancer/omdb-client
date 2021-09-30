import {Component} from 'react'
import './App.css';
import Card from './components/card/card';
import { searchMovies } from './controller';

class App extends Component {

  state = {
    selectedMovies: [],
    dataSource : []
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <input type="text" className="search" placeholder="Search" onChange={searchMovies}/>
          <div className="actions">
            <input type="button" className="saved-btn" value="Saved Comparisons"/>
            {/* <input type="button" className="save-btn" value="Save"/> */}
          </div>
        </div>
        <div className="card-view">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;
