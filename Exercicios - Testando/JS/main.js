estacao = () => {
    let mes = prompt('Digite o mês em extenso').toUpperCase();
    let estacao;
    let converter = mes.toUpperCase();
    if (
        converter == 'JANEIRO' ||
        converter == 'FEVEREIRO' ||
        converter == 'MARÇO'
    ) {
        estacao = 'INVERNO';
    } else if (
        converter == 'ABRIL' ||
        converter == 'MAIO' ||
        converter == 'JUNHO'
    ) {
        estacao = 'PRIMAVERA';
    } else if (
        converter == 'JULHO' ||
        converter == 'AGOSTOS' ||
        converter == 'SETEMBO'
    ) {
        estacao = 'VERÃO';
    } else if (
        converter == 'OUTUBRO' ||
        converter == 'NOVEMBRO' ||
        converter == 'DEZEMBRO'
    ) {
        estacao = 'OUTONO';
    } else {
        estacao = 'IDEFINIDO';
    }

    let saida = document.createElement('h3');
    saida.innerHTML = `No mês de ${converter}, estaremos na estação <strong>${estacao}</strong>.`;
    document.body.appendChild(saida);
    saida.style.backgroundColor = '#CCCCC9';
    titulo.style.borderBottom = 'solid 3px #000';
    titulo.style.margin = '20px';
};
