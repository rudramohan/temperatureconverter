
const celTOfah = (no) => {
    let fahrenheit = (no*(9/5)+32);
    return fahrenheit;
}
const fahTOcel = (no)=>{
    let celsius = ((no-32)*5/9);
    return celsius;
}
function conversion()
{var choice = document.getElementById("choice#").value
var no = document.getElementById("degree-input").value
    //const choice = choice#.options[tempSelected.selectedIndex].value
    var count=0
    if(choice=="celcius")
    {
        count = celTOfah(no)
        count='=  '+count+' fahrenheit'
    }
    else if(choice=="Fahrenheit"){
        count = fahTOcel(no)
        count='=  '+count+ ' celcius'
    }
    document.getElementById('count').innerHTML=count
    return
}