// change like - dislike
let likes = document.querySelectorAll(".fa-heart");

for (let like of likes) {
  like.addEventListener("click", () => liked(like));
}

function liked(item) {
  if (item.classList.contains("far")) {
    item.classList.remove("far");
    item.classList.add("fas");
  } else {
    item.classList.remove("fas");
    item.classList.add("far");
  }
}


// search bar
const input = document.getElementById("site-search");
const articles = document.querySelectorAll("article");
const titles = document.querySelectorAll(".title");
const descriptions = document.querySelectorAll(".description");

function search() {
  input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();

    for (let i = 0; i < articles.length; i++) {
      const title = titles[i].innerText.toLowerCase();
      const description = descriptions[i].innerText.toLowerCase();
      let corresponde = title.toLowerCase().indexOf(value) >= 0;
      let correspondes = description.toLowerCase().indexOf(value) >= 0;
      articles[i].style.display = corresponde ? "" : "none";
      articles[i].style.display = correspondes ? "" : "none";
    }
  });
}

search();
