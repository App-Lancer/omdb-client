import {Component} from 'react'
import './App.css';
import Card from './components/card/card';
import Comparison from './components/comparison/comparison';
import { getComparisonList, textInputOnchange,saveCompariosn } from './controller';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedMovies: [],
      dataSource : [],
      isCompareView: false,
      isSavedComparisonView : false,
      savedComparisons : [],
      noRecordsFound : false,
      maxComparisonScoreId: "",
    }
    this.onCardSelected = this.onCardSelected.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.compare = this.compare.bind(this);
    this.onClickSavedComparison = this.onClickSavedComparison.bind(this);
  }

  onClickSavedComparison(event){
    var target = event.target;
    if(target.id == "savedComparison"){
      this.setState({
        noRecordsFound : false,
        selectedMovies : [],
        isSavedComparisonView: !this.state.isSavedComparisonView,
        dataSource : []
      });
      getComparisonList(this);
    }
  }
  

  onInputChange(event){
    this.setState({
      noRecordsFound : false,
      isSavedComparisonView : false,
      savedComparisons : [],
      selectedMovies : []
    });
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
    var maxScore = 0
    var maxScoreId = ""
    for (let movie of selectedMovies){
      let score = parseFloat(movie.imdbRating)
      if (score > maxScore){
        maxScore = score
        maxScoreId = movie.id
      }
    }
    this.setState({selectedMovies: selectedMovies, maxComparisonScoreId: maxScoreId})
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

  viewDetails = (movies)=>{
    console.log("****", movies)
    this.setState({
      selectedMovies:movies,
      isCompareView: true,
      noRecordsFound : false,
      dataSource : []
    })
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <input type="text" id="search" className="search" placeholder="Search" onChange={this.onInputChange}/>
          <div className="actions">
            <input type="button" className="saved-btn" value="Saved Comparisons" id="savedComparison" onClick={this.onClickSavedComparison}/>
          </div>
        </div>
        {this.state.selectedMovies.length > 1 &&  !this.state.isSavedComparisonView?
          <input id="compareButton" type="button" className="saved-btn compare-btn" value="Compare" onClick={this.compare}/> : null}
        {this.state.noRecordsFound ? 
          <div class="error"> No records Found </div>
        : null}
        <div className="card-view">
          {this.state.dataSource.map((card)=>{
            return <Card data={card} onCardSelected={this.onCardSelected} canBeSelected={this.state.selectedMovies.length < 3 && !this.state.isCompareView} detailedView = {false} />
          })}
        </div>
        {this.state.isSavedComparisonView ? 
          <div className="comparison-list-view">
          {this.state.savedComparisons.map((comparison)=>{
            return <Comparison data={comparison} viewDetails={this.viewDetails}/>
          })}
        </div>
        : null}

        {this.state.isCompareView ? 
        <div id="compareView" className= "compareView" onClick={this.compare}>
          <div className= "compareViewContent">
            {!this.state.isSavedComparisonView ? 
              <div style={{marginTop: "16px"}}>
              <input id="saveInput" type="text" className="search compare" placeholder="Name"/>
              <input type="button" className="saved-btn" value="Save" onClick={this.saveCompare}/>
            </div>
            :null}
            <div className="card-view compare">
              {this.state.selectedMovies.map((card)=>{
                return <Card data={card} onCardSelected={this.onCardSelected} canBeSelected={false} detailedView = {true} heighlighted={card.id == this.state.maxComparisonScoreId} />;
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
