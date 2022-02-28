"use strict";

/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
const gBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/orders";
// bạn có thể dùng để lưu loại pizza đươc chọn, mỗi khi khách chọn, bạn lại đổi giá trị cho nó
var gSelectedPizzaType = "";
// tạo obj dùng để lưu trữ combo được chọn, mỗi khi khách chọn bạn lại đổi giá trị properties của nó
var gSelectedMenuCombo = {
  menuName: "",    // S, M, L
  duongKinhCM: 0,
  suongNuong: 0,
  saladGr: 0,
  drink: 0,
  priceVND: 0
}

var gObjRequest = {
  kichCo: "",
  duongKinh: "",
  suon: "",
  salad: "",
  loaiPizza: "",
  idVourcher: "",
  idLoaiNuocUong: "",
  soLuongNuoc: "",
  hoTen: "",
  thanhTien: "",
  email: "",
  soDienThoai: "",
  diaChi: "",
  loiNhan: ""
}

var gPayment = "";


/*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
$(document).ready(function () {
  onPageLoading();

  // gán sự kiện click cho nút chọn Combo size S
  $("#size-s").on("click", function () {
    onClickComboS();
  });

  // gán sự kiện click cho nút chọn Combo size M
  $("#size-m").on("click", function () {
    onClickComboM();
  });

  // gán sự kiện click cho nút chọn Combo size L
  $("#size-l").on("click", function () {
    onClickComboL();
  });

  // gán sự kiện click cho nút chọn Loại Ocean Mania
  $("#ocean-mania-btn").on("click", function () {
    onClickPizzaOcean();
  });
  // gán sự kiện click cho nút chọn Loại Hawaiian
  $("#hawaiian-btn").on("click", function () {
    onClickPizzaHawai();
  });

  // gán sự kiện click cho nút chọn Loại Bacon
  $("#bacon-btn").on("click", function () {
    onClickPizzaBacon();
  });

  // gán sự kiện click cho nút Gửi đơn
  $("#send-btn").on("click", function () {
    onClickSendBtn();
  });

  // gán sự kiện click cho nút Tạo đơn
  $("#inpTaoDon").on("click", function () {
    onClickTaoDon();
  });

});


/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// Hàm xử lý sự kiện loading
function onPageLoading() {
  loadDrinks();
}

// Hàm xử lý sự kiện click nút chọn Combo S
function onClickComboS() {
  "use strict";
  // B0: khai báo biến lưu trữ(đã có trong biến toàn cục)
  // B1: thu thập dữ liệu
  gSelectedMenuCombo.menuName = "S";
  gSelectedMenuCombo.duongKinhCM = 20;
  gSelectedMenuCombo.suongNuong = 2;
  gSelectedMenuCombo.saladGr = 200;
  gSelectedMenuCombo.drink = 2;
  gSelectedMenuCombo.priceVND = 150000;

  // B2: validate dữ liệu(bỏ qua)
  // B3: xử lý hiển thị
  console.log("Combo S:");
  console.log(gSelectedMenuCombo);
  // thay doi mau button
  $("#size-s").attr("class", "btn btn-warning font-weight-bold");
  $("#size-m").attr("class", "btn bgOrange font-weight-bold");
  $("#size-l").attr("class", "btn bgOrange font-weight-bold");
}

// Hàm xử lý sự kiện click nút chọn Combo M
function onClickComboM() {
  "use strict";
  // B0: khai báo biến lưu trữ(đã có trong biến toàn cục)
  // B1: thu thập dữ liệu
  gSelectedMenuCombo.menuName = "M";
  gSelectedMenuCombo.duongKinhCM = 25;
  gSelectedMenuCombo.suongNuong = 4;
  gSelectedMenuCombo.saladGr = 300;
  gSelectedMenuCombo.drink = 3;
  gSelectedMenuCombo.priceVND = 200000;
  // B2: validate dữ liệu(bỏ qua)
  // B3: xử lý hiển thị
  console.log("Combo M:");
  console.log(gSelectedMenuCombo);
  // thay doi mau button
  $("#size-s").attr("class", "btn bgOrange font-weight-bold");
  $("#size-m").attr("class", "btn btn-warning font-weight-bold");
  $("#size-l").attr("class", "btn bgOrange font-weight-bold");
}

// Hàm xử lý sự kiện click nút chọn Combo L
function onClickComboL() {
  "use strict";
  // B0: khai báo biến lưu trữ(đã có trong biến toàn cục)
  // B1: thu thập dữ liệu
  gSelectedMenuCombo.menuName = "L";
  gSelectedMenuCombo.duongKinhCM = 30;
  gSelectedMenuCombo.suongNuong = 8;
  gSelectedMenuCombo.saladGr = 500;
  gSelectedMenuCombo.drink = 4;
  gSelectedMenuCombo.priceVND = 250000;
  // B2: validate dữ liệu(bỏ qua)
  // B3: xử lý hiển thị
  console.log("Combo L:");
  console.log(gSelectedMenuCombo);
  // thay doi mau button
  $("#size-s").attr("class", "btn bgOrange font-weight-bold");
  $("#size-m").attr("class", "btn bgOrange font-weight-bold");
  $("#size-l").attr("class", "btn btn-warning font-weight-bold");
}

// Hàm xử lý sự kiện click nút chọn Loại pizza Ocean
function onClickPizzaOcean() {
  "use strict";
  // B0: khai báo biến lưu trữ(đã có trong global)
  // B1: thu thập dữ liệu
  gSelectedPizzaType = "Ocean Mania";
  // B2: validate(bỏ qua)
  // B3: xử lý hiển thị
  console.log("Loại pizza: " + gSelectedPizzaType);
  // đổi màu nút
  $("#ocean-mania-btn").attr("class", "btn btn-warning w-100 font-weight-bold");
  $("#hawaiian-btn").attr("class", "btn bgOrange w-100 font-weight-bold");
  $("#bacon-btn").attr("class", "btn bgOrange w-100 font-weight-bold");
}

// Hàm xử lý sự kiện click nút chọn Loại pizza Hawaiian
function onClickPizzaHawai() {
  "use strict";
  // B0: khai báo biến lưu trữ(đã có trong global)
  // B1: thu thập dữ liệu
  gSelectedPizzaType = "Hawaii";
  // B2: validate(bỏ qua)
  // B3: xử lý hiển thị
  console.log("Loại pizza: " + gSelectedPizzaType);
  // đổi màu nút
  $("#ocean-mania-btn").attr("class", "btn bgOrange w-100 font-weight-bold");
  $("#hawaiian-btn").attr("class", "btn btn-warning w-100 font-weight-bold");
  $("#bacon-btn").attr("class", "btn bgOrange w-100 font-weight-bold");
}

// Hàm xử lý sự kiện click nút chọn Loại pizza Bacon
function onClickPizzaBacon() {
  "use strict";
  // B0: khai báo biến lưu trữ(đã có trong global)
  // B1: thu thập dữ liệu
  gSelectedPizzaType = "Bacon";
  // B2: validate(bỏ qua)
  // B3: xử lý hiển thị
  console.log("Loại pizza: " + gSelectedPizzaType);
  // đổi màu nút
  $("#ocean-mania-btn").attr("class", "btn bgOrange w-100 font-weight-bold");
  $("#hawaiian-btn").attr("class", "btn bgOrange w-100 font-weight-bold");
  $("#bacon-btn").attr("class", "btn btn-warning w-100 font-weight-bold");
}

// Hàm xử lý sự kiện click nút Gửi đơn
function onClickSendBtn() {
  "use strict";
  // B0: khai báo biến lưu trữ dữ liệu
  var vOrderInfo = {
    hoTen: "",
    email: "",
    dienThoai: "",
    diaChi: "",
    loiNhan: "",
    maGiamGia: "",
  }
  // B1: thu thập dữ liệu
  getOrderData(vOrderInfo);
  // lấy các thông số cần thiết vào biến toàn cục để request về sau
  gObjRequest.hoTen = vOrderInfo.hoTen;
  gObjRequest.email = vOrderInfo.email;
  gObjRequest.soDienThoai = vOrderInfo.dienThoai;
  gObjRequest.diaChi = vOrderInfo.diaChi;
  gObjRequest.loiNhan = vOrderInfo.loiNhan;
  gObjRequest.idVourcher = vOrderInfo.maGiamGia;

  // B2: validate dữ liệu
  var vIsDataValid = validateData(vOrderInfo);

  if (vIsDataValid) {
    // B3: xử lý dữ liệu (bỏ qua)
    // B4: xử lý hiển thị
    // hiển thị Modal kiểm tra Thông tin đơn hàng
    $("#order-info-modal").modal("show");
    // load dữ liệu lên Modal
    loadInfoToModal(vOrderInfo);
  }
}

// Hàm xử lý sự kiện click vào btn Tạo đơn
function onClickTaoDon() {
  "use strict";
  // B0: khai báo biến lưu trữ dữ liệu (bỏ qua)
  // B1: thu thập dữ liệu
  gObjRequest.thanhTien = gPayment;
  gObjRequest.kichCo = gSelectedMenuCombo.menuName;
  gObjRequest.duongKinh = gSelectedMenuCombo.duongKinhCM;
  gObjRequest.suon = gSelectedMenuCombo.suongNuong;
  gObjRequest.salad = gSelectedMenuCombo.saladGr;
  gObjRequest.loaiPizza = gSelectedPizzaType;
  gObjRequest.idLoaiNuocUong = $("#select-drink option:selected").val();
  gObjRequest.soLuongNuoc = gSelectedMenuCombo.drink;

  // B2:validate dữ liệu(bỏ qua)
  // B3: xử lý hiển thị
  // ẩn Modal thông tin khách order
  $("#order-info-modal").modal("hide");
  console.log(gObjRequest);

  // call restAPI ghi đơn hàng vào 
  $.ajax({
    url: gBASE_URL,
    type: "POST",
    contentType: "application/json;charset=UTF-8",
    dataType: "json",
    data: JSON.stringify(gObjRequest),
    success: function (res) {
      alert("Tạo đơn thành công");
      console.log(res);
      // ẩn Modal Info order
      $("#order-info-modal").modal("hide");
      // hiển thị Modal chứa orderId
      $("#inp-orderid").val(res.orderId); // truyền orderId vào field input
      $("#orderid-modal").modal("show");
    },
    error: function (ajaxContext) {
      alert(ajaxContext.responseText)
    }
  });
}


/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
// Hàm load đồ uống vào mục select bằng call restAPI(ajax)
function loadDrinks() {
  "use strict";
  // gọi server lấy dữ liệu
  $.ajax({
    url: "http://42.115.221.44:8080/devcamp-pizza365/drinks",
    type: "GET",
    dataType: "json",
    success: function (res) {
      console.log(res);
      var vSelectDrink = $("#select-drink");
      for (let bI = 0; bI < res.length; bI++) {
        var vOption = $("<option/>", {
          text: res[bI].tenNuocUong,
          value: res[bI].maNuocUong
        }).appendTo(vSelectDrink);
      }
    },
    error: function (ajaxContext) {
      alert(ajaxContext.responseText);
    }
  });
}

// Hàm thu thập dữ liệu Đặt hàng Gửi đi của khách
function getOrderData(paramInfo) {
  "use strict";
  paramInfo.hoTen = $("#inp-fullname").val().trim();
  paramInfo.email = $("#inp-email").val().trim();
  paramInfo.dienThoai = $("#inp-dien-thoai").val().trim();
  paramInfo.diaChi = $("#inp-dia-chi").val().trim();
  paramInfo.loiNhan = $("#inp-loi-nhan").val().trim();
  paramInfo.maGiamGia = $("#inp-voucherid").val().trim();
}

// Hàm kiểm tra dữ liệu
function validateData(paramInfo) {
  "use strict";
  if (paramInfo.hoTen === "") {
    alert("Họ tên bị thiếu, vui lòng điền đầy đủ.");
    return false;
  }
  if (paramInfo.email === "") {
    alert("Email bị thiếu, vui lòng điền đầy đủ.");
    return false;
  }
  if (paramInfo.dienThoai === "") {
    alert("Số điện thoại bị thiếu, vui lòng điền đầy đủ.");
    return false;
  }
  if (paramInfo.diaChi === "") {
    alert("Địa chỉ bị thiếu, vui lòng điền đầy đủ.");
    return false;
  }
  if (!validateEmail(paramInfo.email) || paramInfo.email === "") {
    alert("Email không hợp lệ");
    return false;
  }
  return true;
}

// Hàm validate Email
function validateEmail(paramEmail) {
  "use strict";
  var vEmailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return vEmailReg.test(paramEmail);
}

// Hàm load Thông tin order lên Modal
function loadInfoToModal(paramInfo) {
  "use strict";
  $("#inpHoTen").val(paramInfo.hoTen);
  $("#inpSoDienThoai").val(paramInfo.dienThoai);
  $("#inpDiaChi").val(paramInfo.diaChi);
  $("#inpLoiNhan").val(paramInfo.loiNhan);
  $("#inpMaGiamGia").val(paramInfo.maGiamGia);
  // xử lý mã giảm giá (call restAPI để nhận discount)
  $.ajax({
    url: "http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/" + paramInfo.maGiamGia,
    type: "GET",
    dataType: "json",
    success: function (res) {
      // debugger;
      console.log(res);
      var vPayment = gSelectedMenuCombo.priceVND * (1 - (res.phanTramGiamGia / 100));
      gPayment = vPayment; // lưu số tiền thanh toán vào biến toàn cục
      $("#inpThongTin").html(
        `Xác nhận: ${paramInfo.hoTen}, ${paramInfo.dienThoai}, ${paramInfo.diaChi}, Menu ${gSelectedMenuCombo.menuName}, sườn nướng ${gSelectedMenuCombo.suongNuong}, nước ${gSelectedMenuCombo.drink}... 
        \nLoại pizza: ${gSelectedPizzaType}, Giá: ${gSelectedMenuCombo.priceVND} vnd, Mã giảm giá: ${paramInfo.maGiamGia}
        \nPhải thanh toán: ${vPayment} vnd (giảm giá ${res.phanTramGiamGia}%) `
      );
    },
    error: function (ajaxContext) {
      // alert(ajaxContext.responseText);
      alert("Mã giảm giá không hợp lệ");
      var vPayment = gSelectedMenuCombo.priceVND;
      gPayment = vPayment; // lưu số tiền thanh toán vào biến toàn cục
      $("#inpThongTin").html(
        `Xác nhận: ${paramInfo.hoTen}, ${paramInfo.dienThoai}, ${paramInfo.diaChi}, Menu ${gSelectedMenuCombo.menuName}, sườn nướng ${gSelectedMenuCombo.suongNuong}, nước ${gSelectedMenuCombo.drink}...
        Loại pizza: ${gSelectedPizzaType}, Giá: ${gSelectedMenuCombo.priceVND} vnd, Mã giảm giá: ...
        Phải thanh toán: ${vPayment} vnd (giảm giá 0%) `
      );
    }
  });
}


