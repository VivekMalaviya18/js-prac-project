const form = document.querySelector('form')
//const height = parseInt(document.querySelector('#height').value)

// if you declare var here than u can get empty value

form.addEventListener('submit', function(e){
    e.preventDefault();
    

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#result')
   
   if (height === '' || height < 0 || isNaN(height)) {
     results.innerHTML = `Please give a valid Height ${height}`;

    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid Weight ${weight}`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`;
        
        if (bmi < 18.6) {
            results.innerHTML = `<span>Under Weight: ${bmi}</span>`;
        }else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span>Normal Weight: ${bmi}</span>`;
        }else{
            results.innerHTML = `<span>Over Weight: ${bmi}</span>`;
        }
    }
});