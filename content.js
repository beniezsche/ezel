
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    retriveAllHistory();
});

function retriveAllHistory() {

    var history = document.getElementById("history");
    var counter = 0;

    chrome.history.search({text: '', startTime: 0, maxResults: 0}, function(data) {

        console.log(data.length);
        data.forEach(function(page) {
            // console.log(page.url);
            history.innerHTML += "<li>" + page.url + "</li>";
            counter++;
        });
    });    
}
