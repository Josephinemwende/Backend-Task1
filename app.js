const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    
    //current day of the week
    const daysOfTheWeek = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const current_day = daysOfTheWeek[new Date().getDay()];
        
    //curret UTC time 
    const now = new Date();
    const utc_time = now.toISOString().slice(0, 19) + 'Z';
    
    //The github repo and file URL
    const github_repo_url = "https://github.com/Josephinemwende/Backend-Task1.git"
    const github_file_url = "https://github.com/Josephinemwende/Backend-Task1/blob/main/app.js";

    // response JSON
    const response = {
    "slack_name" : "Josephine_Mwenswa",
    "current_day" : current_day,
    "utc_time" : utc_time,
    "track" : track,
    "github_file_url" : github_repo_url,
    "github_repo_url" : github_file_url,
    "status_code" : 200,
};

res.json(response);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
