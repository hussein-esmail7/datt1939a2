
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
function getClueCount() {
    var clueCount = getCookie("clueCount");
    switch (clueCount) {
        case "":
			alert("You haven't found any clues so far...");
            break;
        case "1":
            alert("You have one clue so far...");
            break;
        case "2":
            alert("You have two clues so far...");
			break;
		case "3":
			alert("You have all the clues! Now for the next step.");
			break;
		default:
			break;
	}
}
