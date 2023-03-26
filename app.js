let array = JSON.parse(localStorage.getItem("info")) || [];
render();

let form = document.getElementById("studentsForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fullName = event.target.fname.value;
  let birth = event.target.birth.value;
  let gender = event.target.gender.value;
  let phone = event.target.phone.value;
  let grade = event.target.grade.value;
  let userimage = event.target.userimage.value;

  let newStudent = new Student(
    fullName,
    birth,
    gender,
    phone,
    grade,
    userimage
  );
  array.push(newStudent);
  let JSONarray = JSON.stringify(array);
  localStorage.setItem("info", JSONarray);

  form.reset();
  render();
});

function Student(name, dateOfBirth, gender, phone, grade, userimage) {
  this.fullName = name;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.phone = phone;
  this.grade = grade;
  this.userimage = userimage;
}

function render() {
  let previousCards = document.querySelectorAll(".singleCard");
  for (let i = 0; i < previousCards.length; i++) {
    previousCards[i].style.display = "none";
  }
  console.log(previousCards);
  for (let i = 0; i < array.length; i++) {
    let cardContainer = document.getElementById("studentInfo");
    let card = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = `${array[i].userimage}`;
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.textContent = `Name: ${array[i].fullName}`;
    let li2 = document.createElement("li");
    li2.textContent = `Gender: ${array[i].gender}`;
    let li3 = document.createElement("li");
    li3.textContent = `Number: ${array[i].phone}`;
    let li4 = document.createElement("li");
    li4.textContent = `Grade: ${array[i].grade}`;
    card.classList.add("singleCard");
    cardContainer.appendChild(card);
    card.appendChild(img1);
    card.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    cardContainer.style.display = "flex";
    cardContainer.style.marginLeft = "5rem";
    cardContainer.style.width = "50rem";
    card.style.backgroundColor = "#2e5271";
    card.style.borderRadius = "20px";
    card.style.padding = "5px";
    card.style.margin = "10px";
    img1.style.marginLeft = "25px";
    img1.style.marginBottom = "20px";
    img1.style.marginTop = "10px";
  }
}
