const  one=document.getElementById('one');
const  two=document.getElementById('two');
const  form= document.getElementById('form');
const errorElement = document.getElementById('error');
const errorElement2 = document.getElementById('error2');
const errorElement3 = document.getElementById('error3');
const errorElement4 = document.getElementById('error4');
const success = document.getElementById('success');





form.addEventListener('submit',(e) =>{

    e.preventDefault();

    if (one.value === ''|| one.value == null){
        errorElement.innerText = 'First Value Is Requried';
    }else{
        if(two.value === ''|| two.value == null) {
            errorElement2.innerText = 'Second Value Is Requried';
        }else {
            if (one.value >= 1 && one.value <= 20000) {

                if (two.value >= 1 && two.value <= 20000) {

//method call
/*
                    success.innerText = +one.value + +two.value;
*/
                        var a= +one.value/1;
                        var c= +two.value/1;
                        var x=(a * a) + (c  * c);
                        var b=Math.sqrt(x);
                        success.innerText = "( "+ a.toFixed(2) +" , "+ b.toFixed(2) +" , "+c.toFixed(2) +" )";

                } else {
                    errorElement4.innerText = ' The Value of "c" should be under(1-20,000)';
                }
            } else {
                errorElement3.innerText = ' The Value of "a" should be under(1-20,000)';
            }

            /* if(one.value >= 1 && one.value <= 20000) {
                 /!* success.innerText = 'success';*!/
             } else{
                 errorElement3.innerText = ' The Value of "a" should be under(1-20,000)';
             }
         }


         if(two.value === ''|| two.value == null) {
             errorElement2.innerText = 'Second Value Is Requried';
         }else {
             if(two.value >= 1 && two.value <= 20000) {
                 /!*success.innerText = 'success';*!/
             }else{
                 errorElement4.innerText = ' The Value of "c" should be under(1-20,000)';
             }
         }

         /!*if(one.value >= 1 && one.value <= 20000) {
            /!* success.innerText = 'success';*!/
         }

         else{
             errorElement3.innerText = ' The Value of "a" should be under(1-20,000)';
         }

         if(two.value >= 1 && two.value <= 20000) {
             /!*success.innerText = 'success';*!/
         }
         else{
             errorElement4.innerText = ' The Value of "c" should be under(1-20,000)';
         }*!/*/
        }
    }
})
