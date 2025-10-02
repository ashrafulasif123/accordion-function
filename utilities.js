function accordion(divTarget, plusTarget, minusTarget){
    // data-* attribute দিয়ে ধরেছি
    const accordionButtons = document.querySelectorAll(`[data-${divTarget}]`)
    accordionButtons.forEach(accordionButton =>{
        accordionButton.addEventListener('click', function(){
            const targetDiv = document.getElementById(accordionButton.dataset[divTarget])
            const targetPlus = document.getElementById(accordionButton.dataset[plusTarget])
            const targetMinus = document.getElementById(accordionButton.dataset[minusTarget])

            accordionButtons.forEach(button =>{
                const div =  document.getElementById(button.dataset[divTarget])
                const plus = document.getElementById(button.dataset[plusTarget])
                const minus = document.getElementById(button.dataset[minusTarget])

                if(button !== accordionButton){
                    button.classList.remove('bg-slate-200')
                    div.classList.add('!hidden')
                    plus.classList.remove('!hidden')
                    minus.classList.add('!hidden')
                }
            })

            accordionButton.classList.toggle('bg-slate-200')
            targetDiv.classList.toggle('!hidden')
            targetPlus.classList.toggle('!hidden')
            targetMinus.classList.toggle('!hidden')
            
        })
    })
}

function goAnotherPage(page){
    window.open(`${page}.html`, '_blank')
}