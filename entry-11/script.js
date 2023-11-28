document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("canvas");
    var backgroundsContainer = document.getElementById("backgrounds");

    backgroundsContainer.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            canvas.style.backgroundImage = "url('" + event.target.src + "')";
            canvas.style.backgroundSize = "cover";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("canvas");
    var subjectsContainer = document.getElementById("subjects");

    subjectsContainer.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            var draggableImage = new Image();
            draggableImage.src = event.target.src;
            draggableImage.alt = event.target.alt;
            draggableImage.style.maxHeight = "350px";
            draggableImage.style.position = "absolute";

            draggableImage.draggable = true;
            draggableImage.addEventListener("dragstart", function (dragStartEvent) {
                dragStartEvent.dataTransfer.setData("text/plain", "");
            });

            canvas.appendChild(draggableImage);

            canvas.addEventListener("dragover", function (dragOverEvent) {
                dragOverEvent.preventDefault();
            });

            canvas.addEventListener("drop", function (dropEvent) {
                dropEvent.preventDefault();
                var x = dropEvent.clientX - canvas.offsetLeft;
                var y = dropEvent.clientY - canvas.offsetTop;
                draggableImage.style.left = x + "px";
                draggableImage.style.top = y + "px";
            });
        }
    });
});
