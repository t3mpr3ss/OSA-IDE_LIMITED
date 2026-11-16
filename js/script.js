/* OSA-IDE NIGERIA LIMITED - site script */

/* ============================================================
   EDIT YOUR CONTACT DETAILS HERE (used on every page).
   Leave "" to hide. WhatsApp: digits only with country code,
   e.g. "2348012345678".
   ============================================================ */
const CONTACT = {
  email: "osaidenigltd@gmail.com",
  phones: ["+234 802 871 1506", "+234 703 709 1569"],
  whatsapp: "2347037091569"   // +234 703 709 1569
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());

  const set = (sel, text, href) => document.querySelectorAll(sel).forEach(el => {
    if (!text) { el.hidden = true; return; }
    const a = el.querySelector("a");
    if (a) { a.textContent = text; a.href = href; }
  });
  set(".js-email", CONTACT.email, "mailto:" + CONTACT.email);
  const phones = CONTACT.phones.filter(Boolean);
  document.querySelectorAll(".js-phone").forEach(el => {
    if (!phones.length) { el.hidden = true; return; }
    const a = el.querySelector("a");
    const tel = p => "tel:" + p.replace(/\s/g, "");
    a.textContent = phones[0]; a.href = tel(phones[0]);
    let last = a;
    phones.slice(1).forEach(p => { const b = document.createElement("a"); b.textContent = p; b.href = tel(p); last.after(" / ", b); last = b; });
  });

  document.querySelectorAll(".floating-contact").forEach(a => {
    if (CONTACT.whatsapp) {
      a.href = "https://wa.me/" + CONTACT.whatsapp;
      a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Chat with OSA-IDE on WhatsApp");
      a.innerHTML = '<i class="bi bi-whatsapp"></i>';
    }
  });

  // Missing photo: show the dashed placeholder instead of a broken icon
  document.querySelectorAll("img[data-fallback]").forEach(img => {
    const miss = () => img.classList.add("img-missing");
    img.addEventListener("error", miss);
    if (img.complete && img.naturalWidth === 0) miss();
  });
});

/* Background loading: once the page has finished loading, quietly fetch the
   photos that were waiting (hidden slider photos, thumbnails, lower sections),
   two at a time so it doesn't slow the page. Skipped on Data Saver / 2G. */
window.addEventListener("load", () => {
  const c = navigator.connection;
  if (c && (c.saveData || /2g/.test(c.effectiveType || ""))) return;
  const queue = Array.from(document.querySelectorAll('img[loading="lazy"]'));
  const next = () => {
    const img = queue.shift();
    if (!img) return;
    img.loading = "eager";
    const done = img.complete ? Promise.resolve() : new Promise(res => {
      img.addEventListener("load", res, { once: true });
      img.addEventListener("error", res, { once: true });
    });
    done.then(() => setTimeout(next, 100));
  };
  const start = window.requestIdleCallback || (f => setTimeout(f, 500));
  start(() => { next(); next(); });
});