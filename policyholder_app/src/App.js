import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Connection from './Connection'
import Homepage from './components/Homepage'
import ViewInsuranceOffers from './components/ViewInsuranceOffers'

class App extends Component {

  state = {
    name: "joe",
    assets: [],
    user: {},
    selectedAsset: "",
    insuranceOffers: []
  }

  componentWillMount() {
    this.getAssets()
    this.getUserProfile()
    this.getInsuranceOffers()
  }

  getAssets = () => {
    // Search for the users assets
    Connection.search('queries/selectAssetByPolicyholder?policyholder=resource%3Aorg.acme.riskanalysis.Policyholder%23' + this.state.name)
      .then(data => {
        //store the assets in the assets array
        this.setState({
          assets: data
        })
        // Retrieve the user object from the state
        let user = this.state.user
        // Add the number of assets to the object
        user.numAssets = this.state.assets.length
        // Update the state
        this.setState({
          user
        })

        let assets = this.state.assets
        for (let i = 0; i < assets.length; i++) {
          // Set insurance status
          if (assets[i].insuranceCompany == null) {
            assets[i].insured = false
          }
          else {
            assets[i].insured = true
          }
        }
        // Update the state
        this.setState({
          assets: assets
        })

      })
  }

  getUserProfile = () => {
    // Send get request for user
    Connection.search('Policyholder/joe')
      .then(data => {
        // Retrieve the user object from the state
        let user = this.state.user
        // Add details to the user object
        user.name = data.name
        user.balance = data.balance
        user.noClaimsYears = data.noClaimsYears
        // Update the state
        this.setState({
          user: user
        })
      })
  }

  addAsset = (assetType, value, durationInMonths) => {
    // Create the data object
    const data = {
      "$class": "org.acme.riskanalysis.CreateNewAsset",
      "policyholder": "org.acme.riskanalysis.Policyholder#" + this.state.name,
      "assetType": assetType,
      "value": Number(value),
      "durationInMonths": Number(durationInMonths)
    }
    // Send this data to the Hyperledger Network
    Connection.create('CreateNewAsset', data)
      .then((err) => {
        if (err) {
          console.log(err)
        }
        // Get the new asset
        this.getAssets()
      })

  }

  newClaim = (assetID, claimValue, claimDescription) => {
    const data = {
      "$class": "org.acme.riskanalysis.CreateClaim",
      "privateAsset": "org.acme.riskanalysis.PrivateAsset#" + assetID,
      "policyholder": "org.acme.riskanalysis.Policyholder#" + this.state.name,
      "description": claimDescription,
      "claimValue": claimValue
    }

    Connection.create('CreateClaim', data)
      .then((err) => {
        if (err) {
          alert(err)
        }
        else {
          alert("Successfully submitted claim")
        }
      })
  }

  getInsuranceOffers = () => {
    Connection.search('queries/selectInsuranceOffersByPolicyholder?policyholder=resource%3Aorg.acme.riskanalysis.Policyholder%23' + this.state.name)
      .then((data) => {
        console.log(data)
        this.setState({
          insuranceOffers: data
        })
      })
  }

  acceptInsuranceOffer = (offerID) => {
    const data = {
      "$class": "org.acme.riskanalysis.AcceptInsuranceOffer",
      "offer": "resource:org.acme.riskanalysis.InsuranceOffer#" + offerID
    }
    Connection.create('AcceptInsuranceOffer', data)
    .then(() => {
      this.getAssets()
      this.getInsuranceOffers()
    })
  }


  render() {
    return (
      <Router>
        <Header />
        <Route exact path={"/"} render={props => (
          <React.Fragment>
            <h1>My Assets</h1>
            <Homepage assets={this.state.assets} addAsset={this.addAsset} user={this.state.user}
              newClaimFunc={this.newClaim} insuranceOffers={this.state.insuranceOffers} 
              acceptInsuranceOfferFunc={this.acceptInsuranceOffer}/>
          </React.Fragment>
        )}
        />

      </Router>
    );
  }
}
export default App;
