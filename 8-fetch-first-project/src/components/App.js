import React from 'react';
import Word from './Word'

class App extends React.Component {
  state = { 
    words: [],
    isLoaded: false,
   }

   componentDidMount() {
     setTimeout(this.fetchData, 2000);
   }

   fetchData = () => {
    fetch('data/words.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        words: data.words,
        isLoaded: true,
      })
    })
   }
  

  render() { 
    const words = this.state.words.map(word=>(
      <Word
      key={word.id}
      en={word.en}
      pl={word.pl}
      />
    ))
    return ( 
      <>
        <h1>Fetch data</h1>
        <ul>
          {this.state.isLoaded ? words : "Loading"}
        </ul>
      </>
     );
  }
}
 
export default App;


