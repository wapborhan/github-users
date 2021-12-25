class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile(user) {
    this.clearAlert();
    this.profile.innerHTML = ` <div class="card card-body mb-3">
    <div class="row">
      <div class="col-lg-3">
        <img
          src="${user.avatar_url}"
          class="img-fluid rounded" alt="">
        <div class="text-center">
          <h1>${user.name}</h1>
          <p>${user.login}</p>
          <p>${user.bio}</p>
        </div>
        <a href="${user.html_url}" class="btn btn-primary btn-block mt-3 mb-3 w-100">View Profile</a>
        <span class="badge bg-success">Followers: ${user.followers}</span>
        <span class="badge bg-warning">Following: ${user.following}</span>
        <ul class="text-left mt-4 mb-2 p-0">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website: <a style="text-decoration: none;" href="http://${user.blog}">${user.blog}</a></li>
          <li class="list-group-item">Twitter: <a style="text-decoration: none;" href="http://www.twitter.com/${user.twitter_username}">${user.twitter_username}</a></li>
          <li class="list-group-item">Address: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>

      </div>
      <div class="col-lg-9">
        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge bg-info">Public Gists: ${user.public_gists}</span>
        <br><br>
        <h1>Repositories Under Constraction</h1>
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
