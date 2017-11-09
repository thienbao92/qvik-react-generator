var prompt = require("prompt");
const init = () => {
  //
  // Start the prompt
  //
  prompt.start();

  const promptArr = [
    {
      name: "username",
      description: "Your name?",
      type: "string"
    }
  ];

  prompt.get(promptArr, function(err, result) {
    console.log("Command-line input received:");
    if (!err) {
      doSth(result);
      return;
    }
    console.error("Error in input");
  });
};

const doSth = input => {
  console.log("input of user is");
  console.log(input);
};

module.exports = init;
