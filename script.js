function show(popup) {
        document.getElementById('window').style.display = popup;
        document.getElementById('gray').style.display = popup;
}

function playVideo(el) {
    do { el = el.nextSibling } while (el && el.nodeType !== 1);
    return el;
}
