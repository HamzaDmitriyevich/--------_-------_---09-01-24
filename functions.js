window.addEventListener(
    'load',
    start
    
)

function date (){
    let date = new Date();
    console.log(date);
}

function prazdnik (Ramadan){
    for(var i = 0; i<5; i++) {
    console.log(Ramadan);
    }
}

function odnigrupniki(){
    var a = ['Сергей', 'Олег', 'Павел', 'Дарья', 'Уулжан']
    for(var i =0; i < a.length; i++){
        console.log(a[i]);
    }
}


function pruvety(odnogrupnikam){    
    odnogrupnikam.forEach(function(name) {
        console.log(Привет, '${name}!');        
    });

  
}
const odnogrupnikam = ['Сергей', 'Олег', 'Павел', 'Дарья', 'Уулжан'];
    pruvety(odnogrupnikam);


    function odnoklassniki() {
        const odnk = ['Сергей', 'Олег', 'Павел', 'Дарья', 'Уулжан'];
        for(const name of odnk){
            console.log(Привет , '${name}!');
        }
    }
odnoklassniki()// - Запустить процесс в консоли.






