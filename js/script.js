
const buutonmenu = document.getElementById("mobile-menu-btn");
const sidebar = document.getElementById("sidebar");
const navsections = Array.from(document.querySelectorAll(".nav-item"));
const sectionviews = Array.from(document.querySelectorAll("section.view"));
const country = document.getElementById("global-country");
const year = document.getElementById("global-year");
const globalcity = document.getElementById("global-city");
const butsearch = document.getElementById("global-search-btn");
const dashboardsearch = document.getElementsByClassName("dashboard-search-form")[0];
const currencyto = document.getElementById("currency-to");
const currencyfrom = document.getElementById("currency-from");
const swapbutton = document.getElementById("swap-currencies-btn");
const convertbtn = document.getElementById("convert-btn");
let isopen = false;
let countryCodeMap = {};

const citytrial = {
  AD: ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Canillo"],
  AR: ["Buenos Aires", "Bariloche", "Mendoza", "Puerto Iguazu"],
  AU: ["Sydney", "Melbourne", "Brisbane", "Gold Coast"],
  AT: ["Vienna", "Salzburg", "Innsbruck", "Graz"],
  BE: ["Brussels", "Bruges", "Antwerp", "Ghent"],
  BZ: ["Belize City", "San Pedro", "Belmopan", "Placencia"],
  BO: ["La Paz", "Sucre", "Uyuni"],
  BW: ["Gaborone", "Maun", "Kasane"],
  BR: ["Rio de Janeiro", "Sao Paulo", "Salvador", "Foz do Iguacu"],
  CA: ["Toronto", "Vancouver", "Montreal", "Quebec City"],
  CL: ["Santiago", "Valparaiso", "Valdivia"],
  CN: ["Beijing", "Shanghai", "Xi'an", "Guilin"],
  CO: ["Bogota", "Medellin", "Cartagena"],
  CR: ["San Jose", "La Fortuna", "Manuel Antonio"],
  HR: ["Zagreb", "Dubrovnik", "Split"],
  CZ: ["Prague", "Cesky Krumlov", "Karlovy Vary"],
  DK: ["Copenhagen", "Aarhus", "Odense"],
  EC: ["Quito", "Guayaquil", "Cuenca"],
  EG: ["Cairo", "Alexandria", "Luxor", "Aswan", "Sharm El Sheikh"],
  EE: ["Tallinn", "Tartu", "Parnu"],
  FO: ["Torshavn", "Klaksvik"],
  FI: ["Helsinki", "Rovaniemi", "Turku"],
  FR: ["Paris", "Nice", "Lyon", "Marseille", "Cannes"],
  DE: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
  GR: ["Athens", "Thessaloniki", "Heraklion", "Nafplio"],
  GT: ["Guatemala City", "Antigua Guatemala", "Flores", "Panajachel"],
  HN: ["Tegucigalpa", "San Pedro Sula", "Copan Ruinas"],
  HU: ["Budapest", "Debrecen", "Szeged"],
  IS: ["Reykjavik", "Akureyri", "Vik"],
  IN: ["New Delhi", "Agra", "Mumbai", "Jaipur", "Panaji"],
  ID: ["Denpasar", "Ubud", "Jakarta", "Yogyakarta"],
  IE: ["Dublin", "Galway", "Cork"],
  IM: ["Douglas", "Peel", "Ramsey"],
  IT: ["Rome", "Milan", "Florence", "Venice", "Naples"],
  JP: ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Nagoya"],
  LV: ["Riga", "Sigulda", "Jurmala"],
  LI: ["Vaduz", "Schaan", "Balzers"],
  LT: ["Vilnius", "Kaunas", "Klaipeda"],
  LU: ["Luxembourg City", "Vianden", "Esch-sur-Alzette"],
  MG: ["Antananarivo", "Toliara", "Antsirabe"],
  MT: ["Valletta", "Mdina", "St. Julian's"],
  MX: ["Mexico City", "Cancun", "Tulum", "Guadalajara"],
  MC: ["Monaco-Ville", "Monte Carlo", "Fontvieille"],
  MA: ["Marrakech", "Casablanca", "Fez", "Chefchaouen", "Tangier"],
  NL: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
  NZ: ["Auckland", "Queenstown", "Wellington"],
  NI: ["Managua", "Granada", "Leon"],
  NO: ["Oslo", "Bergen", "Tromso"],
  PY: ["Asuncion", "Ciudad del Este", "Encarnacion"],
  PE: ["Lima", "Cusco", "Arequipa"],
  PL: ["Warsaw", "Krakow", "Gdansk"],
  PT: ["Lisbon", "Porto", "Sintra", "Faro"],
  RO: ["Bucharest", "Brasov", "Sibiu"],
  RU: ["Moscow", "Saint Petersburg", "Sochi"],
  SM: ["City of San Marino", "Borgo Maggiore", "Serravalle"],
  SA: ["Riyadh", "Jeddah", "AlUla", "Abha", "Khobar"],
  RS: ["Belgrade", "Novi Sad", "Nis"],
  SG: ["Singapore"],
  SK: ["Bratislava", "Kosice", "Poprad"],
  SI: ["Ljubljana", "Bled", "Piran"],
  ZA: ["Cape Town", "Johannesburg", "Durban"],
  KR: ["Seoul", "Busan", "Jeju", "Incheon"],
  ES: ["Madrid", "Barcelona", "Seville", "Valencia", "Malaga"],
  SE: ["Stockholm", "Gothenburg", "Malmo"],
  CH: ["Zurich", "Geneva", "Interlaken", "Lausanne", "Lucerne"],
  TH: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya", "Krabi"],
  TR: ["Istanbul", "Antalya", "Goreme", "Bursa", "Izmir"],
  UA: ["Kyiv", "Lviv", "Odesa"],
  AE: ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "Fujairah"],
  GB: ["London", "Edinburgh", "Manchester", "Liverpool", "Bath"],
  US: ["New York", "Los Angeles", "Las Vegas", "Miami", "San Francisco"],
  UY: ["Montevideo", "Punta del Este", "Colonia del Sacramento"],
  VE: ["Caracas", "Merida", "Porlamar"]
};
const datalenght = [
  {
    "countryCode": "AD",
    "name": "Andorra",
    "latitude": 42.5063,
    "longitude": 1.5218
  },
  {
    "countryCode": "AG",
    "name": "Antigua and Barbuda",
    "latitude": 17.0608,
    "longitude": -61.7964
  },
  {
    "countryCode": "AI",
    "name": "Anguilla",
    "latitude": 18.2206,
    "longitude": -63.0686
  },
  {
    "countryCode": "AL",
    "name": "Albania",
    "latitude": 41.1533,
    "longitude": 20.1683
  },
  {
    "countryCode": "AM",
    "name": "Armenia",
    "latitude": 40.0691,
    "longitude": 45.0382
  },
  {
    "countryCode": "AO",
    "name": "Angola",
    "latitude": -11.2027,
    "longitude": 17.8739
  },
  {
    "countryCode": "AR",
    "name": "Argentina",
    "latitude": -38.4161,
    "longitude": -63.6167
  },
  {
    "countryCode": "AT",
    "name": "Austria",
    "latitude": 47.5162,
    "longitude": 14.5501
  },
  {
    "countryCode": "AU",
    "name": "Australia",
    "latitude": -25.2744,
    "longitude": 133.7751
  },
  {
    "countryCode": "AW",
    "name": "Aruba",
    "latitude": 12.5211,
    "longitude": -69.9683
  },
  {
    "countryCode": "AX",
    "name": "Åland Islands",
    "latitude": 60.1785,
    "longitude": 19.9156
  },
  {
    "countryCode": "BA",
    "name": "Bosnia and Herzegovina",
    "latitude": 43.9159,
    "longitude": 17.6791
  },
  {
    "countryCode": "BB",
    "name": "Barbados",
    "latitude": 13.1939,
    "longitude": -59.5432
  },
  {
    "countryCode": "BD",
    "name": "Bangladesh",
    "latitude": 23.685,
    "longitude": 90.3563
  },
  {
    "countryCode": "BE",
    "name": "Belgium",
    "latitude": 50.5039,
    "longitude": 4.4699
  },
  {
    "countryCode": "BF",
    "name": "Burkina Faso",
    "latitude": 12.2383,
    "longitude": -1.5616
  },
  {
    "countryCode": "BG",
    "name": "Bulgaria",
    "latitude": 42.7339,
    "longitude": 25.4858
  },
  {
    "countryCode": "BH",
    "name": "Bahrain",
    "latitude": 26.0667,
    "longitude": 50.5577
  },
  {
    "countryCode": "BI",
    "name": "Burundi",
    "latitude": -3.3731,
    "longitude": 29.9189
  },
  {
    "countryCode": "BJ",
    "name": "Benin",
    "latitude": 9.3077,
    "longitude": 2.3158
  },
  {
    "countryCode": "BL",
    "name": "Saint Barthélemy",
    "latitude": 17.9,
    "longitude": -62.8333
  },
  {
    "countryCode": "BM",
    "name": "Bermuda",
    "latitude": 32.3078,
    "longitude": -64.7505
  },
  {
    "countryCode": "BO",
    "name": "Bolivia",
    "latitude": -16.2902,
    "longitude": -63.5887
  },
  {
    "countryCode": "BQ",
    "name": "Caribbean Netherlands",
    "latitude": 12.2019,
    "longitude": -68.2624
  },
  {
    "countryCode": "BR",
    "name": "Brazil",
    "latitude": -14.235,
    "longitude": -51.9253
  },
  {
    "countryCode": "BS",
    "name": "Bahamas",
    "latitude": 25.0343,
    "longitude": -77.3963
  },
  {
    "countryCode": "BW",
    "name": "Botswana",
    "latitude": -22.3285,
    "longitude": 24.6849
  },
  {
    "countryCode": "BY",
    "name": "Belarus",
    "latitude": 53.7098,
    "longitude": 27.9534
  },
  {
    "countryCode": "BZ",
    "name": "Belize",
    "latitude": 17.1899,
    "longitude": -88.4976
  },
  {
    "countryCode": "CA",
    "name": "Canada",
    "latitude": 56.1304,
    "longitude": -106.3468
  },
  {
    "countryCode": "CC",
    "name": "Cocos (Keeling) Islands",
    "latitude": -12.1642,
    "longitude": 96.871
  },
  {
    "countryCode": "CD",
    "name": "DR Congo",
    "latitude": -4.0383,
    "longitude": 21.7587
  },
  {
    "countryCode": "CF",
    "name": "Central African Republic",
    "latitude": 6.6111,
    "longitude": 20.9394
  },
  {
    "countryCode": "CG",
    "name": "Congo",
    "latitude": -0.228,
    "longitude": 15.8277
  },
  {
    "countryCode": "CH",
    "name": "Switzerland",
    "latitude": 46.8182,
    "longitude": 8.2275
  },
  {
    "countryCode": "CI",
    "name": "Ivory Coast",
    "latitude": 7.54,
    "longitude": -5.5471
  },
  {
    "countryCode": "CK",
    "name": "Cook Islands",
    "latitude": -21.2367,
    "longitude": -159.7777
  },
  {
    "countryCode": "CL",
    "name": "Chile",
    "latitude": -35.6751,
    "longitude": -71.543
  },
  {
    "countryCode": "CM",
    "name": "Cameroon",
    "latitude": 7.3697,
    "longitude": 12.3547
  },
  {
    "countryCode": "CN",
    "name": "China",
    "latitude": 35.8617,
    "longitude": 104.1954
  },
  {
    "countryCode": "CO",
    "name": "Colombia",
    "latitude": 4.5709,
    "longitude": -74.2973
  },
  {
    "countryCode": "CR",
    "name": "Costa Rica",
    "latitude": 9.7489,
    "longitude": -83.7534
  },
  {
    "countryCode": "CU",
    "name": "Cuba",
    "latitude": 21.5218,
    "longitude": -77.7812
  },
  {
    "countryCode": "CV",
    "name": "Cape Verde",
    "latitude": 16.002,
    "longitude": -24.0132
  },
  {
    "countryCode": "CW",
    "name": "Curaçao",
    "latitude": 12.1696,
    "longitude": -68.99
  },
  {
    "countryCode": "CX",
    "name": "Christmas Island",
    "latitude": -10.4475,
    "longitude": 105.6904
  },
  {
    "countryCode": "CY",
    "name": "Cyprus",
    "latitude": 35.1264,
    "longitude": 33.4299
  },
  {
    "countryCode": "CZ",
    "name": "Czechia",
    "latitude": 49.8175,
    "longitude": 15.473
  },
  {
    "countryCode": "DE",
    "name": "Germany",
    "latitude": 51.1657,
    "longitude": 10.4515
  },
  {
    "countryCode": "DJ",
    "name": "Djibouti",
    "latitude": 11.8251,
    "longitude": 42.5903
  },
  {
    "countryCode": "DK",
    "name": "Denmark",
    "latitude": 56.2639,
    "longitude": 9.5018
  },
  {
    "countryCode": "DM",
    "name": "Dominica",
    "latitude": 15.415,
    "longitude": -61.371
  },
  {
    "countryCode": "DO",
    "name": "Dominican Republic",
    "latitude": 18.7357,
    "longitude": -70.1627
  },
  {
    "countryCode": "DZ",
    "name": "Algeria",
    "latitude": 28.0339,
    "longitude": 1.6596
  },
  {
    "countryCode": "EC",
    "name": "Ecuador",
    "latitude": -1.8312,
    "longitude": -78.1834
  },
  {
    "countryCode": "EE",
    "name": "Estonia",
    "latitude": 58.5953,
    "longitude": 25.0136
  },
  {
    "countryCode": "EG",
    "name": "Egypt",
    "latitude": 26.8206,
    "longitude": 30.8025
  },
  {
    "countryCode": "ER",
    "name": "Eritrea",
    "latitude": 15.1794,
    "longitude": 39.7823
  },
  {
    "countryCode": "ES",
    "name": "Spain",
    "latitude": 40.4637,
    "longitude": -3.7492
  },
  {
    "countryCode": "ET",
    "name": "Ethiopia",
    "latitude": 9.145,
    "longitude": 40.4897
  },
  {
    "countryCode": "FI",
    "name": "Finland",
    "latitude": 61.9241,
    "longitude": 25.7482
  },
  {
    "countryCode": "FK",
    "name": "Falkland Islands",
    "latitude": -51.7963,
    "longitude": -59.5236
  },
  {
    "countryCode": "FM",
    "name": "Micronesia",
    "latitude": 7.4256,
    "longitude": 150.5508
  },
  {
    "countryCode": "FO",
    "name": "Faroe Islands",
    "latitude": 61.8926,
    "longitude": -6.9118
  },
  {
    "countryCode": "FR",
    "name": "France",
    "latitude": 46.2276,
    "longitude": 2.2137
  },
  {
    "countryCode": "GA",
    "name": "Gabon",
    "latitude": -0.8037,
    "longitude": 11.6094
  },
  {
    "countryCode": "GB",
    "name": "United Kingdom",
    "latitude": 55.3781,
    "longitude": -3.436
  },
  {
    "countryCode": "GD",
    "name": "Grenada",
    "latitude": 12.1165,
    "longitude": -61.679
  },
  {
    "countryCode": "GE",
    "name": "Georgia",
    "latitude": 42.3154,
    "longitude": 43.3569
  },
  {
    "countryCode": "GF",
    "name": "French Guiana",
    "latitude": 3.9339,
    "longitude": -53.1258
  },
  {
    "countryCode": "GG",
    "name": "Guernsey",
    "latitude": 49.4657,
    "longitude": -2.5853
  },
  {
    "countryCode": "GH",
    "name": "Ghana",
    "latitude": 7.9465,
    "longitude": -1.0232
  },
  {
    "countryCode": "GI",
    "name": "Gibraltar",
    "latitude": 36.1408,
    "longitude": -5.3536
  },
  {
    "countryCode": "GL",
    "name": "Greenland",
    "latitude": 71.7069,
    "longitude": -42.6043
  },
  {
    "countryCode": "GM",
    "name": "Gambia",
    "latitude": 13.4432,
    "longitude": -15.3101
  },
  {
    "countryCode": "GN",
    "name": "Guinea",
    "latitude": 9.9456,
    "longitude": -9.6966
  },
  {
    "countryCode": "GP",
    "name": "Guadeloupe",
    "latitude": 16.265,
    "longitude": -61.551
  },
  {
    "countryCode": "GQ",
    "name": "Equatorial Guinea",
    "latitude": 1.6508,
    "longitude": 10.2679
  },
  {
    "countryCode": "GR",
    "name": "Greece",
    "latitude": 39.0742,
    "longitude": 21.8243
  },
  {
    "countryCode": "GT",
    "name": "Guatemala",
    "latitude": 15.7835,
    "longitude": -90.2308
  },
  {
    "countryCode": "GW",
    "name": "Guinea-Bissau",
    "latitude": 11.8037,
    "longitude": -15.1804
  },
  {
    "countryCode": "GY",
    "name": "Guyana",
    "latitude": 4.8604,
    "longitude": -58.9302
  },
  {
    "countryCode": "HK",
    "name": "Hong Kong",
    "latitude": 22.3193,
    "longitude": 114.1694
  },
  {
    "countryCode": "HN",
    "name": "Honduras",
    "latitude": 15.2,
    "longitude": -86.2419
  },
  {
    "countryCode": "HR",
    "name": "Croatia",
    "latitude": 45.1,
    "longitude": 15.2
  },
  {
    "countryCode": "HT",
    "name": "Haiti",
    "latitude": 18.9712,
    "longitude": -72.2852
  },
  {
    "countryCode": "HU",
    "name": "Hungary",
    "latitude": 47.1625,
    "longitude": 19.5033
  },
  {
    "countryCode": "ID",
    "name": "Indonesia",
    "latitude": -0.7893,
    "longitude": 113.9213
  },
  {
    "countryCode": "IE",
    "name": "Ireland",
    "latitude": 53.4129,
    "longitude": -8.2439
  },
  {
    "countryCode": "IM",
    "name": "Isle of Man",
    "latitude": 54.2361,
    "longitude": -4.5481
  },
  {
    "countryCode": "IQ",
    "name": "Iraq",
    "latitude": 33.2232,
    "longitude": 43.6793
  },
  {
    "countryCode": "IS",
    "name": "Iceland",
    "latitude": 64.9631,
    "longitude": -19.0208
  },
  {
    "countryCode": "IT",
    "name": "Italy",
    "latitude": 41.8719,
    "longitude": 12.5674
  },
  {
    "countryCode": "JE",
    "name": "Jersey",
    "latitude": 49.2144,
    "longitude": -2.1312
  },
  {
    "countryCode": "JM",
    "name": "Jamaica",
    "latitude": 18.1096,
    "longitude": -77.2975
  },
  {
    "countryCode": "JP",
    "name": "Japan",
    "latitude": 36.2048,
    "longitude": 138.2529
  },
  {
    "countryCode": "KE",
    "name": "Kenya",
    "latitude": -0.0236,
    "longitude": 37.9062
  },
  {
    "countryCode": "KH",
    "name": "Cambodia",
    "latitude": 12.5657,
    "longitude": 104.991
  },
  {
    "countryCode": "KI",
    "name": "Kiribati",
    "latitude": -3.3704,
    "longitude": -168.734
  },
  {
    "countryCode": "KM",
    "name": "Comoros",
    "latitude": -11.875,
    "longitude": 43.8722
  },
  {
    "countryCode": "KN",
    "name": "Saint Kitts and Nevis",
    "latitude": 17.3578,
    "longitude": -62.783
  },
  {
    "countryCode": "KR",
    "name": "South Korea",
    "latitude": 35.9078,
    "longitude": 127.7669
  },
  {
    "countryCode": "KY",
    "name": "Cayman Islands",
    "latitude": 19.5135,
    "longitude": -80.5669
  },
  {
    "countryCode": "KZ",
    "name": "Kazakhstan",
    "latitude": 48.0196,
    "longitude": 66.9237
  },
  {
    "countryCode": "LC",
    "name": "Saint Lucia",
    "latitude": 13.9094,
    "longitude": -60.9789
  },
  {
    "countryCode": "LI",
    "name": "Liechtenstein",
    "latitude": 47.166,
    "longitude": 9.5554
  },
  {
    "countryCode": "LR",
    "name": "Liberia",
    "latitude": 6.4281,
    "longitude": -9.4295
  },
  {
    "countryCode": "LS",
    "name": "Lesotho",
    "latitude": -29.61,
    "longitude": 28.2336
  },
  {
    "countryCode": "LT",
    "name": "Lithuania",
    "latitude": 55.1694,
    "longitude": 23.8813
  },
  {
    "countryCode": "LU",
    "name": "Luxembourg",
    "latitude": 49.8153,
    "longitude": 6.1296
  },
  {
    "countryCode": "LV",
    "name": "Latvia",
    "latitude": 56.8796,
    "longitude": 24.6032
  },
  {
    "countryCode": "LY",
    "name": "Libya",
    "latitude": 26.3351,
    "longitude": 17.2283
  },
  {
    "countryCode": "MA",
    "name": "Morocco",
    "latitude": 31.7917,
    "longitude": -7.0926
  },
  {
    "countryCode": "MC",
    "name": "Monaco",
    "latitude": 43.7384,
    "longitude": 7.4246
  },
  {
    "countryCode": "MD",
    "name": "Moldova",
    "latitude": 47.4116,
    "longitude": 28.3699
  },
  {
    "countryCode": "ME",
    "name": "Montenegro",
    "latitude": 42.7087,
    "longitude": 19.3744
  },
  {
    "countryCode": "MF",
    "name": "Saint Martin",
    "latitude": 18.0708,
    "longitude": -63.0501
  },
  {
    "countryCode": "MG",
    "name": "Madagascar",
    "latitude": -18.7669,
    "longitude": 46.8691
  },
  {
    "countryCode": "MH",
    "name": "Marshall Islands",
    "latitude": 7.1315,
    "longitude": 171.1845
  },
  {
    "countryCode": "MK",
    "name": "North Macedonia",
    "latitude": 41.6086,
    "longitude": 21.7453
  },
  {
    "countryCode": "ML",
    "name": "Mali",
    "latitude": 17.5707,
    "longitude": -3.9962
  },
  {
    "countryCode": "MN",
    "name": "Mongolia",
    "latitude": 46.8625,
    "longitude": 103.8467
  },
  {
    "countryCode": "MP",
    "name": "Northern Mariana Islands",
    "latitude": 17.3308,
    "longitude": 145.3847
  },
  {
    "countryCode": "MQ",
    "name": "Martinique",
    "latitude": 14.6415,
    "longitude": -61.0242
  },
  {
    "countryCode": "MR",
    "name": "Mauritania",
    "latitude": 21.0079,
    "longitude": -10.9408
  },
  {
    "countryCode": "MS",
    "name": "Montserrat",
    "latitude": 16.7425,
    "longitude": -62.1874
  },
  {
    "countryCode": "MT",
    "name": "Malta",
    "latitude": 35.9375,
    "longitude": 14.3754
  },
  {
    "countryCode": "MW",
    "name": "Malawi",
    "latitude": -13.2543,
    "longitude": 34.3015
  },
  {
    "countryCode": "MX",
    "name": "Mexico",
    "latitude": 23.6345,
    "longitude": -102.5528
  },
  {
    "countryCode": "MZ",
    "name": "Mozambique",
    "latitude": -18.6657,
    "longitude": 35.5296
  },
  {
    "countryCode": "NA",
    "name": "Namibia",
    "latitude": -22.9576,
    "longitude": 18.4904
  },
  {
    "countryCode": "NC",
    "name": "New Caledonia",
    "latitude": -20.9043,
    "longitude": 165.618
  },
  {
    "countryCode": "NE",
    "name": "Niger",
    "latitude": 17.6078,
    "longitude": 8.0817
  },
  {
    "countryCode": "NF",
    "name": "Norfolk Island",
    "latitude": -29.0408,
    "longitude": 167.9547
  },
  {
    "countryCode": "NG",
    "name": "Nigeria",
    "latitude": 9.082,
    "longitude": 8.6753
  },
  {
    "countryCode": "NI",
    "name": "Nicaragua",
    "latitude": 12.8654,
    "longitude": -85.2072
  },
  {
    "countryCode": "NL",
    "name": "Netherlands",
    "latitude": 52.1326,
    "longitude": 5.2913
  },
  {
    "countryCode": "NO",
    "name": "Norway",
    "latitude": 60.472,
    "longitude": 8.4689
  },
  {
    "countryCode": "NR",
    "name": "Nauru",
    "latitude": -0.5228,
    "longitude": 166.9315
  },
  {
    "countryCode": "NU",
    "name": "Niue",
    "latitude": -19.0544,
    "longitude": -169.8672
  },
  {
    "countryCode": "NZ",
    "name": "New Zealand",
    "latitude": -40.9006,
    "longitude": 174.886
  },
  {
    "countryCode": "PA",
    "name": "Panama",
    "latitude": 8.538,
    "longitude": -80.7821
  },
  {
    "countryCode": "PE",
    "name": "Peru",
    "latitude": -9.19,
    "longitude": -75.0152
  },
  {
    "countryCode": "PF",
    "name": "French Polynesia",
    "latitude": -17.6797,
    "longitude": -149.4068
  },
  {
    "countryCode": "PG",
    "name": "Papua New Guinea",
    "latitude": -6.314993,
    "longitude": 143.95555
  },
  {
    "countryCode": "PH",
    "name": "Philippines",
    "latitude": 12.8797,
    "longitude": 121.774
  },
  {
    "countryCode": "PL",
    "name": "Poland",
    "latitude": 51.9194,
    "longitude": 19.1451
  },
  {
    "countryCode": "PM",
    "name": "Saint Pierre and Miquelon",
    "latitude": 46.8852,
    "longitude": -56.3159
  },
  {
    "countryCode": "PN",
    "name": "Pitcairn Islands",
    "latitude": -24.3768,
    "longitude": -128.3242
  },
  {
    "countryCode": "PR",
    "name": "Puerto Rico",
    "latitude": 18.2208,
    "longitude": -66.5901
  },
  {
    "countryCode": "PT",
    "name": "Portugal",
    "latitude": 39.3999,
    "longitude": -8.2245
  },
  {
    "countryCode": "PW",
    "name": "Palau",
    "latitude": 7.515,
    "longitude": 134.5825
  },
  {
    "countryCode": "PY",
    "name": "Paraguay",
    "latitude": -23.4425,
    "longitude": -58.4438
  },
  {
    "countryCode": "RO",
    "name": "Romania",
    "latitude": 45.9432,
    "longitude": 24.9668
  },
  {
    "countryCode": "RS",
    "name": "Serbia",
    "latitude": 44.0165,
    "longitude": 21.0059
  },
  {
    "countryCode": "RU",
    "name": "Russia",
    "latitude": 61.524,
    "longitude": 105.3188
  },
  {
    "countryCode": "RW",
    "name": "Rwanda",
    "latitude": -1.9403,
    "longitude": 29.8739
  },
  {
    "countryCode": "SB",
    "name": "Solomon Islands",
    "latitude": -9.6457,
    "longitude": 160.1562
  },
  {
    "countryCode": "SC",
    "name": "Seychelles",
    "latitude": -4.6796,
    "longitude": 55.492
  },
  {
    "countryCode": "SD",
    "name": "Sudan",
    "latitude": 12.8628,
    "longitude": 30.2176
  },
  {
    "countryCode": "SE",
    "name": "Sweden",
    "latitude": 60.1282,
    "longitude": 18.6435
  },
  {
    "countryCode": "SG",
    "name": "Singapore",
    "latitude": 1.3521,
    "longitude": 103.8198
  },
  {
    "countryCode": "SH",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "latitude": -24.1435,
    "longitude": -10.0307
  },
  {
    "countryCode": "SI",
    "name": "Slovenia",
    "latitude": 46.1512,
    "longitude": 14.9955
  },
  {
    "countryCode": "SJ",
    "name": "Svalbard and Jan Mayen",
    "latitude": 77.5536,
    "longitude": 23.6703
  },
  {
    "countryCode": "SK",
    "name": "Slovakia",
    "latitude": 48.669,
    "longitude": 19.699
  },
  {
    "countryCode": "SL",
    "name": "Sierra Leone",
    "latitude": 8.4606,
    "longitude": -11.7799
  },
  {
    "countryCode": "SM",
    "name": "San Marino",
    "latitude": 43.9424,
    "longitude": 12.4578
  },
  {
    "countryCode": "SN",
    "name": "Senegal",
    "latitude": 14.4974,
    "longitude": -14.4524
  },
  {
    "countryCode": "SO",
    "name": "Somalia",
    "latitude": 5.1521,
    "longitude": 46.1996
  },
  {
    "countryCode": "SR",
    "name": "Suriname",
    "latitude": 3.9193,
    "longitude": -56.0278
  },
  {
    "countryCode": "SS",
    "name": "South Sudan",
    "latitude": 6.877,
    "longitude": 31.307
  },
  {
    "countryCode": "ST",
    "name": "São Tomé and Príncipe",
    "latitude": 0.1864,
    "longitude": 6.6131
  },
  {
    "countryCode": "SV",
    "name": "El Salvador",
    "latitude": 13.7942,
    "longitude": -88.8965
  },
  {
    "countryCode": "SX",
    "name": "Sint Maarten",
    "latitude": 18.0425,
    "longitude": -63.0548
  },
  {
    "countryCode": "SY",
    "name": "Syria",
    "latitude": 34.8021,
    "longitude": 38.9968
  },
  {
    "countryCode": "SZ",
    "name": "Eswatini",
    "latitude": -26.5225,
    "longitude": 31.4659
  },
  {
    "countryCode": "TC",
    "name": "Turks and Caicos Islands",
    "latitude": 21.694,
    "longitude": -71.7979
  },
  {
    "countryCode": "TD",
    "name": "Chad",
    "latitude": 15.4542,
    "longitude": 18.7322
  },
  {
    "countryCode": "TG",
    "name": "Togo",
    "latitude": 8.6195,
    "longitude": 0.8248
  },
  {
    "countryCode": "TK",
    "name": "Tokelau",
    "latitude": -8.9674,
    "longitude": -171.8559
  },
  {
    "countryCode": "TN",
    "name": "Tunisia",
    "latitude": 33.8869,
    "longitude": 9.5375
  },
  {
    "countryCode": "TO",
    "name": "Tonga",
    "latitude": -21.1789,
    "longitude": -175.1982
  },
  {
    "countryCode": "TR",
    "name": "Türkiye",
    "latitude": 38.9637,
    "longitude": 35.2433
  },
  {
    "countryCode": "TT",
    "name": "Trinidad and Tobago",
    "latitude": 10.6918,
    "longitude": -61.2225
  },
  {
    "countryCode": "TV",
    "name": "Tuvalu",
    "latitude": -7.1095,
    "longitude": 177.6493
  },
  {
    "countryCode": "TZ",
    "name": "Tanzania",
    "latitude": -6.369,
    "longitude": 34.8888
  },
  {
    "countryCode": "UA",
    "name": "Ukraine",
    "latitude": 48.3794,
    "longitude": 31.1656
  },
  {
    "countryCode": "UG",
    "name": "Uganda",
    "latitude": 1.3733,
    "longitude": 32.2903
  },
  {
    "countryCode": "US",
    "name": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129
  },
  {
    "countryCode": "UY",
    "name": "Uruguay",
    "latitude": -32.5228,
    "longitude": -55.7658
  },
  {
    "countryCode": "VA",
    "name": "Vatican City",
    "latitude": 41.9029,
    "longitude": 12.4534
  },
  {
    "countryCode": "VC",
    "name": "Saint Vincent and the Grenadines",
    "latitude": 12.9843,
    "longitude": -61.2872
  },
  {
    "countryCode": "VE",
    "name": "Venezuela",
    "latitude": 6.4238,
    "longitude": -66.5897
  },
  {
    "countryCode": "VG",
    "name": "British Virgin Islands",
    "latitude": 18.4207,
    "longitude": -64.6399
  },
  {
    "countryCode": "VI",
    "name": "United States Virgin Islands",
    "latitude": 18.3358,
    "longitude": -64.8963
  },
  {
    "countryCode": "VN",
    "name": "Vietnam",
    "latitude": 14.0583,
    "longitude": 108.2772
  },
  {
    "countryCode": "VU",
    "name": "Vanuatu",
    "latitude": -15.3767,
    "longitude": 166.9592
  },
  {
    "countryCode": "WF",
    "name": "Wallis and Futuna",
    "latitude": -13.7687,
    "longitude": -177.1561
  },
  {
    "countryCode": "WS",
    "name": "Samoa",
    "latitude": -13.759,
    "longitude": -172.1046
  },
  {
    "countryCode": "YE",
    "name": "Yemen",
    "latitude": 15.5527,
    "longitude": 48.5164
  },
  {
    "countryCode": "ZA",
    "name": "South Africa",
    "latitude": -30.5595,
    "longitude": 22.9375
  },
  {
    "countryCode": "ZM",
    "name": "Zambia",
    "latitude": -13.1339,
    "longitude": 27.8493
  },
  {
    "countryCode": "ZW",
    "name": "Zimbabwe",
    "latitude": -19.0154,
    "longitude": 29.1549
  }
]
let longitude;
let latitude;
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
const dayNameEn = today.toLocaleDateString('en-US', { weekday: 'long' });
let storedData = JSON.parse(localStorage.getItem("userDestination"));
if (storedData) {
  displayexport(storedData);
}

