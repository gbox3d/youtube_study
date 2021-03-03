
(async function () {
    console.log(fabric.version);
    document.querySelector('#version').textContent = `version : ${fabric.version}`

    var fbCanvas = new fabric.Canvas('mainCanvas', {
        backgroundColor: '#000000',
        enableRetinaScaling: false
    })

    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 64,
        height: 64,
        selectable: false
    })

    rect.on('mousedown', () => {

        console.log('click rect')

        rect.set('fill', 'blue')
        fbCanvas.requestRenderAll()

    })

    var img_2 = await new Promise((resolve, reject) => {
        fabric.util.loadImage('../pulstar-image.jpg', (img) => {
            resolve(img)
            //img_2 = img
        })
    })


    var imgObj = await new Promise((resolve, reject) => {
        fabric.Image.fromURL('../kof2001-image.jpg', (imgObj) => {
            resolve(imgObj)
        })
    })

    imgObj.set('left', 200)
    imgObj.set('top', 20)
    imgObj.set('selectable', false)

    imgObj.on('mousedown', () => {

        imgObj.setElement(img_2)
        imgObj.setCoords()
        fbCanvas.requestRenderAll()

    })

    fbCanvas.add(imgObj)
    fbCanvas.add(rect)

})()



