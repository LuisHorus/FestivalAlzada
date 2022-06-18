
document.addEventListener('DOMContentLoaded',function(){
    inicarApp();
});
function inicarApp(){
    crearGaleria();
}
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++){
        const imagen=document.createElement("picture");
        imagen.innerHTML = `
        <source srcset="../img/thumb/${i}.webp" type="image/webp" alt="La familia"/>
        <img loading="lazy" width="200px" height="300px" src="../img/thumb/${i}.jpg" alt="imagen galeria"/>
          `; 
          
          galeria.appendChild(imagen);
    }
}