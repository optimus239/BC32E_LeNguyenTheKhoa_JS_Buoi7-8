const question = document.querySelectorAll(".question");
for (var i = 0; i < question.length; i++) {
  const element = question[i];
  const title = question[i].querySelector(".question-title");
  title.onclick = function () {
    showText(element);
  };
}

function showText(element) {
  for (var i = 0; i < question.length; i++) {
    if (element !== question[i]) {
      question[i].classList.remove("show-text");
    }
  }
  element.classList.toggle("show-text");
}
//Bài 1: Tổng số dương
function tinhTongSoDuong(arr) {
  var tongSoDuong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      tongSoDuong += arr[i];
    }
    document.getElementById("ketQua1").innerHTML = "Tổng: " + tongSoDuong;
  }
}

//Bài 2: Đếm số dương
function demSoDuong(arr) {
  var demSoDuong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      demSoDuong++;
    }
    document.getElementById("ketQua2").innerHTML = "Số dương: " + demSoDuong;
  }
}

//Bài 3: Tìm số nhỏ nhất
function soNhoNhat(arr) {
  var soNhoNhat = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= soNhoNhat) {
      soNhoNhat = arr[i];
    }
    document.getElementById("ketQua3").innerHTML = "Số nhỏ nhất: " + soNhoNhat;
  }
}

//Bài 4: Tìm số dương nhỏ nhất
function soDuongNhoNhat(arr) {
  var arrSoDuong = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrSoDuong.push(arr[i]);
    }
  }
  var soDuongNhoNhat = arrSoDuong[0];
  for (i = 1; i < arrSoDuong.length; i++) {
    if (arrSoDuong[i] <= soDuongNhoNhat) {
      soDuongNhoNhat = arrSoDuong[i];
    }
  }
  document.getElementById("ketQua4").innerHTML =
    "Số dương nhỏ nhất: " + soDuongNhoNhat;
}

//Bài 5: Số chẵn cuối cùng
function soChanCuoiCung(arr) {
  var arrSoChan = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      arrSoChan = arr[i];
      var ketQua = "Số chẵn cuối cùng: " + arrSoChan;
      break;
    } else {
      ketQua = "Không có số chẵn: " + -1;
    }
  }
  document.getElementById("ketQua5").innerHTML = ketQua;
}

//Bài 6: Đổi chỗ
function doiCho(arr) {
  var so1 = Number(document.getElementById("nhapSo1_6").value);
  var so2 = Number(document.getElementById("nhapSo2_6").value);
  var so3 = arr[so1];
  arr[so1] = arr[so2];
  arr[so2] = so3;
  document.getElementById("ketQua6").innerHTML = "Mảng sau khi đổi: " + arr;
}

//Bài 7: Sắp xếp tăng dần
function sapXepTangDan(arr) {
  //   for (var i = 0; i < arr.length; i++) {
  //     for (var j = i + 1; j < arr.length; j++) {
  //       if (arr[i] >= arr[j]) {
  //         var iSo = arr[i];
  //         arr[i] = arr[j];
  //         arr[j] = iSo;
  //       }
  //     }
  //   }
  var arrSort = arr.sort(function (num2, num1) {
    return num2 - num1;
  });
  document.getElementById("ketQua7").innerHTML = arr;
}

//Bài 8: Tìm số nguyên tố đầu tiên
function timSoNguyenToDT(arr) {
  var ketQua = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
      var kiemTra = kiemTraSoNguyenTo(arr[i]);
      if (kiemTra === true) {
        var soNguyenTo = arr[i];
        ketQua = "Số nguyên tố đầu tiên: " + soNguyenTo;
        break;
      } else {
        ketQua = "Không có số nguyên tố: " + -1;
      }
    }
  }

  document.getElementById("ketQua8").innerHTML = ketQua;
}

//Kiểm tra số nguyên tố
function kiemTraSoNguyenTo(so) {
  var kiemTra = true;
  for (var uoc = 2; uoc <= so / 2; uoc++) {
    if (so % uoc === 0) {
      kiemTra = false;
      break;
    }
  }
  return kiemTra;
}

//Bài 9: Kiểm tra số nguyên
function kiemTraSoNguyen(arr) {
  var soNguyen = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) === true) {
      soNguyen += 1;
    }
  }
  document.getElementById("ketQua9").innerHTML = "Số nguyên: " + soNguyen;
}

//Bài 10: So sánh số lượng số dương và âm
function kiemTra(arr) {
  var soDuong = 0;
  var soAm = 0;
  var ketQua = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soDuong += 1;
    } else if (arr[i] < 0) {
      soAm += 1;
    }
  }
  if (soDuong > soAm) {
    ketQua = "Số dương > Số âm";
  } else if (soAm > soDuong) {
    ketQua = "Số âm > Số dương";
  } else if ((soDuong = soAm)) {
    ketQua = "Số dương = Số âm";
  }
  document.getElementById("ketQua10").innerHTML = ketQua;
}
