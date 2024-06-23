
// Prompt để nhập độ tuổi
let dotuoi = prompt("Độ tuổi cần tìm?");

let tuoi = student.filter(s => s.age == tuoicantim);
if (tuoi.length > 0) {
  console.log("Những người có độ tuổi " + tuoicantim + " là:");
 tuoi.forEach(s => console.log(s.name));
} else {
  console.log("Không tìm thấy!");
}

// Prompt để nhập mã khóa học
let makhoahoc = prompt("Khóa học cần tìm?");
let ma = student.filter(s => s.course.includes(macantim));
if (ma.length > 0) {
  console.log("Những người học khóa " + macantim + " là:");
  ma.forEach(s => console.log(s.name));
} else {
  console.log("Chưa có lớp học này!");
}

//Duyệt 2 array và hiển thị những số lớn hơn 3:
let arr1 = [0, 2, 4, 6, 8];
let arr2 = [1, 3, 5, 7];

console.log("Những số lớn hơn 3 là:");
[...arr1, ...arr2].forEach(num => {
  if (num > 3) {
    console.log(num);
  }
});

//Ghép 2 array thành 1 array như sau: [0, 2, 4, 6, 8, 2, 3, 5, 7]:
let a = [...arr1, ...arr2];
console.log(combinedArray);

//Ghép 2 array thành 1 array như sau: [0, 1, 2, 3, 4, 5, 6, 7, 8]:

let A = [...arr1, ...arr2.sort((a, b) => a - b)];
console.log(combinedArray);