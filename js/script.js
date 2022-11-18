const checkLength = (element,minLenght = 2) => {
    console.log(element.target.id)

    if (element.target.value.length < minLenght) {
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = "You must enter a name"
    }

}



const validate = (e) => {
    switch(e.target.type) {
        case "text":
            break;
        case "email":
            break;
        case "textarea":
            break;
    }
}