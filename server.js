import express, { json } from "express";
import dotenv from "dotenv";
import { config } from "serpapi";
import cors from "cors";
import {getResults, postResults, search } from './search.js';




dotenv.config();



const app = express();
app.use(cors({ origin: "http://localhost" }));
app.use(json());

const PORT = process.env.PORT || 3400;


// Serve static files from the 'public' directory  
app.use(express.static(process.cwd() +'/public'));  // Hossam
// simple route => define a GET route which is simple for test.
app.get("/", (req, res) => {
  //res.json({ message: "Welcome to bezkoder application." });
  res.sendFile(process.cwd() + '/public/login.html'); // Hossam

});

//app.get("/", (req, res) => {
//  res.status(200).json({ message: "response to default get request" });
//});

app.get("/another-route", (req, res) => {
  res.status(200).json({ message: "here is another route" });
});

app.get("/keyword-search/:q", search, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.get("/search", getResults, search, (req, res) => {
  if (res.locals.result.valid = true) {console.log('Success')}
  res.status(200).json(res.locals.result)
  //res.setHeader('Content-Type', 'text/html');
  //res.send(res.locals.result);
});

app.post("/search", postResults, search, (req, res) => {
  if (res.locals.result.valid = true) {console.log('Success')}
  res.status(200).json(res.locals.result);
});

app.listen(PORT,() => {
  console.log(`Application home page http://localhost:${PORT}\n-------------------------`);
});