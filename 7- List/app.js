const Item = (props) => (
    <>
        <li id={props.id}><span>{props.text}</span>
            <button id={props.id} onClick={props.click}>X</button>
        </li>
    </>)



class ListItem extends React.Component {

    state = {
        people: [
            {
                id: 1,
                text: "Info 1"
            },
            {
                id: 2,
                text: "Info 2"
            },
            {
                id: 3,
                text: "Info 3"
            },
            {
                id: 4,
                text: "Info 4"
            },
            {
                id: 5,
                text: "Info 5"
            }
        ],
    }

    deleteElement = (id) => {
        let people = [...this.state.people];
        people = people.filter(person => person.id !== id);
        this.setState({
            people,
        })
    }

    render() {

        const taskList = this.state.people.map(task => <Item click={() => this.deleteElement(task.id)}
            key={task.id}
            id={task.id}
            text={task.text}
        />)

        return (
            <ul>
                {taskList}
            </ul>
        )
    }
}

ReactDOM.render(<ListItem />, document.getElementById('root'))