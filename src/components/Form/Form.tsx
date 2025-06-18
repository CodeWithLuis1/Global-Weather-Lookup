import { countries } from "../../data/countries";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">City: </label>
        <input
          id="City"
          type="text"
          name="city"
          placeholder="Enter city name"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="city">Country: </label>
        <select name="" id="">
          <option value="">--Select a country--</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Consult weather" />
    </form>
  );
}
