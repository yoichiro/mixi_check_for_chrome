var contents = document.getElementById("contents");
contents.setAttribute("style", "background-color: transparent;");

var contentsMain = document.getElementById("contents_main");
if (contentsMain) {
    var formBody = contentsMain.childNodes[1].childNodes[3].childNodes[1].childNodes[1];
    formBody.setAttribute("style", "background-color: white;");
}
