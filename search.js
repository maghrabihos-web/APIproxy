import { getJson } from "serpapi";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

export async function postResults(req, res, next) {
  req.params = { ...req.body };
  next();
}

export async function getResults(req, res, next) {
  req.params = req.query;
  next();
}

export async function search(req, res, next) {
  const params = req.params;
  console.log(params)
  try {
  // const data = await getJson("google", params);
  
  
  //http://localhost:3400/search/?number=01005052977&cc=EG
  //await fetch(`https://www.google.com/search?q=${params.q}`)
  await fetch(`http://apilayer.net/api/validate?access_key=${API_KEY}&number==${params.number}&country_code=${params.cc}&format=1`)
  .then(response => response.json())
  .then(data => {console.log(data); res.locals.result = data; res.status(200);})
  .catch(error => console.error('Error:', error));
   
  //  res.locals.result = data;
  //  res.status(200);
  } catch (error) {
    console.log(error)
    res.status(400);
  }
  next();
}




   
   
