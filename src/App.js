import { useState } from 'react';
import './App.css';
import FetchQuoteSimpsons from './components/FetchQuoteSimpsons';
import axios from 'axios';

function App() {

  const card = {
    quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: 'Lisa Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
  };
  const [quoteSimpsons, setQuoteSimpsons] = useState(card);
  

  const getQuoteSimpsons = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {setQuoteSimpsons(data[0])
    
    });
  }
  return (
    <div className="App">
      <FetchQuoteSimpsons quoteSimpsons={quoteSimpsons}/>
      <button ClassName="quoteButton" type="button" onClick={getQuoteSimpsons}>Preach Sims</button>
    </div>
  );
}

export default App;
