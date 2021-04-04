const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 500;
canvas.height = 500;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;


function stopPainting(){
    painting = false;
}


function startPainting(event){
    if(filling === false){
        painting = true;
    }
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y)
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


function handleColorChange(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size; 
}


function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
    }
}


function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}


function handleCM(event){
    event.preventDefault();
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}


Array.from(colors).forEach(color => color.addEventListener("click", handleColorChange));

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}