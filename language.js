// Source - https://stackoverflow.com/a
// Posted by  Walkie_UA , modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-11, License - CC BY-SA 4.0

let language = window.navigator.language;
let languageFistTwo = language.substr(0, 2); // To only keep the first 2 characters.
let currentLocation = document
  .getElementsByTagName("html")[0]
  .getAttribute("lang-js");

switch (languageFistTwo) {
  case "it":
    if (currentLocation == "/") window.location.href = "/ru";
    break;

  default:
    if (currentLocation != "en") {
      window.location.href = "/";
    }
}