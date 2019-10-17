const Dollars = (props) => <div>Wartośc w dolarach: {props.amount <= 0 ? "" : (props.amount/props.exchange).toFixed(2)}</div>
const Euros = (props) => <div>Wartośc w euro: {props.amount <= 0 ? "" : (props.amount/props.exchange).toFixed(2)}</div>



class App extends React.Component {

    state = {
        amount: "",
        ratioDolar: 3.6,
        ratioEuro: 4.2,
    }

    handleChange = (e) => {
        this.setState({
            amount: e.target.value,
        })

    }

    render(){
        return(
            <div>
                <label>
                    <input 
                    type = "number"
                    value = {this.state.amount}
                    onChange = {this.handleChange}/>
                </label>
                <Dollars 
                    exchange={this.state.ratioDolar} 
                    amount={this.state.amount}
                />
                <Euros 
                    exchange={this.state.ratioEuro} 
                    amount={this.state.amount}
                />
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))