buutonmenu?.addEventListener("click", function () {
  if (!isopen) {
    sidebar.style.left = "0";
    isopen = true;
  }
});
sidebar?.addEventListener("click", function () {
  if (isopen) {
    sidebar.style.left = "-100%";
    isopen = false;
  }
});
navsections.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    navsections.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");

    let view = e.currentTarget.getAttribute("data-view") + "-view";
    sectionviews.forEach((section) => {
      if (section.getAttribute("id") === view) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});

butsearch?.addEventListener("click", function (e) {
  e.preventDefault();
  if (!country.value || !globalcity.value) {
    alert("يرجى اختيار الدولة والمدينة أولاً");
    return;
  }

  for (let i = 0; i < datalenght.length; i++) {
    if (datalenght[i].name === country.value) {
      longitude = datalenght[i].longitude;
      latitude = datalenght[i].latitude
    }
  }
  const selectedData = {
    countryCode: country.value,
    countryName: country.options[country.selectedIndex].text,
    cityName: globalcity.value,
    year: year ? year.value : "2026",
    longitude: longitude,
    latitude: latitude
  };

  localStorage.setItem("userDestination", JSON.stringify(selectedData));
  storedData = selectedData;

  displayexport(selectedData);
   dataofcuntery();
  getinformation();
  getcurreny();
  getinformationevten();
  getinformationlongweedend();
  getdatsun();
  fetchWeatherData()

});

