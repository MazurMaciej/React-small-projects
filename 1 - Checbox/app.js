
const ValidationMessage = (props) => <p>{props.txt}</p>

class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }

    handleMessage = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }

    displayMessage = () => {
        const {isFormSubmitted, isConfirmed} = this.state;
        
        if(isFormSubmitted){
        if(!isConfirmed) {
            return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!"/>
        } else {
            return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy"/>        
        }
    } else {return null};
}

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.isFormSubmitted){
        this.setState({
            isFormSubmitted: true,
        })
    }
    }

    render() {
        return (
            <>
                <h1>Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" onClick = {this.handleMessage} ></input>
                    <label htmlFor="age">Mam co najmniej 16 lata</label>
                    <br/>
                    <button type="submit">Kliknij</button>
                </form>
                {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById('root'));