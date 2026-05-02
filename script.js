const menus = [
  {
    name: "豚の生姜焼き定食",
    main: "豚の生姜焼き",
    side: "味噌汁",
    extra: "キャベツ千切り",
    tags: ["簡単", "肉", "子供向け"],
    ingredients: ["豚肉", "玉ねぎ", "キャベツ", "味噌"],
    reason: "短時間で作れて、ご飯に合うため"
  },
  {
    name: "鮭の塩焼き和定食",
    main: "鮭の塩焼き",
    side: "小松菜のおひたし",
    extra: "豆腐の味噌汁",
    tags: ["簡単", "魚", "野菜"],
    ingredients: ["鮭", "小松菜", "豆腐", "味噌"],
    reason: "焼くだけの主菜に野菜の副菜を合わせられるため"
  },
  {
    name: "鶏そぼろ丼セット",
    main: "鶏そぼろ丼",
    side: "きゅうりの浅漬け",
    extra: "卵スープ",
    tags: ["簡単", "肉", "子供向け"],
    ingredients: ["鶏ひき肉", "卵", "きゅうり", "ご飯"],
    reason: "甘辛味で子供も食べやすく、丼で手早く出せるため"
  },
  {
    name: "野菜たっぷりカレー",
    main: "野菜カレー",
    side: "コールスロー",
    extra: "ゆで卵",
    tags: ["野菜", "子供向け", "余り物活用"],
    ingredients: ["じゃがいも", "にんじん", "玉ねぎ", "カレールー", "卵"],
    reason: "余った野菜をまとめて使えて、家族で食べやすいため"
  },
  {
    name: "さば味噌煮献立",
    main: "さばの味噌煮",
    side: "ほうれん草のおひたし",
    extra: "大根の浅漬け",
    tags: ["魚", "野菜"],
    ingredients: ["さば", "味噌", "ほうれん草", "大根"],
    reason: "魚をしっかり食べられ、和食で落ち着く献立になるため"
  },
  {
    name: "鶏むね肉の照り焼き",
    main: "鶏むね肉の照り焼き",
    side: "ブロッコリーサラダ",
    extra: "わかめスープ",
    tags: ["簡単", "肉", "子供向け"],
    ingredients: ["鶏むね肉", "ブロッコリー", "わかめ", "ごま"],
    reason: "甘辛い味付けで食べやすく、主菜を手早く作れるため"
  },
  {
    name: "肉じゃが定食",
    main: "肉じゃが",
    side: "冷ややっこ",
    extra: "白菜の味噌汁",
    tags: ["肉", "野菜", "余り物活用"],
    ingredients: ["牛肉", "じゃがいも", "にんじん", "玉ねぎ", "豆腐", "白菜"],
    reason: "根菜をまとめて使えて、作り置きにも向いているため"
  },
  {
    name: "あじフライ献立",
    main: "あじフライ",
    side: "ポテトサラダ",
    extra: "ミニトマト",
    tags: ["魚", "子供向け"],
    ingredients: ["あじ", "パン粉", "じゃがいも", "きゅうり", "ミニトマト"],
    reason: "魚でも食べごたえがあり、子供にも出しやすいため"
  },
  {
    name: "豆腐ハンバーグセット",
    main: "豆腐ハンバーグ",
    side: "にんじんしりしり",
    extra: "味噌汁",
    tags: ["肉", "野菜", "子供向け"],
    ingredients: ["豆腐", "鶏ひき肉", "にんじん", "卵", "味噌"],
    reason: "やわらかく食べやすい主菜に野菜を足せるため"
  },
  {
    name: "豚汁と焼き魚",
    main: "焼き魚",
    side: "具だくさん豚汁",
    extra: "納豆",
    tags: ["魚", "肉", "野菜", "余り物活用"],
    ingredients: ["魚", "豚肉", "大根", "にんじん", "ごぼう", "味噌", "納豆"],
    reason: "冷蔵庫の半端な野菜を豚汁に入れて使い切れるため"
  },
  {
    name: "親子丼セット",
    main: "親子丼",
    side: "白菜の浅漬け",
    extra: "味噌汁",
    tags: ["簡単", "肉", "子供向け"],
    ingredients: ["鶏肉", "卵", "玉ねぎ", "白菜", "味噌"],
    reason: "少ない材料で満足感があり、調理時間も短いため"
  },
  {
    name: "野菜炒め定食",
    main: "豚肉と野菜炒め",
    side: "中華スープ",
    extra: "冷ややっこ",
    tags: ["簡単", "肉", "野菜", "余り物活用"],
    ingredients: ["豚肉", "キャベツ", "もやし", "にんじん", "豆腐"],
    reason: "余った野菜をまとめて使え、すぐ作れるため"
  },
  {
    name: "ぶりの照り焼き献立",
    main: "ぶりの照り焼き",
    side: "かぼちゃの煮物",
    extra: "味噌汁",
    tags: ["魚", "野菜"],
    ingredients: ["ぶり", "かぼちゃ", "ねぎ", "味噌"],
    reason: "甘辛い魚料理で食べやすく、野菜の副菜とも合うため"
  },
  {
    name: "オムライスプレート",
    main: "オムライス",
    side: "レタスサラダ",
    extra: "コーンスープ",
    tags: ["簡単", "子供向け", "余り物活用"],
    ingredients: ["卵", "ご飯", "鶏肉", "玉ねぎ", "レタス", "コーン"],
    reason: "余りご飯を使えて、子供が喜びやすい献立のため"
  },
  {
    name: "麻婆豆腐定食",
    main: "麻婆豆腐",
    side: "もやしナムル",
    extra: "卵スープ",
    tags: ["簡単", "肉"],
    ingredients: ["豆腐", "豚ひき肉", "ねぎ", "もやし", "卵"],
    reason: "豆腐とひき肉で手早く作れて、ご飯が進むため"
  },
  {
    name: "鶏団子鍋",
    main: "鶏団子鍋",
    side: "しめのうどん",
    extra: "大根サラダ",
    tags: ["肉", "野菜", "子供向け", "余り物活用"],
    ingredients: ["鶏ひき肉", "白菜", "ねぎ", "きのこ", "うどん", "大根"],
    reason: "野菜をたくさん入れられ、家族で取り分けやすいため"
  },
  {
    name: "白身魚のムニエル",
    main: "白身魚のムニエル",
    side: "ほうれん草ソテー",
    extra: "コンソメスープ",
    tags: ["魚", "簡単", "子供向け"],
    ingredients: ["白身魚", "ほうれん草", "バター", "じゃがいも", "玉ねぎ"],
    reason: "魚のくせが少なく、洋風で食べやすいため"
  },
  {
    name: "豚キムチ定食",
    main: "豚キムチ",
    side: "きゅうりのごま和え",
    extra: "わかめスープ",
    tags: ["簡単", "肉", "余り物活用"],
    ingredients: ["豚肉", "キムチ", "もやし", "きゅうり", "わかめ"],
    reason: "少ない材料で味が決まり、余った野菜も足しやすいため"
  },
  {
    name: "チキン南蛮献立",
    main: "チキン南蛮",
    side: "千切りキャベツ",
    extra: "トマト",
    tags: ["肉", "子供向け"],
    ingredients: ["鶏肉", "卵", "キャベツ", "トマト", "マヨネーズ"],
    reason: "甘酢とタルタルで満足感があり、特別感も出るため"
  },
  {
    name: "野菜たっぷり焼きうどん",
    main: "焼きうどん",
    side: "豆腐サラダ",
    extra: "味噌汁",
    tags: ["簡単", "野菜", "余り物活用"],
    ingredients: ["うどん", "豚肉", "キャベツ", "にんじん", "玉ねぎ", "豆腐", "味噌"],
    reason: "半端な野菜を使いやすく、一皿で満足できるため"
  },
  {
    name: "ソース焼きそば献立",
    main: "ソース焼きそば",
    side: "わかめスープ",
    extra: "目玉焼き",
    tags: ["簡単", "肉", "野菜", "子供向け", "余り物活用"],
    ingredients: ["焼きそば", "豚肉", "キャベツ", "にんじん", "もやし", "ソース", "卵", "わかめ"],
    reason: "冷蔵庫に残りやすい野菜と豚肉を使えて、目玉焼きとスープを足すことで夕飯として出しやすいため"
  },
  {
    name: "塩焼きそば",
    main: "塩焼きそば",
    side: "卵スープ",
    extra: "きゅうりの浅漬け",
    tags: ["簡単", "肉", "野菜", "余り物活用"],
    ingredients: ["焼きそば", "豚肉", "キャベツ", "もやし", "ねぎ", "卵"],
    reason: "あっさり味で野菜をたくさん入れやすく、手早く作れるため"
  },
  {
    name: "オム焼きそば",
    main: "オム焼きそば",
    side: "トマトサラダ",
    extra: "コンソメスープ",
    tags: ["簡単", "肉", "子供向け", "余り物活用"],
    ingredients: ["焼きそば", "豚肉", "卵", "キャベツ", "玉ねぎ", "トマト", "コンソメ"],
    reason: "焼きそばを卵で包むことで食べごたえが出て、子供にも出しやすいため"
  }
];

