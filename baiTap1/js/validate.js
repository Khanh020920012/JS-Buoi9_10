// kiểm tra rỗng

//hợp lệ => return true ;
function showMessage(idErr, message) {
  document.getElementById(idErr).innerText = message;
}

function kiemTraRong(value, idErr) {
  if (value.trim() == "") {
    showMessage(idErr, "không được để trống");
    return false;
  }
  showMessage(idErr, "");
  return true;
}
function kiemTraTrung(value, arr, idErr) {
  // find index w3
  var index = arr.findIndex(function (item) {
    return item.maSv == value;
  });
  if (index != -1) {
    showMessage(idErr, "Nội dung đã bị trùng");
    return false;
  }
  showMessage(idErr, "");
  return true;
}

function kiemTraEmail(valueEmail){
  // regex 
  const re =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(re.test(valueEmail)){
    showMessage("spanEmailSV","");
    return true;
  }
  showMessage("spanEmailSV","Nội dung Email không hợp lệ")
  return false;
}