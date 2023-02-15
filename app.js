"use strict";

const submitFrm = document.getElementById("giphy-form");
// const submitBtn = document.getElementById("search-btn");
const removeBtn = document.getElementById("rmv-imgs");
let textGIF = document.getElementById("search-text");

const getData = async (e) => {
  e.preventDefault();
  let apiURL = `http://api.giphy.com/v1/gifs/search?q=${textGIF.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  let giphURL = "";
  try {
    const res = await axios.get(apiURL);

    giphURL = res.data.data[0].images.original.url;

    const img = document.createElement("img");
    img.src = giphURL;
    const src = document.querySelector("div");
    src.after(img);
  } catch (error) {
    // Handle errors
  }
};

function removeImages() {
  const el = document.querySelectorAll("img");
  el.forEach(function (img) {
    img.parentNode.removeChild(img);
  });
}

submitFrm.addEventListener("submit", getData);
removeBtn.addEventListener("click", removeImages);
