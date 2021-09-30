import { Component } from "react";
import './comparison.css';
import { getComparison } from "../../controller";

export default class Comparison extends Component{

    constructor(props){
        super(props);
        this.onFetch = this.onFetch.bind(this);
    }

    onFetch(event){
        console.log("Fetch data");
        var target = event.target;
        console.log(target.id);
        getComparison(target.id)
        .then(movies=>{
            console.log(movies);
            this.props.viewDetails(movies);
        })
    }

    render(){
        return(
            <div className="comparison-row">
                <div className="comparison-id">{this.props.data.id}</div>
                <div className="comparison-name">{this.props.data.name}</div>
                <input type="button" className="view-details-btn" value="View Details" id={this.props.data.id} onClick={this.onFetch}/>
            </div>
        )
    }
}