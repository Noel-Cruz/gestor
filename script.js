const sombra=document.getElementById('sombra');
// sombra.onclick=(e)=>{
//     console.dir(e);
//     e.preventDefault();
//     let i=38;
// let o=setInterval(() => {
//         sombra.style.backgroundImage=`radial-gradient(circle ${i}px at ${e.offsetX}px ${e.offsetY}px, rgb(255 255 255 / 15%) 80%,transparent)`;
//         i==120&&bi();
//         i++;
//         function bi(){
//             clearInterval(o);
//             sombra.style.backgroundImage='none';
//         };
//     },0.01);

// };
const span=document.getElementById('span');
span.onclick=(e)=>{
    // e.stopPropagation()
    // console.log(e);
};
sombra.onclick=(e)=>{
    console.log(e);
    e.preventDefault();
    const som=document.getElementById('som');

    
    const x=e.offsetX-8;
    const y=e.offsetY-8;
    som.style.left=`${x}px`;
    som.style.top=`${y}px`;
    som.style.display='block';
    setTimeout(() => {
        som.style.display='none'; 
    }, 400);
};
