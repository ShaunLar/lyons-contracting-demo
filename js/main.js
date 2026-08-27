const form = document.getElementById("lead-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("#email")?.value.trim();
    const phone = form.querySelector("#phone")?.value.trim();
    if (!email && !phone) {
      alert("Leave an email or a phone — not both required, but one is.");
      return;
    }
    form.style.display = "none";
    const success = document.getElementById("success");
    if (success) success.style.display = "block";
  });
}
const reviews = [
  { name: "Geva L.", text: "Who you hire matters when it comes to protecting your home. A quality roof is one of the best investments you can make. Tom consistently delivers." },
  { name: "Emmanuel M.", text: "Excellent service overall. The team was responsive through a busy holiday season. Tom was honest about the issue and did not look to upsell." },
  { name: "Mike K.", text: "Tom Petrilli and his crew replaced my roof at a very reasonable price. He stayed in constant communication through the entire job." },
  { name: "Christina S.", text: "Fantastic from start to finish. Tom came out quickly for the estimate and kept us updated. Ismael was a thorough PM. We love the new roof — so do the neighbors." },
  { name: "David H.", text: "The Lyons folks were very accommodating and came the next day to assess the problem." },
  { name: "Matt M.", text: "Recommended by a friend and they lived up to the reputation they have in Alexandria and Old Town." },
  { name: "Lino M.", text: "They did my neighbor’s roof first. Tom came the day after I called, wrote the proposal quickly, and never tried to upsell." },
  { name: "Caryn T.", text: "Another company took three weeks. Tom answered Friday evening and quoted the next day." },
  { name: "MHL", text: "Especially experienced with the flat, rubber-membrane roofs that are common in Alexandria." },
  { name: "Steve C.", text: "Replaced my roof last week. Professional crew and left the site clean each day. The work turned out just as they described." },
  { name: "Emil P.", text: "Professionalism and expertise were obvious from the first visit. Glad we chose Tom and Lyons Contracting." },
  { name: "Marcia F.", text: "Comprehensive and fair estimate with no add-ons later. The crew was focused and thorough in clean-up. Tom stayed involved." },
  { name: "Brandon H.", text: "Tom put a roof on my house 20 years ago and has been fantastic on service. Shows up within a day when something needs attention." },
  { name: "Alyssa R.", text: "They have done roof coping, a bathroom fan, and repairs for us over several years. Quality of work is top notch." },
  { name: "Dan N.", text: "Consistently professional workmanship, clear communication, and prompt completion. We felt confident the whole way through." }
];
function renderCarousel() {
  const track = document.getElementById("review-track");
  const dots = document.getElementById("review-dots");
  if (!track) return;
  const pageSize = window.matchMedia("(max-width: 860px)").matches ? 1 : 3;
  const pages = Math.ceil(reviews.length / pageSize);
  let page = 0;
  function paint() {
    const start = page * pageSize;
    const slice = reviews.slice(start, start + pageSize);
    track.innerHTML = slice.map((r) => `
      <blockquote class="review">
        <p class="stars">★★★★★</p>
        <p>“${r.text}”</p>
        <p class="tag who">${r.name} · Google</p>
      </blockquote>
    `).join("");
    if (dots) {
      dots.innerHTML = Array.from({ length: pages }, (_, i) =>
        `<button class="dot${i === page ? " on" : ""}" data-p="${i}" aria-label="Review set ${i + 1}"></button>`
      ).join("");
      dots.querySelectorAll(".dot").forEach((d) => {
        d.addEventListener("click", () => { page = Number(d.dataset.p); paint(); });
      });
    }
  }
  document.getElementById("rev-prev")?.addEventListener("click", () => {
    page = (page - 1 + pages) % pages;
    paint();
  });
  document.getElementById("rev-next")?.addEventListener("click", () => {
    page = (page + 1) % pages;
    paint();
  });
  setInterval(() => {
    page = (page + 1) % pages;
    paint();
  }, 7000);
  paint();
}
renderCarousel();
