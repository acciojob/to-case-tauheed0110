function toCase(text) {
    // write your code here
    const left = text.toLowerCase();
    const right = text.toUpperCase();
    return `${left}-${right}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
