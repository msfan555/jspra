function doFirst(){
    //第一個函數-先跟html畫面產生關聯，在建立事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate;
             //物件                      事件        處理函數
  // document.getElementById('theForm').addEventListener('submit');
}

function calculate(){
    //BMI: 體重/身高(公尺)的平方
    let weight=document.getElementById('weight').value;
    let height=document.getElementById('height').value;

    // let result=weight / ((height / 100) *(height / 100));
    let result=weight / Math.pow(height / 100,2);

    // result=result.toFixed(2);

    document.getElementById('result').innerText=result.toFixed(2);

    return false;
}

window.addEventListener('load',doFirst);
// window.onload=doFirst;
// window.onload=function(){};

//Math.pow(x,y) x的y次方
//Math.sqrt(x) x的平方根