const suggestButton = document.getElementById("suggestButton");
const anotherButton = document.getElementById("anotherButton");
const resetConditionButton = document.getElementById("resetConditionButton");
const resetAllButton = document.getElementById("resetAllButton");
const searchButton = document.getElementById("searchButton");
const resetFridgeButton = document.getElementById("resetFridgeButton");
const fridgeInput = document.getElementById("fridgeInput");
const resultArea = document.getElementById("resultArea");
const shoppingList = document.getElementById("shoppingList");
const shoppingListSection = document.getElementById("shoppingListSection");
const ingredientButtons = document.querySelectorAll(".ingredient-button");
const selectedIngredientsText = document.getElementById("selectedIngredientsText");

let currentMatches = [];
let currentMenuIndex = -1;
let currentMenu = null;
let selectedIngredients = [];
let currentResultSource = null;

suggestButton.addEventListener("click", suggestMenu);
anotherButton.addEventListener("click", showAnotherMenu);
resetConditionButton.addEventListener("click", resetConditions);
resetAllButton.addEventListener("click", resetAll);
searchButton.addEventListener("click", searchByIngredients);
resetFridgeButton.addEventListener("click", resetFridgeSearch);
ingredientButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    toggleIngredient(button);
  });
});

function getSelectedTags() {
  return Array.from(document.querySelectorAll("#tagOptions input:checked"))
    .map((checkbox) => checkbox.value);
}

