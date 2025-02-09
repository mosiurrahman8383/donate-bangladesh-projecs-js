function donateTakaById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
    // return inputValue

}

function donateTextTakaById(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function showSectonById(id){
    //hide the section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    //show the section
    document.getElementById(id).classList.remove('hidden')
}
function showBgColor(id){
    
    document.getElementById('btn-donation-features').classList.remove('bg-[#B4F461]','border-0' );
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]','border-0');

    document.getElementById('btn-donation-features').classList.add('bg-white');
    document.getElementById('btn-history').classList.add('bg-white');


    document.getElementById(id).classList.add('bg-[#B4F461]');
    document.getElementById(id).classList.remove('bg-white');
    document.getElementById(id).classList.add('border-0');



    
}