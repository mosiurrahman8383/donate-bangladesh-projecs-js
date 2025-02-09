document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();

    const inputValue = donateTakaById('inptu-donate-quota');
    console.log(inputValue)

    if (isNaN(inputValue) || inputValue > 0) {


        const balance = donateTextTakaById('donate-balance-quota');
        const newBalance = inputValue + balance;
        console.log(newBalance)


        const myBalance = donateTextTakaById('my-balance');
        const myNewBalance = myBalance - inputValue;

        if (myNewBalance < 0) {
            alert("You don't have sufficient balance! Please recharge.");
            return;
        }

        document.getElementById('donate-balance-quota').innerText = newBalance;
        document.getElementById('my-balance').innerText = myNewBalance;


        alert(`You have Donate us ${inputValue} Taka. Thanks for donating.`);

        // add transaction history

        const qoutaHistory = document.createElement('div');
        qoutaHistory.innerHTML= `
         <div class="border-2 border-black border-opacity-30 rounded-xl mx-5 md:mx-12 lg:mx-28 p-6 space-y-3">
            <h3 class="text-xl md:text-2xl font-bold">${inputValue} Aid for Injured in the Quota Movement</h3>
            <p class="text-sm text-gray-600">Date: ${new Date()}</p>
        </div>
        `
        document.getElementById('transaction-container').appendChild(qoutaHistory)
    }
    else{
        alert("Failed to donate! Please enter a validate number.")
    }


})