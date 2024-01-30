console.log("hehe");

var quanLySinhVien = [];
console.log("first", quanLySinhVien);

function submit() {
  var txtMaSv = document.getElementById("txtMaSV").value;
  var txtTenSV = document.getElementById("txtTenSV").value;
  var loaiSv = document.getElementById("loaiSV").value;
  var txtDiemToan = document.getElementById("txtDiemToan").value * 1;
  var txtDiemVan = document.getElementById("txtDiemVan").value * 1;
  var loaiSV = document.getElementById("loaiSV").value;
  console.log({ txtMaSv, txtTenSV, loaiSv, txtDiemToan, txtDiemVan });
  //   var diem = diemTB(txtDiemToan, txtDiemVan);
  //   var xepLoai =  xepLoai(diem);
  var sinhVien = {
    txtMaSv: txtMaSv,
    txtTenSV: txtTenSV,
    loaiSV: loaiSV,
    txtDiemToan: txtDiemToan,
    txtDiemVan: txtDiemVan,

    tinhDTB: function () {
      return (this.txtDiemToan + this.txtDiemVan) / 2;
    },
    xepLoai: function(){
        var dtb = this.tinhDTB();
        if(dtb>=5){
            return "Đạt";

        }else {
            return "không đạt"
        }
    }
  };
  console.log("first", sinhVien);
  //   quanLySinhVien.push(sinhVien);
  document.getElementById("spanTenSV").innerHTML = sinhVien.txtTenSV;
  document.getElementById("spanMaSV").innerHTML =sinhVien.txtMaSv;
  document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  document.getElementById("spanDTB").innerHTML = sinhVien.tinhDTB();
  document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai();
}
// function diemTB(txtDiemToan,txtDiemVan){
//     return  (txtDiemToan + txtDiemVan) / 2;

// }
