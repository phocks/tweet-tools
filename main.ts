import { TwitterApi } from "https://deno.land/x/deno_twitter_api/mod.ts";
import { keys } from './keys.ts';


// import { config } from "https://deno.land/x/dotenv/mod.ts";


// // Load config values using dotenv
// config({
//   path: "./.env",
//   export: true,
// });


// Create a new twitter client
const twitterApi = new TwitterApi(keys);

let userTimeline = await twitterApi.get("statuses/user_timeline.json", {
  user_id: "19025957",
  screen_name: "TTCnotices",
  count: "20",
  trim_user: "true",
  tweet_mode: "extended", // Used to prevent truncating tweets
});

console.log(await userTimeline.json());