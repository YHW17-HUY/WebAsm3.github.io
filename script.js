document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    // Hiển thị phần tử Div31
    document.getElementById("Div31").classList.remove("hidden");

    // Ẩn form email sau khi submit
    document.getElementById("emailForm").style.display = "none";
  });

for (let i = 1; i <= 6; i++) {
  document.getElementById(`Button1${i}`).addEventListener("click", function () {
    const viewContent = document.getElementById(`View${i}`);

    // Kiểm tra trạng thái hiện tại của View1
    if (viewContent.classList.contains("hidden")) {
      // Hiển thị phần tử View1
      viewContent.classList.remove("hidden");
      document.querySelector(`.Div45${i}`).classList.toggle("height0");
      viewContent.style.display = "block"; // Đảm bảo phần tử hiển thị

      // Cập nhật văn bản nút thành "VIEW LESS" và thay đổi mũi tên
      this.innerHTML = 'VIEW LESS <i class="fas fa-chevron-up"></i>';
    } else {
      // Ẩn phần tử View1
      document.querySelector(`.Div45${i}`).classList.toggle("height0");
      viewContent.classList.add("hidden");
      viewContent.style.display = "none"; // Đảm bảo phần tử ẩn

      // Cập nhật văn bản nút trở lại thành "VIEW MORE" và thay đổi mũi tên
      this.innerHTML = 'VIEW MORE <i class="fas fa-chevron-down"></i>';
    }
  });
}
