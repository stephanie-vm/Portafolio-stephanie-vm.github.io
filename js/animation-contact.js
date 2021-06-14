function init() {
        const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const image = new Image();
    let imgWidth;
    let  imgHeight;
    image.src = 'img/tucan.jpg'; 
    image.classList.add('banner-2');
    // image.add.className('banner-1');
    const xWidth = canvas.width;
    const yHeight = canvas.height;
    const scale = 1.05;
    const yPosition = -4.5;
    const distanceX = 0.75;
    let xPosition = 0;
    let resetX;
    let resetY; 
    //Ésta función controla la ejecución de los métodos del objeto 
    function controls() {
        const imagePrincipal = new objectImage(image, imgWidth, imgHeight);
        imagePrincipal.changePositions();
        imagePrincipal.draw();
        window.requestAnimationFrame(controls);
    }
    window.requestAnimationFrame(controls); 
    //Se crea una clase para el objeto de imagen, con las propiedades
    //de la instancia, en este caso la única imagen 
    class objectImage {
        constructor(image, imgWidth, imgHeight) {
            this.image = image,
            this.imgWidth = imgWidth,
            this.imgHeight = imgHeight
        } 
        //Esté método cambia la posción de la imagen de acuerdo al ancho
        //y reseta los valores, se ejecuta antes de que carga la imagen y cuando finaliza se detiene
        changePositions() {
            image.onload = function() {
                imgWidth = image.width * scale;
                imgHeight = image.height * scale;
                
                if (imgWidth > xWidth) {
                    xPosition = xWidth - imgWidth;
                }
                if (imgWidth > xWidth) {
                    resetX = imgWidth;
                } else {
                    resetX = xWidth;
                }
                if (imgHeight > yHeight) {
                    resetY = imgHeight;
                } else {
                    resetY = yHeight;
                }
            }
        }
        //Éste método crea la imagen
        draw() {
            ctx.clearRect(0, 0, resetX, resetY); 
            
            if (imgWidth <= xWidth) {
                if (xPosition > xWidth) {
                    xPosition = -imgWidth + xPosition;
                }
                if (xPosition > 0) {
                    ctx.drawImage(image, -imgWidth + xPosition, yPosition, imgWidth, imgHeight);
                }
                if (xPosition - imgWidth > 0) {
                    ctx.drawImage(image, -imgWidth * 2 + xPosition, yPosition, imgWidth, imgHeight);
                }
            }
            else {
                if (xPosition > (xWidth)) {
                    xPosition = xWidth - imgWidth;
                }
                if (xPosition > (xWidth-imgWidth)) {
                    ctx.drawImage(image, xPosition - imgWidth + 1, yPosition, imgWidth, imgHeight);
                }
            }
            ctx.drawImage(image, xPosition, yPosition,imgWidth, imgHeight);
            xPosition += distanceX;
        }    
    }
}
init();