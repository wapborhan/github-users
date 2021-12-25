let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  if (userText != " ") {
    //Fetch Api
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          //Show Alert
        } else {
          //Show Profile
        }
      });
  } else {
    //clear profile
  }
});
