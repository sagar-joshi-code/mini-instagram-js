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
    showProfile: function () {
      console.log(this.userName);
      console.log(this.followers);
      console.log(this.isLoggedIn);
    },
  },
  {
    userName: "Dipesh Joshi",
    followers: 10,
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
    showProfile: function () {
      console.log(this.userName);
      console.log(this.followers);
      console.log(this.isLoggedIn);
    },
  },
  {
    userName: "Binod Joshi",
    followers: 100,
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
    showProfile: function () {
      console.log(this.userName);
      console.log(this.followers);
      console.log(this.isLoggedIn);
    },
  },
];

// user[0].logIn();
// user[0].addFollower();
// user[0].addFollower();
// user[0].showProfile();
