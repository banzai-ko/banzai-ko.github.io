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
function darkerClass(className) {
    var elements = document.getElementsByClassName(className);
    for (let a of elements) {
      a.classList.toggle("dark");
    }
  }
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    document.getElementById('navbar').classList.toggle('navbar-dark');
    document.getElementById('navbar').classList.toggle('bg-dark');
    darkerClass('card');


});

//GO TOP BTN:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 