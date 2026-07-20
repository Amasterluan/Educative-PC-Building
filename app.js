/* =============================================
   app.js — lógica do simulador de montagem de PC
   Depende de: data.js (array `components`)
   ============================================= */

/* índice rápido: id -> objeto componente */
const idMap = {};
components.forEach(c => (idMap[c.id] = c));

/* estado atual: slotType -> componentId instalado */
const installed = {};

/* =============================================
   SIDEBAR — constrói os cards de peça
   ============================================= */
// function buildSidebar() {
//   const list = document.getElementById("parts-list");
//   list.innerHTML = "";

//   const componentesOrganizados = components.sort((a, b) => {
//     // Se 'a' for placa-mãe e 'b' não for, 'a' sobe (retorna -1)
//       if (a.slot === slots.PLACAMAE && b.slot !== slots.PLACAMAE) return -1;
//     // Se 'b' for placa-mãe e 'a' não for, 'b' sobe (retorna 1)
//     if (b.slot === slots.PLACAMAE && a.slot !== slots.PLACAMAE) return 1;
//     return a.slot.localeCompare(b.slot);
//   }); 

//   console.log(componentesOrganizados);

//   componentesOrganizados.forEach(c => {
//     const card = document.createElement("div");
//     card.className = "part-card" + (c.slot != slots.PLACAMAE && !motherboardInstalled() ? " installed" : "");
//     card.dataset.id = c.id;
//     card.innerHTML = `
//       <img src="${c.img}" alt="${c.nome}">
//       <div>
//         <div class="pname">${c.nome}</div>
//         <div class="ptype">${c.slot}</div>
//       </div>
//     `;

//     if (!isInstalled(c.id)) {
//       card.addEventListener("mousedown", e => startDrag(e, c.id));
//       card.addEventListener("mouseenter", () => showInfo(c.id));
//       card.addEventListener("mouseleave", hideInfo);
//     }

//     list.appendChild(card);
//   });
// }


function buildSidebar() {
  const list = document.getElementById("parts-list");
  list.innerHTML = "";

  // 1. Agrupamos os componentes pelo slot deles
  const componentesAgrupados = Object.groupBy(components, (c) => c.slot);

  // 2. Definimos a ordem exata das seções (Placa-Mãe sempre primeiro)
  const ordemDasCategorias = [
    slots.PLACAMAE,
    slots.CPU,
    slots.RAM,
    slots.HDSSD,
    slots.GPU,
    slots.FONTE
  ];

  const temPlacaMaeInstalada = motherboardInstalled();

  // 3. Iteramos sobre as categorias na ordem que definimos
  ordemDasCategorias.forEach((slotNome) => {
    const itensDaCategoria = componentesAgrupados[slotNome];

    // Se não houver nenhuma peça cadastrada desse slot no array, pula para a próxima
    if (!itensDaCategoria || itensDaCategoria.length === 0) return;

    // 4. Criamos um contêiner visual para a categoria (div ou section)
    const categorySection = document.createElement("div");
    categorySection.className = "category-section";

    // Criamos o título da categoria (ex: "Placa-Mãe", "Processador")
    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "category-title";
    categoryTitle.textContent = slotNome;
    categorySection.appendChild(categoryTitle);

    // 5. Renderizamos as peças específicas desta categoria
    itensDaCategoria.forEach(c => {
      const card = document.createElement("div");
      
      // Mantive a sua lógica de bloqueio: se não for placa-mãe e não tiver placa instalada, bloqueia
      const estaBloqueado = c.slot !== slots.PLACAMAE && !temPlacaMaeInstalada;
      card.className = "part-card" + (estaBloqueado ? " installed" : ""); // Sugestão: talvez mudar a classe "installed" para "locked" no CSS faça mais sentido visualmente depois!
      
      card.dataset.id = c.id;
      card.innerHTML = `
        <img src="${c.img}" alt="${c.nome}">
        <div>
          <div class="pname">${c.nome}</div>
          <div class="ptype">${c.slot}</div>
        </div>
      `;

      if (!isInstalled(c.id)) {
        card.addEventListener("mousedown", e => startDrag(e, c.id));
        card.addEventListener("mouseenter", () => showInfo(c.id));
        card.addEventListener("mouseleave", hideInfo);
      }

      // Adiciona o card dentro da seção da categoria dele
      categorySection.appendChild(card);
    });

    // 6. Por fim, adicionamos a categoria inteira na barra lateral
    list.appendChild(categorySection);
  });
}

