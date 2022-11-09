/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

/* stampa numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {
    const ul = document.querySelector(".list");
    const li = document.createElement(`div`);
    ul.append(li);
    li.classList.add("square");
    if (i % 3 === 0 && i % 5 === 0) {
        li.append("FizzBuzz");
        li.classList.add("feb");
    }else if(i % 3 === 0) {
        li.append("Fizz"); 
        li.classList.add("fizz");
    }else if(i % 5 === 0) {
        li.append("buzz");
        li.classList.add("buzz");
    }else{
        li.append(i); 
        li.classList.add("bg");
    }
};

