let github_link ='https://young-tea.github.io/hypixel-crafts-api/crafts.json';
$.getJSON(github_link, function(data) {
     //data is the JSON string
     console.log(data);
});