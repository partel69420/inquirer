import inquirer from 'inquirer';

inquirer.prompt([
  {
    name: "fullName",
    message: "What is your full name?",
    type: "input",
  },
  {
    name: "favoriteSeason",
    message: "What's your favorite season?",
    type: "list",
    choices: ["spring", "summer", "autumn", "winter"]
  },
  {
    name: "birthYear",
    message: "In which year were you born?",
    type: "number",
  },
  {
    name: "interests",
    message: "What are your main interests?",
    type: "checkbox",
    choices: ["reading", "sports", "cooking", "traveling", "painting", "other"]
  },
  {
    name: "confirmIdentity",
    message: "Can you confirm your identity?",
    type: "confirm",
  },
  {
    name: "secretCode",
    message: "Enter your secret code",
    type: "password",
  }
])
.then(function (answers) {
  console.log(answers);
});
