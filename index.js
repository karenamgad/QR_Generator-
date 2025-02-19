import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([ {message:"Type your URL: " , name:"URL",},
  ])
  .then((answers) => {
   const url=answers.URL;
   var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr-image.png'));

fs.writeFile("message.txt",url,(err)=> {
    if (err)throw err;
    console.log("File Has been saved!!"); });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });