import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ViewInsuranceOffers from "./ViewInsuranceOffers"

class UserAssetsItems extends Component {

    // Creates the element based on insurance status
    createInsuranceStatus = () => {

        let status;
        
        if (this.props.asset.insured === true) {
            status = "Insured"
        } else {
            status = (<ViewInsuranceOffers insuranceOffers={this.props.insuranceOffers} acceptInsuranceOfferFunc={this.props.acceptInsuranceOfferFunc}
                            asset={this.props.asset} />)
        }
        return status
    }

    render() {
        let assetStyle = {
            card: {
                display: 'inline-block',
                background: '#333',
                width: '350px',
                height: '160px',
                textAlign: 'left',
                padding: '20px',
                margin: '20px',
                border: '5px solid #333',
                color: 'white'
            }
        }

        return (
            <div style={assetStyle.card}>
                <p>Description: {this.props.asset.assetType}</p>
                <p> Value: {this.props.asset.value}</p>
                {this.createInsuranceStatus()}
            </div>

        )
    }

}

//PropTypes
UserAssetsItems.propTypes = {
    asset: PropTypes.object.isRequired,
    insuranceOffers: PropTypes.array.isRequired,
    acceptInsuranceOfferFunc: PropTypes.func.isRequired
}

export default UserAssetsItems