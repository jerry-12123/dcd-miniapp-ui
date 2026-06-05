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

const techDetails = {
  massage: {
    title: "点穴按摩",
    kicker: "经络穴位技术",
    heading: "以穴入手，疏通日常紧张",
    body: "通过经络穴位点按、推揉和局部放松，帮助用户理解身体紧张区域与日常调理路径。适合承接门店体验、技师服务介绍和预约转化。",
    image: "./assets/body_map.jpg",
    video: "./assets/case_video.mp4"
  },
  diet: {
    title: "食疗调理",
    kicker: "体质食养方案",
    heading: "把调理放进一日三餐",
    body: "围绕体质、季节、作息和饮食习惯，提供更容易坚持的食养建议。可与精油、穴位贴和会员服务组合成长期健康管理方案。",
    image: "./assets/wisdom_bg.jpg",
    video: "./assets/case_video.mp4"
  },
  movement: {
    title: "运动调理",
    kicker: "日常动养训练",
    heading: "用轻量动作建立身体秩序",
    body: "通过低门槛动作、姿态训练和呼吸节律，引导用户把调理融入生活场景，适合做成打卡课程、社群陪跑和门店复训内容。",
    image: "./assets/energy_bg.jpg",
    video: "./assets/case_video.mp4"
  }
};

