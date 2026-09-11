const studentsList = document.querySelector("#students");

async function loadStudents() {
  try {
    const response = await fetch("students.json");

    if (!response.ok) {
      throw new Error(`Unable to load students.json (${response.status})`);
    }

    const data = await response.json();

    data.wclass.forEach((item) => {
      const student = item.student;
      const listItem = document.createElement("li");
      const name = document.createElement("strong");
      const skill = document.createElement("em");

      name.textContent = student.name;
      skill.textContent = student.skill;

      listItem.append(
        `${student["@attributes"].id} `,
        name,
        " has skills ",
        skill,
      );
      studentsList.appendChild(listItem);
    });
  } catch (error) {
    const errorMessage = document.createElement("li");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = `Error: ${error.message}`;
    studentsList.replaceChildren(errorMessage);
  }
}

loadStudents();
