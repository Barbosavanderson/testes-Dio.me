import chalk from "chalk";

const mainPront= [
    { 
    name:"select",
    description: chalk.white.bold("QRcode ou Password"),
    pattern: /^[1-2]+$/,
    message: chalk.red (" 1 ou 2 O maldito, volta lá e lê. 1 ou 2 animal. "),
    require: true,     
 },
];
export default mainPront;