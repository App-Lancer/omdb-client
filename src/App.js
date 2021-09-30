import {Component} from 'react'
import './App.css';
import Card from './components/card/card';
import { textInputOnchange } from './controller';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedMovies: [],
      dataSource : []
    }
    this.onCardSelected = this.onCardSelected.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  

  onInputChange(event){
    textInputOnchange(this, event)
  }

  onCardSelected(card, selected){
    var selectedMovies = this.state.selectedMovies;
    if (selected){
      selectedMovies.push(card);
    }
    else{
      selectedMovies = selectedMovies.filter((elem)=>{
          console.log(elem.id, card.id);
          return elem.id != card.id
        })
    }
    console.log(selectedMovies)
    this.setState({selectedMovies: selectedMovies})
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <input type="text" id="search" className="search" placeholder="Search" onChange={this.onInputChange}/>
          <div className="actions">
            <input type="button" className="saved-btn" value="Saved Comparisons"/>
            <input type="button" className="saved-btn" value="Save"/>
          </div>
        </div>
        <div className="card-view">
          {this.state.dataSource.map((card)=>{
            return <Card data={card} onCardSelected={this.onCardSelected}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
