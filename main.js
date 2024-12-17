var bookmarkNameInput = document.getElementById("Bookmark Name");
var urlInput = document.getElementById("floatingUrl");
var websiteContainer = []



function submit() {
    var code = bookmarkNameInput.value.trim();
    var url = urlInput.value.trim();
    
    if (!isValidURL(url)) {
        alert("Please enter a valid URL (e.g., https://example.com)");
        return;
    }

    
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
    }

    var Website = {
        name: code,
        url: url
    }
    
    websiteContainer.push(Website);
    console.log(websiteContainer);
    clearForm();
    displayBookmark()
    
}

function isValidURL(url) {
    
    var pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/;
    return pattern.test(url);
}

function clearForm() {
    bookmarkNameInput.value = "";
    urlInput.value = "";
}

function displayBookmark() {
    var cartona = ``;
    for (var i = 0; i < websiteContainer.length; i++) {
        cartona += `<tr id="table-body">
                <td>${websiteContainer[i].name}</td>
                <td>${websiteContainer[i].url}</td>
                <td>
                    <button onclick ="visitUrl('${websiteContainer[i].url}')" class="btn btn-success">Visit</button>
                </td>
                <td>
                    <button onclick="deleteBookmark(${i})" class="btn btn-danger">Delete</button>
                </td>
            </tr>`}
        document.getElementById("table-body").innerHTML = cartona;


}
function deleteBookmark(index) {
    websiteContainer.splice(index,1);
    displayBookmark();
}

function visitUrl(url) {
    window.open(url, "_blank");
}