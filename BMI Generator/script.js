const form = document.querySelector("form");
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.querySelector(".height").value);
    const weight = parseFloat(document.querySelector(".weight").value);
    const results = document.querySelector(".results");
    const fitCheck = document.querySelector(".fitCheck");

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please enter a valid height ' ;
    } 
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please enter a valid weight: ' + weight;
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = '<span>' + bmi + '</span>';

        if (bmi <= 20) {
            fitCheck.innerHTML = '<span>You are unfit</span>';
        } else if (bmi >= 20) {
            fitCheck.innerHTML = '<span>You are overweight</span>';
        } else {
            fitCheck.innerHTML = '<span>You are fit</span>';
        }
    }
});


