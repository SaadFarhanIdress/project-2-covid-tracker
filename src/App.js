import bannerImage from './image/banner.png';
import { Cards, Chart, CountryPicker } from "./components/store";
import styles from './App.module.css';
import { fetchData } from "./api";
import React from 'react';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={bannerImage} alt='COVID-19' />
        <Cards data={data} /><br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <p className={styles.typo} style={{textAlign: 'center'}}>Made with <img className="image" width="20" height="20" alt="Heart" src="https://cdn.iconscout.com/icon/free/png-256/heart-1767836-1502416.png" /> by <a href="http://www.github.com/SaadFarhanIdress">Saad Farhan</a>
      <br />
      Don't forget to star my repository :) <br />Link: <a href="https://github.com/SaadFarhanIdress/project-2-covid-tracker">https://github.com/SaadFarhanIdress/project-2-covid-tracker</a></p>
        </div>
    );
  }
}

export default App;
