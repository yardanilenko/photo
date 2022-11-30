// Get the 
const modalreg = document.getElementById("myModalReg");
// Get the button that opens the modal
const btnreg = document.getElementById("registrationButton");

// Get the <span> element that closes the modal
const spanreg = document.getElementsByClassName("close-reg")[0];

// When the user clicks the button, open the modal 
btnreg.onclick = function() {
  modalreg.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanreg.onclick = function() {
  modalreg.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalreg) {
    modalreg.style.display = "none";
  }
}

