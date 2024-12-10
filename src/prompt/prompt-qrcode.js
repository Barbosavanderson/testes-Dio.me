import chalk from "chalk";
import { describe } from "node:test";


const promptQrcode = [
{
    name:"link",
    description: chalk.blue("Digiti o link para gerar o QR CODE."),
},
{
    name:"type",
    description: chalk. yellow(" escolha entre o tipo de QRCODE 1-normal e 2 terminal"),

    pattern: /^[1-2]+$/,
    message: chalk.red.italic(" Ta de zueira ne outra vez, 1 ou 2 satanás"),
    required: true,
}
];

export default promptQrcode