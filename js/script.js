let inputRub = document.querySelectorAll('.rub'),
    inputUsd = document.querySelectorAll('.usd');


function moneyPass(input, output) {
    input.addEventListener('input', () => {

        let promise = new Promise(function (resolve) {
            var request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.status == 200) {

                    resolve()
                } else {
                    output.value = "Что-то пошло не так!"
                }
            });

        })


        promise.then(() => {
            console.log("then")
            let data = JSON.parse(request.response);
            output.value = input.value / data.usd;
        })
            .catch(() => console.log("cath"));
    });
}



moneyPass(inputRub[0], inputUsd[0]);
moneyPass(inputRub[1], inputUsd[1]);

