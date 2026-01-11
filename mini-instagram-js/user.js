// const user = [
//   {
//     userName: "Sagar Joshi",
//     followers: 0,
//     isLoggedIn: false,
//     logIn: function () {
//       this.isLoggedIn = true;
//     },
//     logOut: function () {
//       this.isLoggedIn = false;
//     },
//     addFollower: function () {
//       this.followers++;
//     },
//     removeFollower: function () {
//       if (this.followers > 0) {
//         this.followers--;
//       } else {
//         console.log(this.userName + "has no follower to remove!");
//       }
//     },
//     showProfile: function () {
//       console.log(this.userName);
//       console.log(this.followers);
//       console.log(this.isLoggedIn);
//     },
//   },
// ];
// user[0].logIn();
// user[0].addFollower();
// user[0].addFollower();
// user[0].showProfile();

const users = [
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
        console.log(this.userName + " has no followers to remove!");
      }
    },

    showProfile: function () {
      console.log("Username:", this.userName);
      console.log("Followers:", this.followers);
      console.log("Logged In:", this.isLoggedIn);
    },
  },
];

// 🔹 actions (this is why output appears)
users[0].logIn();
users[0].addFollower();
users[0].addFollower();
users[0].removeFollower();
users[0].showProfile();
