const saveBtn = document.getElementById("jsSave");


function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "Thank you";
    link.click();
}


if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
