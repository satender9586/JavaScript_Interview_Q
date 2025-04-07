// check combo string palindrome
function checkComboPalindrome(str) {
  const spancesRemove = str.replace(/\s+/g, "").toLowerCase();
  const revsers = spancesRemove.split("").reverse().join("");

  if (spancesRemove === revsers) {
    return true;
  } else {
    return false;
  }
}

console.log(checkComboPalindrome("ollo "));
