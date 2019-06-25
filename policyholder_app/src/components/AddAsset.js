import React, { Component } from 'react';
import AddAssetForm from './AddAssetForm'
import PropTypes from 'prop-types';


class AddAsset extends Component {

  // The state stores the form variables
  state = {
    assetType: '',
    value: '',
    durationInMonths: ''
  }

  // Handles the submit. Passes the form varaibles to the function addAsset in App.js
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addAsset(this.state.assetType, this.state.value, this.state.durationInMonths);
    this.setState({ assetType: '', value: '', durationInMonths: '' });
  }

  // Handles when information is changed in the form storing it in the state
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div>
      <h1>Add New Asset</h1>
        <AddAssetForm onSubmit={this.onSubmit} onChange={this.onChange} assetType={this.state.assetType} value={this.state.value} durationInMonths={this.state.durationInMonths} />
      </div>
    );
  }

}

//PropTypes
AddAsset.propTypes = {
  addAsset: PropTypes.func.isRequired
}

export default AddAsset