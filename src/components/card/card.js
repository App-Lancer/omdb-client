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
        let checkBox = event.target;
        checkBox.classList.toggle('active')
        console.log(checkBox.classList.contains('active'))
        this.props.onCardSelected(this.data, checkBox.classList.contains('active'));
    }

    render() {
        return(
            <div className="card">
                <div className="poster">
                    <img src={this.props.data.poster} style={{objectFit: 'cover'}}/>
                    <div className="checkBox" disabled={true}>
                        <div className="checkBox-fill" onClick={this.toggleCheckBox}></div>
                    </div>
                </div>
                <div className="details">
                    <div className="rating">
                        <i class="fa fa-star star"></i>
                        {this.props.data.imdbRating}
                    </div>
                    <div className="type">
                        {this.props.data.type}
                    </div>
                </div>
                <div className="title">
                    {this.props.data.title}
                </div>
                <div className="plot">
                    {this.props.data.plot}
                </div>
            </div>
        )
    }

}