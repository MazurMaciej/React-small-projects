class App extends React.Component {
    state = {
        items: [
          { id: 1, name: "herbata", active: true },
          { id: 2, name: "ziemniaki", active: false },
          { id: 3, name: "kasza", active: false },
          { id: 4, name: "zupa wodna", active: true },
          { id: 5, name: "wrzątek", active: false },
          { id: 6, name: "chleb", active: false },
        ],
      }

    handleChangeStatus = (id) => {
        console.log(id)
        const items = this.state.items.map(item => {
            if(id === item.id) {
                item.active = !item.active;
            }
            return item
        })
        this.setState({
            items: items
        })
    }

    render() {
        const {items} = this.state
        return(
            <>
                <Header items={items}/>
                <ListItems items={items} changeStatus={this.handleChangeStatus}/> 
            </>
        )
    }
}