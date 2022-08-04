function cambiar_parrafo() {
    document.getElementById("edit-acercade").style.display = "block";
    let text = document.getElementById("text-acercade").innerText
    console.log(text)
};

function getText(valor) {
    document.getElementById("text-acercade").innerText = valor
}

function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last Modified: ${file.lastModified}`)

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText=reader.result
    };
    reader.onerror = function () {
        console.log(reader.error)
    };
}