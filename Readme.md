# CSE122 — Quản lý Nghệ nhân CultureTrail

## Thông tin bài làm

| Mục | Thông tin |
| --- | --- |
| Tên đề tài BTL | CultureTrail — Nền tảng kết nối du khách với văn hóa truyền thống Việt Nam |
| Trang thực hiện | Trang Quản trị — Quản lý Nghệ nhân (Artisan Management Dashboard) |
| Sinh viên | [Điền Họ và Tên của bạn] |
| Mã sinh viên | [Điền Mã Sinh Viên của bạn] |
| Repository GitHub | [Dán link GitHub repo chứa mã nguồn của bạn vào đây] |
| Thiết kế Figma | [Dán link thiết kế Figma của bạn vào đây] |
| Video trình bày | [Dán link video YouTube/Drive của bạn vào đây] |


## Mục đích trang

Trang thuộc phân hệ quản trị (Admin Portal) của hệ thống CultureTrail, dành riêng cho Quản trị viên và Điều hành viên nền tảng[cite: 1, 2, 6]. Trang giúp theo dõi số lượng và trạng thái hoạt động của các nghệ nhân văn hóa, duyệt hồ sơ xác thực danh hiệu Verified, khóa hoặc mở khóa quyền truy cập tài khoản, và giám sát năng suất bài viết (xuất bản, chờ duyệt, từ chối) của từng nghệ nhân. Toàn bộ dữ liệu hiện tại là mảng dữ liệu mô phỏng trong `btgk.js`; trang chưa kết nối cơ sở dữ liệu thật hay hệ thống xác thực backend.

## Chức năng chính

- Render động danh sách nghệ nhân từ mảng đối tượng JavaScript (`artisansData`) ra cây DOM[cite: 5, 6].
- Tự động tính toán và cập nhật các chỉ số thống kê theo thời gian thực (Real-time Counters) lên 3 thẻ đầu trang: Tổng nghệ nhân, Đang hoạt động, Đã xác minh.
- Chuyển đổi trạng thái xác minh (Toggle Verify) giữa hai trạng thái *Verified* và *Chờ xác minh*, tự động cập nhật lại huy hiệu màu và nhãn nút bấm[cite: 4, 5, 6].
- Kiểm soát trạng thái tài khoản (Toggle Lock/Active): cho phép Khóa hoặc Mở khóa tài khoản; khi bị khóa, thẻ nghệ nhân sẽ tự động giảm độ mờ (`opacity: 0.65`) và đổi huy hiệu sang *Đã khoá*[cite: 3, 5, 6].
- Mở hộp thoại (Modal popup) xem tóm tắt thông tin chi tiết hồ sơ nghệ nhân, kinh nghiệm và thông tin liên lạc; hỗ trợ nút Đóng để ẩn modal[cite: 4, 5, 6].
- Bố cục responsive linh hoạt, tự động co giãn từ màn hình máy tính để bàn (CSS Grid 3 cột, Flexbox ngang) sang màn hình điện thoại (dồn thành cột đơn, nút bấm trải rộng toàn dòng).

## Công nghệ sử dụng

- HTML5: Cấu trúc semantic chuẩn mực (`main`, `header`, `section`, `article`, `footer`), danh sách `ul`/`li`, heading `h1`-`h4`, button và hộp thoại modal.
- CSS3: Biến CSS (`:root`), Flexbox, CSS Grid, hiệu ứng tương tác hover và media query responsive[cite: 3, 6].
- JavaScript (ES6 Vanilla): DOM manipulation, arrow functions, template literals, các phương thức xử lý mảng (`forEach`, `filter`, `find`) và lắng nghe sự kiện `DOMContentLoaded`[cite: 5, 6].
- SVG: Biểu tượng logo thương hiệu CultureTrail, biểu tượng tin nhắn hỗ trợ nổi và icon định vị địa chỉ.

Không sử dụng framework, backend, cơ sở dữ liệu hay thư viện ngoài.

## Cấu trúc thư mục

```text
btgk-culturetrail/
├── btgk.html         # Cấu trúc HTML semantic và khung modal
├── btgk.css          # Định dạng stylesheet, biến màu và responsive media queries
├── btgk.js           # Xử lý mảng dữ liệu, cập nhật bộ đếm và các sự kiện tương tác
└── README.md         # Báo cáo thuyết minh chi tiết