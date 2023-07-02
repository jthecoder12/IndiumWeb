main();

class Vector2f {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.magnitude = Math.sqrt(x*x+y*y);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getMagnitude() {
        return this.magnitude;
    }

    setX(newX) {
        this.x = newX;

        this.magnitude = Math.sqrt(this.x*this.x+this.y*this.y)
    }

    setY(newY) {
        this.y = newY;

        this.magnitude = Math.sqrt(this.x*this.x+this.y*this.y)
    }
}

class RGBA {
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.alpha = alpha;
    }

    getRed() {
        return this.red;
    }

    getGreen() {
        return this.green;
    }

    getBlue() {
        return this.blue;
    }

    getAlpha() {
        return this.alpha;
    }

    setRed(newRed) {
        this.red = newRed;
    }

    setRed(newGreen) {
        this.green = newGreen;
    }

    setRed(newBlue) {
        this.blue = newBlue;
    }

    setRed(newAlpha) {
        this.alpha = newAlpha;
    }
}

function loop(bgColor) {
    gl.clearColor(bgColor.getRed()/255, bgColor.getGreen()/255, bgColor.getBlue()/255, bgColor.getAlpha()/255);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function main() {
    const canvas = document.querySelector("#gameCanvas");
    const gl = canvas.getContext("webgl");

    if(gl == null) {
        alert("Initialization failed");
        return;
    }
}
