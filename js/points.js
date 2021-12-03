
function getCookie(cname) { //Generally do not edit this function!
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) { //start of loop
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    } // end of loop
    return "";
}

function clue1found() {
	var hasClue1 = getCookie("hasClue1"); // Check if user already has the first clue
	var count = getCookie("clueCount");
	if (hasClue1 == "") {
		alert("You found a clue!");
		document.cookie = "hasClue1=true";
		switch (count) {
			case "":
				document.cookie = "clueCount=1";
				break;
			case "1":
				document.cookie = "clueCount=2";
				break;
			case "2":
				document.cookie = "clueCount=3";
				break;
			default:
				// Should never reach this case
				break;
		}
		// alert(document.cookie);
	} else {
		alert("You already found that clue!");
		// alert(document.cookie);
	}
}

function clue2found() {
	var hasClue2 = getCookie("hasClue2"); // Check if user already has the first clue
	var count = getCookie("clueCount");
	if (hasClue2 == "") {
		alert("You found a clue!");
		document.cookie = "hasClue2=true";
		switch (count) {
			case "":
				document.cookie = "clueCount=1";
				break;
			case "1":
				document.cookie = "clueCount=2";
				break;
			case "2":
				document.cookie = "clueCount=3";
				break;
			default:
				// Should never reach this case
				break;
		}
		// alert(document.cookie);
	} else {
		alert("You already found that clue!");
		// alert(document.cookie);
	}
}

function clue3found() {
	var hasClue3 = getCookie("v"); // Check if user already has the first clue
	var count = getCookie("clueCount");
	if (hasClue3 == "") {
		alert("You found a clue!");
		document.cookie = "hasClue3=true";
		switch (count) {
			case "":
				document.cookie = "clueCount=1";
				break;
			case "1":
				document.cookie = "clueCount=2";
				break;
			case "2":
				document.cookie = "clueCount=3";
				break;
			default:
				// Should never reach this case
				break;
		}
		// alert(document.cookie);
	} else {
		alert("You already found that clue!");
		// alert(document.cookie);
	}
}