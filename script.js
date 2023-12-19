let outputBox = document.getElementById('output-box');

function display(num){
        outputBox.value += num;
} 
   

function Clear(){
    outputBox.value = '';
}

function Del(){
    outputBox.value = outputBox.value.slice(0, -1);
}

function Calculate(){
    try{
        outputBox.value = eval(outputBox.value);
    }
    catch(err){
        alert('Invalid Input')
    }
}

