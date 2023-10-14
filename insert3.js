// makePlusFunction(5) funksiyasını çağırmaq, daxil olan yeni
// və ona 5 əlavə etdik
function  makePlusFunction (num){
   return  function  (x){
        return num+x
    }
    }
    const plusFive = makePlusFunction(5)
    const plusTen = makePlusFunction(10)
    console.log(plusFive(0));
    console.log(plusTen(0));
    console.log(plusFive(plusTen(0)));