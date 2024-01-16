const sombra=document.getElementById('sombra');
const span=document.getElementById('span');
sombra.onclick=(e)=>{
    console.log(e);
    e.preventDefault();
    const som=document.getElementById('som');

    
    const x=e.offsetX-8;
    const y=e.offsetY-8;
    som.style.left=`${x}px`;
    som.style.top=`${y}px`;
    som.style.display='none';
    setTimeout(() => {
        som.style.display='block';
    }, 0);
};
