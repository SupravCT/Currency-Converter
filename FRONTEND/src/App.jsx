import { useState } from "react";
import axios from "axios";
import { SiConvertio } from "react-icons/si";
import React from "react";

const App = () => {
  const [Form, setForm] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const currencyCodes = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/convert",
        Form
      );
      setResult(response.data);
    } catch (e) {
      console.log(e);
      setError("Failed to fetch conversion result.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 py-6 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-white bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 py-3 px-4 rounded-lg shadow-lg animate-pulse">
          Welcome to Great Currency Converter
        </h2>
      </div>

      <div className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 p-5 rounded-lg shadow-xl w-full max-w-sm">
        <div className="text-center mb-3">
          <SiConvertio className="text-4xl text-white mx-auto" />
          <h1 className="text-xl font-semibold text-white mt-2">
            Currency Converter
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              className="block text-md font-medium text-white"
              htmlFor="from"
            >
              From Currency
            </label>
            <select
              id="from"
              name="from"
              value={Form.from}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-white rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Currency</option>
              {currencyCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-md font-medium text-white"
              htmlFor="to"
            >
              To Currency
            </label>
            <select
              id="to"
              name="to"
              value={Form.to}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-white rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Currency</option>
              {currencyCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-md font-medium text-white"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={Form.amount}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-white rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Convert
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-3 text-center text-red-600 font-semibold">
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-3 p-3 bg-white rounded-md shadow-md text-center">
            <p className="text-lg font-bold text-gray-800">
              Converted Amount:{" "}
              <span className="text-indigo-600">
                {result.amount} {result.target}
              </span>
            </p>
            <p className="text-gray-600 mt-1">Conversion Rate: {result.rate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
