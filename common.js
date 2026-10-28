/* Shared helpers for all pages */
(function(){
  const A = window.APP;
  const U = {};

  U.$ = id => document.getElementById(id);

  // Build DOM safely: h("div", {class:"x", onclick:fn}, "text", child)
  U.h = function(tag, attrs, ...kids){
    const el = document.createElement(tag);
    if (attrs) for (const [k,v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
      else if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const c of kids.flat()) {
      if (c === null || c === undefined || c === false) continue;
      el.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
  };

  U.client = function(persist){
    if (!window.supabase || !window.supabase.createClient) return null;
    return window.supabase.createClient(A.SUPABASE_URL, A.SUPABASE_KEY,
      { auth: { persistSession: !!persist, autoRefreshToken: !!persist } });
  };

  U.serviceObj = id => (A.SERVICES.find(x => x.id === id) || null);
  U.service = function(id, lang){
    const s = U.serviceObj(id);
    return s ? s[lang || "fr"][0] : (id || "");
  };
  U.extrasFor = id => { const s = U.serviceObj(id); return (s && s.extras) ? s.extras : []; };
  U.extraOptions = f => Array.isArray(f.options) ? f.options
    : (typeof f.options === "string" && Array.isArray(A[f.options]) ? A[f.options] : []);

  U.money = function(n){
    if (n === null || n === undefined || n === "") return "";
    return Number(n).toLocaleString("fr-FR").replace(/ | /g, " ") + " " + A.CURRENCY;
  };

  U.date = function(d){            // "2026-10-30" -> "30/10/2026"
    if (!d) return "";
    const [y,m,da] = String(d).slice(0,10).split("-");
    return `${da}/${m}/${y}`;
  };

  U.dateTime = function(ts){
    if (!ts) return "";
    const d = new Date(ts);
    const p = n => String(n).padStart(2,"0");
    return `${p(d.getDate())}/${p(d.getMonth()+1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
  };

  // Phone -> WhatsApp format (Guinea default 224)
  U.waNumber = function(phone){
    let d = String(phone || "").replace(/\D/g, "");
    if (d.startsWith("00")) d = d.slice(2);
    if (d.length === 9 && d.startsWith("6")) d = "224" + d;
    return d;
  };
  U.waLink = (phone, text) => "https://wa.me/" + U.waNumber(phone) + (text ? "?text=" + encodeURIComponent(text) : "");

  U.trackUrl = (code, token) => {
    const base = location.href.replace(/[^/]*([?#].*)?$/, "");
    return `${base}suivi.html?c=${encodeURIComponent(code)}&k=${encodeURIComponent(token)}`;
  };

  U.copy = function(text, btn, doneLabel){
    const done = () => { if (btn) { const o = btn.textContent; btn.textContent = doneLabel || "OK"; setTimeout(()=>btn.textContent=o, 1800); } };
    const fallback = () => { const t = document.createElement("textarea"); t.value = text; document.body.append(t); t.select(); try { document.execCommand("copy"); done(); } catch(e){} t.remove(); };
    try { navigator.clipboard.writeText(text).then(done, fallback); } catch(e) { fallback(); }
  };

  U.store = {
    get(k, d){ try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch(e){ return d; } },
    set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
  };

  // --- Dark / light theme ---
  U.THEME_KEY = "atw_theme";
  U.currentTheme = function(){
    const set = document.documentElement.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  };
  U.setTheme = function(t){
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(U.THEME_KEY, t); } catch(e){}
  };
  U.wireThemeToggle = function(btn){
    if (!btn) return;
    const paint = () => {
      const dark = U.currentTheme() === "dark";
      btn.textContent = dark ? "☀️" : "🌙";
      const label = dark ? "Mode clair / Light mode" : "Mode sombre / Dark mode";
      btn.setAttribute("aria-label", label); btn.title = label;
    };
    btn.addEventListener("click", () => { U.setTheme(U.currentTheme() === "dark" ? "light" : "dark"); paint(); });
    paint();
  };

  U.rememberRequest = function(code, token){
    const list = U.store.get("my_requests", []).filter(r => r.code !== code);
    list.unshift({ code, token, at: Date.now() });
    U.store.set("my_requests", list.slice(0, 10));
  };

  window.U = U;
})();
