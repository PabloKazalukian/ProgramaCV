const yearFooter = document.getElementById("yearFooter");

const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputMessage = document.getElementById("inputMessage");

const contact_form = document.getElementById("contactForm");

function addStylesInputs() {
  inputEmail.classList.add("input");
  inputName.classList.add("input");
  inputMessage.classList.add("input");
}

contact_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = contact_form["inputName"].value;
  const email = contact_form["inputName"].value;
  const message = contact_form["inputName"].value;

  const text = `
    Gracias por el mensaje ${name}.
    Email:${email}.
    
    Su mensaje: ${message}

    Sera enviado 
    Muchas Gracias!!
    `;
  alert(text);
  contact_form.reset();
});

function getYear() {
  return new Date().getFullYear();
}

//ejecution
addStylesInputs();
yearFooter.innerHTML = "© " + getYear();
