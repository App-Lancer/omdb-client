import {Component} from 'react'
import './App.css';
import Card from './components/card/card';
import { textInputOnchange } from './controller';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedMovies: [],
      dataSource : [],
      isCompareView: false,
    }
    this.onCardSelected = this.onCardSelected.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.compare = this.compare.bind(this);
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
        return elem.id != card.id
      })
    }
    this.setState({selectedMovies: selectedMovies})
  }

  compare(event){
    this.setState({
      isCompareView: !this.state.isCompareView
    })
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
        {this.state.selectedMovies.length > 1 ?
          <input type="button" className="saved-btn compare-btn" value="Compare" onClick={this.compare}/> : null}
        <div className="card-view">
          {this.state.dataSource.map((card)=>{
            return <Card data={card} onCardSelected={this.onCardSelected} canBeSelected={this.state.selectedMovies.length < 3 && !this.state.isCompareView}/>
          })}
        </div>
        {this.state.isCompareView ? 
        <div className= "compareView" onClick={this.compare}> 
          <div className="card-view compare">
            {this.state.selectedMovies.map((card)=>{
              return <Card data={card} onCardSelected={this.onCardSelected} canBeSelected={false}/>
            })}
          </div>
        </div>:null
        }
        
      </div>
    );
  }
}

export default App;
