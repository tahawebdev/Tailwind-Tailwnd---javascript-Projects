function generateQr(){ 
    if (inputBox.value == 0) 
    {
        window.alert("Please Write Your Text Or Your Url")
        qrImage.classList.add("hidden")
    }else
    {
        const inputBox = document.getElementById("inputBox");
        const qrImage = document.getElementById("img");
        qrImage.classList.remove("hidden")
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= + ${inputBox.value}`
    }
    }