dashboardsearch?.addEventListener("click", function (e) {
  if (e.target.closest("#clear-selection-btn")) {
    const card = e.target.closest("#selected-destination");
    if (card) card.remove();
    localStorage.removeItem("userDestination");
    storedData = null;
  }
});

function displayexport(data) {
  if (!data || !dashboardsearch) return;

  let box = `<div id="selected-destination" class="selected-destination">
                <div class="selected-flag">
                  <img id="selected-country-flag" src="https://flagcdn.com/w80/${data.countryCode.toLowerCase()}.png" alt="Flag">
                </div>
                <div class="selected-info">
                  <span class="selected-country-name" id="selected-country-name">${data.countryName}</span>
                  <span class="selected-city-name" id="selected-city-name">• ${data.cityName} (${data.year || ""})</span>
                </div>
                <button class="clear-selection-btn" id="clear-selection-btn">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>`;

  const dataContainer = document.getElementById("data");
  if (dataContainer) {
    dataContainer.innerHTML = box;
  }
}

async function getdata() {
  try {
    let response = await fetch("https://date.nager.at/api/v3/AvailableCountries");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("خطأ في جلب الدول:", error);
    return [];
  }
}

function displaycountry(data) {
  let box = `<option value="">Select Country</option>`;
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      countryCodeMap[data[i].name] = data[i].countryCode;
      box += `<option value="${data[i].countryCode}">${data[i].name}</option>`;
    }
  }
  if (country) country.innerHTML = box;
}

