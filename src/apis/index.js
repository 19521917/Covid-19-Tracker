import axios from "axios";
import { Highcharts } from "highcharts/modules/map";

export const getCountries = () =>
  axios.get("https://api.covid19api.com/countries");

export const getReportByCountry = (Slug) =>
  axios.get(`https://api.covid19api.com/dayone/country/${Slug}`);

export const getMapDataByCountryId = (countryId) =>
  import(
    `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
  );
