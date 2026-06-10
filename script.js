function addSubject() {
  const subjects = document.getElementById("subjects");

  const div = document.createElement("div");
  div.className = "subject";

  div.innerHTML = `
    <input type="text" placeholder="Subject Name">
    <input type="number" placeholder="Marks" class="marks">
    <input type="number" placeholder="Credit" class="credit">
  `;

  subjects.appendChild(div);
}

function getGradePoint(mark) {
  if (mark >= 80) return 4.0;
  if (mark >= 70) return 3.5;
  if (mark >= 60) return 3.0;
  if (mark >= 50) return 2.5;
  if (mark >= 40) return 2.0;
  return 0.0;
}

function calculateGPA() {
  const marks = document.querySelectorAll(".marks");
  const credits = document.querySelectorAll(".credit");

  let totalPoints = 0;
  let totalCredits = 0;
  let totalMarks = 0;
  let subjectCount = 0;

  for (let i = 0; i < marks.length; i++) {
    const mark = Number(marks[i].value);
    const credit = Number(credits[i].value);

    if (mark >= 0 && credit > 0) {
      const gradePoint = getGradePoint(mark);

      totalPoints += gradePoint * credit;
      totalCredits += credit;
      totalMarks += mark;
      subjectCount++;
    }
  }

  if (subjectCount === 0) {
    document.getElementById("result").innerHTML = "Please enter valid marks and credits.";
    return;
  }

  const average = totalMarks / subjectCount;
  const gpa = totalPoints / totalCredits;

  let status = average >= 40 ? "Pass" : "Fail";

  document.getElementById("result").innerHTML = `
    <strong>Total Credits:</strong> ${totalCredits}<br>
    <strong>Average Marks:</strong> ${average.toFixed(2)}<br>
    <strong>GPA:</strong> ${gpa.toFixed(2)}<br>
    <strong>Status:</strong> ${status}
  `;
}
