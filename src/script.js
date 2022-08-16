const API_URL =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

function validateForm() {
  const fullName = document.getElementById("full-name").value;
  const mail = document.getElementById("mail").value;
  const phone = document.getElementById("phone").value;

  console.log(fullName);

  let errorMessage = "";
  let phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  if (fullName === "ironhack" || fullName.includes("ironhack")) {
    alert("You can not be Ironhack, because I am Ironhack.");
    return false;
  } else if (!mail.includes("@")) {
    errorMessage = "You must write a valid email address";
    document.getElementById("error-message").innerHTML += errorMessage;
    return false;
  } else if (!phoneRegex.test(phone)) {
    errorMessage = "You must write a valid phone number";
    document.getElementById("error-message").innerHTML += errorMessage;
    return false;
  }
  return true;
}

async function getAPI(url) {
  try {
    const API = await fetch(url);
    const JSON = await API.json();
    writeProject(JSON);
  } catch (error) {
    console.log(error);
  }
}

function writeProject(data) {
  const proyecto = data.filter((proyecto) => proyecto.uuid === "1");

  for (elementos of proyecto) {
    document.getElementById("simplifyTitle").innerHTML = elementos.name;
    document.getElementById("uITitle").innerHTML = elementos.description;
    document.getElementById("dateProject").innerHTML = elementos.completed_on;
    document.getElementById("parrafoSimplify").innerHTML = elementos.content;
    const image = document.createElement("img");
    image.setAttribute("src", elementos.image);
    image.setAttribute("alt", "imagen de simplify");
    const claseImagen = document.getElementById("imagenSimplify");
    claseImagen.appendChild(image);
    const image2 = document.createElement("img");
    image2.setAttribute("src", elementos.image);
    image2.setAttribute("alt", "imagen2 de simplify");
    const claseImagen2 = document.getElementById("imagenSimplifyBlurred");
    claseImagen2.appendChild(image2);
  }
}

getAPI(API_URL);

/*

function main(){
    const resultado = await getAPI1();
    console.log(resultado);
    getElementsHomePage();
}

main();

// help -> JSON.map(proyecto => document.getElementById("parrafo-proyecto").innerHTML = proyecto.content);
*/
