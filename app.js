var heartCount = 0;

function createHeart() {
  if (heartCount < 7) {
    var heart = document.createElement("div");
    heart.classList.add("heart");
    heart.onclick = createHeart;
    document.getElementById("heartContainer").appendChild(heart);
    heartCount++;
  } else {
    alert("No more hearts can be generated");
  }
}
