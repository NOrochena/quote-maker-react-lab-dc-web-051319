import React from 'react';
import {connect} from 'react-redux'
import {removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{Render Quote Content}</p> */}
          <p>{props.quote.content}</p>
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.upvoteQuote(props.quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvoteQuote(props.quote.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeQuote(props.quote.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;

  const mapStateToProps = (state, props) => {
    return {quote: state.quotes[state.quotes.findIndex(quote => quote.id === props.quoteId)]}
  }

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(QuoteCard);
