function toCase(text) {
    // write your code here
    const left = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    const right = text.toUpperCase();
    return `${left}-${right}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
