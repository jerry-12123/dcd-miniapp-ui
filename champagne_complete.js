const products = {
  oil: {
    title: "德承道精油",
    tag: "德承道甄选",
    subtitle: "统一零售价 · 经络养护 · 日常调理",
    price: 268,
    sold: 1286,
    image: "./assets/oil_main.png",
    detailImage: "./assets/oil_detail.png",
    point: "精油统一零售售价 268 元，适合日常经络养护与调理后巩固。"
  },
  patch: {
    title: "德承道穴位贴",
    tag: "高频复购",
    subtitle: "统一零售价 · 精准贴敷 · 家庭常备",
    price: 128,
    sold: 2310,
    image: "./assets/patch_main.png",
    detailImage: "./assets/patch_detail.png",
    point: "穴位贴统一零售价 128 元，适合家庭常备和高频复购场景。"
  },
  patchBundle: {
    title: "9800穴位贴套组",
    tag: "大客户套组",
    subtitle: "9800元 · 穴位贴76盒 · 批量囤货",
    price: 9800,
    sold: 168,
    image: "./assets/patch_main.png",
    detailImage: "./assets/patch_detail.png",
    point: "9800穴位贴套组给到 76 盒，适合门店、团队或家庭长期护理配置。"
  },
  comboBundle: {
    title: "9800组合套装",
    tag: "组合套装",
    subtitle: "9800元 · 精油5瓶 + 穴位贴66盒",
    price: 9800,
    sold: 126,
    image: "./assets/commerce_bg.jpg",
    detailImage: "",
    point: "9800组合套装包含精油 5 瓶和穴位贴 66 盒，兼顾护理体验与高频消耗。"
  }
};

const state = {
  page: "home",
  previousPage: "home",
  currentProduct: "oil",
  cart: {
    patch: 1
  }
};

function money(value) {
  return `￥${value}`;
}

function showToast(message) {
  const box = document.querySelector("[data-toast-box]");
  box.textContent = message;
  box.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => box.classList.remove("show"), 1600);
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function bindCarousel() {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
  if (!slides.length) return;

  let index = 0;
  let timer;

  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, current) => slide.classList.toggle("active", current === index));
    dots.forEach((dot, current) => dot.classList.toggle("active", current === index));
  };

  const play = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => show(index + 1), 3600);
  };

  dots.forEach((dot, current) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      show(current);
      play();
    });
  });

  play();
}

function setPage(page) {
  state.previousPage = state.page === page ? state.previousPage : state.page;
  state.page = page;
  document.querySelectorAll(".page").forEach((el) => {
    el.classList.toggle("active", el.dataset.page === page);
  });
  document.querySelectorAll("[data-tab]").forEach((el) => {
    el.classList.toggle("active", el.dataset.tab === page);
  });
  if (page === "cart") {
    renderCart();
  }
  document.querySelector(".app").scrollTop = 0;
  renderIcons();
}

function openDetail(id) {
  state.currentProduct = id;
  const product = products[id];
  document.querySelector("[data-detail-image]").src = product.image;
  document.querySelector("[data-detail-image]").alt = product.title;
  document.querySelector("[data-detail-tag]").textContent = product.tag;
  document.querySelector("[data-detail-title]").textContent = product.title;
  document.querySelector("[data-detail-subtitle]").textContent = product.subtitle;
  document.querySelector("[data-detail-price]").textContent = money(product.price);
  document.querySelector("[data-detail-sold]").textContent = product.sold;
  document.querySelector("[data-detail-point1]").textContent = product.point;
  const poster = document.querySelector("[data-detail-poster]");
  const posterWrap = document.querySelector("[data-detail-poster-wrap]");
  if (poster && posterWrap) {
    posterWrap.hidden = !product.detailImage;
    if (product.detailImage) {
      poster.src = product.detailImage;
      poster.alt = `${product.title}详情页`;
    }
  }
  setPage("detail");
}

