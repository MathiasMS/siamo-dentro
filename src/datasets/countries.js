const countries = [
    {
        "value": "AE",
        "label": "Emiratos Árabes Unidos"
    },
    {
        "value": "AF",
        "label": "Afganistán"
    },
    {
        "value": "AG",
        "label": "Antigua y Barbuda"
    },
    {
        "value": "AI",
        "label": "Anguila"
    },
    {
        "value": "AL",
        "label": "Albania"
    },
    {
        "value": "AM",
        "label": "Armenia"
    },
    {
        "value": "AO",
        "label": "Angola"
    },
    {
        "value": "AQ",
        "label": "Antártida"
    },
    {
        "value": "AS",
        "label": "Samoa Americana"
    },
    {
        "value": "AT",
        "label": "Austria"
    },
    {
        "value": "AU",
        "label": "Australia"
    },
    {
        "value": "AW",
        "label": "Aruba"
    },
    {
        "value": "AX",
        "label": "Islas Åland"
    },
    {
        "value": "AZ",
        "label": "Azerbaiyán"
    },
    {
        "value": "BA",
        "label": "Bosnia y Herzegovina"
    },
    {
        "value": "BB",
        "label": "Barbados"
    },
    {
        "value": "BD",
        "label": "Bangladés"
    },
    {
        "value": "BE",
        "label": "Bélgica"
    },
    {
        "value": "BF",
        "label": "Burkina Faso"
    },
    {
        "value": "BG",
        "label": "Bulgaria"
    },
    {
        "value": "BH",
        "label": "Baréin"
    },
    {
        "value": "BI",
        "label": "Burundi"
    },
    {
        "value": "BJ",
        "label": "Benín"
    },
    {
        "value": "BL",
        "label": "San Bartolomé"
    },
    {
        "value": "BM",
        "label": "Bermudas"
    },
    {
        "value": "BN",
        "label": "Brunéi Darussalam"
    },
    {
        "value": "BO",
        "label": "Bolivia"
    },
    {
        "value": "BQ",
        "label": "Bonaire, San Eustaquio y Saba"
    },
    {
        "value": "BR",
        "label": "Brasil"
    },
    {
        "value": "BS",
        "label": "Bahamas"
    },
    {
        "value": "BT",
        "label": "Bután"
    },
    {
        "value": "BV",
        "label": "Isla Bouvet"
    },
    {
        "value": "BW",
        "label": "Botsuana"
    },
    {
        "value": "BY",
        "label": "Bielorrusia"
    },
    {
        "value": "BZ",
        "label": "Belice"
    },
    {
        "value": "CA",
        "label": "Canadá"
    },
    {
        "value": "CC",
        "label": "Islas Cocos (Keeling)"
    },
    {
        "value": "CD",
        "label": "Congo (CD)"
    },
    {
        "value": "CF",
        "label": "República Centroafricana"
    },
    {
        "value": "CG",
        "label": "Congo (CG)"
    },
    {
        "value": "CH",
        "label": "Suiza"
    },
    {
        "value": "CI",
        "label": "Costa de Marfil"
    },
    {
        "value": "CK",
        "label": "Islas Cook"
    },
    {
        "value": "CL",
        "label": "Chile"
    },
    {
        "value": "CM",
        "label": "Camerún"
    },
    {
        "value": "CN",
        "label": "China"
    },
    {
        "value": "CO",
        "label": "Colombia"
    },
    {
        "value": "CR",
        "label": "Costa Rica"
    },
    {
        "value": "CU",
        "label": "Cuba"
    },
    {
        "value": "CV",
        "label": "Cabo Verde"
    },
    {
        "value": "CW",
        "label": "Curazao"
    },
    {
        "value": "CX",
        "label": "Isla de Navidad"
    },
    {
        "value": "CY",
        "label": "Chipre"
    },
    {
        "value": "CZ",
        "label": "República Checa"
    },
    {
        "value": "DE",
        "label": "Alemania"
    },
    {
        "value": "DJ",
        "label": "Yibuti"
    },
    {
        "value": "DK",
        "label": "Dinamarca"
    },
    {
        "value": "DM",
        "label": "Dominica"
    },
    {
        "value": "DO",
        "label": "República Dominicana"
    },
    {
        "value": "DZ",
        "label": "Argelia"
    },
    {
        "value": "EC",
        "label": "Ecuador"
    },
    {
        "value": "EE",
        "label": "Estonia"
    },
    {
        "value": "EG",
        "label": "Egipto"
    },
    {
        "value": "EH",
        "label": "Sáhara Occidental"
    },
    {
        "value": "ER",
        "label": "Eritrea"
    },
    {
        "value": "ES",
        "label": "España"
    },
    {
        "value": "ET",
        "label": "Etiopía"
    },
    {
        "value": "FI",
        "label": "Finlandia"
    },
    {
        "value": "FJ",
        "label": "Fiyi"
    },
    {
        "value": "FK",
        "label": "Islas Malvinas (Falkland Islands)"
    },
    {
        "value": "FM",
        "label": "Micronesia"
    },
    {
        "value": "FO",
        "label": "Islas Feroe"
    },
    {
        "value": "FR",
        "label": "Francia"
    },
    {
        "value": "GA",
        "label": "Gabón"
    },
    {
        "value": "GB",
        "label": "Reino Unido"
    },
    {
        "value": "GD",
        "label": "Granada"
    },
    {
        "value": "GE",
        "label": "Georgia"
    },
    {
        "value": "GF",
        "label": "Guayana Francesa"
    },
    {
        "value": "GG",
        "label": "Guernesey"
    },
    {
        "value": "GH",
        "label": "Ghana"
    },
    {
        "value": "GI",
        "label": "Gibraltar"
    },
    {
        "value": "GL",
        "label": "Groenlandia"
    },
    {
        "value": "GM",
        "label": "Gambia"
    },
    {
        "value": "GN",
        "label": "Guinea"
    },
    {
        "value": "GP",
        "label": "Guadalupe"
    },
    {
        "value": "GQ",
        "label": "Guinea Ecuatorial"
    },
    {
        "value": "GR",
        "label": "Grecia"
    },
    {
        "value": "GS",
        "label": "Georgias del Sur"
    },
    {
        "value": "GT",
        "label": "Guatemala"
    },
    {
        "value": "GU",
        "label": "Guam"
    },
    {
        "value": "GW",
        "label": "Guinea-Bisáu"
    },
    {
        "value": "GY",
        "label": "Guyana"
    },
    {
        "value": "HK",
        "label": "Hong Kong"
    },
    {
        "value": "HM",
        "label": "Isla Heard e Islas McDonald"
    },
    {
        "value": "HN",
        "label": "Honduras"
    },
    {
        "value": "HR",
        "label": "Croacia"
    },
    {
        "value": "HT",
        "label": "Haití"
    },
    {
        "value": "HU",
        "label": "Hungría"
    },
    {
        "value": "ID",
        "label": "Indonesia"
    },
    {
        "value": "IE",
        "label": "Irlanda"
    },
    {
        "value": "IL",
        "label": "Israel"
    },
    {
        "value": "IM",
        "label": "Isla de Man"
    },
    {
        "value": "IN",
        "label": "India"
    },
    {
        "value": "IO",
        "label": "Territorio Británico del Océano Índico"
    },
    {
        "value": "IQ",
        "label": "Irak"
    },
    {
        "value": "IR",
        "label": "Irán"
    },
    {
        "value": "IS",
        "label": "Islandia"
    },
    {
        "value": "JE",
        "label": "Jersey"
    },
    {
        "value": "JM",
        "label": "Jamaica"
    },
    {
        "value": "JO",
        "label": "Jordania"
    },
    {
        "value": "JP",
        "label": "Japón"
    },
    {
        "value": "KE",
        "label": "Kenia"
    },
    {
        "value": "KG",
        "label": "Kirguistán"
    },
    {
        "value": "KH",
        "label": "Camboya"
    },
    {
        "value": "KI",
        "label": "Kiribati"
    },
    {
        "value": "KM",
        "label": "Comoras"
    },
    {
        "value": "KN",
        "label": "San Cristóbal y Nieves"
    },
    {
        "value": "KP",
        "label": "Corea del Norte"
    },
    {
        "value": "KR",
        "label": "Corea del Sur"
    },
    {
        "value": "KW",
        "label": "Kuwait"
    },
    {
        "value": "KY",
        "label": "Islas Caimán"
    },
    {
        "value": "KZ",
        "label": "Kazajistán"
    },
    {
        "value": "LA",
        "label": "República Democrática Popular Lao"
    },
    {
        "value": "LB",
        "label": "Líbano"
    },
    {
        "value": "LC",
        "label": "Santa Lucía"
    },
    {
        "value": "LI",
        "label": "Liechtenstein"
    },
    {
        "value": "LK",
        "label": "Sri Lanka"
    },
    {
        "value": "LR",
        "label": "Liberia"
    },
    {
        "value": "LS",
        "label": "Lesoto"
    },
    {
        "value": "LT",
        "label": "Lituania"
    },
    {
        "value": "LU",
        "label": "Luxemburgo"
    },
    {
        "value": "LV",
        "label": "Letonia"
    },
    {
        "value": "LY",
        "label": "Libia"
    },
    {
        "value": "MA",
        "label": "Marruecos"
    },
    {
        "value": "MC",
        "label": "Mónaco"
    },
    {
        "value": "MD",
        "label": "Moldavia"
    },
    {
        "value": "ME",
        "label": "Montenegro"
    },
    {
        "value": "MF",
        "label": "San Martín (parte francesa)"
    },
    {
        "value": "MG",
        "label": "Madagascar"
    },
    {
        "value": "MH",
        "label": "Islas Marshall"
    },
    {
        "value": "MK",
        "label": "Macedonia"
    },
    {
        "value": "ML",
        "label": "Malí"
    },
    {
        "value": "MM",
        "label": "Birmania"
    },
    {
        "value": "MN",
        "label": "Mongolia"
    },
    {
        "value": "MO",
        "label": "Macao"
    },
    {
        "value": "MP",
        "label": "Islas Marianas del Norte"
    },
    {
        "value": "MQ",
        "label": "Martinica"
    },
    {
        "value": "MR",
        "label": "Mauritania"
    },
    {
        "value": "MS",
        "label": "Montserrat"
    },
    {
        "value": "MT",
        "label": "Malta"
    },
    {
        "value": "MU",
        "label": "Mauricio"
    },
    {
        "value": "MV",
        "label": "Maldivas"
    },
    {
        "value": "MW",
        "label": "Malaui"
    },
    {
        "value": "MX",
        "label": "México"
    },
    {
        "value": "MY",
        "label": "Malasia"
    },
    {
        "value": "MZ",
        "label": "Mozambique"
    },
    {
        "value": "NA",
        "label": "Namibia"
    },
    {
        "value": "NC",
        "label": "Nueva Caledonia"
    },
    {
        "value": "NE",
        "label": "Níger"
    },
    {
        "value": "NF",
        "label": "Isla Norfolk"
    },
    {
        "value": "NG",
        "label": "Nigeria"
    },
    {
        "value": "NI",
        "label": "Nicaragua"
    },
    {
        "value": "NL",
        "label": "Países Bajos"
    },
    {
        "value": "NO",
        "label": "Noruega"
    },
    {
        "value": "NP",
        "label": "Nepal"
    },
    {
        "value": "NR",
        "label": "Nauru"
    },
    {
        "value": "NU",
        "label": "Niue"
    },
    {
        "value": "NZ",
        "label": "Nueva Zelanda"
    },
    {
        "value": "OM",
        "label": "Omán"
    },
    {
        "value": "PA",
        "label": "Panamá"
    },
    {
        "value": "PE",
        "label": "Perú"
    },
    {
        "value": "PF",
        "label": "Polinesia Francesa"
    },
    {
        "value": "PG",
        "label": "Papúa Nueva Guinea"
    },
    {
        "value": "PH",
        "label": "Filipinas"
    },
    {
        "value": "PK",
        "label": "Pakistán"
    },
    {
        "value": "PL",
        "label": "Polonia"
    },
    {
        "value": "PM",
        "label": "San Pedro y Miquelón"
    },
    {
        "value": "PN",
        "label": "Pitcairn"
    },
    {
        "value": "PR",
        "label": "Puerto Rico"
    },
    {
        "value": "PS",
        "label": "Territorio Palestino"
    },
    {
        "value": "PW",
        "label": "Palaus"
    },
    {
        "value": "PY",
        "label": "Paraguay"
    },
    {
        "value": "QA",
        "label": "Catar"
    },
    {
        "value": "RE",
        "label": "Reunión"
    },
    {
        "value": "RO",
        "label": "Rumanía"
    },
    {
        "value": "RS",
        "label": "Serbia"
    },
    {
        "value": "RU",
        "label": "Rusia"
    },
    {
        "value": "RW",
        "label": "Ruanda"
    },
    {
        "value": "SA",
        "label": "Arabia Saudita"
    },
    {
        "value": "SB",
        "label": "Islas Salomón"
    },
    {
        "value": "SC",
        "label": "Seychelles"
    },
    {
        "value": "SD",
        "label": "Sudán"
    },
    {
        "value": "SE",
        "label": "Suecia"
    },
    {
        "value": "SG",
        "label": "Singapur"
    },
    {
        "value": "SH",
        "label": "Santa Elena, Ascensión y Tristan Da Cunha"
    },
    {
        "value": "SI",
        "label": "Eslovenia"
    },
    {
        "value": "SJ",
        "label": "Svalbard y Jan Mayen"
    },
    {
        "value": "SK",
        "label": "Eslovaquia"
    },
    {
        "value": "SL",
        "label": "Sierra Leona"
    },
    {
        "value": "SM",
        "label": "San Marino"
    },
    {
        "value": "SN",
        "label": "Senegal"
    },
    {
        "value": "SO",
        "label": "Somalia"
    },
    {
        "value": "SR",
        "label": "Surinam"
    },
    {
        "value": "SS",
        "label": "Sudán del Sur"
    },
    {
        "value": "ST",
        "label": "Santo Tomé y Príncipe"
    },
    {
        "value": "SV",
        "label": "El Salvador"
    },
    {
        "value": "SX",
        "label": "Sint Maarten (parte holandesa)"
    },
    {
        "value": "SY",
        "label": "República Árabe Siria"
    },
    {
        "value": "SZ",
        "label": "Suazilandia"
    },
    {
        "value": "TC",
        "label": "Islas Turcas y Caicos"
    },
    {
        "value": "TD",
        "label": "Chad"
    },
    {
        "value": "TF",
        "label": "Territorios Australes Franceses"
    },
    {
        "value": "TG",
        "label": "Togo"
    },
    {
        "value": "TH",
        "label": "Tailandia"
    },
    {
        "value": "TJ",
        "label": "Tayikistán"
    },
    {
        "value": "TK",
        "label": "Tokelau"
    },
    {
        "value": "TL",
        "label": "Timor Oriental"
    },
    {
        "value": "TM",
        "label": "Turkmenistán"
    },
    {
        "value": "TN",
        "label": "Túnez"
    },
    {
        "value": "TO",
        "label": "Tonga"
    },
    {
        "value": "TR",
        "label": "Turquía"
    },
    {
        "value": "TT",
        "label": "Trinidad y Tobago"
    },
    {
        "value": "TV",
        "label": "Tuvalu"
    },
    {
        "value": "TW",
        "label": "Taiwán"
    },
    {
        "value": "TZ",
        "label": "Tanzania"
    },
    {
        "value": "UA",
        "label": "Ucrania"
    },
    {
        "value": "UG",
        "label": "Uganda"
    },
    {
        "value": "UM",
        "label": "Islas menores alejadas de los Estados Unidos"
    },
    {
        "value": "US",
        "label": "Estados Unidos"
    },
    {
        "value": "UY",
        "label": "Uruguay"
    },
    {
        "value": "UZ",
        "label": "Uzbekistán"
    },
    {
        "value": "VA",
        "label": "Ciudad del Vaticano"
    },
    {
        "value": "VC",
        "label": "San Vicente y las Granadinas"
    },
    {
        "value": "VE",
        "label": "Venezuela"
    },
    {
        "value": "VG",
        "label": "Islas Vírgenes Británicas"
    },
    {
        "value": "VI",
        "label": "Islas Vírgenes, EE. UU."
    },
    {
        "value": "VN",
        "label": "Vietnam"
    },
    {
        "value": "VU",
        "label": "Vanuatu"
    },
    {
        "value": "WF",
        "label": "Wallis y Futuna"
    },
    {
        "value": "WS",
        "label": "Samoa"
    },
    {
        "value": "YE",
        "label": "Yemen"
    },
    {
        "value": "YT",
        "label": "Mayotte"
    },
    {
        "value": "ZA",
        "label": "Sudáfrica"
    },
    {
        "value": "ZM",
        "label": "Zambia"
    },
    {
        "value": "ZW",
        "label": "Zimbabue"
    }
];

export const principalCountries = [
    {
        "value": "AR",
        "label": "Argentina"
    },
    {
        "value": "IT",
        "label": "Italia"
    },
]

export const otherCountries = countries.sort((a, b) => (a.label.localeCompare(b.label)));

