function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        fillColor: document.querySelector("#fill-color").value,
        bgColor: document.querySelector("#bg-color").value,
        size: document.querySelector("#size").value,
    });
    document.querySelector('#msg').innerText = "saved successfully";
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#fill-color").value = result.fillColor || "#000000";
        document.querySelector("#bg-color").value = result.bgColor || "#ffffff";
        document.querySelector("#size").value = result.size || "200";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get();
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


document.querySelector('#back').href = chrome.runtime.getURL('/data/index.html')
