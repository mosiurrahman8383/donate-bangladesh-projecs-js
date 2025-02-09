
showBgColor("btn-donation-features");

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = '/blog.html'
})



document.getElementById('btn-donation-features').addEventListener('click',function(){
    showSectonById('donation-section');
    // this.style.backgroundColor = "#B4F461";
    showBgColor("btn-donation-features")
    // this.style.border = 'none'

})

document.getElementById('btn-history').addEventListener('click',function(){
    showSectonById('transaction-container');
    // this.style.backgroundColor = "#B4F461";
    showBgColor("btn-history")
    // this.style.border = 'none'
})