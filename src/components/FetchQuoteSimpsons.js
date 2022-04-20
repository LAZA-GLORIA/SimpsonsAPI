import './FetchQuoteSimpsons.css';

function FetchQuoteSimpsons({ quoteSimpsons }) {
  return (
    quoteSimpsons && (
      <figure className="QuoteCard">
        <h1> {quoteSimpsons.character} </h1>
        <img src={quoteSimpsons.image} alt={"img"} />
        <p> {quoteSimpsons.quote} </p>
  </figure>
    )
  );
}

export default FetchQuoteSimpsons;