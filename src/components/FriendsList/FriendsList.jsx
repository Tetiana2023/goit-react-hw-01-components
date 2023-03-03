import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import css from './FriendsList.module.css'

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({id, avatar, name, isOnline}) => (
        <FriendItem key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}/>
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            avatar:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id:PropTypes.number.isRequired,   
        }).isRequired,
    ).isRequired,
}