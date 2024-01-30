function Sinhvien(_maSv, _tenSv, _email, _pass, _txtToan, _txtLy, _txtHoa) {
    this.maSv = _maSv;
    this.tenSv = _tenSv;
    this.email = _email;
    this.pass = _pass;
    this.txtToan = _txtToan;
    this.txtLy = _txtLy;
    this.txtHoa = _txtHoa;
    this.tinhDTB = function () {
      return (this.txtToan + this.txtLy + this.txtHoa) / 3;
    };
  }