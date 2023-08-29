import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <div className={css.section}>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
