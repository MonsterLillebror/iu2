const checkLength = (element, minLength = 2) => {
    console.log(element.target.id)
    if (element.target.value.length < minLength ) {
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = "You must enter a name"  
    }
    else {
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""  
    }
}

const validate = (e) => {
    switch(e.target.type) {
        
        case "text":
            checkLength(e)
            break;
        case "email":
            break;
        case "textarea":
            break;

    }
}