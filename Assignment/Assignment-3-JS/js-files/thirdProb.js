//Data
let employeData = [
  {
    imageUrl:
      "https://cdn-icons-png.flaticon.com/512/2117/2117258.png",
    name: "Ram",
    desig: "Manger",
    project: "Project-1"
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/bartender-waiter-uniform-barkeeper-thin-line-icon-catering-concept-employee-vector-sign-white-background-outline-style-227990895.jpg",
    name: "Alex",
    desig: "Developer",
    project: "Project-2"
  },
  {
    imageUrl:
      "https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg",
    name: "Sam",
    desig: "Developer",
    project: "Project-2"
  }

];







const picDiv1 = document.getElementById("picDiv");
const fragment = document.createDocumentFragment();



for (let i = 0; i < employeData.length; i++) {
  console.log(employeData[i].name);

  const photoDiv = document.createElement("div");
  photoDiv.classList.add("carousel-item");
  if(i==0){
  photoDiv.classList.add("active");
}

  var imgLnk = employeData[i].imageUrl;
  photoDiv.innerHTML = `<img class='d-block w-100' src = ${imgLnk}   alt = 'First slide'>
        <table class="table">
        <thead>
          <tr>
          <th scope="col"></th>
          <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Project</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>${employeData[i].name}</td>
            <td>${employeData[i].desig}</td>
            <td>${employeData[i].project}</td>
            
            
            </tr>
        </tbody>
      </table> `;

  // var imgBlock = document.getElementsByClassName("d-block");
  fragment.appendChild(photoDiv);
}
picDiv1.appendChild(fragment);

