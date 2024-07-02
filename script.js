    const colorGenerate=()=>{
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
    } 
    const update=()=>{
        const color=colorGenerate();
        document.getElementById('color-box').style.backgroundColor=color;
        document.getElementById("colorText").innerText=color;
        
    
    }

    const copyColorCode=()=>{
    const clrtxt=document.getElementById("colorText").innerText;
    const inputag= document.createElement('input');
    document.body.appendChild(inputag);
    inputag.value=clrtxt;
    inputag.select();
    document.execCommand('copy');
    document.body.removeChild(inputag);
    document.getElementById('copyButton').innerHTML="Copied color";
    document.getElementById('copyButton').style.backgroundColor = "gainsboro";
    document.getElementById('copyButton').style.color = "black";
    

   

}
    document.getElementById("copyButton").addEventListener('click',()=>{
        copyColorCode()
    })






    function gclr(){
    
        update();
    }

