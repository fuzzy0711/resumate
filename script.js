// function addNewWEField(){
//     let newNode=document.createElement('textarea');
//     newNode.classList.add("form-control");
//     newNode.id="new";
//     newNode.classList.add("weField");
//     newNode.classList.add("mt-2");
//     newNode.setAttribute("rows",3);
//     newNode.setAttribute("placeholder","Enter here");

//     let weOb=document.getElementById("we");
//     let weAddButtonOb=document.getElementById("weAddButton");

//     weOb.insertBefore(newNode,weAddButtonOb);
// }

let i = 0;
let j = 0;
const divWrapper = document.getElementById("we");
const divWrapper2 = document.getElementById("aq");

function addNewWEField() {
  i = i + 1;
  let inputWrapper = document.createElement("div");
  inputWrapper.id = "new-we-${i}";
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");
  inputWrapper.appendChild(newNode);

  const removeButton = document.createElement("button");
  removeButton.classList.add("btn");
  removeButton.classList.add("btn-primary");
  removeButton.classList.add("btn-sm");
  removeButton.innerHTML = "Remove";
  removeButton.style.marginTop = "8px";
  removeButton.onclick = () => {
    divWrapper.removeChild(inputWrapper);
  };
  inputWrapper.appendChild(removeButton);
  divWrapper.appendChild(inputWrapper);
}

// function addNewAQField(){
//     let newNode=document.createElement("textarea");
//     newNode.classList.add("form-control");
//     newNode.classList.add("aqField");
//     newNode.classList.add("mt-2");
//     newNode.setAttribute("rows",3);
//     newNode.setAttribute("placeholder","Enter here");

//     let aqOb=document.getElementById("aq");
//     let aqAddButtonOb=document.getElementById("aqAddButton");

//     aqOb.insertBefore(newNode,aqAddButtonOb);

// }

function addNewAQField() {
  i = i + 1;
  let inputWrapper = document.createElement("div");
  inputWrapper.id = "new-aq-${i}";
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");
  inputWrapper.appendChild(newNode);

  const removeButton = document.createElement("button");
  removeButton.classList.add("btn");
  removeButton.classList.add("btn-primary");
  removeButton.classList.add("btn-sm");
  removeButton.innerHTML = "Remove";
  removeButton.style.marginTop = "8px";
  removeButton.onclick = () => {
    divWrapper2.removeChild(inputWrapper);
  };
  inputWrapper.appendChild(removeButton);
  divWrapper2.appendChild(inputWrapper);
}

//generating cv
function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  // direct
  document.getElementById("nameT2").innerHTML = nameField;

  // contacts
  let contact = (document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value);

  // address
  let address = (document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value);

  // email-id
  let email = (document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value);

  //linkedIn
  let linkedIn = (document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinField").value);

  //Github
  let github = (document.getElementById("githubT").innerHTML =
    document.getElementById("githubField").value);

  //objective
  let objective = (document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value);

  //workExperience
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //academicQualification
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //skills
  let skills = (document.getElementById("skillsT").innerHTML =
    document.getElementById("skillsField").value);

  // sending post request
  const sendPost = async () => {
    try {
      const response = await fetch(
        "https://resumate-f7ca2-default-rtdb.firebaseio.com/resumate.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: nameField,
            Email: email,
            address: address,
            contact: contact,
            linkedIn: linkedIn,
            github: github,
            objective: objective,
            work: wes,
            academic: aqs,
            skills: skills,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(sendPost());

  // code for setting image
  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  // set image to template
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  // display and hide cv
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//print portfolio
function printPortfolio() {
  window.print();
}

document
  .getElementById("mailing")
  .write('<a class="btn" href="mailto:fuzailmalik2000@gmail.com">MAIL ME</a>');