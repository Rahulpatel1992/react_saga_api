import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.getNews}>Press to see News</button>
    );
  }

};

const mapDispatchToProps = {
  getNews: getNews,
};

Button = connect(null,mapDispatchToProps)(Button);

export default Button;