function isInstalled(id) {
  return Object.values(installed).includes(id);
}

function motherboardInstalled(){
  if (Object.keys(installed).length == 0){
    return false;
  }

  return true;
}

/* =============================================
   DRAG — arraste da sidebar para o gabinete
   ============================================= */
let dragging = null;
const ghost = document.getElementById("drag-ghost");

function startDrag(e, id) {
  if (isInstalled(id)) return;
  if (!motherboardInstalled() && idMap[id].slot != slots.PLACAMAE) {
    console.log(id);
    return;
  }
  dragging = id;

  const c = idMap[id];
  document.getElementById("ghost-img").src = c.img;
  document.getElementById("ghost-name").textContent = c.nome;
  ghost.style.display = "flex";

  moveGhost(e);
  highlightCompatibleSlots(id);

  document.querySelectorAll(".part-card").forEach(card => {
    if (card.dataset.id === id) card.classList.add("dragging-source");
  });

  showInfo(id);
  e.preventDefault();
}

document.addEventListener("mousemove", e => {
  if (!dragging) return;
  moveGhost(e);
});

document.addEventListener("mouseup", e => {
  if (!dragging) return;

  const target = document.elementFromPoint(e.clientX, e.clientY);
  const slot = target ? target.closest(".slot") : null;

  if (slot) {
    tryDrop(dragging, slot.dataset.slot, slot.id);
  }

  endDrag();
});

function moveGhost(e) {
  ghost.style.left = e.clientX + 14 + "px";
  ghost.style.top  = e.clientY - 14 + "px";
}

function endDrag() {
  dragging = null;
  ghost.style.display = "none";
  document.querySelectorAll(".part-card").forEach(c =>
    c.classList.remove("dragging-source")
  );
  resetSlotHighlights();
}

/* =============================================
   DROP — valida e instala a peça no slot
   ============================================= */
function tryDrop(compId, slotType, slotElemId) {
  const comp = idMap[compId];
  if (!comp) return;

  /* slot errado */
  if (comp.slot !== slotType) {
    showToast("⚠️ " + comp.nome + " não encaixa nesse slot!");
    return;
  }

  /* incompatibilidade com peça já instalada */
  
  const conflict = checkCompatibility(compId);
  if (conflict) {
    showToast("❌ " + comp.nome + " é incompatível com " + idMap[conflict].nome);
    return;
  }

  /* substitui se já há algo no slot */
  if (installed[slotType]) {
    uninstall(slotType);
  }

  install(compId, slotType, slotElemId);
}

function checkCompatibility(newId) {
  
  if (!motherboardInstalled()){
    return null;
  }

  const newComp = idMap[newId];

  if (newComp.compatibilidade.length == 0) return null;

  const PlacaMae = idMap[installed["Placa-Mãe"]];
  const compPlacaMae = PlacaMae.compatibilidade;

  let compativel = false;
  compPlacaMae.forEach(p => {
    newComp.compatibilidade.forEach(c => {
      if (p == c){
        compativel = true;
      }
    })
  });

  return compativel ? null : PlacaMae.id;
}

/* =============================================
   INSTALL / UNINSTALL
   ============================================= */
