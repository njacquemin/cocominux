// FROM https://www.mrbinr.com/2014/07/03/uniqid-en-javascript
let uniqid = function() {
    return (new Date().getTime() + Math.floor((Math.random()*10000)+1)).toString(16);
};
// https://stackoverflow.com/a/19328891/2366345
// Utilisation : voir lien
// A TESTER AVEC DIFFERENTS BROWSERS !!!
let cocominuxDLLink = document.querySelector("#cocominux-dl-link");
let saveToJson = function (data, fileName) {
    let json = JSON.stringify(data),
        blob = new Blob([json], {type: "octet/stream"}),
        url  = window.URL.createObjectURL(blob);
    cocominuxDLLink.href = url;
    cocominuxDLLink.download = fileName;
    cocominuxDLLink.click();
    window.URL.revokeObjectURL(url);
};