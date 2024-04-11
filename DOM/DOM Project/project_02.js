// This project on BMI calculator
 const form = document.querySelector('form')
 form.addEventListener('submit',function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === ''|| height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi =  (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }
  {
    const bmi =  (weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){
        result.innerHTML = `<span>${bmi}<p>You are UnderWeight</p><span>`
    }else if(bmi > 18.6 && bmi < 24.9){
        result.innerHTML = `<span>${bmi}<p>Your Weight is Normal</p></span>`
    }else{
        result.innerHTML=`<span>${bmi} <p>You are OverWeight </p></span>`
    }
}
 })