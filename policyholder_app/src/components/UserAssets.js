import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UserAssetsItems from './UserAssetsItems'

class UserAssets extends Component {

    render() {

        return (
            <div>
                {this.props.assets.map((asset) => (
                    <UserAssetsItems key={asset.id} asset={asset} selectedAsset={this.props.selectedAssetFunc} 
                    insuranceOffers={this.props.insuranceOffers} acceptInsuranceOfferFunc={this.props.acceptInsuranceOfferFunc}/>
                ))}
            </div>

        )
    }
}

//PropTypes
UserAssets.propTypes = {
    assets: PropTypes.array.isRequired,
    insuranceOffers: PropTypes.array.isRequired,
    acceptInsuranceOfferFunc: PropTypes.func.isRequired
}

export default UserAssets