//Arrray of Objects
let employeData = [
  {
    imageUrl:
      "https://usuploads.s3.amazonaws.com/itlearn360/uploads/2018/12/dummy-profile-pic-300x300.jpg",
    name: "ram",
    desig: "xyz",
  },
  {
    imageUrl:
      "https://usuploads.s3.amazonaws.com/itlearn360/uploads/2018/12/dummy-profile-pic-300x300.jpg",
    name: "shyam",
    desig: "zxy",
  },
]





// for reading object of object in js

for (data in employeData) {
  empdata = employeData[data];
  // console.log(empdata);
  for (refData in empdata) {
    if (refData == "imageUrl") {
      const picDiv1 = document.getElementById("picDiv");
      const fragment = document.createDocumentFragment();
      const picUrls = [
        "https://usuploads.s3.amazonaws.com/itlearn360/uploads/2018/12/dummy-profile-pic-300x300.jpg",
        "https://thumbs.dreamstime.com/b/bartender-waiter-uniform-barkeeper-thin-line-icon-catering-concept-employee-vector-sign-white-background-outline-style-227990895.jpg",
      ];

      picUrls.forEach((picUrl) => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("carousel-item1");
        photoDiv.classList.add("active");
        const img = document.createElement("img");
        img.classList.add("d-block");
        img.classList.add("w-100");
        img.src = picUrl;
        fragment.appendChild(photoDiv);
        fragment.appendChild(img);
      });
      picDiv1.appendChild(fragment);
    }
    
    
    
    else {
      console.log("hey");
    }
  }



}









// const fragment = document.createDocumentFragment();
// const li = fragment
//     .appendChild(document.createElement("section"))
//     .appendChild(document.createElement("ul"))
//     .appendChild(document.createElement("li"));

//     li.textContent = "hello world";
//     document.body.appendChild(fragment);

let prevBtn = document.getElementsByClassName("carousel-control-prev");
let nextBtn = document.getElementsByClassName("carousel-control-next");

prevBtn[0].addEventListener("click", () => {
  console.log("clicked on Prev btn");
});

nextBtn[0].addEventListener("click", () => {
  console.log("clicked on next btn");
});
