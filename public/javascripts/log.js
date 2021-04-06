function list() {

    // create new AJAX request
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var z = document.getElementById("list");
            var x = JSON.parse(this.responseText);
            z.innerHTML = "";
            for (i = 0; i < x.length; i++) {
                z.innerHTML += `<li>` + x[i] +`</li>`;
            }

            var myVar = setInterval(list_update, 10000);
        }
    };
    // open connection
    xhttp.open("GET", "/log.json", true);

    // send request
    xhttp.send();

}

function list_update() {

    // create new AJAX request
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var z = document.getElementById("list");
            var x = JSON.parse(this.responseText);
            z.innerHTML = "";
            for (i = 0; i < x.length; i++) {
                z.innerHTML += `<li>` + x[i] +`</li>`;
            }
        }
    };
    // open connection
    xhttp.open("GET", "/log-ro.json", true);

    // send request
    xhttp.send();

}

