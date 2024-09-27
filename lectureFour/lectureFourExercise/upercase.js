function upercase (upper) {
  let lower = 0;
  let array = [];
  
  for (let i = 0; i < upper.length; i++) {
    if (upper.charCodeAt(i) > 96 && upper.charCodeAt(i) < 123) {
      lower = upper.charCodeAt(i) - 32;
      array.push(String.fromCharCode(lower));
    } else if (upper.charCodeAt(i) > 64 && upper.charCodeAt(i) < 91) {
      lower = upper.charCodeAt(i);
      array.push(String.fromCharCode(lower));
    } else if (upper.charCodeAt(i) == "32") {
      array.push(" ");
    }
  }
  console.log(array.join(""));
}
upercase("ThAt hI");