// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = { duration: 0 };
  }

  _onSubmit = (event)=>{
    event.preventDefault();
    this.props.push('/timer');
  }

  _onChange = (event)=>{
    event.preventDefault();
    event.stopPropagation();
    console.log( '_onChange:', event.target.id, event.target.value );
  }

  render() {
    return (
      <div>
        <h1>SLEEP TIMER</h1>
        <form onSubmit={this._onSubmit}>
          <FormGroup controlId="duration">
            <ControlLabel>Select Duration:</ControlLabel>
              <FormControl componentClass="select" name="select" placeholder="select" onChange={this._onChange}>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
                <option value="0">Other</option>
              </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl id="hour" name="hour" type="number" label="Hour" placeholder="0" onChange={this._onChange} />
            <FormControl id="mins" name="mins" type="number" label="Minutes" placeholder="0" onChange={this._onChange} />
          </FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>Start</Button>
        </form>
      </div>
    );
  }
}

HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
