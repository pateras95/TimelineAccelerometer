let x;

function init() {
    if (window.DeviceMotionEvent == undefined) {
        //No accelerometer is present. Use buttons.
        document.querySelector("#acc").textContent = "NO";
        document.querySelector("#acc").className = "no";
    } else {
        document.querySelector("#acc").textContent = "YES";
        document.querySelector("#acc").className = "yes";
        window.addEventListener("devicemotion", accelerometerUpdate, true);
    }

    function accelerometerUpdate(event) {
        var aX = event.accelerationIncludingGravity.x * 50;
        var aY = event.accelerationIncludingGravity.y * 50;
        var aZ = event.accelerationIncludingGravity.z * 50;

        document.querySelector("#x").value = aX.toFixed(0);
        x = aX.toFixed(0);
        document.querySelector("#y").value = aY.toFixed(0);
        document.querySelector("#z").value = aZ.toFixed(0);

        // ix aY is negative, switch rotation
        if (aY < 0) {
            aX = -aX - 180;
        }
        document.querySelector("#block").style.transform = "rotate(" + aX + "deg)";
    }

    const flavoursContainer = document.getElementById("flavoursContainer");
    const flavoursScrollWidth = flavoursContainer.scrollWidth;
    self.setInterval(() => {
        if (flavoursContainer.scrollLeft !== flavoursScrollWidth && x < -6) {
            flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 10, 0);
        }
    }, 15);
    self.setInterval(() => {
        if (flavoursContainer.scrollRight !== flavoursScrollWidth && x > 6) {
            flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 10, 0);
        }
    }, 15);
}