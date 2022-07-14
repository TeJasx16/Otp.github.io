const inputs = document.querySelectorAll('.btn')

inputs.forEach((input , index) =>{
    input.dataset.index = index;
    input.addEventListener("paste",handleonpasteotp);
    input.addEventListener("keyup",handleotp);
});

function handleonpasteotp  (e){
    const  data = e.clipboarddata.getData("text")
    const value = data.split("");

    if(value.length == inputs.length)
    {
        inputs.forEach((input,index)=>(input.value = value[index]))
        submit()

    }
}

function handleotp (e){
    const input = e.target;
    let value = input.value;
    input.value="";
    input.value = value ? value[0] : "";

    let fieldindex = input.dataset.index;

    if(value.length >0 && fieldindex < inputs.length-1){
        input.nextElementSibling.focus();
    }

    if(e.key == "Backspace" && fieldindex >0){
        
        input.previousElementSibling.focus();
    }

    if(fieldindex == input.length-1){
        submit();
    }

}





function submit(){
    let otp ="";
    inputs.forEach((input)=>{
        otp += input.value;
        input.disabled = true;
        input.classList.add(".dis");
    })
}

