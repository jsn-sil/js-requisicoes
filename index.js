function buscaCep() {
    if (cep.value.length == 9) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then((response) => response.json())
            .then((response) => {
                logradouro.value = response.logradouro;
                bairro.value = response.bairro;
                localidade.value = response.localidade;
                estado.value = response.estado;

           
            });

    }
}
