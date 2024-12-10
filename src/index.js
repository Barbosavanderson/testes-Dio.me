import prompt from "prompt";
import mainPrompt from "./prompt/promptmain.js"

import createQrCode from "./services/qr-code/creat.js";
import createPassword from "./services/password/creat.js";

async function main() {
    prompt.get(mainPrompt, async (err, choose) =>{
    if(choose.select == 1) await createQrCode();
    if(choose.select == 2) await createPassword();
    });

prompt.start();
}
main();