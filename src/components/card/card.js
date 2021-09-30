import { Component } from 'react'; 
import './card.css';
import { CardData } from './controller'

export default class Card extends Component {

    constructor (props){
        super(props);
        this.state = { 
            isSelected: false
        }
        this.toggleCheckBox = this.toggleCheckBox.bind(this);
    }

    toggleCheckBox(event){
        this.setState({
            isSelected: !this.state.isSelected
        }, ()=>{
            this.props.data.isSelected = this.state.isSelected
            this.props.onCardSelected(this.props.data, this.state.isSelected);
        });
        let checkBox = document.getElementById(`${this.props.data.id}_checkbox`);
        checkBox.classList.toggle('active')
    }

    render() {
        let canBeSelected = this.props.canBeSelected || this.props.data.isSelected
        return(
            <div onClick={this.toggleCheckBox} className={this.props.detailedView ? (this.props.heighlighted ? "card detailed heighlighted" : "card detailed") : "card"}>
                <div className="poster">
                    <img src={this.props.data.poster} style={{objectFit: 'cover'}}/>
                    <div id = {`${this.props.data.id}_checkbox`} className={canBeSelected ? (this.props.data.isSelected ? "checkBox active" : "checkBox") : "checkBox disabled"}>
                        <div className="checkBox-fill"></div>
                    </div>
                </div>
                <div className="details">
                    <div className="rating">
                        <i className="fa fa-star star"></i>
                        {this.props.data.imdbRating}
                    </div>
                    <div className="type">
                        {this.props.data.type}
                    </div>
                </div>
                <div className="title">
                    {this.props.data.title}
                </div>
                <div className={"plot" + (this.props.detailedView ? " detailed" : "")}>
                    {this.props.data.plot}
                </div>
                {this.props.detailedView ? 
                <div className="detailsView">
                    <div>
                        Genre
                    </div>
                    <div className="detail">
                        {this.props.data.genre}
                    </div>
                    <div>
                        Released
                    </div>
                    <div className="detail">
                        {this.props.data.released}
                    </div>
                    <div>
                        Language
                    </div>
                    <div className="detail">
                        {this.props.data.language}
                    </div>
                    <div>
                        Awards
                    </div>
                    <div className="detail">
                        {this.props.data.awards}
                    </div>
                    <div>
                        Rated
                    </div>
                    <div className="detail">
                        {this.props.data.rated}
                    </div>
                    <div>
                        Rated
                    </div>
                    <div className="detail">
                        {this.props.data.rated}
                    </div>
                </div> : null}
            </div>
        )
    }

}