const caseDetails = {
  shoulder: {
    number: "案例一",
    name: "肩周炎",
    title: "一次即可后背",
    description: "顾客原来手臂不能后背，也无法正常抬举，严重影响日常动作。点几个穴位，仅需几分钟，一次便可自如后背，疼痛感完全消失，只剩下一点点牵拉感。做到第四次的时候，牵拉感也完全消失，功能完全恢复正常。",
    highlight: "简单、快速、无创伤，这就是传统经络调理的优势所在。",
    before: "./assets/case_before.png",
    after: "./assets/case_after.png"
  },
  spine: {
    number: "案例二",
    name: "脊柱侧弯",
    title: "高低肩与脊柱弯曲调理记录",
    description: "资料认为，高低肩与脊柱弯曲与脏腑状态和经筋紧张粘连有关。案例展示通过调整脏腑和经筋根结后，身体外观状态出现改善。",
    highlight: "从身体表现出发，结合经络与经筋思路进行调理。",
    galleryTitle: "调理前后对比",
    layout: "compare",
    media: [
      { src: "./assets/cases/spine_1.png", label: "调理前状态" },
      { src: "./assets/cases/spine_2.png", label: "调理后状态" }
    ]
  },
  eczema: {
    number: "案例三",
    name: "湿疹",
    title: "三十年反复溃烂调理记录",
    description: "顾客从年幼时开始出现湿疹溃烂、流黄水和瘙痒，反复多年。PPT 案例记录了通过穴位点按数次后的皮肤状态变化。",
    highlight: "案例强调通过正确方法唤醒身体自我调节能力。",
    galleryTitle: "皮肤状态对比",
    layout: "compare",
    media: [
      { src: "./assets/cases/eczema_1.png", label: "调理前" },
      { src: "./assets/cases/eczema_2.png", label: "调理后" }
    ]
  },
  anal: {
    number: "案例四",
    name: "肛裂与痔疮",
    title: "及早干预的顾客反馈",
    description: "案例资料收录了顾客调理反馈与聊天记录，内容提到通过少量穴位点按进行早期干预，并记录症状变化。",
    highlight: "资料主张尽早关注身体信号，避免问题进一步发展。",
    galleryTitle: "顾客反馈记录",
    layout: "stack",
    media: [
      { src: "./assets/cases/anal_1.png", label: "反馈记录一" },
      { src: "./assets/cases/anal_2.png", label: "反馈记录二" },
      { src: "./assets/cases/anal_3.png", label: "反馈记录三" }
    ]
  },
  gout: {
    number: "案例五",
    name: "高尿酸痛风",
    title: "尿酸600+的调理记录",
    description: "23岁顾客尿酸超过600，并伴随足跟红肿疼痛和行走困难。PPT 记录了穴位点按、穴位贴敷以及多次调理后的反馈与检测变化。",
    highlight: "案例资料记录了10至20次调理过程及顾客反馈。",
    galleryTitle: "顾客调理反馈",
    layout: "stack",
    media: [
      { src: "./assets/cases/gout_1.png", label: "阶段反馈一" },
      { src: "./assets/cases/gout_2.png", label: "阶段反馈二" }
    ]
  },
  prostate: {
    number: "案例六",
    name: "前列腺增大伴钙化囊肿",
    title: "25天检查资料记录",
    description: "资料展示了顾客调理前后的检查报告，方案包含穴位点按、穴位刺激贴及配合日常产品，PPT 中记录周期为25天。",
    highlight: "通过前后检查资料呈现案例过程与变化。",
    galleryTitle: "调理前后检查资料",
    layout: "compare",
    media: [
      { src: "./assets/cases/prostate_1.png", label: "调理前检查" },
      { src: "./assets/cases/prostate_2.png", label: "调理后检查" }
    ]
  },
  breast1: {
    number: "案例七",
    name: "乳腺增生（一）",
    title: "经络疏通与检查资料",
    description: "案例从肝气郁结、气血不畅的传统调理思路出发，展示顾客聊天反馈以及调理前后的检查资料。",
    highlight: "用顾客反馈和检查资料记录调理过程。",
    galleryTitle: "顾客反馈记录",
    layout: "stack",
    media: [
      { src: "./assets/cases/breast1_1.png", label: "调理沟通一" },
      { src: "./assets/cases/breast1_2.png", label: "调理沟通二" },
      { src: "./assets/cases/breast1_3.png", label: "调理反馈" }
    ]
  },
  breast2: {
    number: "案例八",
    name: "乳腺增生（二）",
    title: "多位顾客完整反馈记录",
    description: "PPT 汇总了另一组乳腺增生顾客的调理记录，以多位顾客的文字反馈展示该调理思路的重复应用情况。",
    highlight: "多组顾客资料集中呈现，便于查看完整过程。",
    galleryTitle: "多位顾客反馈",
    layout: "stack",
    media: [
      { src: "./assets/cases/breast2_1.png", label: "顾客反馈一" },
      { src: "./assets/cases/breast2_2.png", label: "顾客反馈二" },
      { src: "./assets/cases/breast2_3.png", label: "顾客反馈三" }
    ]
  },
  fibroadenoma: {
    number: "案例九",
    name: "乳腺纤维瘤",
    title: "检查报告与顾客反馈",
    description: "案例资料通过聊天记录和检查信息展示调理过程，内容围绕疏通相关经络、调理气血与身体状态展开。",
    highlight: "以检查资料和真实反馈作为案例记录依据。",
    galleryTitle: "检查与反馈资料",
    layout: "stack",
    media: [
      { src: "./assets/cases/fibro_1.png", label: "检查与沟通一" },
      { src: "./assets/cases/fibro_2.png", label: "检查与沟通二" },
      { src: "./assets/cases/fibro_3.png", label: "调理反馈" }
    ]
  },
  floaters: {
    number: "案例十",
    name: "飞蚊症（三）",
    title: "顾客文字反馈记录",
    description: "资料记录了一位被告知缺少有效治疗方案的飞蚊症顾客，在经络调理后的主观反馈与日常状态变化。",
    highlight: "真实文字反馈呈现顾客对调理过程的感受。",
    galleryTitle: "顾客反馈记录",
    layout: "stack",
    media: [
      { src: "./assets/cases/floaters_1.png", label: "初次反馈" },
      { src: "./assets/cases/floaters_2.png", label: "后续反馈" }
    ]
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

function openTechDetail(id) {
  const detail = techDetails[id] || techDetails.massage;
  const image = document.querySelector("[data-tech-image]");
  const video = document.querySelector("[data-tech-video]");
  document.querySelector("[data-tech-title]").textContent = detail.title;
  document.querySelector("[data-tech-kicker]").textContent = detail.kicker;
  document.querySelector("[data-tech-heading]").textContent = detail.heading;
  document.querySelector("[data-tech-body]").textContent = detail.body;
  image.src = detail.image;
  image.alt = `${detail.title}图文`;
  video.poster = detail.image;
  video.src = detail.video;
  video.load();
  setPage("techDetail");
}

function openCaseDetail(id) {
  const detail = caseDetails[id] || caseDetails.shoulder;
  const compare = document.querySelector("[data-case-compare]");
  const evidence = document.querySelector("[data-case-evidence]");
  document.querySelector("[data-case-page-title]").textContent = detail.number;
  document.querySelector("[data-case-label]").textContent = `${detail.number}：${detail.name}`;
  document.querySelector("[data-case-title]").textContent = detail.title;
  document.querySelector("[data-case-description]").textContent = detail.description;
  document.querySelector("[data-case-highlight]").textContent = detail.highlight;

  const hasComparison = Boolean(detail.before && detail.after);
  compare.hidden = !hasComparison;
  evidence.hidden = hasComparison;
  if (hasComparison) {
    document.querySelector("[data-case-before]").src = detail.before;
    document.querySelector("[data-case-before]").alt = `${detail.name}调理前`;
    document.querySelector("[data-case-after]").src = detail.after;
    document.querySelector("[data-case-after]").alt = `${detail.name}调理后`;
  } else {
    const gallery = document.querySelector("[data-case-gallery]");
    document.querySelector("[data-case-gallery-title]").textContent = detail.galleryTitle || "调理资料";
    gallery.className = `case-media-gallery ${detail.layout || "stack"}`;
    gallery.innerHTML = (detail.media || []).map((item) => `
      <figure>
        <figcaption>${item.label || detail.name}</figcaption>
        <img src="${item.src}" alt="${detail.name}${item.label || "案例资料"}">
      </figure>
    `).join("");
  }
  setPage("caseDetail");
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

    const techDetail = event.target.closest("[data-tech-detail]");
    if (techDetail) {
      openTechDetail(techDetail.dataset.techDetail);
      return;
    }

    const caseDetail = event.target.closest("[data-case-detail]");
    if (caseDetail) {
      openCaseDetail(caseDetail.dataset.caseDetail);
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
