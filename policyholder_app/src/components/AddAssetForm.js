import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddAssetForm extends Component {

    render() {
        // Styling
        const style = {
            formComponentsStyle: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'left',
                marginTop: '10px',
                marginLeft: '10px',
                padding: '10px',
                width: '80%'
            },
            submitStyle: {
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
            formStyle: {
                display: 'block',
                background: '#333',
                padding: '10px',
                margin: '10px'
            }
        }

        return (
            <form onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div>
                    <select
                        type={"text"}
                        name={"assetType"}
                        style={style.formComponentsStyle}
                        placeholder={"Select asset type"}
                        value={this.props.assetType}
                        onChange={this.props.onChange}>
                        <option value={"DEFAULT"}>Select asset type</option>
                        <option value={"HOUSE"}>House</option>
                        <option value={"CAR"}>Car</option>
                        <option value={"PHONE"}>Phone</option>
                    </select>
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"value"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter value"}
                        value={this.props.value}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"durationInMonths"}
                        style={style.formComponentsStyle}
                        placeholder={"Enter how long you want this asset insured for"}
                        value={this.props.durationInMonths}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={style.submitStyle}
                    />
                </div>
            </form>
        );
    }

}

//PropTypes
AddAssetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    assetType: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    durationInMonths: PropTypes.string.isRequired
}

export default AddAssetForm