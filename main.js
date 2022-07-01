//------------Tạo mảng-------------
var arrNumber = [];
document.getElementById("btnThemSo").onclick = function () {
  var number = Number(document.getElementById("nhapSo").value);
  var ketQua = "";
  arrNumber.push(number);
  ketQua = "[" + arrNumber + "]";
  document.getElementById("ketQua").innerHTML = ketQua;
};

//------------Bài 1-------------
document.getElementById("btnTinhTong").onclick = function () {
  tinhTongSoDuong(arrNumber);
};

//------------Bài 2-------------
document.getElementById("btnDemSoDuong").onclick = function () {
  demSoDuong(arrNumber);
};

//------------Bài 3-------------
document.getElementById("btnSoNhoNhat").onclick = function () {
  soNhoNhat(arrNumber);
};

//------------Bài 4-------------
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  soDuongNhoNhat(arrNumber);
};

//------------Bài 5-------------
document.getElementById("btnTimSoChanCuoiCung").onclick = function () {
  soChanCuoiCung(arrNumber);
};

//------------Bài 6-------------
document.getElementById("btnDoiCho").onclick = function () {
  doiCho(arrNumber);
};

//------------Bài 7-------------
document.getElementById("btnSapXepTangDan").onclick = function () {
  sapXepTangDan(arrNumber);
};

//------------Bài 8-------------
document.getElementById("btnTimSoNguyenTo").onclick = function () {
  timSoNguyenToDT(arrNumber);
};

//------------Bài 9-------------
var arrNumber9 = [];
document.getElementById("btnThemSo_9").onclick = function () {
  var number = Number(document.getElementById("nhapSo_9").value);
  arrNumber9.push(number);
  document.getElementById("themSo_9").innerHTML = "[" + arrNumber9 + "]";
};

document.getElementById("btnDemSoNguyen").onclick = function () {
  kiemTraSoNguyen(arrNumber9);
};

//------------Bài 10-------------
document.getElementById("btnSoSanh").onclick = function () {
  kiemTra(arrNumber);
};
