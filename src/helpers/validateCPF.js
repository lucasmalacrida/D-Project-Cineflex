export default function validateCPF(cpf) {
    // Convert number to string for processing
    cpf = cpf.toString();

    // Early return if cpf length is not 11
    if (cpf.length !== 11) return false;

    let sum = 0;
    let rest;

    // Checking for invalid patterns (all digits being the same)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Calculating first digit
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    // Calculating second digit
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.charAt(10))) return false;

    return true; // If both check digits are correct, return true
}