function displaycity(cities) {
  let box = `<option value="" disabled selected>Select City</option>`;

  if (Array.isArray(cities) && cities.length > 0) {
    for (let i = 0; i < cities.length; i++) {
      box += `<option value="${cities[i]}">${cities[i]}</option>`;
    }
  } else {
    box = `<option value="" disabled selected>No cities available</option>`;
  }

  if (globalcity) globalcity.innerHTML = box;
}

function renderCountryCard(countryData) {
  const flagEl = document.getElementById('country-flag');
  if (flagEl) {
    flagEl.src = countryData.flags?.svg || '';
    flagEl.alt = countryData.name?.common || '';
  }

  const nameEl = document.getElementById('country-name');
  if (nameEl) nameEl.textContent = countryData.name?.common || '';

  const officialEl = document.getElementById('country-official-name');
  if (officialEl) officialEl.textContent = countryData.name?.official || '';

  const regionText = `${countryData.region || ''} ${countryData.subregion ? '• ' + countryData.subregion : ''}`;
  const regionEl = document.getElementById('country-region');
  if (regionEl) regionEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${regionText}`;

  const tzEl = document.getElementById('country-timezone');
  if (tzEl) tzEl.textContent = countryData.timezones?.[0] || '';

  const capEl = document.getElementById('country-capital');
  if (capEl) capEl.textContent = countryData.capital?.join(', ') || '';

  const popEl = document.getElementById('country-population');
  if (popEl) popEl.textContent = countryData.population?.toLocaleString() || '';

  const areaEl = document.getElementById('country-area');
  if (areaEl) areaEl.textContent = `${countryData.area?.toLocaleString() || 0} km²`;

  const contEl = document.getElementById('country-continent');
  if (contEl) contEl.textContent = countryData.continents?.join(', ') || '';

  const driveEl = document.getElementById('country-driving-side');
  if (driveEl) driveEl.textContent = countryData.car?.side || '';

  const startWeekEl = document.getElementById('country-start-week');
  if (startWeekEl) startWeekEl.textContent = countryData.startOfWeek || '';

  const rootCode = countryData.idd?.root || '';
  const suffixes = countryData.idd?.suffixes ? countryData.idd.suffixes.join('') : '';
  const callingCodeEl = document.getElementById('country-calling-code');
  if (callingCodeEl) callingCodeEl.textContent = `${rootCode}${suffixes}`;

  const currenciesContainer = document.getElementById('country-currencies');
  if (currenciesContainer) {
    currenciesContainer.innerHTML = '';
    if (countryData.currencies) {
      Object.values(countryData.currencies).forEach(curr => {
        const span = document.createElement('span');
        span.className = 'extra-tag';
        span.textContent = `${curr.name} (${curr.symbol || ''})`;
        currenciesContainer.appendChild(span);
      });
    }
  }

  const languagesContainer = document.getElementById('country-languages');
  if (languagesContainer) {
    languagesContainer.innerHTML = '';
    if (countryData.languages) {
      Object.values(countryData.languages).forEach(lang => {
        const span = document.createElement('span');
        span.className = 'extra-tag';
        span.textContent = lang;
        languagesContainer.appendChild(span);
      });
    }
  }

  const bordersContainer = document.getElementById('country-borders');
  if (bordersContainer) {
    bordersContainer.innerHTML = '';
    if (countryData.borders && countryData.borders.length > 0) {
      countryData.borders.forEach(border => {
        const span = document.createElement('span');
        span.className = 'extra-tag border-tag';
        span.textContent = border;
        bordersContainer.appendChild(span);
      });
    } else {
      bordersContainer.innerHTML = '<span class="extra-tag">None</span>';
    }
  }

  const mapLink = document.getElementById('country-map-link');
  if (mapLink) {
    if (countryData.maps?.googleMaps) {
      mapLink.href = countryData.maps.googleMaps;
      mapLink.style.display = 'inline-flex';
    } else {
      mapLink.style.display = 'none';
    }
  }
}

async function run() {
  let result = await getdata();
  displaycountry(result);
  if (country) {
    country.addEventListener("change", function () {
      const countryCode = this.value;
      if (!countryCode) {
        displaycity([]);
        return;
      }
      let cities = citytrial[countryCode] || [];
      displaycity(cities);
    });
  }
}
async function getinfomtionofcuntery() {
  try {
    let currentStored = JSON.parse(localStorage.getItem("userDestination"));
    if (!currentStored || !currentStored.countryCode) return null;

    let response = await fetch(`https://restcountries.com/v3.1/alpha/${currentStored.countryCode}`);
    if (!response.ok) {
      throw new Error(`خطأ في الشبكة: ${response.status}`);
    }

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب معلومات الدولة:", error);
    return null;
  }
}
async function dataofcuntery() {
  let result = await getinfomtionofcuntery();
  if (result !== null && result !== undefined) {
    renderCountryCard(Array.isArray(result) ? result[0] : result);
  } else if (storedData) {
    const nameEl = document.getElementById('country-name');
    if (nameEl) nameEl.textContent = storedData.countryName;
    const flagEl = document.getElementById('country-flag');
    if (flagEl) flagEl.src = `https://flagcdn.com/w40/${storedData.countryCode.toLowerCase()}.png`;
  }
}
async function getinformationcholidys() {
  try {
    let currentStored = JSON.parse(localStorage.getItem("userDestination"));
    if (!currentStored || !currentStored.countryCode) {
      return null;
    }
    let countryCode1 = currentStored.countryCode.toLowerCase();
    let datayear = currentStored.year || "2026";
    let response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${datayear}/${countryCode1}`);
    if (!response.ok) {
      throw new Error(`خطأ في الشبكة: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب معلومات العطلات:", error);
    return null;
  }
}
async function getinformation() {
  let result = await getinformationcholidys();
  if (result) displayholidays(result);
}
function displayholidays(result) {
  if (!storedData) return;
  let box = `<div class="current-selection-badge">
              <img src="https://flagcdn.com/w40/${storedData.countryCode.toLowerCase()}.png" alt="Flag" class="selection-flag">
              <span>${storedData.cityName}</span>
              <span class="selection-year">${storedData.year}</span>
            </div>`;

  const holidaysSelection = document.getElementById("holidays-selection");
  if (holidaysSelection) holidaysSelection.innerHTML = box;

  let allCardsHTML = "";
  if (Array.isArray(result)) {
    result.forEach((ele) => {
      let dateObj = new Date(ele.date);
      let day = dateObj.getDate();
      let month = dateObj.toLocaleDateString('en-US', { month: 'short' });
      let weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
      allCardsHTML += `
        <div class="holiday-card">
          <div class="holiday-card-header">
            <div class="holiday-date-box">
              <span class="day">${day}</span>
              <span class="month">${month}</span>
            </div>
            <button class="holiday-action-btn"><i class="fa-regular fa-heart"></i></button>
          </div>
          <h3>${ele.name}</h3>
          <p class="holiday-name">${ele.localName}</p>
          <div class="holiday-card-footer">
            <span class="holiday-day-badge"><i class="fa-regular fa-calendar"></i> ${weekday}</span>
            <span class="holiday-type-badge">${ele.types ? ele.types[0] : ''}</span>
          </div>
        </div>
      `;
    });
  }
  const holidaysContent = document.getElementById("holidays-content");
  if (holidaysContent) holidaysContent.innerHTML = allCardsHTML;
}
async function Currencyvalue() {
  try {
    let response = await fetch("https://v6.exchangerate-api.com/v6/805842951e5953ad31497176/latest/USD");
    if (!response.ok) {
      throw new Error(`خطأ في الشبكة: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب العملات:", error);
    return null;
  }
}
async function getcurreny() {
  let result = await Currencyvalue();
  if (result && result.conversion_rates) {
    displaycurreny(result.conversion_rates);
  }
}
function displaycurreny(result) {
  let info = Array.from(document.querySelectorAll(".info"));
  info.forEach(ele => {
    if (ele.firstElementChild) {
      let key = ele.firstElementChild.innerHTML.trim();
      if (result.hasOwnProperty(key)) {
        if (ele.nextElementSibling) {
          ele.nextElementSibling.innerHTML = result[key];
        }
      }
    }
  });
}
swapbutton?.addEventListener("click", function () {
  let tep = currencyto.value;
  currencyto.value = currencyfrom.value;
  currencyfrom.value = tep;
});
convertbtn?.addEventListener("click", async function () {
  let conversionFrom = currencyfrom.value;
  let conversionTo = currencyto.value;
  let amount = document.getElementById("currency-amount").value;
  let response = await fetch(`https://v6.exchangerate-api.com/v6/805842951e5953ad31497176/pair/${conversionFrom}/${conversionTo}/${amount}`);
  if (!response.ok) return;
  let data = await response.json();
  const convToEl = document.querySelector(".conversion-to");
  if (convToEl) {
    convToEl.innerHTML = `<span class="amount">${data.conversion_result}</span><span class="currency-code">${data.target_code}</span>`;
  }
  const convFromEl = document.querySelector(".conversion-from");
  if (convFromEl) {
    convFromEl.innerHTML = `<span class="amount">${amount}</span><span class="currency-code">${data.base_code}</span>`;
  }
  const detailEl = document.getElementById("deatil");
  if (detailEl) detailEl.innerHTML = `Last updated: ${data.time_last_update_utc}`;
});
async function getevent() {
  try {
    let currentStored = JSON.parse(localStorage.getItem("userDestination"));
    if (!currentStored || !currentStored.countryCode || !currentStored.cityName) {
      return null;
    }
    let countryCode1 = currentStored.countryCode;
    let cityName = encodeURIComponent(currentStored.cityName);
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=VwECw2OiAzxVzIqnwmKJUG41FbeXJk1y&city=${cityName}&countryCode=${countryCode1}&size=20`;
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`خطأ في الشبكة: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب الفعاليات:", error);
    return null;
  }
}
async function getinformationevten() {
  let result = await getevent();
  if (result) {
    displayevent(result);
  }
}
function displayevent(result) {
  let currentStored = JSON.parse(localStorage.getItem("userDestination"));
  if (!currentStored) return;
  let headerBox = `
    <div class="current-selection-badge">
      <img src="https://flagcdn.com/w40/${currentStored.countryCode.toLowerCase()}.png" alt="Flag" class="selection-flag">
      <span>${currentStored.cityName}</span>
      <span class="selection-year">${currentStored.year || ''}</span>
    </div>
  `;

  let headerElement = document.getElementById("events-selection");
  if (headerElement) {
    headerElement.innerHTML = headerBox;
  }
  let contentElement = document.getElementById("events-content");
  if (!contentElement) return;

  if (!result.page || result.page.totalElements == 0 || !result._embedded || !result._embedded.events || result._embedded.events.length == 0) {
    contentElement.style.display = "flex";
    contentElement.style.alignItems = "center";
    contentElement.style.justifyContent = "center";
    contentElement.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: #6c757d; font-family: inherit;">
          <i class="fa-regular fa-calendar-xmark" style="font-size: 40px; margin-bottom: 10px; color: #adb5bd;"></i>
          <p style="font-size: 16px; font-weight: 500; margin: 0;">لا توجد فعاليات متاحة حالياً لهذه المدينة.</p>
      </div>
    `;
    return;
  }
  contentElement.style.display = "grid";
  let allCardsHTML = '';
  result._embedded.events.forEach((ele) => {
    let eventDate = (ele.dates && ele.dates.start && ele.dates.start.localDate) ? ele.dates.start.localDate : 'TBA';
    let imgUrl = ele.images && ele.images[0] ? ele.images[0].url : '';
    let categoryName = ele.classifications && ele.classifications[0] && ele.classifications[0].segment ? ele.classifications[0].segment.name : '';
    let venueName = ele._embedded && ele._embedded.venues && ele._embedded.venues[0] ? ele._embedded.venues[0].name : '';
    allCardsHTML += `
      <div class="event-card">
        <div class="event-card-image">
          <img src="${imgUrl}" alt="${ele.name}">
          <span class="event-card-category">${categoryName}</span>
          <button class="event-card-save"><i class="fa-regular fa-heart"></i></button>
        </div>
        <div class="event-card-body">
          <h3>${ele.name}</h3>
          <div class="event-card-info">
            <div><i class="fa-regular fa-calendar"></i> ${eventDate}</div>
            <div><i class="fa-solid fa-location-dot"></i> ${venueName}</div>
          </div>
          <div class="event-card-footer">
            <button class="btn-event"><i class="fa-regular fa-heart"></i> Save</button>
            <a href="${ele.url}" target="_blank" class="btn-buy-ticket"><i class="fa-solid fa-ticket"></i></a>
          </div>
        </div>
      </div>
    `;
  });

  contentElement.innerHTML = allCardsHTML;
}
async function getlongweedend() {
  try {
    let currentStored = JSON.parse(localStorage.getItem("userDestination"));
    if (!currentStored || !currentStored.countryCode) {
      return null;
    }
    let countryCode1 = currentStored.countryCode.toLowerCase();
    let datayear = currentStored.year || "2026";

    let response = await fetch(`https://date.nager.at/api/v3/LongWeekend/${datayear}/${countryCode1}`);
    if (!response.ok) return [];
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("خطأ في جلب عطلات نهاية الأسبوع الطويلة:", error);
    return [];
  }
}
async function getinformationlongweedend() {
  let result = await getlongweedend();
  if (result) {
    displaylongweedend(result);
  }
}
function displaylongweedend(result) {
  if (!storedData) return;
  let box = `<div class="current-selection-badge">
              <img src="https://flagcdn.com/w40/${storedData.countryCode.toLowerCase()}.png" alt="Flag" class="selection-flag">
              <span>${storedData.cityName}</span>
              <span class="selection-year">${storedData.year}</span>
            </div>`;

  const sectionLong = document.getElementById("sectionlong");
  if (sectionLong) sectionLong.innerHTML = box;
  let container = "";
  if (Array.isArray(result)) {
    result.forEach((ele, index) => {
      const dateStr = ele.startDate;
      const datestart = new Date(dateStr);
      const monthNameStr = datestart.toLocaleDateString("en-US", { month: "short" });
      const dayNum = datestart.getDate();
      const dayNend = ele.endDate;
      const dateend = new Date(dayNend);
      const monthNameend = dateend.toLocaleDateString("en-US", { month: "short" });
      const dayNumend = dateend.getDate();
      let data = "";
      for (let i = 0; i < ele.dayCount; i++) {
        let currentDay = new Date(datestart);
        currentDay.setDate(datestart.getDate() + i);
        let dayName = currentDay.toLocaleDateString("en-US", { weekday: "short" });
        let dayNumber = currentDay.getDate();
        let dayOfWeek = currentDay.getDay();
        let isWeekend = (dayOfWeek === 5 || dayOfWeek === 6) ? "weekend" : "";
        data += `<div class="lw-day ${isWeekend}">
                   <span class="name">${dayName}</span>
                   <span class="num">${dayNumber}</span>
                 </div>`;
      }
      container += `<div class="lw-card">
                <div class="lw-card-header">
                  <span class="lw-badge"><i class="fa-solid fa-calendar-days"></i> ${ele.dayCount} days</span>
                  <button class="holiday-action-btn"><i class="fa-regular fa-heart"></i></button>
                </div>
                <h3>Long Weekend #${index + 1}</h3>
                <div class="lw-dates">
                  <i class="fa-regular fa-calendar"></i> ${monthNameStr} ${dayNum}-${monthNameend}${dayNumend}, ${datestart.getFullYear()}
                </div>
                <div class="lw-info-box success">
                  <i class="fa-solid fa-check-circle"></i> ${ele.needBridgeDay ? "No extra days off needed" : "Celebration period!"}
                </div>
                <div class="lw-days-visual">
                 ${data}
                </div>
              </div>`;
    });
  }

  const lwContent = document.getElementById("lw-content");
  if (lwContent) lwContent.innerHTML = container;
}
 run();
if (storedData) {
  dataofcuntery();
  getinformation();
  getcurreny();
  getinformationevten();
  getinformationlongweedend();
  getdatsun();
  fetchWeatherData()
}
async function getsun() {
    const today = new Date();
  const year1 = today.getFullYear();
  const month1 = String(today.getMonth() + 1).padStart(2, '0');
  const day1 = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year1}-${month1}-${day1}`;

  try {
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${storedData.latitude}&lng=${storedData.longitude}&date=${formattedDate}&formatted=0`);

    if (!response.ok) {
      return null;
    }
    let data = await response.json();
    return {
      ...data,
      formattedDate: formattedDate,
      dayNameEn: today.toLocaleDateString('en-US', { weekday: 'long' })
    };
  }
  catch (error) {
    console.error("خطأ في جلب البيانات:", error);
    return null;
  }
}

