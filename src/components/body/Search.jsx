import React, { Component } from "react";
import "../styles/body.css";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            text : e.target.value
        })
        // console.log(e.target.value.toLowerCase());
        this.props.searchNotes(e.target.value.toLowerCase());
    }
    render() {
        return (
            <div className="search">
                <form action="" className="search-form ">
                    <input className="search-form__input" type="text" placeholder="Search Notes" value={this.state.text} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default Search;
