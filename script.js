(function () {
    'use strict';

    const $toggleCrop = document.getElementById('crop');

    $toggleCrop.addEventListener('change', evt =>{
        cropImage(350,200,"./city.jpg",evt.target.checked);
    })

    function cropImage(width, height, imageSrc, showCroppedImage){
        let image = new Image(),
        $imageElement = document.getElementById('main-img'),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        bigImg = imageSrc,
        smallImage;

        canvas.height = height;
        canvas.width = width;

        image.crossOrigin = 'anonymous';
        image.src = bigImg;
        image.onload = () => {
            ctx.drawImage(image, (image.width - width)/2 , (image.height - height)/2,width, height, 0, 0, width, height);
            smallImage = canvas.toDataURL('image/png', 1);
            $imageElement.src = showCroppedImage ? smallImage : bigImg;
            // document.body.appendChild(canvas);
        }
    }

    
})();
