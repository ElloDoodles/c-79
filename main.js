nos_array = [];

function submit(){
    var n1 = document.getElementById("nos1").value;
    var n2 = document.getElementById("nos2").value;
    var n3 = document.getElementById("nos3").value;
    var n4 = document.getElementById("nos4").value;

    nos_array.push(n1);
    nos_array.push(n2);
    nos_array.push(n3);
    nos_array.push(n4);

    console.log(nos_array);

    document.getElementById("dname").innerHTML = nos_array;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sorting(){
    nos_array.sort();
    console.log(nos_array);
    document.getElementById("dname").innerHTML = nos_array;
}