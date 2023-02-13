let likeBtn = document.getElementById("like-btn");
let likeNum = document.getElementById("like-el");

function adddLikes() {
  if (likeBtn.classList.contains("clicked")) {
    likeBtn.classList.remove("clicked");
    likeNum.innerHTML = parseInt(likeNum.innerHTML) - 1;
  } else {
    likeBtn.classList.add("clicked");
    likeNum.innerHTML = parseInt(likeNum.innerHTML) + 1;
  }
}

likeBtn.addEventListener("click", adddLikes);
