// Mostra a mensagem de boas-vindas no terminal
console.log("Olá, mundo! Meu primeiro projeto com Claude Code.");

// Cria um objeto Date com a data e a hora deste momento
const agora = new Date();

// Converte a data/hora para texto no formato brasileiro (dd/mm/aaaa hh:mm:ss), no fuso de São Paulo
const dataHoraBrasil = agora.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

// Mostra a data e a hora formatadas na linha seguinte
console.log(dataHoraBrasil);
