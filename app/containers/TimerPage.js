// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button } from 'react-bootstrap';

export class TimerPage extends Component {

  _onCancel = (event)=>{
    event.preventDefault();
    this.props.push('/');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <Button onClick={this._onCancel} bsStyle="danger" bsSize="large" block>Cancel</Button>
      </div>
    );
  }
}

TimerPage.propTypes = {
    push: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
  return {
      push: (path, options) => { dispatch(push(path, options)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