function install(compId, slotType, slotElemId) {
  installed[slotType] = compId;

  const slotEl = document.getElementById(slotElemId || "slot-" + slotType);
  const comp = idMap[compId];

  slotEl.classList.add("filled");
  slotEl.classList.remove("highlight", "incompatible");

  /* esconde o label do slot vazio */
  const label = slotEl.querySelector(".slot-label");
  if (label) label.style.display = "none";

  /* cria o card da peça dentro do slot */
  const piece = document.createElement("div");
  piece.className = "installed-piece";
  piece.dataset.compId = compId;
  piece.innerHTML = `
    <img src="${comp.img}" alt="${comp.nome}">
    <span class="ip-name">${comp.nome}</span>
    <span class="ip-remove" title="Remover">${slotType == slots.PLACAMAE ? "" : "x"}</span>
  `;

  piece.querySelector(".ip-remove").addEventListener("click", () => {
    uninstall(slotType);
    buildSidebar();
    resetSlotHighlights();
    hideInfo();
  });

  piece.addEventListener("mouseenter", () => showInfo(compId));
  piece.addEventListener("mouseleave", hideInfo);

  slotEl.appendChild(piece);

  buildSidebar();
  showToast("✅ " + comp.nome + " instalado!");
  showInfo(compId);
}

function uninstall(slotType) {
  const slotEl = document.querySelector(`.slot[data-slot="${slotType}"]`);
  if (!slotEl) return;

  slotEl.classList.remove("filled", "highlight", "incompatible");

  const piece = slotEl.querySelector(".installed-piece");
  if (piece) piece.remove();

  const label = slotEl.querySelector(".slot-label");
  if (label) label.style.display = "";

  delete installed[slotType];
}

/* =============================================
   HIGHLIGHTS — realça slots compatíveis
   ============================================= */
function highlightCompatibleSlots(compId) {
  const comp = idMap[compId];

  document.querySelectorAll(".slot").forEach(slot => {
    const stype = slot.dataset.slot;
    if (stype !== comp.slot) return;

    const currentInSlot = installed[stype];
    if (currentInSlot && !comp.compatibilidade.includes(currentInSlot)) {
      slot.classList.add("incompatible");
    } else {
      slot.classList.add("highlight");
    }
  });
}

function resetSlotHighlights() {
  document.querySelectorAll(".slot").forEach(s =>
    s.classList.remove("highlight", "incompatible")
  );
}

/* =============================================
   PAINEL DE INFORMAÇÕES
   ============================================= */
function showInfo(id) {
  const c = idMap[id];
  if (!c) return;

  document.getElementById("info-empty").style.display = "none";

  const ic = document.getElementById("info-content");
  ic.style.display = "flex";

  document.getElementById("info-img").src = c.img;
  document.getElementById("info-name").textContent = c.nome;
  document.getElementById("info-id").textContent = "ID: " + c.id;

  const cl = document.getElementById("compat-list");
  cl.innerHTML = "";

  c.compatibilidade.forEach(cid => {

    const div = document.createElement("div");
    div.className = "compat-item";
    div.textContent = cid;
    cl.appendChild(div);
  });

  const gifElement = document.getElementById("info-gif");
  const gifDaCategoria = gifsInstalacao[c.slot];

  if (gifDaCategoria) {
    gifElement.src = gifDaCategoria;
    gifElement.style.display = "block";
  } else {
    gifElement.style.display = "none"; // Caso alguma categoria não tenha GIF mapeado
  }

  const descElement = document.getElementById("info-desc");
  const textoDidatico = descricoesDidaticas[c.slot];

  if (textoDidatico) {
    descElement.textContent = textoDidatico;
    descElement.style.display = "block";
  } else {
    descElement.style.display = "none";
  }
}

function hideInfo() {
  document.getElementById("info-empty").style.display = "";
  document.getElementById("info-content").style.display = "none";
}

/* =============================================
   TOAST DE FEEDBACK
   ============================================= */
let toastTimer;

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.style.display = "none"), 2200);
}
/* =============================================
   BOTÃO REINICIAR
   ============================================= */
document.getElementById("reset-btn").addEventListener("click", () => {
  Object.keys(installed).forEach(s => uninstall(s));
  buildSidebar();
  resetSlotHighlights();
  hideInfo();
});

/* =============================================
   INICIALIZAÇÃO
   ============================================= */
buildSidebar();
