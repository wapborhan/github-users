class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile(user) {
    this.profile.innerHTML = "";
  }
}
