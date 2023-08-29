import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;

    return <p className={css.notification}>{message}</p>;
  }
}

export default Notification;
