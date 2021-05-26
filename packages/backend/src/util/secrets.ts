// const console.log "./console.log
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  console.log("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  console.log("Using .env.example file to supply config environment variables");
  dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}
export const PORT = process.env.PORT;
export const ENVIRONMENT = process.env.NODE_ENV;
export const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const MONGODB_URI: string =
  (prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"]) || "";

if (!MONGODB_URI) {
  if (prod) {
    console.log(
      "No mongo connection string. Set MONGODB_URI environment variable."
    );
  } else {
    console.log(
      "No mongo connection string. Set MONGODB_URI_LOCAL environment variable."
    );
  }
  process.exit(1);
}
