const readline = require('readline');
let arg1 = Number(process.argv[2]); // Начальная стоимость инвестиционного портфеля
function SharePrice(){
    const arg = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    arg.question('Какой процент? ', (arg2) => {
        arg2 = arg2.split(' ');
        let summ = arg1;
        let res;
        let arr = [];
        for (let i = 0; i < arg2.length; i++){
            let a;
            a = arg2[i] / 100;
            a = summ * a;
            arr.push(a);
            res = summ + a; 
            console.log('Итоговый процент:' + arg2[i]+'%');
            console.log('Сумма за месяц:' + res);
            let ss = 0;
            for (let j = 0; j < arr.length; j++){
                if ( arr[j-1] != isNaN){
                    ss = arr[j] + ss;
                } else{ 
                    ss = arr[j];
                }    
            }
            summ = ss + arg1;
        }
        //console.log(arr);
        
        
        console.log('Итоговая сумма:' + summ);
        arg.close();
    });
}
SharePrice();
