var botaoEnviar = document.getElementById('enviarPesquisa');

botaoEnviar.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('Clicou em enviar')
    enviaDados();
})

function enviaDados(){
    let formulario = document.getElementById('formulario');
    let inlineError = document.getElementById('inline-error');
    let errorDiv = document.getElementById('erro');
    let sucess = document.getElementById('obrigado');
    var formData = new FormData(formulario);

    if (!formulario.checkValidity()) {
        inlineError.classList.remove('d-none');
        inlineError.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
        $.ajax({
            url: '', //coloque aqui o link do seu link de api gerado lá no Google
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data, textStatus, xhr) {
                if (xhr.status === 200) {
                    console.log('Requisição bem-sucedida:', data);
                    inlineError.classList.add('d-none');
                    sucess.classList.remove('d-none');
                    sucess.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    formulario.reset();
                } else {
                    console.log('Requisição concluída, mas com status diferente de 200:', data);
                }
            },
            error: function (xhr, status, error) {
                console.error('Erro ao enviar os dados:', status, error);
                errorDiv.classList.remove('d-none');
                inlineError.classList.add('d-none');
                sucess.classList.add('d-none');
                errorDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        });
    }
}

