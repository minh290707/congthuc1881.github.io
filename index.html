<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>The Train 1881 - Bar Staff Handbook</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            train: {
              red: '#C41E24',
              darkred: '#8B1115',
              cream: '#F5E6CA',
              gold: '#D4AF37',
              dark: '#121212',
              card: '#1C1C1E',
              border: '#2C2C2E'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif']
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #121212;
      color: #F5E6CA;
      -webkit-tap-highlight-color: transparent;
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .glass-card {
      background: rgba(28, 28, 30, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(245, 230, 202, 0.12);
    }
    .active-tab {
      background-color: #C41E24 !important;
      color: #F5E6CA !important;
      border-color: #C41E24 !important;
    }
    .sheet-open { transform: translateY(0%); }
    .sheet-closed { transform: translateY(100%); }
  </style>
</head>
<body class="font-sans antialiased pb-24 min-h-screen flex flex-col justify-between">

  <!-- Header Section -->
  <header class="sticky top-0 z-30 bg-[#121212]/95 backdrop-blur-md border-b border-train-border/50 px-4 pt-3 pb-3">
    <div class="flex items-center justify-between gap-3 mb-3">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-train-red flex items-center justify-center border border-train-gold/40 shadow-lg shadow-train-red/20 shrink-0">
          <svg class="w-6 h-6 text-train-cream" viewBox="0 0 100 100" fill="currentColor">
            <rect x="25" y="20" width="50" height="50" rx="10" fill="#C41E24" stroke="#F5E6CA" stroke-width="4"/>
            <rect x="32" y="28" width="15" height="15" rx="2" fill="#64B5F6"/>
            <rect x="53" y="28" width="15" height="15" rx="2" fill="#64B5F6"/>
            <circle cx="35" cy="58" r="5" fill="#D4AF37"/>
            <circle cx="65" cy="58" r="5" fill="#D4AF37"/>
            <rect x="42" y="55" width="16" height="8" fill="#D4AF37"/>
          </svg>
        </div>
        <div>
          <h1 class="font-serif font-bold text-lg text-train-cream leading-tight tracking-wide">THE TRAIN 1881</h1>
          <p class="text-[10px] text-train-gold font-semibold uppercase tracking-widest">Cafe & Bistro • Bar Staff</p>
        </div>
      </div>
      <div id="recipe-count" class="text-xs bg-train-card px-2.5 py-1 rounded-full border border-train-border text-train-cream/70 font-mono">
        49 món
      </div>
    </div>

    <!-- Search Bar -->
    <div class="relative">
      <input type="text" id="search-input" placeholder="Tìm tên món, rượu, dứa, lòng trắng..." 
        class="w-full bg-train-card/90 border border-train-border rounded-xl px-10 py-2.5 text-sm text-train-cream placeholder-train-cream/40 focus:outline-none focus:border-train-red transition-all">
      <svg class="w-4 h-4 text-train-cream/40 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <button id="clear-search" class="hidden absolute right-3 top-3 text-train-cream/40 hover:text-train-cream">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Filter Pills -->
    <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 text-xs font-medium">
      <button onclick="filterCategory('All')" class="cat-pill active-tab px-3.5 py-1.5 rounded-full border border-train-border whitespace-nowrap transition-all">Tất cả</button>
      <button onclick="filterCategory('Cocktail')" class="cat-pill px-3.5 py-1.5 rounded-full bg-train-card text-train-cream/70 border border-train-border whitespace-nowrap transition-all">Cocktail</button>
      <button onclick="filterCategory('Mocktail')" class="cat-pill px-3.5 py-1.5 rounded-full bg-train-card text-train-cream/70 border border-train-border whitespace-nowrap transition-all">Mocktail</button>
      <button onclick="filterCategory('Shots')" class="cat-pill px-3.5 py-1.5 rounded-full bg-train-card text-train-cream/70 border border-train-border whitespace-nowrap transition-all">Shots & Beer</button>
      <button onclick="filterCategory('Favorite')" class="cat-pill px-3.5 py-1.5 rounded-full bg-train-card text-train-gold border border-train-gold/30 whitespace-nowrap transition-all flex items-center gap-1">
        ★ Yêu thích
      </button>
    </div>
  </header>

  <!-- Recipe List Grid -->
  <main class="p-4">
    <div id="recipe-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
    <div id="no-results" class="hidden text-center py-12 text-train-cream/40">
      <p class="text-base font-medium">Không tìm thấy công thức phù hợp</p>
      <p class="text-xs mt-1">Thử tìm bằng tên rượu nền hoặc từ khóa khác</p>
    </div>
  </main>

  <!-- Bottom Sheet Modal for Recipe Detail -->
  <div id="sheet-overlay" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300" onclick="closeSheet()"></div>
  
  <div id="recipe-sheet" class="fixed inset-x-0 bottom-0 z-50 bg-[#1A1A1C] border-t border-train-gold/30 rounded-t-3xl p-5 sheet-closed transition-transform duration-300 ease-out max-h-[85vh] overflow-y-auto no-scrollbar">
    <div class="w-12 h-1.5 bg-train-border rounded-full mx-auto mb-4"></div>
    
    <div class="flex items-start justify-between gap-3 mb-2">
      <div>
        <span id="sheet-category" class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-train-red/20 text-train-red border border-train-red/30">Cocktail</span>
        <h2 id="sheet-title" class="text-2xl font-serif font-bold text-train-cream mt-1">--</h2>
      </div>
      <button id="sheet-fav-btn" onclick="toggleCurrentFavorite()" class="p-2.5 rounded-full bg-train-card border border-train-border text-train-cream/40 hover:text-train-gold">
        <svg id="sheet-fav-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
      </button>
    </div>

    <!-- Method Tag -->
    <div class="flex items-center gap-2 mb-4 text-xs text-train-gold/90 bg-train-gold/10 px-3 py-1.5 rounded-lg border border-train-gold/20">
      <span class="font-bold">Phương pháp:</span>
      <span id="sheet-method">Shake</span>
    </div>

    <!-- Ingredients List -->
    <div class="mb-5">
      <h3 class="text-xs font-bold uppercase tracking-wider text-train-cream/50 mb-2">Thành phần & Định lượng</h3>
      <div id="sheet-ingredients" class="space-y-2"></div>
    </div>

    <!-- Execution Steps -->
    <div class="mb-5">
      <h3 class="text-xs font-bold uppercase tracking-wider text-train-cream/50 mb-2">Hướng dẫn thao tác</h3>
      <div id="sheet-instructions" class="text-sm text-train-cream/90 bg-train-card p-3.5 rounded-xl border border-train-border leading-relaxed"></div>
    </div>

    <!-- Garnish -->
    <div id="sheet-garnish-box" class="mb-6">
      <h3 class="text-xs font-bold uppercase tracking-wider text-train-cream/50 mb-1">Trang trí (Garnish)</h3>
      <p id="sheet-garnish" class="text-sm text-train-gold italic"></p>
    </div>

    <button onclick="closeSheet()" class="w-full py-3 bg-train-red hover:bg-train-darkred text-train-cream font-semibold rounded-xl transition-colors shadow-lg shadow-train-red/20">
      Đóng
    </button>
  </div>

  <script>
    const recipes = [
      { id: 1, name: "Thanh Long Rose Spritz", category: "Cocktail", method: "Build / Top up", ingredients: ["50-60ml Nước ép thanh long đỏ", "15ml Siro đường hoặc siro hoa hồng", "15ml Nước cốt chanh tươi", "Top up Vang nổ (Prosecco/Sparkling)"], instructions: "Cho đá vào ly. Rót nước ép thanh long, siro và chanh vào khuấy nhẹ. Top up vang nổ lên trên.", garnish: "Lát thanh long đỏ hoặc cánh hoa hồng" },
      { id: 2, name: "Singapore Sling", category: "Cocktail", method: "Shake", ingredients: ["50ml Gin", "15ml Rượu cherry", "15ml Cointreau", "60ml Nước ép dứa", "15ml Nước cốt chanh tươi", "10ml Grenadine", "1 dash Angostura bitters"], instructions: "Cho tất cả nguyên liệu vào shaker với đá viên. Shake mạnh. Rót ra ly cao.", garnish: "Lát chanh, quả cherry" },
      { id: 3, name: "Jungle Bird", category: "Cocktail", method: "Shake", ingredients: ["45ml Dark rum", "15ml Campari", "45ml Nước ép dứa tươi", "15ml Nước cốt chanh tươi", "15ml Syrup đường"], instructions: "Shake đều tất cả nguyên liệu với đá. Lọc rót ra ly Rocks có đá viên mới.", garnish: "Lát dứa hoặc vỏ cam" },
      { id: 4, name: "God Father", category: "Cocktail", method: "Stir", ingredients: ["50ml Scotch whisky", "25ml Amaretto"], instructions: "Cho đá vào ly Rock, rót Whisky và Amaretto. Khuấy đều 15-20 giây.", garnish: "Vỏ cam (tùy chọn)" },
      { id: 5, name: "Hurricane", category: "Cocktail", method: "Shake", ingredients: ["40ml Dark rum", "40ml Rum trắng", "20ml Nước ép chanh tươi", "60ml Nước ép cam", "20ml Grenadine", "10ml Syrup đường"], instructions: "Shake mạnh tất cả nguyên liệu với đá viên. Rót ra ly Hurricane.", garnish: "Lát cam, quả cherry" },
      { id: 6, name: "Blood and Sand", category: "Cocktail", method: "Shake", ingredients: ["40ml Scotch whisky", "30ml Nước cam tươi", "30ml Cherry Heering", "30ml Vermouth đỏ ngọt"], instructions: "Shake đều với đá. Lọc rót ra ly Coupe hoặc Martini đã làm lạnh.", garnish: "Vỏ cam hoặc cherry" },
      { id: 7, name: "Tequila Sunrise", category: "Cocktail", method: "Build / Layer", ingredients: ["45ml Tequila", "90ml Nước cam tươi", "15ml Grenadine (hoặc siro dâu)"], instructions: "Rót Tequila và nước cam vào ly đầy đá. Rót từ từ Grenadine xuống đáy ly để tạo hiệu ứng chuyển màu.", garnish: "Lát cam, cherry" },
      { id: 8, name: "Cốm Cocktail", category: "Cocktail", method: "Shake", ingredients: ["50ml Nước ép dứa", "30ml Siro cốm/pandan", "40ml Bacardi", "15ml Cointreau", "15ml Malibu"], instructions: "Cho tất cả nguyên liệu vào shaker lắc đều. Shake xong đổ cả đá và nước vào cốc.", garnish: "Lá dứa hoặc hạt cốm" },
      { id: 9, name: "Mango Lắc", category: "Cocktail", method: "Shake", ingredients: ["30-50ml Sinh tố xoài dầm", "15ml Siro xoài", "1 quả Chanh", "50ml Vodka", "Top up Soda"], instructions: "Lăn miệng cốc qua lớp muối ớt. Shake tất cả nguyên liệu (trừ soda) với đá. Rót ra cốc, top up soda.", garnish: "Viền muối ớt, lát xoài" },
      { id: 10, name: "Penicillin", category: "Cocktail", method: "Muddle & Shake (Lọc 2 lần)", ingredients: ["4-5 lát Gừng tươi", "50ml Bourbon Jim Beam", "20ml Nước chanh", "15ml Mật ong"], instructions: "Cắt 4-5 lát gừng vào shaker dầm nát. Thêm Bourbon, chanh, mật ong và đá. Shake mạnh, lọc 2 lần ra ly.", garnish: "Twist vỏ chanh vàng" },
      { id: 11, name: "Watermelon Cucumber", category: "Cocktail", method: "Muddle & Shake (Lọc 2 lần)", ingredients: ["4-5 lát Dưa chuột (trong shake)", "2 lát Dưa chuột mỏng (decor)", "20ml Nước chanh", "15ml Đường", "50ml Nước ép dưa hấu", "50ml Gin"], instructions: "Cắt 2 lát dưa chuột mỏng áp thành cốc decor. Dầm 4-5 lát dưa chuột trong shaker, thêm các nguyên liệu còn lại và đá, shake đều lọc 2 lần.", garnish: "Lát dưa chuột áp thành cốc" },
      { id: 12, name: "Mojito", category: "Cocktail", method: "Muddle & Build", ingredients: ["1 quả Chanh (cắt 8)", "2 thìa Đường", "50ml Bacardi", "Vài nhánh Bạc hà", "Top up Soda"], instructions: "Dầm nhẹ chanh, đường và lá bạc hà trong ly. Thêm Bacardi, đá đập nát, khuấy nhẹ và top up soda.", garnish: "Đọt lá bạc hà, lát chanh" },
      { id: 13, name: "Margarita", category: "Cocktail", method: "Shake", ingredients: ["50ml Tequila", "30ml Cointreau", "30ml Nước chanh", "5-10ml Đường"], instructions: "Viền muối quanh miệng ly. Shake các nguyên liệu với đá. Lọc bỏ đá khi rót ra ly.", garnish: "Viền muối, cài lát chanh" },
      { id: 14, name: "Coffee Martini", category: "Cocktail", method: "Shake", ingredients: ["30ml Vodka", "30ml Kahlua", "30ml Cà phê espresso", "7-8ml Đường (nửa ấn)"], instructions: "Shake thật mạnh với nhiều đá để tạo lớp bọt foam đẹp. Lọc bỏ đá rót ra ly Coupe/Martini.", garnish: "3 hạt cà phê" },
      { id: 15, name: "Gimlet", category: "Cocktail", method: "Shake", ingredients: ["50ml Gin hoặc Vodka", "2-2.5 quả Chanh (vắt lấy cốt)", "22.5ml Đường"], instructions: "Shake mạnh với đá. Lọc bỏ đá khi rót ra ly lạnh.", garnish: "Lát chanh vàng" },
      { id: 16, name: "Mai Tai", category: "Cocktail", method: "Shake", ingredients: ["35ml Rum vàng/dark", "15ml Rum trắng", "15ml Cointreau", "15ml Syrup đường / Orgeat", "20ml Nước chanh"], instructions: "Shake tất cả nguyên liệu với đá. Rót ra ly chứa đá đập.", garnish: "Nhánh bạc hà, vỏ chanh" },
      { id: 17, name: "Tropical Dusk", category: "Cocktail", method: "Shake & Layer", ingredients: ["20ml Rum", "30ml Tequila", "10ml Siro dâu", "50-80ml Nước cam vắt"], instructions: "Shake Rum, Tequila, siro dâu với đá khoảng 15 giây. Rót ra ly, sau đó phân tầng từ từ với nước cam vắt.", garnish: "Lát cam tươi" },
      { id: 18, name: "Sex on the Beach", category: "Cocktail", method: "Shake & Layer", ingredients: ["50ml Vodka", "50ml Nước ép dứa", "30ml Nước cam ép", "15ml Siro dứa", "15ml Sinh tố dâu"], instructions: "Rót 15ml sinh tố dâu vào đáy cốc trước. Shake riêng Vodka, dứa, cam, siro dứa với đá rồi rót nhẹ lên trên.", garnish: "Lát cam, cherry" },
      { id: 19, name: "Long Island Iced Tea", category: "Cocktail", method: "Build / Shake", ingredients: ["15ml Rum", "15ml Tequila", "15ml Vodka", "15ml Gin", "10ml Cointreau", "Nửa quả Chanh", "Top up Coca-Cola"], instructions: "Shake nhẹ các loại rượu với chanh và đá. Rót ra ly cao, top up Coca-Cola.", garnish: "Lát chanh tươi" },
      { id: 20, name: "Sangria", category: "Cocktail", method: "Shake", ingredients: ["50ml Vang đỏ", "15ml Cointreau", "40ml Coca-Cola", "5-10ml Syrup đường", "Cam vàng (cắt 4)", "Táo (cắt nhỏ)"], instructions: "Cho hoa quả, các loại rượu và đá vào shaker. Shake đều, rót ra ly cao.", garnish: "Lát cam, miếng táo" },
      { id: 21, name: "Ramos Gin Fizz", category: "Cocktail", method: "Double Shake", ingredients: ["40ml Gin", "1 quả Chanh", "20ml Đường", "1 Lòng trắng trứng", "20ml Kem Rich's", "Top up Soda"], instructions: "Shake lần 1 KHÔNG đá (44s). Shake lần 2 CÓ đá (44s). Rót ra cốc lọc đá, để ngăn đá tủ lạnh 2 phút. Lấy ra top up soda từ từ để bọt dâng cao.", garnish: "Cột bọt kem cao" },
      { id: 22, name: "Pink Lady", category: "Cocktail", method: "Double Shake", ingredients: ["50ml Gin", "20ml Siro dâu", "15ml Sinh tố dâu", "1 Lòng trắng trứng", "1 ấn Đường", "1 quả Chanh"], instructions: "Shake lần 1 không đá với lò xo. Shake lần 2 có đá. Lọc bỏ đá rót ra ly.", garnish: "Quả cherry / cánh hoa" },
      { id: 23, name: "Pina Colada", category: "Cocktail", method: "Shake / Blend", ingredients: ["50ml Nước dứa", "25ml Cốt dừa", "30ml Malibu", "50ml Bacardi", "1 ấn Đường"], instructions: "Shake đều với đá viên hoặc xay nhuyễn (blend) với đá.", garnish: "Lát dứa, ô giấy" },
      { id: 24, name: "Pornstar Martini", category: "Cocktail", method: "Shake (Lọc 2 lần)", ingredients: ["50ml Nước dứa", "20ml Siro chanh leo", "2/3 quả Chanh leo tươi", "50ml Vodka", "Nửa quả Chanh"], instructions: "Shake mạnh đóng đá tất cả nguyên liệu. Lọc 2 lần ra ly Martini.", garnish: "1/3 quả chanh leo còn lại thả nổi" },
      { id: 25, name: "Paloma", category: "Cocktail", method: "Build / Shake", ingredients: ["50ml Nước cam", "50ml Tequila", "25ml Siro blueberry", "Nửa quả Chanh", "15ml Đường"], instructions: "Shake các nguyên liệu với đá. Rót ra ly viền muối.", garnish: "Viền muối, lát cam" },
      { id: 26, name: "Old Fashioned", category: "Cocktail", method: "Stir (2 lần)", ingredients: ["1 thìa Đường cát", "6 dash Angostura bitters", "60ml Whisky"], instructions: "Khuấy đường + bitters + whisky không đá 15s cho tan đường. Thêm đá khối khuấy lần 2 cho lạnh sâu. Yểm tinh dầu vỏ cam.", garnish: "Vỏ cam yểm tinh dầu" },
      { id: 27, name: "Negroni", category: "Cocktail", method: "Stir", ingredients: ["30ml Campari", "30ml Sweet Vermouth", "30ml Gin"], instructions: "Làm lạnh ly. Cho đá vào shaker/ly khuấy, rót 3 loại rượu tỉ lệ 1:1:1. Khuấy đều 20s.", garnish: "Yểm vỏ cam" },
      { id: 28, name: "Dry Martini", category: "Cocktail", method: "Stir", ingredients: ["60ml Gin", "15ml Extra Dry Vermouth"], instructions: "Khuấy đều Gin và Vermouth với đá trong mixing glass. Lọc rót ra ly Martini lạnh.", garnish: "Quả olive hoặc twist vỏ chanh" },
      { id: 29, name: "Vodka Sour", category: "Cocktail", method: "Double Shake", ingredients: ["60ml Vodka", "7-8 dash Angostura bitters", "1.5 quả Chanh", "15ml Đường", "1 Lòng trắng trứng"], instructions: "Shake với lò xo không đá 15s. Thêm đá shake tiếp 10s. Lọc rót ra ly.", garnish: "Giọt bitters tạo hình trên bọt" },
      { id: 30, name: "Whiskey Sour", category: "Cocktail", method: "Double Shake", ingredients: ["60ml Jack Daniel's", "6-8 dash Angostura bitters", "1.5 quả Chanh", "15ml Đường", "1 Lòng trắng trứng"], instructions: "Shake lò xo không đá 15s. Thêm đá shake 10s. Lọc rót ra ly.", garnish: "Vỏ cam hoặc bitters decor" },
      { id: 31, name: "Whiskey Coke", category: "Cocktail", method: "Build", ingredients: ["50ml Whisky", "Top up Coca-Cola (100-120ml)"], instructions: "Cho đá đầy ly Highball, rót 50ml Whiskey, top up Coca-Cola. Khuấy nhẹ 2-3 vòng.", garnish: "Lát chanh vàng/xanh" },
      { id: 32, name: "Rum Coke (Cuba Libre)", category: "Cocktail", method: "Build", ingredients: ["50ml Dark/Light Rum", "15ml Nước chanh tươi", "Top up Coca-Cola"], instructions: "Cho đá đầy ly, vắt chanh thả vỏ vào, rót Rum và top up Coca-Cola.", garnish: "Lát chanh tươi" },
      { id: 33, name: "Jäger Bomb", category: "Cocktail", method: "Drop Shot", ingredients: ["40ml Jägermeister (ướp lạnh)", "1/2 lon Red Bull"], instructions: "Rót Red Bull vào nửa ly cao. Rót Jäger vào ly shot riêng. Thả ly shot vào ly Red Bull.", garnish: "Không" },
      { id: 34, name: "Gin & Tonic", category: "Cocktail", method: "Build", ingredients: ["50ml Gin", "Top up Nước Tonic", "1-2 miếng Chanh"], instructions: "Cho đá đầy ly, rót Gin, vắt nhẹ chanh. Rót Tonic nghiêng thành ly, khuấy nhẹ 1 lần.", garnish: "Lát chanh tươi / Hương thảo" },
      { id: 35, name: "Vodka Redbull", category: "Cocktail", method: "Build", ingredients: ["50ml Vodka", "Top up Red Bull", "10ml Nước chanh (tùy chọn)"], instructions: "Cho đá đầy ly, rót Vodka, top up Red Bull. Khuấy nhẹ.", garnish: "Lát chanh tươi" },
      { id: 36, name: "Cốm Hà Nội", category: "Mocktail", method: "Shake", ingredients: ["75ml Nước dứa", "30ml Siro cốm/pandan", "25ml Sữa tươi không đường", "25ml Cốt dừa"], instructions: "Shake tất cả nguyên liệu với đá viên. Rót ra ly.", garnish: "Hạt cốm tươi / lá dứa" },
      { id: 37, name: "Mango Shake Mule", category: "Mocktail", method: "Build / Top up", ingredients: ["40ml Sinh tố xoài", "15ml Siro xoài", "1 quả Chanh", "Top up Soda"], instructions: "Lăn miệng cốc qua muối ớt. Cho sinh tố xoài, siro, chanh vào cốc đầy đá, top up soda.", garnish: "Viền muối ớt, lát xoài" },
      { id: 38, name: "Frozen Citrus", category: "Mocktail", method: "Blend (Xay)", ingredients: ["20ml Chanh xanh", "20ml Chanh vàng", "20ml Mật ong", "10ml Đường", "2 miếng Vỏ chanh"], instructions: "Cho tất cả nguyên liệu cùng đá vào máy xay nhuyễn.", garnish: "Vỏ chanh bào" },
      { id: 39, name: "Pine Berryll", category: "Mocktail", method: "Layer", ingredients: ["30ml Siro dâu", "5ml Sốt dâu", "100ml Nước dứa", "Top up Soda"], instructions: "Rót siro và sốt dâu dưới đáy ly phân tầng. Shake nước dứa với đá rồi rót nhẹ lên, top up soda.", garnish: "Quả dâu tây" },
      { id: 40, name: "Sun Kisses", category: "Mocktail", method: "Stir / Top up", ingredients: ["1 quả Cam vắt", "2 bông Đường", "20ml Siro vỏ cam", "Top up Soda hoặc Sprite"], instructions: "Khuấy cam vắt với đường và siro vỏ cam. Cho đá vào ly và top up soda/sprite.", garnish: "Lát cam tươi" },
      { id: 41, name: "Watermelon Spritz", category: "Mocktail", method: "Shake & Top up", ingredients: ["100ml Nước dưa hấu", "30ml Siro cam", "Top up Soda"], instructions: "Shake nước dưa hấu và siro cam với đá. Rót ra ly, top up soda.", garnish: "Tam giác dưa hấu" },
      { id: 42, name: "Blue Lagoon", category: "Mocktail", method: "Shake & Top up", ingredients: ["75ml Nước dứa", "20ml Siro vỏ cam (Blue Curaçao)", "1/2 quả Chanh tươi"], instructions: "Shake với đá trong 20s. Rót ra cốc lọc đá, thêm đá mới và top up 7Up hoặc Soda.", garnish: "Lát chanh xanh" },
      { id: 43, name: "Jack Frost", category: "Mocktail", method: "Blend & Topping", ingredients: ["50ml Nước dứa", "50ml Nước cam (hoặc 25ml siro cam)", "25ml Cốt dừa", "20ml Siro vỏ cam", "Kem muối - dừa (20ml Rich + 10ml cốt dừa + 5ml đường đánh bông)"], instructions: "Xay nhuyễn các nguyên liệu với đá. Rót ra ly và phủ lớp kem dừa đánh bông lên trên.", garnish: "Lớp kem dừa & dừa sấy" },
      { id: 44, name: "Monkey Brain", category: "Shots", method: "Layer (Phân tầng)", ingredients: ["5ml Nước chanh", "35ml Smirnoff Vodka", "10ml Baileys", "Siro dâu", "Siro vỏ cam"], instructions: "Rót chanh và Vodka vào ly shot. Rót từ từ Baileys vào để kết tủa thành hình não. Nhỏ thêm siro dâu/cam.", garnish: "Tạo hình vệt máu" },
      { id: 45, name: "B52", category: "Shots", method: "Layer (Phân tầng)", ingredients: ["1/3 ly Kahlua (Cà phê)", "1/3 ly Baileys (Kem sữa)", "1/3 ly Cointreau (Cam)"], instructions: "Rót lần lượt theo thứ tự Kahlua ở đáy, Baileys tầng giữa và Cointreau tầng trên cùng bằng thìa đảo.", garnish: "Đốt lửa tầng trên" },
      { id: 46, name: "Beer Local Hanoi", category: "Shots", method: "Build", ingredients: ["3-4 quả Quất + 1/2 Chanh", "20ml Mật ong", "1 lon Bia Hà Nội / Trúc Bạch"], instructions: "Lăn miệng cốc qua muối ớt. Dầm quất, chanh với mật ong. Cho đá, nhét thêm lát chanh và úp ngược lon bia.", garnish: "Viền muối ớt, lát quất" },
      { id: 47, name: "Beer Green Mountain", category: "Shots", method: "Build", ingredients: ["30ml Siro táo xanh", "1/2 quả Chanh", "Bia Trúc Bạch"], instructions: "Cho siro táo xanh và cốt chanh vào cốc đá, khuấy nhẹ. Thả vài lát táo mỏng và lá bạc hà, úp lon bia Trúc Bạch.", garnish: "Lát táo mỏng, lá bạc hà" },
      { id: 48, name: "Beer YellowRed", category: "Shots", method: "Build", ingredients: ["25ml Sinh tố dâu", "10ml Siro dâu", "Bia Corona"], instructions: "Cho sinh tố dâu và siro dâu vào cốc. Thêm đá, lát chanh vàng/cam vàng và úp chai Corona.", garnish: "Lát cam/chanh vàng" },
      { id: 49, name: "Beer Oceania", category: "Shots", method: "Build", ingredients: ["20ml Siro vỏ cam (Blue)", "1 quả Chanh", "40ml Tequila", "Bia Strongbow"], instructions: "Lăn cốc qua muối trắng. Cho siro vỏ cam, chanh và Tequila vào cốc đầy đá. Úp ngược lon Strongbow.", garnish: "Viền muối trắng, lát chanh" }
    ];

    let currentCategory = 'All';
    let favorites = JSON.parse(localStorage.getItem('train1881_favs') || '[]');
    let currentSelectedRecipe = null;

    function renderRecipes() {
      const grid = document.getElementById('recipe-grid');
      const search = document.getElementById('search-input').value.toLowerCase().trim();
      const noResults = document.getElementById('no-results');
      grid.innerHTML = '';

      const filtered = recipes.filter(r => {
        const matchCat = currentCategory === 'All' ? true :
                         currentCategory === 'Favorite' ? favorites.includes(r.id) :
                         r.category.includes(currentCategory);
        const matchSearch = r.name.toLowerCase().includes(search) ||
                            r.ingredients.some(i => i.toLowerCase().includes(search)) ||
                            r.method.toLowerCase().includes(search);
        return matchCat && matchSearch;
      });

      document.getElementById('recipe-count').innerText = `${filtered.length} món`;

      if (filtered.length === 0) {
        noResults.classList.remove('hidden');
        return;
      } else {
        noResults.classList.add('hidden');
      }

      filtered.forEach(r => {
        const isFav = favorites.includes(r.id);
        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl p-4 flex flex-col justify-between cursor-pointer hover:border-train-red/50 transition-all active:scale-[0.98]';
        card.onclick = () => openSheet(r.id);

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-train-red/20 text-train-red border border-train-red/30">${r.category}</span>
              <button onclick="event.stopPropagation(); toggleFavorite(${r.id})" class="text-train-cream/30 hover:text-train-gold ${isFav ? 'text-train-gold' : ''}">
                <svg class="w-5 h-5" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
              </button>
            </div>
            <h3 class="font-serif font-bold text-lg text-train-cream leading-snug mb-1">${r.name}</h3>
            <p class="text-xs text-train-gold font-medium mb-3">${r.method}</p>
          </div>
          <div class="text-[11px] text-train-cream/60 line-clamp-2 border-t border-train-border/40 pt-2">
            ${r.ingredients.join(' • ')}
          </div>
        `;
        grid.appendChild(card);
      });
    }

    function filterCategory(cat) {
      currentCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.classList.remove('active-tab');
        btn.classList.add('bg-train-card', 'text-train-cream/70');
      });
      event.target.classList.add('active-tab');
      renderRecipes();
    }

    function toggleFavorite(id) {
      if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
      } else {
        favorites.push(id);
      }
      localStorage.setItem('train1881_favs', JSON.stringify(favorites));
      renderRecipes();
      if (currentSelectedRecipe && currentSelectedRecipe.id === id) {
        updateSheetFavButton();
      }
    }

    function openSheet(id) {
      const r = recipes.find(item => item.id === id);
      if (!r) return;
      currentSelectedRecipe = r;

      document.getElementById('sheet-category').innerText = r.category;
      document.getElementById('sheet-title').innerText = r.name;
      document.getElementById('sheet-method').innerText = r.method;
      
      const ingBox = document.getElementById('sheet-ingredients');
      ingBox.innerHTML = '';
      r.ingredients.forEach(i => {
        const div = document.createElement('div');
        div.className = 'text-xs text-train-cream/90 bg-train-card px-3 py-2 rounded-lg border border-train-border/50 flex items-center justify-between';
        div.innerHTML = `<span>${i}</span>`;
        ingBox.appendChild(div);
      });

      document.getElementById('sheet-instructions').innerText = r.instructions;
      
      if (r.garnish) {
        document.getElementById('sheet-garnish-box').classList.remove('hidden');
        document.getElementById('sheet-garnish').innerText = r.garnish;
      } else {
        document.getElementById('sheet-garnish-box').classList.add('hidden');
      }

      updateSheetFavButton();

      document.getElementById('sheet-overlay').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('sheet-overlay').classList.remove('opacity-0');
        document.getElementById('recipe-sheet').classList.remove('sheet-closed');
        document.getElementById('recipe-sheet').classList.add('sheet-open');
      }, 10);
    }

    function closeSheet() {
      document.getElementById('recipe-sheet').classList.remove('sheet-open');
      document.getElementById('recipe-sheet').classList.add('sheet-closed');
      document.getElementById('sheet-overlay').classList.add('opacity-0');
      setTimeout(() => {
        document.getElementById('sheet-overlay').classList.add('hidden');
      }, 300);
    }

    function updateSheetFavButton() {
      const isFav = favorites.includes(currentSelectedRecipe.id);
      const btn = document.getElementById('sheet-fav-btn');
      const icon = document.getElementById('sheet-fav-icon');
      if (isFav) {
        btn.classList.add('text-train-gold', 'border-train-gold/40');
        icon.setAttribute('fill', 'currentColor');
      } else {
        btn.classList.remove('text-train-gold', 'border-train-gold/40');
        icon.setAttribute('fill', 'none');
      }
    }

    function toggleCurrentFavorite() {
      if (currentSelectedRecipe) {
        toggleFavorite(currentSelectedRecipe.id);
      }
    }

    // Search Input Listener
    document.getElementById('search-input').addEventListener('input', (e) => {
      const clearBtn = document.getElementById('clear-search');
      if (e.target.value) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
      renderRecipes();
    });

    document.getElementById('clear-search').addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      document.getElementById('clear-search').classList.add('hidden');
      renderRecipes();
    });

    // Initial Render
    renderRecipes();
  </script>
</body>
</html>
