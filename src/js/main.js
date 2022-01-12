let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  fetch(`https://api.github.com/users/${userText}/repos`)
    .then((result) => result.json())
    .then((data) => {
      if (data.message == "Not Found") {
        //Show Alert
        // ui.showAlert("User Not Found!", "alert alert-danger");
      } else {
        //Show Profile
        ui.showrepo(data);
      }
    });
  if (userText != " ") {
    //Fetch Api
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          //Show Alert
          ui.showAlert("User Not Found!", "alert alert-danger");
        } else {
          //Show Profile
          ui.showProfile(data);
        }
      });
  } else {
    //clear profile
    ui.clearProfile();
  }
});

//Default Profile Show

function normalProfile() {
  fetch(`https://api.github.com/users/wapborhan`)
    .then((result) => result.json())
    .then((data) => {
      if (data.message == "Not Found") {
        //Show Alert
        // ui.showAlert("User Not Found!", "alert alert-danger");
      } else {
        //Show Profile
        ui.showProfile(data);
      }
    });
}
normalProfile();

//Default Repos Show
function normalRepo() {
  fetch(`https://api.github.com/users/wapborhan/repos`)
    .then((result) => result.json())
    .then((data) => {
      if (data.message == "Not Found") {
        //Show Alert
        // ui.showAlert("User Not Found!", "alert alert-danger");
      } else {
        //Show Profile
        ui.showrepo(data);
      }
    });
}
normalRepo();
