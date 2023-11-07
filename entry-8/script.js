let isMouseDown = false;

const gridContainer1 = document.getElementById("grid1");
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 20; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mousedown", () => {
      isMouseDown = true;
      box.style.backgroundColor = "black";
    });
    box.addEventListener("mouseover", () => {
      if (isMouseDown) {
        box.style.backgroundColor = "black";
      }
    });
    box.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    gridContainer1.appendChild(box);
  }
}
const gridContainer2 = document.getElementById("grid3");
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 20; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mousedown", () => {
      isMouseDown = true;
      box.style.backgroundColor = "black";
    });
    box.addEventListener("mouseover", () => {
      if (isMouseDown) {
        box.style.backgroundColor = "black";
      }
    });
    box.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    gridContainer2.appendChild(box);
  }
}
const gridContainer3 = document.getElementById("grid2");
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 20; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mousedown", () => {
      isMouseDown = true;
      box.style.backgroundColor = "black";
    });
    box.addEventListener("mouseover", () => {
      if (isMouseDown) {
        box.style.backgroundColor = "black";
      }
    });
    box.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    gridContainer3.appendChild(box);
  }
}
//full disclaimer, I used many different references as well as chatGPT debugging to get this working correctly//