function resetConditions() {
  document.querySelectorAll("#tagOptions input:checked").forEach((checkbox) => {
    checkbox.checked = false;
  });

  if (currentResultSource === "suggest") {
    clearResultArea();
    anotherButton.classList.add("hidden");
    currentResultSource = null;
  }

  currentMatches = [];
  currentMenuIndex = -1;
  currentMenu = null;
  clearShoppingList();
}

function suggestMenu() {
  const selectedTags = getSelectedTags();
  currentMatches = menus.filter((menu) =>
    selectedTags.every((tag) => menu.tags.includes(tag))
  );

  if (currentMatches.length === 0) {
    resultArea.innerHTML = '<p class="empty-message">条件に合う献立がありません</p>';
    anotherButton.classList.add("hidden");
    currentMenu = null;
    clearShoppingList();
    return;
  }

  currentMenuIndex = getRandomIndex(currentMatches.length);
  currentMenu = currentMatches[currentMenuIndex];
  currentResultSource = "suggest";
  renderSuggestedMenu(currentMenu);
  anotherButton.classList.toggle("hidden", currentMatches.length <= 1);
}

function showAnotherMenu() {
  if (currentMatches.length === 0) {
    return;
  }

  if (currentMatches.length === 1) {
    currentMenuIndex = 0;
  } else {
    let nextIndex = getRandomIndex(currentMatches.length);
    while (nextIndex === currentMenuIndex) {
      nextIndex = getRandomIndex(currentMatches.length);
    }
    currentMenuIndex = nextIndex;
  }

  currentMenu = currentMatches[currentMenuIndex];
  currentResultSource = "suggest";
  renderSuggestedMenu(currentMenu);
}

