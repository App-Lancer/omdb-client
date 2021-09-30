import {Component} from 'react'
import './App.css';
import Card from './components/card/card';
import { textInputOnchange, saveCompariosn } from './controller';

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
    let target = event.target;
    if(target.id == "compareView" || target.id == "compareButton"){
      this.setState({
        isCompareView: !this.state.isCompareView
      })
    }
  }

  saveCompare = (event)=>{
    let target = document.getElementById("saveInput")
    let name = target.value
    if (name.length == 0){
      return
    }
    saveCompariosn(name, this.state.selectedMovies)
    this.setState({
      isCompareView: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <input type="text" id="search" className="search" placeholder="Search" onChange={this.onInputChange}/>
          <div className="actions">
            <input type="button" className="saved-btn" value="Saved Comparisons"/>
          </div>
        </div>
        {this.state.selectedMovies.length > 1 ?
          <input id="compareButton" type="button" className="saved-btn compare-btn" value="Compare" onClick={this.compare}/> : null}
        <div className="card-view">
          {this.state.dataSource.map((card)=>{
            return <Card data={card} onCardSelected={this.onCardSelected} canBeSelected={this.state.selectedMovies.length < 3 && !this.state.isCompareView} detailedView = {false} />
          })}
        </div>
        {this.state.isCompareView ? 
        <div id="compareView" className= "compareView" onClick={this.compare}>
          <div className= "compareViewContent">
            <div style={{marginTop: "16px"}}>
              <input id="saveInput" type="text" className="search compare" placeholder="Name"/>
              <input type="button" className="saved-btn" value="Save" onClick={this.saveCompare}/>
            </div>
            <div className="card-view compare">
              {this.state.selectedMovies.map((card)=>{
                return <Card data={card} onCardSelected={this.onCardSelected} canBeSelected={false} detailedView = {true} />;
              })}
            </div>
          </div>
        </div>:null
        }
        
      </div>
    );
  }
}

export default App;
