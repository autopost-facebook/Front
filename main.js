const {app, BrowserWindow} = require('electron')

let janelaPrincipal

app.on('ready',()=>{
    janelaPrincipal = new BrowserWindow({
        width: 1000,
        height: 1000,
        resizable: true,

    }) 
    janelaPrincipal.loadURL(`file://${__dirname}/index.html`)});

        var botaoFoto = document.getElementById("fotos-icon")
     
    document.addEventListener("DOMContentLoaded", function(){
        var entradaLink = document.getElementById("fotos-icon")

    entradaLink.addEventListener("change",function(){
        var arquivoSelecionado = event.target.files[0] 
        
        if (arquivoSelecionado){
                console.log("Imagem selecionada!", arquivoSelecionado.name)
                //PARTE LOGICA PARA MANIPULAR AS IMAGEM

               
                    var imagemLink = document.getElementById("botaoImagem");
                    var campoLink = document.getElementById("campoLink");
                
                    imagemLink.addEventListener("click", function() {
                        campoLink.style.display = "block";
                        campoLink.focus();

                        console.log("DOMContentLoaded evento disparado"); // Verifique se esse log aparece no console
                        console.log(imagemLink); // Verifique se o elemento da imagem é selecionado corretamente
                        console.log("Clique na imagem!"); // Verifique se esse log aparece quando você clica na imagem
                        /*Teste Git*/

                    });
              
                
    }

    })    
    })
    