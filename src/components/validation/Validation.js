

const Validation = () =>{
    if(/\S+@\S+\.\S+/.test(userData.email) || userData.email.lenght < 35 || userData.email.lenght === 0){
        setErrors('')
    }
    else{
            setErrors({
                ...errors,
                email: 'Email invalido'
            })  
    }
    if(userData.password.lenght === 0){
        setErrors({
            ...errors,
            password: 'Debe tener al menos un caracter'
        })
    }else{
        (userData.password.lenght < 6 || userData.password.lenght > 10)
            setErrors({
                ...errors,
                password: 'Debe tener entre 6 y 10 caracteres'
            })
        }
    }

export default Validation;