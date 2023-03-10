window.addEventListener('DOMContentLoaded', () => {
    console.log("지금");

    const listChk = document.querySelectorAll(".month > li");
    
    function setAttrChk (nextOrPrev) {
        if (el.firstElementChild.hasAttribute('checked')) {
            el.firstElementChild.removeAttribute('checked');
            radioChk.parentElement.nextOrPrev.firstElementChild.setAttribute('checked', 'checked');
        }
    }
    
    window.addEventListener('wheel', (e) => {
        const radioChk = document.querySelector("input[type=radio]:checked");

        if (e.deltaY > 0) {
            listChk.forEach(el => {

                if (Array.from(listChk).indexOf(radioChk.parentElement) == 0){
                    return;
                } else {
                    if (el.firstElementChild.hasAttribute('checked')) {
                        el.firstElementChild.removeAttribute('checked');
                        radioChk.parentElement.previousElementSibling.firstElementChild.setAttribute('checked', 'checked');
                    }
                }
            })
            
        } else if (e.deltaY < 0) {
            listChk.forEach(el => {
                // for(let i = 0; i <= listChk.length; i++) {
                if (Array.from(listChk).indexOf(radioChk.parentElement) == listChk.length-1){
                    return;
                } else {
                    if (el.firstElementChild.hasAttribute('checked')) {
                        el.firstElementChild.removeAttribute('checked');
                        radioChk.parentElement.nextElementSibling.firstElementChild.setAttribute('checked', 'checked');
                    }
                    
                }
            })
        }

        // console.log(indexof("radioChk.parentElement의 index가 listChk.length보다 크면 작동 안되게 해야한다."));
        // console.log(Array.from(listChk).indexOf(radioChk.parentElement));
        // console.log(listChk.length)
    })

})