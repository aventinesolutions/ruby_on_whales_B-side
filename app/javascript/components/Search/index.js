import React, { useState } from 'react';
import gql from 'graphql-tag';
import Whiskeys from '../Whiskeys';
import { AccountContext } from "../../context/AccountContext";
import './styles.scss';

const Search = () => {
  const [text, setText] = useState("");

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
            </div>
            { text.length > 2 ? <Whiskeys query={gql`
              {
                 search(filter: {accountId: "${account_id}", text: "${text}"}) {
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
          `} /> : null
            }
          </div>
      }
    </AccountContext.Consumer>
  );
};

Search.displayName = 'Search';

export default Search;
