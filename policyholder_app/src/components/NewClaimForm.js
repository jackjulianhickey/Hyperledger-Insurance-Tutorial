import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddAsset from './AddAsset';
// import Select from 'react-select'


class NewClaimForm extends Component {

    createSelectItems() {
        // Store insured items to an array
        let items = [];
        // Set the default display value
        items.push(<option key="default" value="">Select asset type</option>)
        for (let i = 0; i < this.props.assets.length; i++) {
            // If the asset is insured
            if (this.props.assets[i].insured === true) {
                // Add this as an option to the array
                items.push(<option key={i} value={this.props.assets[i].id}>{this.props.assets[i].assetType}</option>);
            }
        }
        // Return the insured assets
        return items;
    }

    render() {

        const style = {
            formStyle: {
                display: 'block',
                background: '#333',
                margin: '10px',
                padding: '10px'
            },
            formItemsStyle: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'left',
                marginTop: '10px',
                marginLeft: '10px',
                padding: '10px',
                width: '80%'
            },
            formSubmitStyle: {
                flex: '1',
                background: 'white',
                color: 'black',
                borderRadius: '4px',
                padding: '3px',
                margin: '3px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: '80%'
            }
        }

        return (
            <form onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div>
                    <select
                        type={"text"}
                        name={"assetID"}
                        style={style.formItemsStyle}
                        placeholder={"Select an insured asset"}
                        value={this.props.assetID}
                        onChange={this.props.onChange}>
                        {this.createSelectItems()}
                    </select>
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"claimValue"}
                        style={style.formItemsStyle}
                        placeholder={"Enter claim value"}
                        value={this.props.claimValue}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"claimDescription"}
                        style={style.formItemsStyle}
                        placeholder={"Please describe what you are claiming for"}
                        value={this.props.claimDescription}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={style.formSubmitStyle}
                    />
                </div>
            </form>

        );
    }

}
//PropTypes
NewClaimForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    assetID: PropTypes.string.isRequired,
    claimValue: PropTypes.string.isRequired,
    claimDescription: PropTypes.string.isRequired,
    assets: PropTypes.array.isRequired
}

export default NewClaimForm