import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="list-group">
      {props.countries.map((countryObj) => {
        return (
          // Para usuários Mac
          // <Link
          //   key={countryObj.alpha3Code}
          //   className="list-group-item list-group-item-action"
          //   to={`/${countryObj.alpha3Code}`}
          // >
          //   {countryObj.flag} {countryObj.name.common}
          // </Link>

          // Para usuários Windows/Linux
          <Link
            key={countryObj.alpha3Code}
            className="list-group-item list-group-item-action"
            to={`/${countryObj.alpha3Code}`}
          >
            <img
              className="me-3"
              src={`https://www.countryflags.io/${countryObj.alpha2Code}/flat/32.png`}
              alt={`Flag of ${countryObj.name}`}
            />

            {countryObj.name}
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
