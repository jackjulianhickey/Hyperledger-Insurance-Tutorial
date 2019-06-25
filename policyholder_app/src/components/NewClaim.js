import React, { Component } from 'react';
import NewClaimForm from './NewClaimForm'
import PropTypes from 'prop-types';


class NewClaim extends Component {
    state = {
        claimValue: '',
        claimDescription: '',
        assetID: ''
    }

    // Handles submit
    onSubmit = (e) => {
        e.preventDefault();
        this.props.newClaim(this.state.assetID, this.state.claimValue, this.state.claimDescription);
        this.setState({ assetID: '', claimValue: '', claimDescription: '' });
    }

    // Handles form changes
    onChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div >
                <h1>New Claim</h1>
                <NewClaimForm onSubmit={this.onSubmit} onChange={this.onChange}
                    assetID={this.state.assetID} claimValue={this.state.claimValue}
                    claimDescription={this.state.claimDescription} assets={this.props.assets} />
            </div>
        );
    }

}

//PropTypes
NewClaim.propTypes = {
    newClaim: PropTypes.func.isRequired,
    assets: PropTypes.array.isRequired
}

export default NewClaim