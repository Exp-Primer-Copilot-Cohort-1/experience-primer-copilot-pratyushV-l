function skillsMember() {
  var member = JSON.parse(localStorage.getItem("member"));
  var skills = member.skills;
  var skillsDiv = document.getElementById("skills");
  var skillsList = document.createElement("ul");
  skillsList.className = "list";
  skillsDiv.appendChild(skillsList);
  for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
  }
}