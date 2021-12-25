class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
    this.repos = document.querySelector("#repos");
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
        <div id="repos">
        <h1>Repositories Under Constraction</h1>
        </div>
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
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    let currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Show Repos
  showrepo(repos) {
    const repoOutput = document.getElementById("repos");
    let output = "";
    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-6">
          <div class="repod">
            <a class="mb-6 text-uppercase text-decoration-none" href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p class="mt-2 mb-2">${repo.description}</p>
            <h6>Language: <span class="badge bg-info">${repo.language}</span></h6>
          </div>
        </div>
        <div class="col-md-6">
          <span class="badge bg-primary p-2">Stars: ${repo.stargazers_count}</span>
          <span class="badge bg-secondary p-2">Watchers: ${repo.watchers_count}</span>
          <span class="badge bg-success p-2">Forks: ${repo.forks_count}</span>
        </div>
      </div>
    </div>
      `;
    });
    repoOutput.innerHTML = output;
  }
}
