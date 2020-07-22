import twitter from "https://deno.land/x/twitter/twitter.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Load config values using dotenv
config({
  path: "./.env",
  export: true,
});

// Create a new twitter client
const client = new twitter({
  consumer_key: Deno.env.get("CONSUMER_KEY"),
  consumer_secret: Deno.env.get("CONSUMER_SECRET"),
  bearer_token: Deno.env.get("BEARER_TOKEN"),
});

client
  .get("favorites/list", {
    screen_name: "phocks",
  })
  ?.then((response) => console.log(response));
