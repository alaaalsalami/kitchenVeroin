/* =========================================================
   فني مطابخ صيانة وتفصيل — بيانات الموقع + منطق الواجهة
   كل القيم في SITE_DATA فقط. لا مكتبات، لا fetch، لا modules.
   ========================================================= */

var SITE_DATA = {

  meta: {
    title: "فني مطابخ صيانة وتفصيل | تفصيل وصيانة مطابخ ألمنيوم",          // TEMP
    description: "تفصيل وصيانة مطابخ ألمنيوم في الرياض — حي اليرموك. تفصيل على المقاس، صيانة، فك ونقل وتركيب، تعديل لغسالة الصحون، وفحص كامل للمطبخ.", // TEMP
    author: "فني مطابخ صيانة وتفصيل",                                       // TEMP
    canonical: "https://demo-kitchen.example/",                             // TEMP
    siteName: "فني مطابخ صيانة وتفصيل",                                     // TEMP
    locale: "ar_SA",                                                        // TEMP
    themeLight: "#0f766e",                                                  // TEMP
    themeDark: "#0a1211"                                                    // TEMP
  },

  brand: {
    name: "فني مطابخ صيانة وتفصيل",                                         // TEMP
    tagline: "تفصيل وصيانة مطابخ ألمنيوم — الرياض"                          // TEMP
  },

  logo: {
    viewBox: "0 0 64 64",                                                   // TEMP
    strokeWidth: 3.2,                                                       // TEMP
    bg: "#0f766e",                                                          // TEMP
    fg: "#ffffff",                                                          // TEMP
    shapes: [
      { t: "path", d: "M18 24h12v22H18z" },                                 // TEMP
      { t: "path", d: "M21.5 31v6" },                                       // TEMP
      { t: "path", d: "M34 44 46 26" },                                     // TEMP
      { t: "path", d: "M43.6 24.4 47.8 28.2" },                             // TEMP
      { t: "path", d: "M16 46h32" }                                         // TEMP
    ]
  },

  contact: {
    phoneDisplay: "+966 55 446 7995",                                       // TEMP
    phoneE164: "+966554467995",                                             // TEMP
    whatsapp: "966554467995",                                               // TEMP
    mapUrl: "https://maps.app.goo.gl/TRyJFnWKv7b6qiy46",                    // TEMP
    mapEmbed: "https://maps.google.com/maps?q=24.8161862,46.7968111&hl=ar&z=16&output=embed", // TEMP
    city: "الرياض",                                                         // TEMP
    district: "حي اليرموك"                                                  // TEMP
  },

  hours: {
    timeZone: "Asia/Riyadh",                                                // TEMP
    days: [
      { key: "sat", name: "السبت", schema: "Saturday" },                    // TEMP
      { key: "sun", name: "الأحد", schema: "Sunday" },                      // TEMP
      { key: "mon", name: "الاثنين", schema: "Monday" },                    // TEMP
      { key: "tue", name: "الثلاثاء", schema: "Tuesday" },                  // TEMP
      { key: "wed", name: "الأربعاء", schema: "Wednesday" },                // TEMP
      { key: "thu", name: "الخميس", schema: "Thursday" },                   // TEMP
      { key: "fri", name: "الجمعة", schema: "Friday" }                      // TEMP
    ],
    schedule: {
      sat: ["09:00", "21:00"],                                              // TEMP
      sun: ["09:00", "21:00"],                                              // TEMP
      mon: ["09:00", "21:00"],                                              // TEMP
      tue: ["09:00", "21:00"],                                              // TEMP
      wed: ["09:00", "21:00"],                                              // TEMP
      thu: ["09:00", "21:00"],                                              // TEMP
      fri: null                                                             // TEMP — مغلق
    }
  },

  ui: {
    skip: "تخطَّ إلى المحتوى",                                              // TEMP
    navLabel: "التنقل الرئيسي",                                             // TEMP
    menuOpen: "فتح القائمة",                                                // TEMP
    menuClose: "إغلاق القائمة",                                             // TEMP
    nav: {
      home: "الرئيسية",                                                     // TEMP
      services: "خدماتنا",                                                  // TEMP
      works: "أعمالنا",                                                     // TEMP
      areas: "مناطق الخدمة",                                                // TEMP
      contact: "تواصل"                                                      // TEMP
    },
    orderNow: "اطلب الآن",                                                  // TEMP
    orderShort: "اطلب",                                                     // TEMP
    callShort: "اتصال",                                                     // TEMP
    callNow: "اتصل بنا",                                                    // TEMP
    callAria: "اتصال هاتفي بالنشاط",                                        // TEMP
    statusOpen: "مفتوح الآن حتى",                                           // TEMP
    statusClosed: "مغلق الآن",                                              // TEMP
    opens: "يفتح",                                                          // TEMP
    tomorrow: "غداً"                                                        // TEMP
  },

  hero: {
    title: "تفصيل وصيانة مطابخ ألمنيوم في الرياض — حي اليرموك",             // TEMP
    lead: "نفصّل المطابخ على المقاس، ونصلح المفصلات والأدراج، ونفك وننقل ونركّب، ونعدّل المطبخ لغسالة الصحون، بعد فحص كامل يحدّد ما يحتاج تغييراً وما لا يحتاج.", // TEMP
    cta: "اطلب الآن",                                                       // TEMP
    artA: "تفصيل على المقاس",                                               // TEMP
    artB: "صيانة وتعديل",                                                   // TEMP
    facts: [
      { icon: "pin", text: "الرياض — حي اليرموك" },                          // TEMP
      { icon: "clock", text: "السبت–الخميس 9ص–9م" },                         // TEMP
      { icon: "tool", text: "تفصيل حسب الطلب" }                              // TEMP
    ]
  },

  services: {
    title: "خدماتنا",                                                       // TEMP
    lead: "خمس خدمات نغطي بها كل ما يحتاجه مطبخ الألمنيوم، من التفصيل حتى الصيانة والتعديل.", // TEMP
    cardCta: "اطلب",                                                        // TEMP
    items: [
      {
        id: "detail",                                                       // TEMP
        title: "تفصيل مطابخ ألمنيوم",                                        // TEMP
        desc: "تفصيل على المقاس والمواصفات للقطاعين الخاص والعام.",           // TEMP
        icon: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M12 3.5v17M3.5 12h17"/><path d="M7.2 7.9h1.8M7.2 16.1h1.8"/>'
      },
      {
        id: "maintenance",                                                  // TEMP
        title: "صيانة مطابخ ألمنيوم",                                        // TEMP
        desc: "إصلاح المفصلات والأدراج والأبواب وإعادة ضبط المطبخ.",          // TEMP
        icon: '<path d="M15.6 4.2a4.4 4.4 0 0 0-6 5.7L4 15.5V20h4.5l5.6-5.6a4.4 4.4 0 0 0 5.7-6l-3 3-2.8-2.8 2.6-2.4Z"/>'
      },
      {
        id: "move",                                                         // TEMP
        title: "فك ونقل وتركيب مطابخ",                                       // TEMP
        desc: "فك المطبخ ونقله وتركيبه في الموقع الجديد.",                    // TEMP
        icon: '<path d="M3 7.5h11v8.5H3z"/><path d="M14 10.5h3.6L21 13.6V16h-7z"/><circle cx="7" cy="18.2" r="1.6"/><circle cx="17.4" cy="18.2" r="1.6"/>'
      },
      {
        id: "dishwasher",                                                   // TEMP
        title: "تعديل المطبخ لغسالة الصحون",                                  // TEMP
        desc: "توسيع أو تعديل الوحدة لإدخال الغسالة.",                        // TEMP
        icon: '<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M4 8h16"/><path d="M8 5.5h.01M11 5.5h.01"/><circle cx="12" cy="14.5" r="3.3"/>'
      },
      {
        id: "inspection",                                                   // TEMP
        title: "فحص المطبخ كامل",                                            // TEMP
        desc: "تحديد ما يحتاج تغييراً وما لا يحتاج قبل الصيانة.",             // TEMP
        icon: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.4 15.4 21 21"/><path d="m8 10.7 1.8 1.8 3.6-3.7"/>'
      }
    ]
  },

  features: {
    items: [
      "الالتزام بالمواعيد",                                                 // TEMP
      "سرعة التنفيذ",                                                       // TEMP
      "نظافة العمل",                                                        // TEMP
      "الأمانة في تحديد ما يستحق التغيير"                                    // TEMP
    ]
  },

  works: {
    title: "أعمالنا",                                                       // TEMP
    lead: "مساحة مخصّصة لعرض صور الأعمال. اضغط على أي مربّع لعرضه بحجم أكبر.", // TEMP
    hint: "اسحب يميناً أو يساراً لعرض بقية الأعمال",                          // TEMP
    itemLabel: "صورة عمل هنا",                                              // TEMP
    close: "إغلاق",                                                         // TEMP
    next: "التالي",                                                         // TEMP
    prev: "السابق",                                                         // TEMP
    icons: [
      '<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M12 4v16M5 12h14"/><path d="M8 8h1M8 16h1"/>',  // TEMP
      '<path d="M4 10h16"/><path d="M6 10v9h12v-9"/><path d="M9 10V7h6v3"/>',                                   // TEMP
      '<rect x="4" y="6" width="16" height="12" rx="2"/><path d="M4 12h16"/><path d="M10 12v6M14 12v6"/>',       // TEMP
      '<circle cx="8" cy="12" r="2.4"/><circle cx="16" cy="12" r="2.4"/><path d="M10.4 12h3.2"/>',               // TEMP
      '<path d="M3 9h18"/><path d="M5 9v9h14V9"/><path d="M9 5h6"/>',                                           // TEMP
      '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 3v18"/><path d="M15 11v3"/>'                // TEMP
    ]
  },

  areas: {
    title: "مناطق الخدمة",                                                  // TEMP
    lead: "نخدم هذه الأحياء في مدينة الرياض.",                               // TEMP
    note: "لم تجد حيّك؟ اختر «حي آخر» في نموذج الطلب.",                      // TEMP
    prefix: "حي"                                                            // TEMP
  },

  contactSec: {
    title: "تواصل واطلب",                                                   // TEMP
    lead: "الخريطة وساعات الدوام ونموذج الطلب في مكان واحد.",                // TEMP
    hoursLabel: "ساعات الدوام",                                             // TEMP
    reviewsLabel: "تقييمات العملاء",                                        // TEMP
    reviewsCta: "اقرأ تقييمات النشاط على خرائط جوجل",                        // TEMP
    reviewsUrl: "https://maps.app.goo.gl/TRyJFnWKv7b6qiy46",                // TEMP
    mapTitle: "خريطة موقع فني مطابخ صيانة وتفصيل — الرياض",                  // TEMP
    directions: "فتح الموقع على الخريطة",                                    // TEMP
    closed: "مغلق"                                                          // TEMP
  },

  order: {
    step1: "الخدمة",                                                        // TEMP
    step2: "الحي",                                                          // TEMP
    step3: "الوقت",                                                         // TEMP
    otherDistrict: "حي آخر",                                                // TEMP
    noteLabel: "ملاحظة (اختياري)",                                          // TEMP
    notePlaceholder: "أي تفاصيل إضافية عن المطبخ أو الموقع…",                // TEMP
    notePrefix: "ملاحظة:",                                                  // TEMP
    send: "أرسل عبر واتساب",                                                // TEMP
    hint: "لا تُحفظ بياناتك على الموقع؛ الرسالة تُفتح في واتساب لتراجعها قبل الإرسال.", // TEMP
    summaryEmpty: "اختر الخدمة والحي والوقت للمتابعة.",                      // TEMP
    summaryPrefix: "اختياراتك:",                                            // TEMP
    msgTemplate: "السلام عليكم، أحتاج {service} في {district}، الوقت: {time}. (طلب من موقعكم)" // TEMP
  },

  footer: {
    designedBy: "تصميم وتطوير فورتك سوفت",                                  // TEMP
    demo: "TEMP-DEMO — نسخة عرض أولية، البيانات قابلة للتحديث."             // TEMP
  },

  districts: [
    "اليرموك",                                                              // TEMP
    "المنصورة",                                                             // TEMP
    "الشفا",                                                                // TEMP
    "الحائر",                                                               // TEMP
    "بدر",                                                                  // TEMP
    "الدار البيضاء",                                                        // TEMP
    "العزيزية"                                                              // TEMP
  ],

  times: ["الآن", "اليوم", "غداً"],                                          // TEMP

  icons: {
    phone: '<path d="M6.6 3.5h2.3l1.6 4-2 1.4a11.6 11.6 0 0 0 5 5l1.4-2 4 1.6v2.3A2.6 2.6 0 0 1 16.3 18C9.8 17.5 4.5 12.2 4 5.7A2.6 2.6 0 0 1 6.6 3.5Z"/>', // TEMP
    pin: '<path d="M12 21s6.6-5.4 6.6-10.4a6.6 6.6 0 1 0-13.2 0C5.4 15.6 12 21 12 21Z"/><circle cx="12" cy="10.4" r="2.4"/>', // TEMP
    clock: '<circle cx="12" cy="12" r="8.4"/><path d="M12 7.6V12l3 1.9"/>', // TEMP
    tool: '<path d="M14.5 3.6a4.6 4.6 0 0 0 5.9 5.9l-8.6 8.6a3.2 3.2 0 0 1-4.5-4.5Z"/><path d="M5.6 19.4 4 21"/>', // TEMP
    check: '<path d="m5 12.5 4.2 4.2L19 7"/>'                              // TEMP
  }
};

