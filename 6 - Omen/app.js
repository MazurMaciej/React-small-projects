class App extends React.Component {
    state = {
        omen: ["pierwsza", "druga", "trzecia", "czwarta", "piąta"],
        chosedOmen: "",
        inputValue: "",
    }

    handleDisplayOmen = () => {
        const draw = Math.floor(Math.random() * this.state.omen.length);
        const chosedOmen = this.state.omen[draw];

        this.setState({
            chosedOmen,
        })
    }

    handleInputChange = e => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleAddingOmen = () => {
        const omen = this.state.inputValue;
        const omenArray = [...this.state.omen];
        omenArray.push(omen)
        this.setState({
            omen: omenArray,
            inputValue: "",
        })
        
    }

    render() {
        return (
            <>
                <button onClick={this.handleDisplayOmen}>Zobacz wrózbę</button>
                <p>{this.state.chosedOmen}</p>
                <label>
                    <input onChange={this.handleInputChange} value={this.state.inputValue}></input>
                    <button onClick={this.handleAddingOmen}>Dodaj wrózbę</button>
                </label>
            </>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))