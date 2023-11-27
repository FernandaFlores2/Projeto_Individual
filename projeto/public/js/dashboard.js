function obterDadosGrafico(){
 
    
    fetch(`/dashboard/obterDadosComentarios`, { cache: 'no-store' }).then(function (response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                
                var dados = [resposta[0].Dado, resposta[1].Dado, resposta[2].Dado]; /*vetor */
            

                graficoPostagens.data.datasets[0].data = dados /* acessando os dados do grafico*/
                graficoPostagens.update();
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });


    fetch(`/dashboard/obterDadosGenero`, { cache: 'no-store' }).then(function (response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                var dados = [resposta[0].Dado, resposta[1].Dado, resposta[2].Dado]; /*vetor */

                graficoGenero.data.datasets[0].data = dados /* acessando os dados do grafico*/
                graficoGenero.update();

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });


    fetch(`/operacaoMatematica/obterMedia`, { cache: 'no-store' }).then(function (response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

               
                var tamanho = resposta.length;
                var total = 0;


                for(var i = 0; i < tamanho; i++){
                    var contagemAtual = resposta[i];
                    total += contagemAtual.Dado;

                    
                }
                var media = total / tamanho;
                mediaComentarios.innerHTML = `Média de comentários por postagens <br> ${media.toFixed(2)}`;
            
            
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}