const TypeWriter = function (txtEl, words, wait = 3000) {
  this.txtEl = txtEl;
  this.words = words;
  this.txt = "";
  this.Index = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.Deleting = false;
};
TypeWriter.prototype.type = function () {
  const current = this.Index % this.words.length;
  const fulltxt = this.words[current];
  if (this.Deleting) {
    this.txt = fulltxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fulltxt.substring(0, this.txt.length + 1);
  }
  let typeSpeed = 200;
  if (this.Deleting) {
    typeSpeed /= 4;
  }

  if (!this.Deleting && this.txt === fulltxt) {
    typeSpeed = this.wait;
    this.Deleting = true;
  } else if (this.Deleting && this.txt === "") {
    this.Deleting = false;
    this.Index++;
    typeSpeed = 200;
  }
  this.txtEl.innerHTML = `<span class="typewriter-txt">${this.txt}</span>`;
  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txt = document.querySelector(".typing-fx");
  const words = JSON.parse(txt.getAttribute("data-words"));
  const wait = txt.getAttribute("data-wait");

  new TypeWriter(txt, words, wait);
}