function searchByIngredients() {
  const fridgeItems = getSearchIngredients();

  if (fridgeItems.length === 0) {
    resultArea.innerHTML = '<p class="empty-message">食材を入力してください。</p>';
    anotherButton.classList.add("hidden");
    currentMenu = null;
    currentResultSource = "search";
    clearShoppingList();
    return;
  }

  const results = menus
    .map((menu) => {
      const matched = menu.ingredients.filter((ingredient) =>
        hasIngredient(fridgeItems, ingredient)
      );
      const missing = menu.ingredients.filter((ingredient) =>
        !hasIngredient(fridgeItems, ingredient)
      );

      return {
        menu,
        matched,
        missing,
        missingIngredients: missing
      };
    })
    .filter((result) => result.matched.length > 0)
    .sort((a, b) => b.matched.length - a.matched.length);

  anotherButton.classList.add("hidden");

  if (results.length === 0) {
    resultArea.innerHTML = '<p class="empty-message">条件に合う献立がありません</p>';
    currentMenu = null;
    currentResultSource = "search";
    clearShoppingList();
    return;
  }

  currentMenu = null;
  currentResultSource = "search";
  renderSearchResults(results);
}

function toggleIngredient(button) {
  const ingredient = button.dataset.ingredient;

  if (selectedIngredients.includes(ingredient)) {
    selectedIngredients = selectedIngredients.filter((item) => item !== ingredient);
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  } else {
    selectedIngredients.push(ingredient);
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
  }

  updateSelectedIngredientsText();
}

function updateSelectedIngredientsText() {
  selectedIngredientsText.textContent = selectedIngredients.length
    ? `選択中：${selectedIngredients.join("、")}`
    : "選択中：なし";
}

function resetFridgeSearch() {
  selectedIngredients = [];
  fridgeInput.value = "";

  ingredientButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  updateSelectedIngredientsText();

  if (currentResultSource === "search") {
    resultArea.innerHTML = '<p class="empty-message">条件を選ぶか、冷蔵庫の食材を入力してください。</p>';
    anotherButton.classList.add("hidden");
    currentMenu = null;
    currentResultSource = null;
  }

  clearShoppingList();
}

function resetAll() {
  document.querySelectorAll("#tagOptions input:checked").forEach((checkbox) => {
    checkbox.checked = false;
  });

  selectedIngredients = [];
  fridgeInput.value = "";

  ingredientButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  updateSelectedIngredientsText();
  currentMatches = [];
  currentMenuIndex = -1;
  currentMenu = null;
  currentResultSource = null;
  anotherButton.classList.add("hidden");
  clearResultArea();
  clearShoppingList();
}

function getSearchIngredients() {
  const typedIngredients = parseIngredients(fridgeInput.value);
  const allIngredients = [...selectedIngredients, ...typedIngredients];
  const uniqueIngredients = [];
  const seenKeys = new Set();

  allIngredients.forEach((ingredient) => {
    const key = normalizeText(ingredient);

    if (!key || seenKeys.has(key)) {
      return;
    }

    seenKeys.add(key);
    uniqueIngredients.push(key);
  });

  return uniqueIngredients;
}

function renderSuggestedMenu(menu) {
  resultArea.innerHTML = `
    <article class="menu-card">
      <h3>${menu.name}</h3>
      <p><strong>主菜：</strong>${menu.main}</p>
      <p><strong>副菜：</strong>${menu.side}</p>
      <p><strong>もう一品：</strong>${menu.extra}</p>
      <p class="meta"><strong>理由：</strong>${menu.reason}</p>
      <div class="pill-row" aria-label="必要な食材">
        ${menu.ingredients.map((ingredient) => `<span class="pill">${ingredient}</span>`).join("")}
      </div>
      <button class="choose-button" type="button" id="chooseSuggested">これにする</button>
    </article>
  `;

  document.getElementById("chooseSuggested").addEventListener("click", () => {
    showShoppingList(currentMenu, currentMenu.ingredients);
  });
}

function renderSearchResults(results) {
  resultArea.innerHTML = "";

  results.forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";

    const title = document.createElement("h3");
    title.textContent = item.menu.name;
    card.appendChild(title);

    const main = document.createElement("p");
    main.innerHTML = `<strong>主菜：</strong>${item.menu.main}`;
    card.appendChild(main);

    const side = document.createElement("p");
    side.innerHTML = `<strong>副菜：</strong>${item.menu.side}`;
    card.appendChild(side);

    const extra = document.createElement("p");
    extra.innerHTML = `<strong>もう一品：</strong>${item.menu.extra}`;
    card.appendChild(extra);

    const matchedLabel = document.createElement("p");
    matchedLabel.className = "meta";
    matchedLabel.innerHTML = "<strong>一致した食材</strong>";
    card.appendChild(matchedLabel);

    const matchedRow = document.createElement("div");
    matchedRow.className = "pill-row";
    appendPills(matchedRow, item.matched, "pill", "なし");
    card.appendChild(matchedRow);

    const missingLabel = document.createElement("p");
    missingLabel.className = "meta";
    missingLabel.innerHTML = "<strong>足りない食材</strong>";
    card.appendChild(missingLabel);

    const missingRow = document.createElement("div");
    missingRow.className = "pill-row";
    appendPills(missingRow, item.missingIngredients, "pill missing", "追加の買い物なし");
    card.appendChild(missingRow);

    const decideButton = document.createElement("button");
    decideButton.className = "choose-button";
    decideButton.type = "button";
    decideButton.textContent = "これにする";
    decideButton.addEventListener("click", () => {
      showShoppingList(item.menu, item.missingIngredients);
    });
    card.appendChild(decideButton);

    resultArea.appendChild(card);
  });
}

