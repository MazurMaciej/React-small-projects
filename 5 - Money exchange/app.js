const Current = (props) => {
    return (
    <div>
        {props.title}
        {props.amount<=0 ? "" : (props.amount/props.ratio).toFixed(2)}
    </div>
    )
};

class App extends React.Component {

    state = {
        amount: "",
        product: "gas"
    }

    
    currencies = [
        {
          id: 1,
          name: 'dollar',
          ratio: 3.6,
          title: 'Wartość w dolarach: '
        },
        {
          id: 2,
          name: 'euro',
          ratio: 4.1,
          title: 'Wartość w euro: '
        },
        {
          id: 3,
          name: 'pound',
          ratio: 4.55,
          title: 'Wartość w funtach: '
        },
      ]

    handleChange = (e) => {
        this.setState({
            amount: e.target.value,
        })
    } 

    handleSelect = (e) => {
        this.setState({
            product: e.target.value,
        })
    } 

    insertSuffix = (select) => {
        if(select === "electricity") return <em> kWH</em>
        else if(select === "gas") return <em> litrów</em>
        else if(select === "oranges") return <em> kilogramów</em>
        else return null
    }

    render(){

        const currencies = this.currencies.map(current => (
        <Current 
            key={current.id} 
            title={current.title} 
            amount={this.state.amount} 
            ratio = {current.ratio}
            name={current.name}
            />
        ))

        return(
            <div>
                <label> Wybierz produkt:
                    <select value={this.state.product} onChange={this.handleSelect}>
                        <option value="electricity">prąd</option>
                        <option value="gas">benzyna</option>
                        <option value="oranges">pomarancze</option>
                    </select>
                </label>
                <br/>
                <label>
                    <input 
                    type = "number"
                    value = {this.state.amount}
                    onChange = {this.handleChange}/>
                    {this.insertSuffix(this.state.product)}
                </label>
                {currencies}
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'))