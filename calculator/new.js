function doFirst(){
    //第一個函數-先跟html畫面產生關聯，在建立事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate;
             //物件                      事件        處理函數
  // document.getElementById('theForm').addEventListener('submit');
}

function calculate(){
    let quantity=document.getElementById('quantity').value;
    let price=document.getElementById('price').value;
    let tax=document.getElementById('tax').value;
    let discount=document.getElementById('discount').value;

    // console.log(quantity);
    // console.log(price);
    // console.log(price);

    let total=quantity * price;
    tax=tax / 100; //tax /= 100
    tax++;
    
    total=total*tax; //total *= tax

    total=total-discount; //total -= discount;

    total=total.toFixed(2); //處理過了total，印出小數點後兩位

    document.getElementById('total').innerText=total;

    return false;
}

window.addEventListener('load',doFirst);
// window.onload=doFirst;
// window.onload=function(){};