// sv ~ object
// dssv ~ array chứa các object
// localStorage ~ vùng nhớ giúp lưu thông tin (JSON) , sẽ không bị mất khi user load trang
//! localStorage.getItem(key,valueJson) => lưu xuống
// localStorage.getItem(key) => lấy lên
// jSON.stringtify ~ data gốc => data json
// JSON.parse ~ data json => data gốc
var dssv = [];
// lấy data từ localStorage => render tên layout
var dataJson = localStorage.getItem("DSSV");
var arraySv = JSON.parse(dataJson);
console.log("🚀 ~ file: index.js:12 ~ dataJson:", dataJson);

for (var i = 0; i < arraySv.length; i++) {
  var data = arraySv[i];

  var sv = new Sinhvien(
    arraySv[i].maSv,
    arraySv[i].tenSv,
    arraySv[i].email,
    arraySv[i].pass,
    arraySv[i].txtToan,
    arraySv[i].txtLy,
    arraySv[i].txtHoa
  );
  dssv.push(sv);
}

renderDSSV();

// tạo class SinhVien
// duyệt mảng => convert object => object từ class

function themSv() {
  var sv = layThongTinTuForm();
  // validate data trước khi thêm
  var isValid = true;
  // isValid = kiemTraRong(sv.maSv, "spanMaSV")&kiemTraTrung(sv.maSv, dssv, "spanMaSV");

  // cùng 1 input &&
  // nối các input &
  // validate ma sv
  // isValid = kiemTraRong(sv.maSv, "spanMaSV") & kiemTraEmail(sv.email);
  isValid =
    kiemTraRong(sv.maSv, "spanMaSV") && kiemTraTrung(sv.maSv, dssv, "spanMaSV");
  // validate email sv
  isValid =
    isValid & (kiemTraRong(sv.email, "spanEmailSV") && kiemTraEmail(sv.email));
  // validate ten sv
  isValid &= kiemTraRong(sv.tenSv, "spanTenSV");

  if (isValid) {
    dssv.push(sv);

    // update isValid
    // giữ lại data khi user load trang
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    // hiển thị : tạo ra 1 chuỗi chứa các thẻ tr => chuỗi đó vào thẻ tbody
    renderDSSV();
  }
}

function xoaSv(sinhVien) {
  console.log("yes", sinhVien);
  // splice(viTriCanXoa,soLuongCanXoa)
  // từ id tìm ra vị trí
  var index = "";
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].maSv == sinhVien) {
      index = i;
    }
  }
  console.log("first", index);

  dssv.splice(index, 1); // xóa phần từ tại vị trí index trong array dssv
}

function suaSv(sinhVien) {
  console.log("first", sinhVien);
  var index = "";
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].maSv == sinhVien) {
      index = i;
    }
  }
  // từ index => lấy ra sv được click
  var sv = dssv[index];
  document.getElementById("txtMaSV").value = sv.maSv;
  document.getElementById("txtTenSV").value = sv.tenSv;
  document.getElementById("txtPass").value = sv.pass;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtDiemToan").value = sv.txtToan;
  document.getElementById("txtDiemLy").value = sv.txtLy;
  document.getElementById("txtDiemHoa").value = sv.txtHoa;
}
// show thông tin lên form
function capNhatSv() {
  var sv = layThongTinTuForm();
  var index = "";
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].maSv == sv.maSv) {
      index = i;
    }
  }
  dssv[index] = sv;
  renderDSSV();
}
