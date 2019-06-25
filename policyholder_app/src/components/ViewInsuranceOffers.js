import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewInsuranceOffersItems from './ViewInsuranceOffersItems'
import Modal from "react-responsive-modal";


class ViewInsuranceOffers extends Component {

    state = {
        openPopup: false
    }

    // Opens popup
    onOpenPopup = () => {
        this.setState({ openPopup: true })
    }

    // Closes popup
    onClosePopup = () => {
        this.setState({ openPopup: false })
    }



    render() {
        const popupStyle = {
            contentStyle: {
                display: 'inline-block',
                position: 'relative',
                background: '#333',
                width: '500px',
                height: '200px',
                padding: '20px',
                border: '5px solid #333',
                overflow: 'auto',
                boxShadow: '8px 8px 4px black'
            },
            buttonStyle: {
                flex: '1',
                background: 'white',
                color: 'black',
                borderRadius: '4px',
                padding: '3px',
                margin: '3px',
                cursor: 'pointer',
                fontSize: '16px'
            }
        };

        const { openPopup } = this.state

        return (
            <div>
                <button onClick={this.onOpenPopup} style={popupStyle.buttonStyle}>View Insurance Offers</button>
                <Modal style={popupStyle.contentStyle} open={openPopup} onClose={this.onClosePopup}>
                    <div style={popupStyle.contentStyle}>
                        <div>
                            {this.props.insuranceOffers.map((insuranceOffer) => (
                                <ViewInsuranceOffersItems key={insuranceOffer.id} insuranceOffer={insuranceOffer}
                                    acceptInsuranceOfferFunc={this.props.acceptInsuranceOfferFunc} asset={this.props.asset} />
                            ))}
                        </div>
                    </div>
                </Modal>

            </div>
        );
    }

}

//PropTypes
ViewInsuranceOffers.propTypes = {
    insuranceOffers: PropTypes.array.isRequired,
    acceptInsuranceOfferFunc: PropTypes.func.isRequired,
    asset: PropTypes.object.isRequired
}

export default ViewInsuranceOffers