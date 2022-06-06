let fields = document.querySelectorAll('[required]')

function customValidation(event){
    const field = event.target

    //lógica para verificar se existem erros
    function verifyErrors(){

        event.preventDefault()

        let foundError = false

        for(let error in field.validity){ //o for in consegue iterar sobre cada propriedade dos objetos
            //se não for customError
            //então verifica se tem erro

            if(field.validity[error]) {
                foundError = error
            }
        }

        return foundError
    }

    const error = verifyErrors()

    console.log(`Error exists: ${error}`)
    
   
}

for (let field of fields) {
    field.addEventListener('invalid',customValidation)
}