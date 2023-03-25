let form = document.getElementById("studentsForm");
form.addEventListener("submit", (data) => {
  data.preventDefault();
  let fullName = data.target.fname.value;
  let birth = data.target.birth.value;
  let gender = data.target.gender.value;
  let phone = data.target.phone.value;
  let grade = data.target.grade.value;

  let table1 = document.getElementById("table1");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  table1.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  td1.textContent = fullName;
  td2.textContent = birth;
  td3.textContent = gender;
  td4.textContent = phone;
  td5.textContent = grade;

  form.reset();
});
