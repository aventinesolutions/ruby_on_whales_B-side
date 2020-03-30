import React, { useState } from 'react';
import gql from 'graphql-tag';
import Whiskeys from '../Whiskeys';
import AccountContext from "../../context/AccountContext";
import './styles.scss';

export const SEARCH_WHISKEYS_QUERY = gql`
    query variables($accountId: String!, $text: String!, $ratingsFilter: String!) 
    {
      search (filter: { accountId: $accountId, text: $text, ratingsFilter: $ratingsFilter })
      {  
        id
        title
        description
        price
        photoUrl
        ratings {
          id
          accountId
          quality
          stars
        }
      }
    }
`;

const Search = () => {
  const [text, setText] = useState("");
  const [ratingsFilter, setRatingsFilter] = useState("");

  return (
    <AccountContext.Consumer>
      {
        ({ account_id }) =>
          <div className="whiskeys-container">
            <div className="search-container">
              <h2>Search</h2>
              <input id="search"
                type="text"
                value={text}
                onChange={event => setText(event.target.value)} />
              <select onChange={event => setRatingsFilter(event.target.value)}>
                <option value="">Any or no ratings</option>
                <option value="minimum_1star">Minimum 1 Star</option>
                <option value="minimum_2stars">Minimum 2 Stars</option>
                <option value="minimum_3stars">Minimum 3 Stars</option>
                <option value="minimum_4stars">Minimum 4 Stars</option>
                <option value="minimum_5stars">Minimum 5 Stars</option>
              </select>
            </div>
            { text.length > 2 ? <Whiskeys
              query={SEARCH_WHISKEYS_QUERY}
              variables={{ accountId: account_id, text, ratingsFilter }} /> : null
            }
          </div>
      }
    </AccountContext.Consumer>
  );
};

Search.displayName = 'Search';

export default Search;
