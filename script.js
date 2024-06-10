const regularNotesEls = [...document.querySelectorAll('.regular-note')];
const rsEls = [...document.querySelectorAll('.rs')];
const calculate = document.querySelector('#calculate').addEventListener('click', () => {
    const regularNotesValues = regularNotesEls.map(el => Number(el.value));
    const rsValues = rsEls.map(el => Number(el.value));
    const [p1, p2, p3, p4] = regularNotesValues;
    let message = '';
    let ms1, ms2;

    if (rsValues.every(value => Boolean(value))) {
        [ms1, ms2] = rsValues;
    } else if (regularNotesValues.every(value => Boolean(value))) {
        ms1 = Number(((p1 + p2) / 2).toFixed(1));
        ms2 = Number(((p3 + p4) / 2).toFixed(1));
    } else {
        window.alert('Insira os dados corretamente!');
        return;
    }

    const ma = Number(((ms1 + ms2) / 2).toFixed(1));
    message = `Sua Média Anual foi de ${ma} pontos.\n\n`;

    if (ma >= 6 && (p4 ? p4 >= 4 : true)) message += 'Como você obteve uma média acima de 6.0 pontos, você está aprovado. Parabéns!';
    else {
        const vs = Number(((50 - 6 * ma) / 4).toFixed(1));

        if (p4 && p4 < 4) message += 'Infelizmente você obteve uma pontuação menor que 4.0 pontos na P4, logo terá que fazer a VS\n\n';
        if (ma < 6) message += 'Infelizmente você obteve uma média abaixo dos 6.0 pontos e terá que fazer VS.\n\n';
        message += `A nota mínima necessária na VS para obter aprovação será de ${vs} pontos.`;
    }

    window.alert(message);
});