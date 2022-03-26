// arquivo UserProfile.js
import React from 'react';
import PropTypes from 'propTypes';

class UserName extends React.Component {
  render () {
    const name = this.props.name

  return (<span classname='name'>{name}</span>)
  }
}

UserName.propTypes = {
  name: PropTypes.string
}

export default UserName;