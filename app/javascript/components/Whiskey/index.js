import React from 'react';
import PropTypes from 'prop-types';

import { AccountContext } from "../../context/AccountContext";
import ReactImageAppear from 'react-image-appear';
import './styles.scss';

const Whiskey = ({ id, title, description, price, photoUrl }) =>
  <AccountContext.Consumer>
    {
      ({ account_id }) =>
        <div className='whiskey-container' key={id}>
          <h2 className='whiskey-title'>{title}</h2>
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

Whiskey.displayName = 'Whiskey';
Whiskey.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  photoUrl: PropTypes.string
};

export default Whiskey;
