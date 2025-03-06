import dotenv from "dotenv";
import express from "express";
import axios from "axios";
const router = express.Router();
dotenv.config();
const api = process.env.RATE_API;
const apiUrl = "https://v6.exchangerate-api.com/v6";

router.post("/convert", async (req, res) => {
  try {
    const { from, to, amount } = req.body;
    const url = `${apiUrl}/${api}/pair/${from}/${to}/${amount}`;
    console.log(url)
    const response = await axios.get(url);
    if (response.data && response.data.result === "success") {
      res.status(200).json({
        success: true,
        rate: response.data.conversion_rate,
        amount: response.data.conversion_result,
      });
      console.log(response.data.conversion_rate,response.data.conversion_result)
    }
  } catch (e) {
    console.log(e);
  }
});

export default router;
