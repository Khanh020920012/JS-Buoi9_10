function renderDSSV() {
  var content = "";
  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];

    content += `<tr>
        <td>${sv.maSv}</td>
        <td>${sv.tenSv}</td>
        <td>${sv.email}</td>
        <td>${sv.tinhDTB().toFixed(2)}</td>
        <td>
        <button type="button" onclick="xoaSv('${
          sv.maSv
        }')" class="btn btn-danger">
        Xóa
        </button>
        <button type="button" onclick="suaSv('${
          sv.maSv
        }')" class="btn btn-success">
        Sửa
        </button>
        </td>
        </tr>  
          `;
  }
  console.log(content);
  document.getElementById("tbodySinhVien").innerHTML = content;
}
function layThongTinTuForm() {
  // lấy data từ form
  var maSv = document.getElementById("txtMaSV").value;
  var tenSv = document.getElementById("txtTenSV").value;
  var pass = document.getElementById("txtPass").value;
  var email = document.getElementById("txtEmail").value;
  var txtToan = document.getElementById("txtDiemToan").value * 1;
  var txtLy = document.getElementById("txtDiemLy").value * 1;
  var txtHoa = document.getElementById("txtDiemHoa").value * 1;
  //tạo object
  var sv = {
    maSv: maSv,
    tenSv: tenSv,
    pass: pass,
    email: email,
    txtToan: txtToan,
    txtLy: txtLy,
    txtHoa: txtHoa,
    tinhDTB: function () {
      return (this.txtToan + this.txtLy + this.txtHoa) / 3;
    },
  };
  return sv;
}
