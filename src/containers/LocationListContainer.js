import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount() {
        const { setSelectedCity, setWeather, cities, city } = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }
    
    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
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
    setSelectedCity:PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
/*const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});*/

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)}); //sin destructuring sería igual a: state => ({city: state.city})

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);