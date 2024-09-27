function invert (invert) {
  let typeChange = 0;
  let array = [];

  for (let i = 0; i < invert.length; i++) {
    if (invert.charCodeAt(i) > 96 && invert.charCodeAt(i) < 123) {
      typeChange = invert.charCodeAt(i) - 32;
      array.push(String.fromCharCode(typeChange));
    } else if (invert.charCodeAt(i) > 64 && invert.charCodeAt(i) < 91) {
      typeChange = invert.charCodeAt(i) + 32;
      array.push(String.fromCharCode(typeChange));
    } else if (invert.charCodeAt(i) == "32") {
      array.push(" ");
    }
  }
  console.log(array.join(""));
}
invert("ThAt Is CRazY");