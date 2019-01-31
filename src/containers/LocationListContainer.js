import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount() {
        const { cities, city } = this.props;
        this.props.setWeather(cities);
        this.props.setCity(city);
    }
    
    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity:PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)}); //sin destructuring sería igual a: state => ({city: state.city})

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);