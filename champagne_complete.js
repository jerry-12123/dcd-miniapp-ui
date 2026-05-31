const products = {
  essence: {
    title: "植物臻萃精华液",
    tag: "德承道甄选",
    subtitle: "植物臻萃 · 经络养护 · 调理后巩固",
    price: 268,
    sold: 1286,
    image: "./assets/silk_bg.jpg",
    point: "源于东方食养与经络养护理念，适合日常护理。"
  },
  patch: {
    title: "穴位压力刺激贴",
    tag: "高频复购",
    subtitle: "精准贴敷 · 高频痛点 · 家庭常备",
    price: 89,
    sold: 2310,
    image: "./assets/case_shoulder.jpg",
    point: "适合颈肩腰腿、局部酸胀等高频场景，便于日常贴敷护理。"
  },
  food: {
    title: "食养调理方案",
    tag: "线下同款",
    subtitle: "谷豆菜搭配 · 日常食养 · 家庭调理",
    price: 199,
    sold: 742,
    image: "./assets/garden.jpg",
    point: "融合东方食养智慧与现代营养习惯，适合家庭日常执行。"
  }
};

const state = {
  page: "home",
  previousPage: "home",
  currentProduct: "essence",
  cart: {
    essence: 1
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
  updateCartBadge();
  renderCart();
  renderIcons();
});
