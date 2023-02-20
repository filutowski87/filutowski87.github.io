function pobraneDane () {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(res => res.json())
    .then(data => {
        let element =  document.getElementById('dane-programisty');
        
        if( typeof(element) != 'undefined' && element != null) {

            let newP = document.createElement('p');
            newP.textContent = `imie ${data.imie}, nazwisko ${data.nazwisko} zawod ${data.zawod} firma  ${data.firma}`;
            element.appendChild(newP);
            
            
            console.log('istnieje');
        }
        else{
            console.log('nie istnieje');

        let newDiv = document.createElement('div');
            newDiv.setAttribute('id','dane-programisty');
            console.log(data);
            let newP = document.createElement('p');
            newP.textContent = `imie ${data.imie}, nazwisko ${data.nazwisko} zawod ${data.zawod} firma  ${data.firma}`;
            newDiv.appendChild(newP);
            document.body.appendChild(newDiv);
        };
        
        



   })
};
let button = document.querySelector('button');
button.addEventListener('click', pobraneDane); 


