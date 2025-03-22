import Inputmask from "inputmask";

export function inputMusk() {
    console.log('inputmask works');

    const mask = new Inputmask.default("+38 (099) 999-99-99");
    mask.mask(document.querySelector("#myInput"));
}