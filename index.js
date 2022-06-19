function isPalindrome(word) {
  // Write your algorithm here
  // converts every non alpahnumeric characters
  const re=/[\W_]/g;


// LOWWord converts any string passsed to lowercase and any non non alpahnumeric function is replaced with no space
  const lowWord=word.toLowerCase().replace(re,"");
  // checks the reverse of word is after spliting each character and later join 
  const reverseWord=lowWord.split("").reverse().join("");
  if(reverseWord===lowWord){
   return true;
  }
}