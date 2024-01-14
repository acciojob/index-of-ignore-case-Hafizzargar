function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (str === null || subStr === null) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Find the index of the substring in the lowercase string
  const index = lowerStr.indexOf(lowerSubStr);

  // Return the correct index or -1 if not found
  return index; 
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
