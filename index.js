function criaRequisicao(url){
    fetch(url)
      .then(response => response.json())
      .then(data => {
        preencheDados(data)
        if (data.erro) {
          trataErroDaRequisicao() 
        } else{
          document.getElementById('bs-feedback').style.transform = "translateY(-100%)"  

        }

      })
      .catch(e => {
        trataErroDaRequisicao()
      })
  }

    function verificaCaracteres(){
      document.getElementById('inputCEP').addEventListener('input', function(){
        this.value.length === 8 && criaRequisicao(`https://viacep.com.br/ws/${this.value}/json/`)
      })
   }

   verificaCaracteres()



   function trataErroDaRequisicao(){
    document.getElementById('bs-feedback').style.transform = "translateY(0px)"
   }

   document.querySelector('.close').addEventListener('click', function(){
      document.getElementById('bs-feedback').style.transform = "translateY(-100%)"
   })


   function preencheDados(data){

    const { bairro, cep, complemento, ddd, gia, ibge, localidade, logradouro, siafi, uf } = data

    let inputCep = document.querySelector('#inputCEP')

    let inputLogradouro = document.querySelector('#inputLogradouro')

    let inputNumero = document.querySelector('#inputNumero')

    let inputBairro = document.querySelector('#inputBairro')

    let inputCidade = document.querySelector('#inputCidade')

    let inputEstado = document.querySelector('#inputEstado')

    let numeros = []
    
    complemento.split('').forEach(e=>{
      e = parseFloat(e)
      if (isNaN(e)){
        
      } else {
        numeros.push(e)
      }
      
    })

    let numeroTratado = numeros.join("")


    if(numeroTratado == '') {
      numeroTratado = "sem número"
    }

    inputLogradouro.value = logradouro
    inputNumero.value = numeroTratado
    inputBairro.value = bairro
    inputCidade.value = localidade
    inputEstado.value = uf

    
   }