function last() {

    // create new AJAX request
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var z = document.getElementById("last");
            z.innerHTML = "This page was last viewed ";
            z.innerHTML +=
            this.responseText;
        }
    };
    // open connection
    xhttp.open("GET", "/last.txt", true);

    // send request
    xhttp.send();

}