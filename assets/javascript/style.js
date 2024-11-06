const words = ["UI / UX Designer", "WEB Designer"];
let i = 0;
let textElement = document.getElementById("text");
let currentWord = "";
let isDeleting = false;

function type() {
  const current = i % words.length;
  const fullText = words[current];
  
  currentWord = isDeleting
    ? fullText.substring(0, currentWord.length - 1)
    : fullText.substring(0, currentWord.length + 1);

  textElement.innerHTML = currentWord + '<span class="caret"></span>'; // 添加光標元素

  let typingSpeed = isDeleting ? 100 : 200;

  if (!isDeleting && currentWord === fullText) {
    typingSpeed = 2000; // 暫停
    isDeleting = true;
  } else if (isDeleting && currentWord === "") {
    isDeleting = false;
    i++;
    typingSpeed = 500; // 暫停
  }

  setTimeout(type, typingSpeed);
}

type();
