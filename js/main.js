var elFormFind = document.querySelector(".form-find-js");
var elInputFind = document.querySelector(".input-find-js");
var elBtnFind = document.querySelector(".btn-find-js");
var elAlertFind = document.querySelector(".alert-js");
var elTextFind = document.querySelector(".text-js");
var elResBtn = document.querySelector(".btn-js-res");

var randomNumber = Math.floor(Math.random() * 100);
var randomAttemp = 6;

elAlertFind.textContent = `Urinishlar soni ${randomAttemp}`

elFormFind.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var elInputFindValue = Number(elInputFind.value.trim());
    
    randomAttemp--;
    elAlertFind.textContent = `Urunishlar soni ${randomAttemp}`
    
    if(elInputFindValue > randomNumber){
        elTextFind.textContent = "Kirtilgan son ehtiyoriy sondan katta ";
        elTextFind.classList.remove("bg-rose-800");
        elTextFind.classList.add("bg-amber-600");
        
    } else if(elInputFindValue < randomNumber){
        elTextFind.textContent = "Kirtilgan son ehtiyoriy sondan kichik ";
        elTextFind.classList.remove("bg-amber-600");
        elTextFind.classList.add("bg-rose-800");
    }else{
        elTextFind.textContent = "Topdingiz 😎😎😎";
        elResBtn.classList.add("btn-js-res-show")
        elResBtn.addEventListener("click", function(){
            window.location.reload()
        })
    }
    
    if(randomAttemp == 0){
        elInputFind.disabled = true;
        elBtnFind.setAttribute("disabled", true)
        elAlertFind.textContent = "Urinishlar soni tugadi !!! 🙄";
        elAlertFind.classList.remove("bg-green-600");
        elAlertFind.classList.add("bg-red-500");
        elResBtn.classList.add("btn-js-res-show")
        elTextFind.textContent = "O'yin tugadi siz yutqazdingiz 😐";
        elInputFind.value = "";
        elTextFind.textContent = `Siz topa olmagan son ${randomNumber} edi 😜`;
        elResBtn.addEventListener("click", function(){
            window.location.reload()
        })
    }
})
