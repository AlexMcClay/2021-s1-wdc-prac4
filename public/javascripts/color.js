function color() {

    // create new AJAX request
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var z = document.getElementById("color");
            z.style.color = this.responseText;
            z.innerHTML =
            this.responseText;
        }
    };
    // open connection
    xhttp.open("GET", "/color.txt", true);

    // send request
    xhttp.send();

}