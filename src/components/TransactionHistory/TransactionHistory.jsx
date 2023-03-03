import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items})=>{
    return ( <table className={css.transactionhistory}>
    <thead className={css.tablethead}>
      <tr>
        <th className={css.tablename}>Type</th>
        <th className={css.tablename}>Amount</th>
        <th className={css.tablename}>Currency</th>
      </tr>
    </thead>
  
    <tbody >
        {items.map(({id, type, amount, currency})=>
       <tr  key = {id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr> )
      }
     
    </tbody>
  </table>)
}
TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,

        }).isRequired,
    ).isRequired,
}