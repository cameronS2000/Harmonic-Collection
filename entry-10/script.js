document.addEventListener("DOMContentLoaded", function () {
    let isWhite = true;
    let blueDuration = 50;
  
    function changeBackgroundColor() {
      if (isWhite) {
        document.body.style.backgroundColor = "white";
        setTimeout(changeBackgroundColor, 14950);
      } else {
        document.body.style.backgroundColor = "blue";
        setTimeout(changeBackgroundColor, blueDuration);
        blueDuration *= 2;
      }
  
      isWhite = !isWhite;
    }
  
    changeBackgroundColor();
  });
  