const yearFooter = document.getElementById("yearFooter");
const inputText =
  "bg-gradient-steel-c border-steel-70 text-gray-900 rounded-lg focus:border-sky-600  focus:ring-sky-600 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500";

const inputName = document.getElementById("inputName");
const contact_form = document.getElementById("contactForm");

contact_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = contact_form["inputName"].value;
  const email = contact_form["inputName"].value;
  const message = contact_form["inputName"].value;

  const text = `
    Gracias por el mensaje ${name}
    `;
  alert(text);
  name = "";
  email = "";
  message = "";
});

function getYear() {
  return new Date().getFullYear();
}

yearFooter.innerHTML = "© " + getYear();
