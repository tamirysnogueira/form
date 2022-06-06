let fields = document.querySelectorAll('[required]')

function customValidation(event){
    const field = event.target

    //lógica para verificar se existem erros
    function verifyErrors(){

        event.preventDefault()

        let foundError = false

        for(let error in field.validity){ //o for in consegue iterar sobre cada propriedade dos objetos

            if(field.validity[error]) {
                foundError = error
            }
        }

        return foundError
    }

    const error = verifyErrors()
    console.log(error)

    //mudando a estética do form 
    if(error){
        let parent = field.parentNode
        
        if(parent.id === 'containerCheckbox'){
            let label = parent.childNodes[3]
            label.classList.add('errorValidation')
        } 

        if(parent.id != 'containerCheckbox'){
            field.style.borderColor = 'red'

            parent.children['2'].style.opacity = '1'
        }
    }
}

for (let field of fields) {
    field.addEventListener('invalid',customValidation)

    //mudando a estética do form para quando o usuário deixar o campo
    field.addEventListener('blur', event => {
        const field = event.target
        const parent = field.parentNode
 
        field.style.borderColor = '#5E5E5E'
        parent.children['2'].style.opacity = '0'
    })
}


function hiddenShow(img){
    let parentEye = img.parentNode
    let input = parentEye.children['0']
    let src = img.getAttribute('src')
    console.log(img)

    parentEye.classList.toggle('visible')

    if(parentEye.classList.contains('visible')){
        input.type = 'text'
        img.src = '../img/eye-off.svg'

    } else {
        input.type = 'password'
        img.src = '../img/eye.svg'
    }
}


//acionando o evento para mostrar ou esconder a senha
