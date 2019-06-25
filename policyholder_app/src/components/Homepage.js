import React, { Component } from 'react'
import UserAssets from './UserAssets'
import PropTypes from 'prop-types';
import AddAsset from "./AddAsset"
import Profile from "./Profile"
import NewClaim from "./NewClaim"

class Homepage extends Component {

  render() {
    let style = {
      UserAssetsStyle: {
        position: 'relative',
        top: '10px',
        width: '58%',
        borderRight: '1px solid black',
      },
      AddAssetStyle: {
        position: 'absolute',
        top: '290px',
        width: '30%',
        height: '34%',
        borderBottom: '1px solid black',
        left: '59%'
      },
      ProfileStyle: {
        position: 'absolute',
        top: '100px',
        left: '59%',
        width: '30%',
        borderBottom: '1px solid black'
      },
      NewClaimStyle: {
        position: 'absolute',
        top: '610px',
        width: '30%',
        height: '34%',
        borderBottom: '1px solid black',
        left: '59%'
      }
    }

    return (
      <div>
        <div style={style.UserAssetsStyle}>
          <UserAssets assets={this.props.assets}
          insuranceOffers={this.props.insuranceOffers} acceptInsuranceOfferFunc={this.props.acceptInsuranceOfferFunc}/>
        </div>
        <div style={style.AddAssetStyle}>
          <AddAsset addAsset={this.props.addAsset} />
        </div>
        <div style={style.ProfileStyle}>
          <Profile user={this.props.user} />
        </div>
        <div style={style.NewClaimStyle}>
          <NewClaim newClaim={this.props.newClaimFunc} assets={this.props.assets} />
        </div>
      </div>);

  }
}

//PropTypes
Homepage.propTypes = {
  assets: PropTypes.array.isRequired,
  addAsset: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  newClaimFunc: PropTypes.func.isRequired,
  insuranceOffers: PropTypes.array.isRequired,
  acceptInsuranceOfferFunc: PropTypes.func.isRequired
}

export default Homepage