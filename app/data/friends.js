// ===============================================================================
// DATA
// Below data will hold all of the friends input by the users.
// Initially we just set it equal to a at least one friend.
// ===============================================================================

var friendArray = [
  {
    "name":"Test1",
    "photo":"https://picsum.photos/200/300?image=20",
    "scores":[
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
  },
  {
    "name":"Test2",
    "photo":"https://picsum.photos/200/300?image=30",
    "scores":[
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
  },
  {
    "name":"Test3",
    "photo":"https://picsum.photos/200/300?image=70",
    "scores":[
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
  },
  {
    "name":"Test4",
    "photo":"https://picsum.photos/200/300?image=80",
    "scores":[
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4
      ]
  },
  {
    "name":"Test5",
    "photo":"https://picsum.photos/200/300?image=90",
    "scores":[
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ]
  }
];

///friendsArray is accessible to other files using require.
module.exports = friendArray;
