const BtnMin = (props) => {
    return (
        <button 
            disabled = {props.shoppingCart ? false : true} onClick={props.click}> {props.txt}
        </button>
    )
}

const BtnAdd = (props) => {
    return (
        <button 
            disabled = {props.shoppingCart === props.number ? true : false} onClick={props.click}> {props.txt}
        </button>
    )
}


class App extends React.Component {
    state = {
        avaliableProducts: 7,
        shoppingCart: 1,
    }

    handleCounterAdd = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1,
            
        })
    }

    handleCounterMin = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }

    handleAvaliableProducts = () => {
        this.setState({
            avaliableProducts: this.state.avaliableProducts - this.state.shoppingCart,
            shoppingCart: 0,
        })
        console.log('ok')
    }

    render() {
        const {shoppingCart, avaliableProducts} = this.state;
        return ( 
        <>
            <BtnMin click= {this.handleCounterMin} shoppingCart = {shoppingCart} txt="-"/>
            <div style={shoppingCart===0 ? {opacity : 0.3} : {}}> {shoppingCart} </div> 
            <BtnAdd click = {this.handleCounterAdd} shoppingCart = {shoppingCart} number = {avaliableProducts} txt="+"/>
            {avaliableProducts > 0 && <button onClick = {this.handleAvaliableProducts} >Kup</button>}
            <p>Dostępne produkty: {avaliableProducts}</p>
        </>
        )

    }
}

ReactDOM.render( <App/> , document.getElementById('root'));