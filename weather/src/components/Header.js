import { useState } from "react";
import { useFormik } from 'formik'
import Select from "react-select";
import cityJSON from './citiesJSON.json';

function Header({ city, changeCity }) {
    const [cities] = useState(cityJSON);

  const { values, handleChange } = useFormik({
    initialValues: {
      city: "Ankara",
    },
  });

  const optionsCity = [
    { value: "artvin", label: "artvin" },
    { value: "antalya", label: "antalya" },
    { value: "adıyaman", label: "adıyaman" },
    { value: "ankara", label: "ankara" },
    { value: "eskişehir", label: "eskişehir" },
    { value: "istanbul", label: "istanbul" },
  ];

  const handleCahnged = (e) => {
    changeCity(e.value);
  };

  return (
    <div>
      <Select
        className="dropdown"
        options={optionsCity}
        onChange={handleCahnged}
      >
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default Header;
