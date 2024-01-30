console.log("hello");

// mô tả 1 user

var user1 = {
  // key:value,
  name: "alice",
  age: 5,
  luong: 10000000,
};
console.log("🚀 ~ file: index.js:12 ~ user1:", user1);

// lấy ra value của 1 key

console.log(user1.name);
console.log(user1.age);
console.log(user1.luong);

// update value cua key

var sp1 = {
  name: "sữa th true milk",
  soLuong: 1,
};
sp1.soLuong = 5;
console.log("🚀 ~ file: index.js:29 ~ sp1:", sp1);

var cat1 = {
  name: "miu",
  //property;
  age: 1,
  talk: function () {
    // method ~ phương thức
    console.log("meo meo");
  },
};

// console.log(cat1.talk());
cat1.talk();
var danhSachNhanVien = [];
var nhanVien = {
  maNv: "123456",
  ten: "khánh",
  gioiTinh: "Nam",
};

var dog1 = {
  ten: "lulu",
  tuoi: 2,
};
var dog2 = {
  name: "kiki",
  age: 1,
};

function Dog(_name, _age) {
  this.nickname = _name;
  this.age = _age;
  this.talk = function(){
      console.log("gâu gâu", this.name)
    
  };
}

var dog3 = new Dog("kaka", 2);
var dog4 = new Dog("keke", 1);
var dog5 = new Dog("kuku", 1);
console.log(dog3, dog4, dog5);
