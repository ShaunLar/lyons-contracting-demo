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

document.querySelectorAll("#filters .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#filters .chip").forEach((c) => c.classList.remove("on"));
    chip.classList.add("on");
    const f = chip.dataset.f;
    document.querySelectorAll("#jobs .job").forEach((job) => {
      job.style.display = f === "all" || job.dataset.type === f ? "" : "none";
    });
  });
});