function appendPills(container, items, className, emptyText) {
  if (items.length === 0) {
    const empty = document.createElement("span");
    empty.className = className;
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const pill = document.createElement("span");
    pill.className = className;
    pill.textContent = item;
    container.appendChild(pill);
  });
}

function showShoppingList(menu, items) {
  const title = `
    <div class="selected-menu-summary">
      <p class="shopping-menu-name">${menu.name} に必要なもの</p>
      <p><strong>選んだ献立：</strong></p>
      <p><strong>主菜：</strong>${menu.main}</p>
      <p><strong>副菜：</strong>${menu.side}</p>
      <p><strong>もう一品：</strong>${menu.extra}</p>
    </div>
  `;

  if (items.length === 0) {
    shoppingList.innerHTML = `${title}<p class="empty-message">追加で買うものはありません</p>`;
    scrollToShoppingList();
    return;
  }

  const uniqueItems = Array.from(new Set(items));
  shoppingList.innerHTML = title + uniqueItems
    .map((item) => `
      <label class="shopping-item">
        <input type="checkbox">
        <span>${item}</span>
      </label>
    `)
    .join("");
  scrollToShoppingList();
}

function clearShoppingList() {
  shoppingList.innerHTML = '<p class="empty-message">献立を選ぶと、必要な食材が表示されます。</p>';
}

function clearResultArea() {
  resultArea.innerHTML = '<p class="empty-message">条件を選ぶか、冷蔵庫の食材を入力してください。</p>';
}

function scrollToShoppingList() {
  shoppingListSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function parseIngredients(value) {
  return value
    .split(/[、,]/)
    .map((item) => normalizeText(item))
    .filter(Boolean);
}

function normalizeText(value) {
  const normalized = value.trim();
  const aliases = {
    たまご: "卵",
    玉子: "卵",
    ごはん: "ご飯",
    米: "ご飯",
    豚こま: "豚肉",
    豚バラ: "豚肉",
    豚: "豚肉",
    とり肉: "鶏肉",
    鳥肉: "鶏肉",
    鶏むね: "鶏肉",
    鶏もも: "鶏肉",
    ミンチ: "ひき肉",
    挽肉: "ひき肉",
    じゃが芋: "じゃがいも",
    人参: "にんじん",
    玉葱: "玉ねぎ",
    長ねぎ: "ねぎ",
    ネギ: "ねぎ",
    しめじ: "きのこ",
    えのき: "きのこ",
    しいたけ: "きのこ",
    鮭: "鮭",
    カレー粉: "カレールー"
  };

  return aliases[normalized] || normalized;
}

function hasIngredient(fridgeItems, ingredient) {
  const ingredientKeys = getIngredientKeys(ingredient);
  return fridgeItems.some((item) => ingredientKeys.has(item));
}

function getIngredientKeys(ingredient) {
  const normalized = normalizeText(ingredient);
  const keys = new Set([normalized]);

  if (normalized.includes("豚")) {
    keys.add("豚肉");
  }

  if (normalized.includes("鶏")) {
    keys.add("鶏肉");
  }

  if (normalized.includes("牛")) {
    keys.add("牛肉");
  }

  if (normalized.includes("ひき肉")) {
    keys.add("ひき肉");
  }

  if (["魚", "鮭", "さば", "あじ", "ぶり", "白身魚"].includes(normalized)) {
    keys.add("魚");
  }

  if (normalized === "ご飯") {
    keys.add("ごはん");
  }

  return keys;
}

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}
