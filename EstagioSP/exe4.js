const fatEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

let totalFaturamento = 0;
for (const estado in fatEstado) {
    totalFaturamento += fatEstado[estado];
}

console.log("Percentual por estado:");
for (const estado in fatEstado) {
    const percentual = (fatEstado[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
