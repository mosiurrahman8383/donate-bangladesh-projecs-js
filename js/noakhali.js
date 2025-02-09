document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();

    const inputValue = donateTakaById("inptu-donate");
    console.log(inputValue)
    // Get current local time
    let localTime = new Date();

    // Convert local time to UTC
    let utcTime = localTime.toISOString();

    console.log("Local Time:", localTime);
    console.log("UTC Time:", utcTime);



    if (!isNaN(inputValue) || inputValue > 0) {

        const balance = donateTextTakaById('donate-balance')
        const newBalance = balance + inputValue;
        console.log(newBalance)
        const myBalance = donateTextTakaById('my-balance');
        const myNewBalance = myBalance - inputValue;

        if (myNewBalance < 0) {
            alert("You don't have sufficient balance! Please recharge.");
            return;
        }
        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('donate-balance').innerText = newBalance;


        alert(`You have Donate us ${inputValue} Taka. Thanks for donating.`)

        // add to transaction history
        const history = document.createElement('div');
        history.innerHTML = `
            <div class="border-2 border-black border-opacity-30 rounded-xl mx-5 md:mx-12 lg:mx-28 p-6 space-y-3">
                <h3 class="text-xl md:text-2xl font-bold">${inputValue} Taka Donate for Flood at Noakhali, Bangladesh</h3>
                <p class="text-sm text-gray-600">Date: ${new Date()}</p>
            </div>

        `
        document.getElementById('transaction-container').appendChild(history)

    }
    else {

        alert('Failed to donate! Please enter a validate number.');
        return;

    }


})