async function getdatsun() {
  let result = await getsun();
  if (!result || result.status !== "OK") return;
  displaysunset(result.results, result.formattedDate, result.dayNameEn);
  updateSunTimesUI(result.results);
  updateDaylightDistribution(result.results.day_length)
}

function displaysunset(results, formattedDate, dayNameEn) {
  if (!storedData) return;

  let box = `<div class="current-selection-badge">
              <img src="https://flagcdn.com/w40/${storedData.countryCode.toLowerCase()}.png" alt="Flag" class="selection-flag">
              <span>${storedData.cityName}</span>
              <span class="selection-year">${storedData.year}</span>
            </div>`;
  const sunsetSelection = document.getElementById("selection-sunset");
  if (sunsetSelection) sunsetSelection.innerHTML = box;
  document.getElementById("suncont").innerHTML = storedData.cityName
  const dayElement = document.getElementById("day");
  if (dayElement) dayElement.innerHTML = dayNameEn;

  const data1Element = document.querySelector("div#data1");
  if (data1Element) data1Element.innerHTML = formattedDate;
}
function formatTime12Hour(isoString) {
  if (!isoString) return "--:--";
  const dateObj = new Date(isoString);
  return dateObj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}
function formatDayLength(seconds) {
  if (!seconds && seconds !== 0) return "--h --m";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}
