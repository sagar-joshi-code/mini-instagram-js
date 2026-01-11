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
//Sagar joshi

user[0].logIn();
user[0].addFollower();
user[0].removeFollower();
console.log(user[0].userName);
console.log(user[0].isLoggedIn);
console.log("follower:", user[0].followers);

//Dipesh joshi

user[1].logIn();
user[1].addFollower();
user[1].removeFollower();
console.log(user[1].userName);
console.log(user[1].isLoggedIn);
console.log("follower:", user[1].followers);

//Binod joshi

user[2].logIn();
user[2].removeFollower();
user[2].addFollower();
console.log(user[2].userName);
console.log(user[2].isLoggedIn);
console.log("follower:", user[2].followers);
