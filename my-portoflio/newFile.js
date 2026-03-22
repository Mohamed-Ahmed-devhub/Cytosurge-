document.addEventListener('DOMContentLoaded', function () {


  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1800,
      once: true,
      offset: 100,
      easing: 'ease-out-quart',
    });
  }


  const textElement = document.querySelector(".content-box h1 span");
  if (textElement) {
    const text = "Digital Art";
    let index = 0;
    textElement.innerHTML = "";

    function typeEffect() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 200);
      }
    }

    setTimeout(typeEffect, 1000);
  }
}
);
