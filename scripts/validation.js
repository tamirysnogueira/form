let fields = document.querySelectorAll('[required]')
let button = document.getElementById('button')

function validationField(field){
    //lógica para verificar se existem erros
    function verifyErrors(){
        let foundError = false

        for(let error in field.validity){ //o for in consegue iterar sobre cada propriedade dos objetos
            if(field.validity[error]) {
                foundError = error
            }
        }

        return foundError
    }

    function validationPassword(){
        const confirmPassword = document.getElementById('password-2')
        const password = document.getElementById('password-1')
        
        if(password.value != ''){
            if(password.value.length < 8){
                customFieldError('A senha é muito curta')
                 
            } else if((password.value != confirmPassword.value) && (confirmPassword.value != '')) {
                customFieldError('As senhas não batem')
            } else {
                deleteStyleError()
            }
        }
    }

    function deleteStyleError(){
        const parent = field.parentNode
    
        field.style.borderColor = '#5E5E5E'
        parent.children['2'].style.opacity = '0'
    }

    function customFieldError(message){
        //mudando a estética do form se existir algum erro
        // pegando a div pai
        let parent = field.parentNode
            
        //se o id da div for igual a containerCheckbox, irá mudar apenas a borda do checkBox
        if(parent.id === 'containerCheckbox'){
            let label = parent.childNodes[3]
            label.classList.add('errorValidation')
        } 

        //se o id da div for diferente a containerCheckbox, irá mudar a borda do input e aparecer
        //a mensagem do span

        if(parent.id != 'containerCheckbox'){
            let span = parent.children['2']

            span.innerText = `${message}`

            parent.children['2'].style.opacity = '1'
            
            field.style.borderColor = 'red'
        }
    }

    return function() {
        const error = verifyErrors()

        if(error && error != 'valid'){
            customFieldError(field.name)
        } else {
            if(field.name === 'Senha' || field.name === 'Confirmação da senha'){
                
                validationPassword()
            } else {
                deleteStyleError()
            }
            
        }
    }
}

function customValidation(event){
    const field = event.target
    const validation = validationField(field)

    validation()
}
for (let field of fields) {
        field.addEventListener('invalid', event => {
            event.preventDefault()
        
            customValidation(event)
        })

        field.addEventListener('onfocusout', event => {
            event.preventDefault()
        
            customValidation(event)
        })

            //mudando a estética do form para quando o usuário deixar o campo
        field.addEventListener('blur', customValidation)
    }


function hiddenShow(img){
    let parentEye = img.parentNode
    let input = parentEye.children['0']
    let src = parentEye.children['3']
    console.log(src)

    parentEye.classList.toggle('visible')

    if(parentEye.classList.contains('visible')){
        input.type = 'text'
        img.src = '../img/eye-off.svg'

    } else {
        input.type = 'password'
        img.src = '../img/eye.svg'
    }
}
