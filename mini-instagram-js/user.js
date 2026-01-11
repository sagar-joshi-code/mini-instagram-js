const user = [
  {
    userName: "Sagar Joshi",
    followers: 0,
    isLoggedIn: false,
    logIn: function () {
      this.isLoggedIn = true;
    },
    logOut: function () {
      this.isLoggedIn = false;
    },
    addFollower: function () {
      this.followers++;
    },
    removeFollower: function () {
      if (this.followers > 0) {
        this.followers--;
      } else {
        console.log(this.userName + "has no follower to remove!");
      }
    },
    showProfile: {},
  },
];
