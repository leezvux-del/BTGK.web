// Dữ liệu mô phỏng theo Figma
const artisansData = [
    {
        id: 1,
        name: "Cô Lan Dệt Lụa",
        verified: true,
        active: true,
        desc: "Nghệ nhân Lụa Vạn Phúc · Dệt lụa",
        location: "Vạn Phúc, Hà Đông, Hà Nội",
        email: "lan.lua@culturetrail.vn",
        phone: "0912 345 678",
        joinDate: "14/03/2021",
        exp: "42 năm kinh nghiệm",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        stats: { total: 6, published: 5, pending: 1, rejected: 0 }
    },
    {
        id: 2,
        name: "Chú Hùng Gốm Sứ",
        verified: true,
        active: true,
        desc: "Nghệ nhân Gốm Bát Tràng · Gốm sứ",
        location: "Bát Tràng, Gia Lâm, Hà Nội",
        email: "hung.gom@culturetrail.vn",
        phone: "0903 222 111",
        joinDate: "02/07/2021",
        exp: "35 năm kinh nghiệm",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        stats: { total: 3, published: 2, pending: 1, rejected: 0 }
    },
    {
        id: 3,
        name: "Cô Mai Mây Tre",
        verified: true,
        active: true,
        desc: "Nghệ nhân Mây tre đan Phú Vinh · Mây tre đan",
        location: "Phú Vinh, Phú Nghĩa, Hà Nội",
        email: "mai.maytre@culturetrail.vn",
        phone: "0915 777 888",
        joinDate: "19/01/2022",
        exp: "28 năm kinh nghiệm",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        stats: { total: 2, published: 1, pending: 1, rejected: 0 }
    },
    {
        id: 4,
        name: "Bác Tám Đờn Ca",
        verified: true,
        active: true,
        desc: "Nghệ nhân Đờn ca tài tử · Âm nhạc dân gian",
        location: "TP. Bạc Liêu",
        email: "tam.donca@culturetrail.vn",
        phone: "0908 555 444",
        joinDate: "30/05/2022",
        exp: "52 năm kinh nghiệm",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        stats: { total: 2, published: 1, pending: 0, rejected: 1 }
    },
    {
        id: 5,
        name: "Chị Hoa Tranh Dân Gian",
        verified: false,
        active: true,
        desc: "Nghệ nhân Tranh Đông Hồ · Tranh dân gian",
        location: "Đông Hồ, Thuận Thành, Bắc Ninh",
        email: "hoa.tranh@culturetrail.vn",
        phone: "0977 333 222",
        joinDate: "11/02/2023",
        exp: "21 năm kinh nghiệm",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        stats: { total: 2, published: 1, pending: 1, rejected: 0 }
    },
    {
        id: 6,
        name: "Anh Khang Bếp Huế",
        verified: true,
        active: true,
        desc: "Nghệ nhân Ẩm thực cung đình · Ẩm thực",
        location: "Kim Long, TP. Huế",
        email: "khang.bephue@culturetrail.vn",
        phone: "0934 666 999",
        joinDate: "08/09/2023",
        exp: "19 năm kinh nghiệm",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
        stats: { total: 2, published: 1, pending: 1, rejected: 0 }
    }
];

// Hàm cập nhật bộ đếm thống kê
function updateCounters() {
    document.getElementById("totalArtisans").textContent = artisansData.length;
    document.getElementById("activeArtisans").textContent = artisansData.filter(a => a.active).length;
    document.getElementById("verifiedArtisans").textContent = artisansData.filter(a => a.verified).length;
}

// Hàm render danh sách ra DOM
function renderList() {
    const container = document.getElementById("artisanContainer");
    container.innerHTML = "";

    artisansData.forEach(item => {
        const card = document.createElement("article");
        card.className = `artisan-card ${!item.active ? 'locked' : ''}`;

        card.innerHTML = `
      <div class="artisan-main">
        <img src="${item.avatar}" alt="${item.name}" class="artisan-avatar" loading="lazy">
        <div class="artisan-info">
          <div class="info-header">
            <h2 class="artisan-name">${item.name}</h2>
            <span class="badge ${item.verified ? 'badge-verified' : 'badge-pending'}">
              ${item.verified ? 'Verified' : 'Chờ xác minh'}
            </span>
            <span class="badge ${item.active ? 'badge-active' : 'badge-locked'}">
              ${item.active ? 'Đang hoạt động' : 'Đã khoá'}
            </span>
          </div>
          <p class="artisan-meta">
            ${item.desc} · 📍 ${item.location}
          </p>
          <p class="artisan-submeta">
            ${item.email} · ${item.phone} · Tham gia ${item.joinDate} · ${item.exp}
          </p>
          <div class="post-stats">
            <span class="pill-stat pill-default">Tổng ${item.stats.total}</span>
            <span class="pill-stat pill-success">Xuất bản ${item.stats.published}</span>
            <span class="pill-stat pill-warning">Chờ duyệt ${item.stats.pending}</span>
            <span class="pill-stat pill-danger">Từ chối ${item.stats.rejected}</span>
          </div>
        </div>
      </div>
      <div class="artisan-actions">
        <button class="btn btn-default" onclick="showProfile(${item.id})">Xem hồ sơ</button>
        <button class="btn btn-verify" onclick="toggleVerify(${item.id})">
          ${item.verified ? 'Bỏ xác minh' : 'Xác minh'}
        </button>
        <button class="btn btn-lock" onclick="toggleLock(${item.id})">
          ${item.active ? 'Khoá' : 'Mở khoá'}
        </button>
      </div>
    `;
        container.appendChild(card);
    });

    updateCounters();
}

// Xử lý xác minh / bỏ xác minh
function toggleVerify(id) {
    const artisan = artisansData.find(a => a.id === id);
    if (artisan) {
        artisan.verified = !artisan.verified;
        renderList();
    }
}

// Xử lý khoá / mở khoá tài khoản
function toggleLock(id) {
    const artisan = artisansData.find(a => a.id === id);
    if (artisan) {
        artisan.active = !artisan.active;
        renderList();
    }
}

// Mở modal xem hồ sơ
function showProfile(id) {
    const artisan = artisansData.find(a => a.id === id);
    if (artisan) {
        document.getElementById("modalName").textContent = artisan.name;
        document.getElementById("modalDetail").textContent = `${artisan.desc} - Địa chỉ: ${artisan.location} (${artisan.exp}). Email: ${artisan.email} - SĐT: ${artisan.phone}.`;
        document.getElementById("profileModal").classList.add("active");
    }
}

// Đóng modal
function closeModal() {
    document.getElementById("profileModal").classList.remove("active");
}

// Khởi chạy khi load xong DOM
document.addEventListener("DOMContentLoaded", renderList);