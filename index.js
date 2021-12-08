const generateRandomNumbers = () => {
    return Array
        .from({length: 20}, () => Math.floor(Math.random() * 100 + 1))
        .sort((a,b) => a-b);
}


const render = () => {
    let oddNumbersHTML = document.getElementById("oddNumbers");
    let evenNumbersHTML = document.getElementById("evenNumbers");
    const generatedNumbers = generateRandomNumbers();

    oddNumbersHTML.innerHTML = '';
    evenNumbersHTML.innerHTML = '';

    generatedNumbers.forEach(number => {
        const html = number % 2 === 0 ? evenNumbersHTML : oddNumbersHTML;
        html.innerHTML += `<li>${number}</li>`;
    });
}



