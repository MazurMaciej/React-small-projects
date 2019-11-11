import React from 'react';

class TestComponent extends React.Component {
    state = {
        text: "",
    }

    handleChange = (event) => {
        const info = event.target.value.toUpperCase();
        this.setState({
            text: info,
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <input 
                    onChange={this.handleChange} placeholder="Here write something"
                    value={this.state.text}
                />
            </>
        )
    }
}

export default TestComponent;


