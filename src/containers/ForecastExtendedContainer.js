import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, null)(ForecastExtendedContainer);