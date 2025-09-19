// Active nav link
(() => {
  const path = location.pathname;
  const map = {
    "/backlink-hub.html":"backlinks",
    "/tier3-hub.html":"tier3",
    "/press-coverage.html":"press",
    "/sitemap_index.xml":"sitemaps",
    "/":"home"
  };
  const key = map[path] || "";
  document.querySelectorAll(`[data-nav="${key}"]`).forEach(a=>{
    a.classList.add("active");
  });
})();

// Simple client-side search (used on hubs if #q present)
export function attachSearch(inputSel, listSel){
  const $i = document.querySelector(inputSel);
  const $list = document.querySelectorAll(listSel);
  if(!$i || !$list.length) return;
  $i.addEventListener('input', () => {
    const q = $i.value.trim().toLowerCase();
    $list.forEach(item=>{
      const hay = item.textContent.toLowerCase();
      item.style.display = hay.includes(q) ? "" : "none";
    });
  });
}
