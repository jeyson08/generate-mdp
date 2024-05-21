const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "@&é\"'(§è!çà)$ù=:;-_+/.,";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  //   console.log("Je génére un mot de passe");
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)]; // Trouve un caractère au hasard
  }

  passwordOutput.value = password;

  passwordOutput.select();
  //   document.execCommand("copy"); // Déprécié, remplacé par la ligne suivante
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
};

generateButton.addEventListener("click", generatePassword);

//test
