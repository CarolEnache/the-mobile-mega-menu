[...document.querySelectorAll('.t-notsignedin')].map(dropBox => {
    console.log(dropBox)
    let textCenter = dropBox.querySelector('.text-center')
    let boxList = [...dropBox.querySelectorAll('ul li a')]
    console.log(boxList)
    return {
        title: textCenter.innerText,
        list: boxList.map(a => {

            return {
                y: a.href,
                x: a.innerText
            }

        })
    }
})