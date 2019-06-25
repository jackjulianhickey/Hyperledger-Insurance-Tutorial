import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ViewInsuranceOffersItems extends Component {

    acceptOffer = () => {
        this.props.acceptInsuranceOfferFunc(this.props.insuranceOffer.id)
    }

    createSelectItems() {
        const style = {
            buttonStyle: {
                flex: '1',
                background: 'white',
                color: 'black',
                borderRadius: '4px',
                padding: '3px',
                margin: '3px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: '80%'
            },
            insuranceOffer: {
                borderBottom: '1px solid black',
                padding: '10px',
                color: 'white'
            }
        }

        let asset;
        let insuranceCompany = this.props.insuranceOffer.insuranceCompany.split('#')[1]
        let assetID = this.props.insuranceOffer.privateAsset.split('#')[1]
        // If the offer is pending and the insurance offer is for the asset
        if ((this.props.insuranceOffer.status === "pending") && (assetID == this.props.asset.id)) {
            asset = (<div style={style.insuranceOffer}>
                <p>Insurance Company: {insuranceCompany}</p>
                <p>Monthly Cost: {this.props.insuranceOffer.monthlyCost}</p>
                <button onClick={this.acceptOffer} style={style.buttonStyle}>Accept</button>
            </div>)
        }

        return asset
    }

    render() {
        return (
            <div>
                {this.createSelectItems()}
            </div>
        );
    }

}

//PropTypes
ViewInsuranceOffersItems.propTypes = {
    insuranceOffer: PropTypes.object.isRequired,
    acceptInsuranceOfferFunc: PropTypes.func.isRequired,
    asset: PropTypes.object.isRequired
}

export default ViewInsuranceOffersItems