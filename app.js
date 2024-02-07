//the "showText" function changes the image to a "textarea" and eliminates the paragraphs in order to show the encrypted or decrypted text and makes the copy button visible.

const showText = (text) => {
  let img = document.getElementById("imgToChange");
  let paragraphMessageNotFound = document.getElementById("messageNotFound");
  let paragraphMessage = document.getElementById("message");
  let body = document.getElementById("box");

 //This "if" checks whether to change the image or enable text input in the new "textarea".
  if (img) {
    let textareaElement = document.createElement("textarea");
    textareaElement.classList.add("textToShow");
    textareaElement.id = "textToShow";
    textareaElement.setAttribute("readonly", true);
    textareaElement.textContent = text;
    img.replaceWith(textareaElement); //here the image is replaced by the "textarea".
    body.removeChild(paragraphMessageNotFound);
    body.removeChild(paragraphMessage);   
    document.getElementById("copyButton").style.display = "block";  //here the copy button becomes visible.
  } else {
    let selectTextarea = document.getElementById("textToShow");
    selectTextarea.textContent = text; //here the new "textarea" will receive the text to be displayed.
  }
};



//By selecting the copy button this function copies the encrypted or decrypted text.
const copyText = async () => await navigator.clipboard.writeText(document.getElementById("textToShow").innerHTML);



/*This function encrypts the text entered by the user.*/
const encryptText = () => {
  let textSaved = document.getElementById("myTextArea").value; //here the text entered by the user is saved.
  let textEncrypt = ""; //the encrypted text is saved here.

  for (let i = 0; i < textSaved.length; i++) {
    if (textSaved[i] == "a") {
      textEncrypt += "ai";
    } else if (textSaved[i] == "e") {
      textEncrypt += "enter";
    } else if (textSaved[i] == "i") {
      textEncrypt += "imes";
    } else if (textSaved[i] == "o") {
      textEncrypt += "ober";
    } else if (textSaved[i] == "u") {
      textEncrypt += "ufat";
    } else {
      textEncrypt += textSaved[i];
    }
  }
  showText(textEncrypt); //here the encrypted text is shown on the screen
};



/*This function decrypts the text entered by the user.*/
const decryptText = () => {
  let textSaved = document.getElementById("myTextArea").value;
  let textDecrypt = "";

  for (let i = 0; i < textSaved.length; i++) {
    if (textSaved[i] == "a" && textSaved[i + 1] == "i") { //Here each if checks if the conditions match.
      textDecrypt += textSaved[i];
      i += 1;
    } else if (
      textSaved[i] == "e" &&
      textSaved[i + 1] == "n" &&
      textSaved[i + 2] == "t" &&
      textSaved[i + 3] == "e" &&
      textSaved[i + 4] == "r"
    ) {
      textDecrypt += textSaved[i];
      i += 4;                      //If conditions are met, add 4 to "i", the count of letters to skip.
    } else if (
      textSaved[i] == "i" &&
      textSaved[i + 1] == "m" &&
      textSaved[i + 2] == "e" &&
      textSaved[i + 3] == "s"
    ) {
      textDecrypt += textSaved[i];
      i += 3;
    } else if (
      textSaved[i] == "o" &&
      textSaved[i + 1] == "b" &&
      textSaved[i + 2] == "e" &&
      textSaved[i + 3] == "r"
    ) {
      textDecrypt += textSaved[i];
      i += 3;
    } else if (
      textSaved[i] == "u" &&
      textSaved[i + 1] == "f" &&
      textSaved[i + 2] == "a" &&
      textSaved[i + 3] == "t"
    ) {
      textDecrypt += textSaved[i];
      i += 3;
    } else {
      textDecrypt += textSaved[i];
    }
  }
  showText(textDecrypt);//here the Decrypted text is shown on the screen.
};
