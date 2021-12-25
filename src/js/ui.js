class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile(user) {
    this.clearAlert();
    this.profile.innerHTML = `<div class="card card-body mb-3">
    <div class="row">
      <div class="col-lg-3">
        <img src="${user.avatar_url}" class="img-fluid rounded" alt="">
        <a href="${user.html_url}" class="btn btn-primary btn-block mt-4">View Profile</a>
      </div>
      <div class="col-lg-9">
        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge bg-info">Public Gists: ${user.public_gists}</span>
        <span class="badge bg-success">Followers: ${user.followers}</span>
        <span class="badge bg-warning">Following: ${user.following}</span>
        <br><br>
        <ul>
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website: ${user.blog}</li>
          <li class="list-group-item">Address: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>`;
  }

  clearProfile() {
    this.profile.innerHTML = " ";
  }
  showAlert(message, className) {
    this.clearAlert();
    this.clearProfile();
    let div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector(".searchContainer");
    let search = document.querySelector(".search");

    container.insertBefore(div, search);
  }

  clearAlert() {
    let currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
