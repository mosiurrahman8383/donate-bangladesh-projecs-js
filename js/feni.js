document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = donateTakaById('inptu-donate-feni');
    console.log(inputValue)
    if (!isNaN(inputValue) || inputValue > 0) {
        const balance = donateTextTakaById('donate-balance-feni');
        console.log(balance);

        const newBalance = balance + inputValue;
        console.log(newBalance)

        const myBalance = donateTextTakaById('my-balance')
        const myNewBalance = myBalance - inputValue;
        console.log(myNewBalance);
        if (myNewBalance < 0) {
            alert("You don't have sufficient balance! Please recharge.");
            return;
        }

        document.getElementById('donate-balance-feni').innerText = newBalance;
        document.getElementById('my-balance').innerText = myNewBalance

        alert(`You have Donate us ${inputValue} Taka. Thanks for donating.`);

        // add transaction history
        const feniHistory = document.createElement('div');
        feniHistory.innerHTML = `
        <div class="border-2 border-black border-opacity-30 rounded-xl mx-5 md:mx-12 lg:mx-28 p-6 space-y-3">
        <h3 class="text-xl md:text-2xl font-bold">${inputValue} Donate for Flood Relief in Feni,Bangladesh</h3>
         <p class="text-sm text-gray-600">Date: ${new Date()}</p>
        </div>
        `

        document.getElementById('transaction-container').appendChild(feniHistory)
    }
    else {
        alert('Failed to donate! Please enter a validate number.');
        return;
    }
})