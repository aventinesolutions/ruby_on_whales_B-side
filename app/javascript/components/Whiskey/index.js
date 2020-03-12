import React from 'react';
import { AccountContext } from "../../context/AccountContext";
import ReactImageAppear from 'react-image-appear';
import './styles.scss';

export default ({ id, description, price, photoUrl }) => 
  <AccountContext.Consumer>
    {
      ({ account_id }) => 
        <div className='whiskey-container' key={id}>
          <div className='whiskey-description'>{description}</div>
          <div className='whiskey-price'>Price: <span>{price}</span></div>
          <ReactImageAppear
            className="whiskey-photo"
            src={photoUrl}
            placeholder
            animation='bounceInDown'
            animationDuration='2s'
          />
          <div style={{ display: 'none' }}>Account ID: {account_id}</div>
        </div>
			
    }
  </AccountContext.Consumer>
;