function addToCart(id, quantity = 1) {
  state.cart[id] = (state.cart[id] || 0) + quantity;
  updateCartBadge();
  showToast(`${products[id].title} 已加入购物车`);
}

function updateCartBadge() {
  const count = Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
  const tab = document.querySelector(".cart-tab");
  document.querySelector("[data-cart-count]").textContent = count;
  const profileCount = document.querySelector("[data-profile-cart-count]");
  if (profileCount) {
    profileCount.textContent = `${count} 件`;
  }
  tab.classList.toggle("has-items", count > 0);
}

function renderCart() {
  const list = document.querySelector("[data-cart-list]");
  const entries = Object.entries(state.cart).filter(([, qty]) => qty > 0);

  if (!entries.length) {
    list.innerHTML = `
      <div class="empty-cart">
        <div>
          <p>购物车还是空的</p>
          <button data-route="products">去选购</button>
        </div>
      </div>
    `;
  } else {
    list.innerHTML = entries.map(([id, qty]) => {
      const product = products[id];
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.title}">
          <div>
            <b>${product.title}</b>
            <span>${product.subtitle}</span>
            <div class="qty">
              <button data-qty="${id}" data-delta="-1">-</button>
              <span>${qty}</span>
              <button data-qty="${id}" data-delta="1">+</button>
            </div>
          </div>
          <strong>${money(product.price * qty)}</strong>
        </article>
      `;
    }).join("");
  }

  const total = entries.reduce((sum, [id, qty]) => sum + products[id].price * qty, 0);
  document.querySelector("[data-cart-total]").textContent = money(total);
  updateCartBadge();
  renderIcons();
}

function applyFilter(filter) {
  document.querySelectorAll(".tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  document.querySelectorAll(".list-item").forEach((item) => {
    const categories = item.dataset.category || "";
    item.classList.toggle("hidden", filter !== "hot" && !categories.includes(filter));
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const route = event.target.closest("[data-route]");
    if (route) {
      const page = route.dataset.route;
      setPage(page);
      if (page === "products" && route.dataset.filter) {
        applyFilter(route.dataset.filter);
      }
      return;
    }

    const tab = event.target.closest("[data-tab]");
    if (tab) {
      setPage(tab.dataset.tab);
      return;
    }

    const detail = event.target.closest("[data-detail]");
    if (detail && !event.target.closest("[data-add]")) {
      openDetail(detail.dataset.detail);
      return;
    }

    const add = event.target.closest("[data-add]");
    if (add) {
      addToCart(add.dataset.add);
      return;
    }

    const currentAdd = event.target.closest("[data-current-add]");
    if (currentAdd) {
      addToCart(state.currentProduct);
      return;
    }

    const buyNow = event.target.closest("[data-buy-now]");
    if (buyNow) {
      addToCart(state.currentProduct);
      setPage("cart");
      return;
    }

    const back = event.target.closest("[data-back]");
    if (back) {
      setPage(state.previousPage && state.previousPage !== "detail" ? state.previousPage : "products");
      return;
    }

    const filter = event.target.closest(".tabs [data-filter]");
    if (filter) {
      applyFilter(filter.dataset.filter);
      return;
    }

    const qtyButton = event.target.closest("[data-qty]");
    if (qtyButton) {
      const id = qtyButton.dataset.qty;
      const delta = Number(qtyButton.dataset.delta);
      state.cart[id] = Math.max(0, (state.cart[id] || 0) + delta);
      if (state.cart[id] === 0) {
        delete state.cart[id];
      }
      renderCart();
      return;
    }

    const checkout = event.target.closest("[data-checkout]");
    if (checkout) {
      const count = Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
      showToast(count ? "已生成结算订单，请接入支付流程" : "请先选择商品");
      return;
    }

    const toast = event.target.closest("[data-toast]");
    if (toast) {
      showToast(toast.dataset.toast);
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  bindCarousel();
  updateCartBadge();
  renderCart();
  renderIcons();
});