/* =========================================================
   المنطق
   ========================================================= */
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  function get(path) {
    var parts = path.split("."), cur = SITE_DATA, i;
    for (i = 0; i < parts.length; i++) {
      if (cur === null || typeof cur === "undefined") return null;
      cur = cur[parts[i]];
    }
    return (cur === null || typeof cur === "undefined") ? null : cur;
  }

  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function reduced() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function svgWrap(paths, cls) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"' +
      (cls ? ' class="' + cls + '"' : "") + ">" + paths + "</svg>";
  }

  /* ---------- الشعار + favicon ---------- */
  function logoShapes() {
    return SITE_DATA.logo.shapes.map(function (s) {
      if (s.t === "rect") {
        return '<rect x="' + s.x + '" y="' + s.y + '" width="' + s.w + '" height="' + s.h + '" rx="' + s.r + '"/>';
      }
      return '<path d="' + s.d + '"/>';
    }).join("");
  }

  function renderLogo() {
    var host = $("[data-logo]");
    if (!host) return;
    host.innerHTML =
      '<svg viewBox="' + SITE_DATA.logo.viewBox + '" focusable="false" aria-hidden="true">' +
      '<rect width="64" height="64" rx="15" fill="' + SITE_DATA.logo.bg + '"/>' +
      '<g fill="none" stroke="' + SITE_DATA.logo.fg + '" stroke-width="' + SITE_DATA.logo.strokeWidth +
      '" stroke-linecap="round" stroke-linejoin="round">' + logoShapes() + "</g></svg>";
  }

  function buildFavicon() {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" rx="15" fill="' + SITE_DATA.logo.bg + '"/>' +
      '<g fill="none" stroke="' + SITE_DATA.logo.fg + '" stroke-width="' + SITE_DATA.logo.strokeWidth +
      '" stroke-linecap="round" stroke-linejoin="round">' + logoShapes() + "</g></svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  /* ---------- الميتا ---------- */
  function applyMeta() {
    document.title = SITE_DATA.meta.title;
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", SITE_DATA.meta.description);
    var author = $('meta[name="author"]');
    if (author) author.setAttribute("content", SITE_DATA.meta.author);
    var theme = $('meta[name="theme-color"]');
    if (theme) theme.setAttribute("content", SITE_DATA.meta.themeLight);
    var canon = $("#canonical");
    if (canon) canon.setAttribute("href", SITE_DATA.meta.canonical);
    var og = {
      ogSiteName: SITE_DATA.meta.siteName,
      ogTitle: SITE_DATA.meta.title,
      ogDescription: SITE_DATA.meta.description,
      ogUrl: SITE_DATA.meta.canonical
    };
    Object.keys(og).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute("content", og[id]);
    });
    var icon = $("#favicon");
    if (icon) icon.setAttribute("href", buildFavicon());
  }

  /* ---------- ربط النصوص والخصائص ---------- */
  function applyText() {
    $$("[data-t]").forEach(function (el) {
      var v = get(el.getAttribute("data-t"));
      if (v !== null) el.textContent = v;
    });
  }

  function applyAttrs() {
    $$("[data-a]").forEach(function (el) {
      el.getAttribute("data-a").split(";").forEach(function (pair) {
        var i = pair.indexOf(":");
        if (i < 0) return;
        var attr = pair.slice(0, i).trim();
        var v = get(pair.slice(i + 1).trim());
        if (attr && v !== null) el.setAttribute(attr, v);
      });
    });
  }

  function applyLinks() {
    $$('[data-link="tel"]').forEach(function (a) {
      a.setAttribute("href", "tel:" + SITE_DATA.contact.phoneE164);
    });
    $$('[data-link="map"]').forEach(function (a) {
      a.setAttribute("href", SITE_DATA.contact.mapUrl);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
    $$('[data-link="reviews"]').forEach(function (a) {
      a.setAttribute("href", SITE_DATA.contactSec.reviewsUrl);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }

  function applyIcons() {
    $$("[data-icon]").forEach(function (el) {
      var name = el.getAttribute("data-icon");
      var paths = SITE_DATA.icons[name];
      if (!paths) return;
      el.setAttribute("viewBox", "0 0 24 24");
      el.setAttribute("fill", "none");
      el.setAttribute("stroke", "currentColor");
      el.setAttribute("stroke-width", "1.7");
      el.setAttribute("stroke-linecap", "round");
      el.setAttribute("stroke-linejoin", "round");
      el.setAttribute("aria-hidden", "true");
      el.setAttribute("focusable", "false");
      el.innerHTML = paths;
    });
  }

  /* ---------- JSON-LD ---------- */
  function injectJsonLd() {
    var hours = [];
    SITE_DATA.hours.days.forEach(function (d) {
      var s = SITE_DATA.hours.schedule[d.key];
      if (!s) return;
      hours.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/" + d.schema,
        opens: s[0],
        closes: s[1]
      });
    });

    var data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE_DATA.brand.name,
      description: SITE_DATA.meta.description,
      url: SITE_DATA.meta.canonical,
      telephone: SITE_DATA.contact.phoneE164,
      logo: buildFavicon(),
      image: buildFavicon(),
      hasMap: SITE_DATA.contact.mapUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_DATA.contact.district,
        addressLocality: SITE_DATA.contact.city,
        addressCountry: "SA"
      },
      areaServed: {
        "@type": "City",
        name: SITE_DATA.contact.city,
        containsPlace: SITE_DATA.districts.map(function (d) {
          return { "@type": "AdministrativeArea", name: d };
        })
      },
      openingHoursSpecification: hours,
      makesOffer: SITE_DATA.services.items.map(function (s) {
        return { "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } };
      })
    };

    var tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(data);
    document.head.appendChild(tag);
  }

  /* ---------- الوقت والحالة ---------- */
  var DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  var SCHEMA_MAP = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  function riyadhNow() {
    if (typeof Intl !== "undefined" && Intl.DateTimeFormat) {
      try {
        var parts = new Intl.DateTimeFormat("en-US", {
          timeZone: SITE_DATA.hours.timeZone,
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23"
        }).formatToParts(new Date());
        var map = {};
        parts.forEach(function (p) { if (p.type !== "literal") map[p.type] = p.value; });
        var idx = SCHEMA_MAP[map.weekday];
        if (typeof idx === "number") {
          return { index: idx, key: DAY_KEYS[idx], minutes: (Number(map.hour) % 24) * 60 + Number(map.minute) };
        }
      } catch (e) { /* احتياطي */ }
    }
    var d = new Date(Date.now() + 3 * 3600 * 1000);
    return { index: d.getUTCDay(), key: DAY_KEYS[d.getUTCDay()], minutes: d.getUTCHours() * 60 + d.getUTCMinutes() };
  }

  function toMin(hhmm) {
    var p = String(hhmm).split(":");
    return Number(p[0]) * 60 + Number(p[1]);
  }

  function fmtClock(hhmm) {
    var p = String(hhmm).split(":");
    var h = Number(p[0]);
    var suffix = h < 12 ? "ص" : "م";
    var h12 = h % 12;
    if (h12 === 0) h12 = 12;
    return h12 + (p[1] === "00" ? "" : ":" + p[1]) + " " + suffix;
  }

  function dayName(key) {
    var found = SITE_DATA.hours.days.filter(function (d) { return d.key === key; })[0];
    return found ? found.name : "";
  }

  function shiftOpen(sch, minutes) {
    var o = toMin(sch[0]), c = toMin(sch[1]);
    if (c > o) return minutes >= o && minutes < c;
    return minutes >= o || minutes < c; /* يمتد بعد منتصف الليل */
  }

  function computeStatus() {
    var now = riyadhNow();
    var sch = SITE_DATA.hours.schedule[now.key];

    if (sch && shiftOpen(sch, now.minutes)) {
      return { open: true, text: SITE_DATA.ui.statusOpen + " " + fmtClock(sch[1]) };
    }

    /* وردية أمس إن امتدت بعد منتصف الليل */
    var prevKey = DAY_KEYS[(now.index + 6) % 7];
    var prev = SITE_DATA.hours.schedule[prevKey];
    if (prev) {
      var o = toMin(prev[0]), c = toMin(prev[1]);
      if (c <= o && now.minutes < c) {
        return { open: true, text: SITE_DATA.ui.statusOpen + " " + fmtClock(prev[1]) };
      }
    }

    for (var i = 0; i < 8; i++) {
      var key = DAY_KEYS[(now.index + i) % 7];
      var s = SITE_DATA.hours.schedule[key];
      if (!s) continue;
      if (i === 0 && now.minutes < toMin(s[0])) {
        return { open: false, text: SITE_DATA.ui.statusClosed + "، " + SITE_DATA.ui.opens + " " + fmtClock(s[0]) };
      }
      if (i > 0) {
        var when = i === 1 ? SITE_DATA.ui.tomorrow : dayName(key);
        return { open: false, text: SITE_DATA.ui.statusClosed + "، " + SITE_DATA.ui.opens + " " + when + " " + fmtClock(s[0]) };
      }
    }
    return { open: false, text: SITE_DATA.ui.statusClosed };
  }

  function renderStatus() {
    var st = computeStatus();
    var badge = $("#statusBadge");
    var text = $("#statusText");
    if (badge && text) {
      badge.classList.toggle("is-open", st.open);
      badge.classList.toggle("is-closed", !st.open);
      text.textContent = st.text;
      badge.hidden = false;
    }
    var barText = $("#barStatusText");
    if (barText) barText.textContent = st.text;
    var bar = $("#barStatus");
    if (bar) bar.classList.toggle("is-open", st.open);
  }

  function renderHours() {
    var list = $("#hoursList");
    if (!list) return;
    var todayKey = riyadhNow().key;
    list.innerHTML = SITE_DATA.hours.days.map(function (d) {
      var s = SITE_DATA.hours.schedule[d.key];
      var val = s ? fmtClock(s[0]) + " – " + fmtClock(s[1]) : SITE_DATA.contactSec.closed;
      var cls = (d.key === todayKey ? "is-today " : "") + (s ? "" : "is-off");
      return '<li class="' + cls.trim() + '"><span>' + d.name + "</span><b>" + val + "</b></li>";
    }).join("");
  }

  /* ---------- الخدمات ---------- */
  function renderServices() {
    var grid = $("#servicesGrid");
    if (!grid) return;
    grid.innerHTML = SITE_DATA.services.items.map(function (s) {
      return '<article class="card">' +
        '<span class="card__ico">' + svgWrap(s.icon) + "</span>" +
        "<h3>" + s.title + "</h3>" +
        "<p>" + s.desc + "</p>" +
        '<button class="card__order" type="button" data-service="' + s.id + '">' +
        SITE_DATA.services.cardCta + "</button>" +
        "</article>";
    }).join("");
  }

  function renderFacts() {
    var list = $("#factsList");
    if (!list) return;
    list.innerHTML = SITE_DATA.hero.facts.map(function (f) {
      var icon = SITE_DATA.icons[f.icon] || SITE_DATA.icons.tool;
      return "<li>" + svgWrap(icon) + "<span>" + f.text + "</span></li>";
    }).join("");
  }

  function renderFeatures() {
    var list = $("#featuresList");
    if (!list) return;
    list.innerHTML = SITE_DATA.features.items.map(function (f) {
      return "<li>" + svgWrap(SITE_DATA.icons.check, "feature__ico") + "<span>" + f + "</span></li>";
    }).join("");
  }

  /* ---------- أعمالنا ---------- */
  function workArt(i) {
    var n = SITE_DATA.works.icons.length;
    var icon = SITE_DATA.works.icons[i % n];
    return '<svg viewBox="0 0 400 300" role="img" aria-label="' + SITE_DATA.works.itemLabel + " " + (i + 1) + '" focusable="false">' +
      '<rect x="1" y="1" width="398" height="298" rx="13" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>' +
      '<g transform="translate(200 132) scale(3.4) translate(-12 -12)" fill="none" stroke="var(--accent)" ' +
      'stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" opacity=".85">' + icon + "</g>" +
      '<text x="200" y="238" text-anchor="middle" font-family="Cairo, sans-serif" font-size="17" font-weight="700" fill="var(--text)">' +
      SITE_DATA.works.itemLabel + "</text>" +
      '<text x="200" y="268" text-anchor="middle" direction="ltr" font-family="Cairo, sans-serif" font-size="12" fill="var(--muted)">' +
      pad2(i + 1) + " / " + pad2(SITE_DATA.works.icons.length) + "</text>" +
      "</svg>";
  }

  function renderWorks() {
    var grid = $("#worksGrid");
    if (!grid) return;
    grid.innerHTML = SITE_DATA.works.icons.map(function (_, i) {
      return '<button class="work" type="button" data-work="' + i + '" aria-label="' +
        SITE_DATA.works.itemLabel + " " + (i + 1) + '">' + workArt(i) + "</button>";
    }).join("");
  }

  var lb = {
    el: null, stage: null, count: null, index: 0, lastFocus: null,
    init: function () {
      this.el = $("#lightbox");
      this.stage = $("#lbStage");
      this.count = $("#lbCount");
      if (!this.el) return;
      var self = this;
      $("#lbClose").addEventListener("click", function () { self.close(); });
      $("#lbPrev").addEventListener("click", function () { self.go(-1); });
      $("#lbNext").addEventListener("click", function () { self.go(1); });
      this.el.addEventListener("click", function (e) {
        if (e.target === self.el || e.target.classList.contains("lb__stage")) self.close();
      });
      document.addEventListener("keydown", function (e) {
        if (self.el.hidden) return;
        if (e.key === "Escape") { e.preventDefault(); self.close(); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); self.go(1); }
        else if (e.key === "ArrowRight") { e.preventDefault(); self.go(-1); }
        else if (e.key === "Tab") self.trap(e);
      });
    },
    open: function (i) {
      if (!this.el) return;
      this.lastFocus = document.activeElement;
      this.index = i;
      this.render();
      this.el.hidden = false;
      document.documentElement.style.overflow = "hidden";
      $("#lbClose").focus();
    },
    close: function () {
      if (!this.el || this.el.hidden) return;
      this.el.hidden = true;
      document.documentElement.style.overflow = "";
      if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus();
    },
    go: function (step) {
      var n = SITE_DATA.works.icons.length;
      this.index = (this.index + step + n) % n;
      this.render();
    },
    render: function () {
      this.stage.innerHTML = workArt(this.index);
      this.count.textContent = pad2(this.index + 1) + " / " + pad2(SITE_DATA.works.icons.length);
    },
    trap: function (e) {
      var items = [$("#lbClose"), $("#lbPrev"), $("#lbNext")];
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };

  /* سحب أفقي بالأصابع/الفأرة */
  function initDrag() {
    var track = $("#worksGrid");
    if (!track) return;
    var down = false, startX = 0, startScroll = 0, moved = false;
    var rtl = true;

    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") return; /* التمرير الأصلي على اللمس */
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      rtl = getComputedStyle(track).direction === "rtl";
      track.classList.add("is-dragging");
    });

    track.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = rtl ? startScroll + dx : startScroll - dx;
    });

    function end() {
      down = false;
      track.classList.remove("is-dragging");
    }
    track.addEventListener("pointerup", end);
    track.addEventListener("pointercancel", end);
    track.addEventListener("pointerleave", end);
    track.addEventListener("click", function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  /* ---------- مناطق الخدمة ---------- */
  function renderAreas() {
    var list = $("#areasList");
    if (!list) return;
    list.innerHTML = SITE_DATA.districts.map(function (d) {
      return "<li>" + SITE_DATA.areas.prefix + " " + d + "</li>";
    }).join("");
  }

  /* ---------- الطلب ---------- */
  var order = { service: null, district: null, time: null };

  function chip(label, value, group) {
    return '<button class="chip" type="button" data-group="' + group + '" data-value="' +
      value + '" aria-pressed="false">' + label + "</button>";
  }

  function renderOrderChips() {
    var s = $("#serviceChips"), d = $("#districtChips"), t = $("#timeChips");
    if (s) s.innerHTML = SITE_DATA.services.items.map(function (x) { return chip(x.title, x.title, "service"); }).join("");
    if (d) {
      d.innerHTML = SITE_DATA.districts.map(function (x) { return chip(x, x, "district"); }).join("") +
        chip(SITE_DATA.order.otherDistrict, SITE_DATA.order.otherDistrict, "district");
    }
    if (t) t.innerHTML = SITE_DATA.times.map(function (x) { return chip(x, x, "time"); }).join("");
  }

  function buildMessage() {
    var note = $("#noteInput");
    var msg = SITE_DATA.order.msgTemplate
      .replace("{service}", order.service)
      .replace("{district}", order.district)
      .replace("{time}", order.time);
    if (note && note.value.trim()) {
      msg += " " + SITE_DATA.order.notePrefix + " " + note.value.trim();
    }
    return msg;
  }

  function updateOrder() {
    var summary = $("#orderSummary");
    var btn = $("#sendBtn");
    var ready = !!(order.service && order.district && order.time);

    if (btn) btn.disabled = !ready;

    if (summary) {
      if (!ready) {
        var missing = [];
        if (!order.service) missing.push(SITE_DATA.order.step1);
        if (!order.district) missing.push(SITE_DATA.order.step2);
        if (!order.time) missing.push(SITE_DATA.order.step3);
        summary.textContent = SITE_DATA.order.summaryEmpty;
        summary.classList.remove("is-ready");
      } else {
        summary.textContent = SITE_DATA.order.summaryPrefix + " " +
          [order.service, order.district, order.time].join(" · ");
        summary.classList.add("is-ready");
      }
    }
    if (btn) {
      if (ready) btn.setAttribute("data-msg", buildMessage());
      else btn.removeAttribute("data-msg");
    }
  }

  function setChoice(group, value) {
    order[group] = value;
    $$('.chip[data-group="' + group + '"]').forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-value") === value ? "true" : "false");
    });
    updateOrder();
  }

  function initOrder() {
    renderOrderChips();
    updateOrder();

    var summary = $("#orderSummary");
    if (summary && !summary.textContent) summary.textContent = SITE_DATA.order.summaryEmpty;

    document.addEventListener("click", function (e) {
      var chipEl = e.target.closest(".chip");
      if (chipEl) {
        setChoice(chipEl.getAttribute("data-group"), chipEl.getAttribute("data-value"));
        return;
      }
      var orderBtn = e.target.closest(".card__order");
      if (orderBtn) {
        var svc = SITE_DATA.services.items.filter(function (x) { return x.id === orderBtn.getAttribute("data-service"); })[0];
        if (!svc) return;
        setChoice("service", svc.title);
        var panel = $("#contact");
        if (panel) panel.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
        return;
      }
      var workBtn = e.target.closest(".work");
      if (workBtn) lb.open(Number(workBtn.getAttribute("data-work")));
    });

    var send = $("#sendBtn");
    if (send) {
      send.addEventListener("click", function () {
        var msg = send.getAttribute("data-msg");
        if (!msg) return;
        window.open("https://wa.me/" + SITE_DATA.contact.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
      });
    }

    var note = $("#noteInput");
    if (note) note.addEventListener("input", updateOrder);
  }

  /* ---------- القائمة ---------- */
  function initNav() {
    var burger = $("#burger"), nav = $("#nav"), backdrop = $("#navBackdrop");
    if (!burger || !nav) return;

    function setOpen(open) {
      document.documentElement.classList.toggle("nav-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? SITE_DATA.ui.menuClose : SITE_DATA.ui.menuOpen);
      document.documentElement.style.overflow = open ? "hidden" : "";
      if (backdrop) {
        if (open) { backdrop.hidden = false; }
        else { backdrop.hidden = true; }
      }
    }

    burger.addEventListener("click", function () {
      setOpen(!document.documentElement.classList.contains("nav-open"));
    });
    if (backdrop) backdrop.addEventListener("click", function () { setOpen(false); });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.documentElement.classList.contains("nav-open")) {
        setOpen(false);
        burger.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && document.documentElement.classList.contains("nav-open")) setOpen(false);
    });

    var header = $("#siteHeader");
    if (header) {
      var onScroll = function () { header.classList.toggle("is-stuck", window.scrollY > 8); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  /* ---------- التشغيل ---------- */
  function init() {
    applyMeta();
    renderLogo();
    applyText();
    applyAttrs();
    applyIcons();
    applyLinks();
    injectJsonLd();

    renderServices();
    renderFacts();
    renderFeatures();
    renderWorks();
    renderAreas();
    renderHours();
    initOrder();
    initNav();
    initDrag();
    lb.init();
    renderStatus();

    setInterval(function () { renderStatus(); renderHours(); }, 60000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
