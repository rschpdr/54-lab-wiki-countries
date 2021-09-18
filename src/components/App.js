import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';

function App() {
  // Definindo um state vazio
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Atualiza o state para conter os países do arquivo JSON assim que o componente App for renderizado na tela
  useEffect(() => {
    setLoading(true);
    // Buscando a informação de uma API externa usando uma requisição HTTP
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries([...response.data]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <CountriesList countries={countries} />
            )}
          </div>
          <div className="col-7">
            <Route
              path="/:alpha3Code"
              render={(routeProps) => (
                <CountryDetail {...routeProps} countries={countries} />
              )}
            ></Route>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
