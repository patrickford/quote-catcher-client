import React from 'react';
import {connect} from 'react-redux';
import './SearchResults.css';
import IndividualQuotes from './IndividualQuotes';
import deleteQuote from '../actions/index';

export class SearchResults extends React.Component {
  onClick(values) {
    console.log("values: " + values)
    //return this.props
    //.dispatch(deleteQuote(values.id))
  }

  render() {
    if (this.props.searchedQuotes.length > 0) {
      const searchedQuotes = this.props.searchedQuotes[0].map((quote, index) =>
        <section key={index} className="quote-expanded">
          <h2 className="quoteText"><span>"</span>{quote.quoteString}<span>"</span></h2>
          <h4 className="searchResultsAuthor"><span>- </span>{quote.author}</h4>
          <div>
            <h3>Theme(s): {quote.theme}</h3>
          </div>
          <div>
           <a onClick={this.props.handleClick(values => 
              this.onClick(values))} href="#"><span className='fa fa-trash-o' aria-hidden='true'></span></a>
          </div>
        

        </section>
      );
      return (
        <div>
          {searchedQuotes} 
        </div>
      );
    }
    return (
     <div> 
     </div>
    );
  }
}

const mapStateToProps = state => ({
  searchedQuotes: state.quoteCatcherReducer.searchedQuotes
});

export default connect(mapStateToProps)(SearchResults);