function updateSunTimesUI(results) {
  if (!results) return;

  document.getElementById('dawn-time').textContent = formatTime12Hour(results.civil_twilight_begin);
  document.getElementById('sunrise-time').textContent = formatTime12Hour(results.sunrise);
  document.getElementById('noon-time').textContent = formatTime12Hour(results.solar_noon);
  document.getElementById('sunset-time').textContent = formatTime12Hour(results.sunset);
  document.getElementById('dusk-time').textContent = formatTime12Hour(results.civil_twilight_end);
  document.getElementById('daylight-time').textContent = formatDayLength(results.day_length);
}
function updateDaylightDistribution(dayLengthSeconds) {
  if (dayLengthSeconds === undefined || dayLengthSeconds === null) return;
  const totalSecondsInDay = 24 * 60 * 60; 
  const darknessSeconds = totalSecondsInDay - dayLengthSeconds;
  const daylightPercentage = (dayLengthSeconds / totalSecondsInDay) * 100;
  const daylightHours = Math.floor(dayLengthSeconds / 3600);
  const daylightMinutes = Math.floor((dayLengthSeconds % 3600) / 60);
  const daylightFormatted = `${daylightHours}h ${daylightMinutes}m`;
  const darknessHours = Math.floor(darknessSeconds / 3600);
  const darknessMinutes = Math.floor((darknessSeconds % 3600) / 60);
  const darknessFormatted = `${darknessHours}h ${darknessMinutes}m`;
  const progressFill = document.getElementById('daylight-progress-fill');
  if (progressFill) {
    progressFill.style.width = `${daylightPercentage.toFixed(1)}%`;
  }
  const durationEl = document.getElementById('daylight-duration');
  if (durationEl) durationEl.textContent = daylightFormatted;

  const percentageEl = document.getElementById('daylight-percentage');
  if (percentageEl) percentageEl.textContent = `${daylightPercentage.toFixed(1)}%`;

  const darknessEl = document.getElementById('darkness-duration');
  if (darknessEl) darknessEl.textContent = darknessFormatted;
}
async function fetchWeatherData() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.006&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto");
    const data = await response.json();

    updateCurrentWeather(data);
    updateHourlyForecast(data);
    updateDailyForecast(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
function updateCurrentWeather(data) {
  const current = data.current;
  const daily = data.daily;

  document.getElementById("current-temp").innerText = Math.round(current.temperature_2m);
  document.getElementById("feels-like").innerText = `Feels like ${Math.round(current.apparent_temperature)}°C`;
  document.getElementById("humidity-value").innerText = `${current.relative_humidity_2m}%`;
  document.getElementById("wind-value").innerText = `${Math.round(current.wind_speed_10m)} km/h`;
  document.getElementById("uv-value").innerText = current.uv_index;
  document.getElementById("precip-value").innerText = `${daily.precipitation_sum[0]} mm`;

  document.getElementById("temp-max").innerText = Math.round(daily.temperature_2m_max[0]);
  document.getElementById("temp-min").innerText = Math.round(daily.temperature_2m_min[0]);

  const weatherState = getWeatherCondition(current.weather_code);
  document.getElementById("weather-condition").innerText = weatherState.text;
  document.getElementById("hero-icon").innerHTML = `<i class="${weatherState.icon}"></i>`;
}
function updateHourlyForecast(data) {
  const container = document.getElementById("hourly-container");
  container.innerHTML = "";
  const hourly = data.hourly;
  const currentHourIndex = new Date().getHours();
  for (let i = currentHourIndex; i < currentHourIndex + 12 && i < hourly.time.length; i++) {
    const timeObj = new Date(hourly.time[i]);
    const hourLabel = i === currentHourIndex ? "Now" : timeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const weatherState = getWeatherCondition(hourly.weather_code[i]);

    const itemHtml = `
      <div class="hourly-item ${i === currentHourIndex ? 'now' : ''}">
        <span class="hourly-time">${hourLabel}</span>
        <div class="hourly-icon"><i class="${weatherState.icon}"></i></div>
        <span class="hourly-temp">${Math.round(hourly.temperature_2m[i])}°</span>
      </div>
    `;
    container.innerHTML += itemHtml;
  }
}
function updateDailyForecast(data) {
  const container = document.getElementById("forecast-container");
  container.innerHTML = "";

  const daily = data.daily;

  for (let i = 0; i < daily.time.length; i++) {
    const dateObj = new Date(daily.time[i]);
    const dayLabel = i === 0 ? "Today" : dateObj.toLocaleDateString('en-US', { weekday: 'short' });
    const dateLabel = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    const weatherState = getWeatherCondition(daily.weather_code[i]);
    const precipProb = daily.precipitation_probability_max[i];

    const precipHtml = precipProb > 0
      ? `<div class="forecast-precip"><i class="fa-solid fa-droplet"></i><span>${precipProb}%</span></div>`
      : `<div class="forecast-precip"></div>`;

    const dayHtml = `
      <div class="forecast-day ${i === 0 ? 'today' : ''}">
        <div class="forecast-day-name">
          <span class="day-label">${dayLabel}</span>
          <span class="day-date">${dateLabel}</span>
        </div>
        <div class="forecast-icon"><i class="${weatherState.icon}"></i></div>
        <div class="forecast-temps">
          <span class="temp-max">${Math.round(daily.temperature_2m_max[i])}°</span>
          <span class="temp-min">${Math.round(daily.temperature_2m_min[i])}°</span>
        </div>
        ${precipHtml}
      </div>
    `;
    container.innerHTML += dayHtml;
  }
}
function getWeatherCondition(code) {
  if (code === 0) return { text: "Clear sky", icon: "fa-solid fa-sun" };
  if (code >= 1 && code <= 3) return { text: "Partly cloudy", icon: "fa-solid fa-cloud-sun" };
  if (code >= 45 && code <= 48) return { text: "Foggy", icon: "fa-solid fa-smog" };
  if (code >= 51 && code <= 67) return { text: "Rainy", icon: "fa-solid fa-cloud-rain" };
  if (code >= 71 && code <= 77) return { text: "Snowy", icon: "fa-solid fa-snowflake" };
  if (code >= 95) return { text: "Thunderstorm", icon: "fa-solid fa-bolt" };
  return { text: "Cloudy", icon: "fa-solid fa-cloud" };
}


