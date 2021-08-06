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

                        var a= one.value;
                        var c= two.value;
                        var i,j;
                        var finalvalue = "";
                        for (i = a; i <= c; i++){
                            for (j = i; j <= c; j++) {
                                 var b = Math.sqrt(i * i + j * j);
                                if (Number.isInteger(b) && b <= c) {
                                    finalvalue += "( " + i + " , " + j + " , " + b+ " )" +" ";
                                }
                            }
                        }
                    if(finalvalue == "" || finalvalue == null){
                        success.innerHTML = "There is no Triples between "+a+" and "+c;
                    }else{
                        success.innerHTML = finalvalue;
                    }


                } else {
                    errorElement4.innerText = ' The Value of "c" should be under(1-20,000)';
                }
            } else {
                errorElement3.innerText = ' The Value of "a" should be under(1-20,000)';
            }

        }
    }
})
