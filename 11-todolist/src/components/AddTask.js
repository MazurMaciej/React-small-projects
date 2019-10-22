import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10);
    
    state = {
        text: "",
        checked: false,
        date: this.minDate,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    handleClick = () => {
        const {text, checked, date} = this.state;
        const add = this.props.add(text, date, checked);
        if(add) {
            this.setState({
                text:"",
                checked: false,
                date: this.mindDate
            })
        }
    }

    render() {
        let maxDate = this.minDate.slice(0,4)*1+1;
        maxDate = maxDate+"-12-31"

        return (
            <div className="form">
                <input type="text" placeholder="Dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <label htmlFor="date">Do kiedy zrobione zostanie zadanie: </label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}></input>
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        )
    }
}

export default AddTask;