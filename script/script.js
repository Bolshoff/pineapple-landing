

let containers;
function initDrawers() {
  containers = document.querySelectorAll(".questions__qa-element");
  setHeights();
  wireUpTriggers();
  window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
  containers.forEach(container => {

    let content = container.querySelector(".questions__qa-element-content");
    content.removeAttribute("aria-hidden");
    let heightOfContent = content.getBoundingClientRect().height;
    container.style.setProperty("--containerHeight", `${heightOfContent}px`);

    setTimeout(e => {
      container.classList.add("height-is-set");
      content.setAttribute("aria-hidden", "true");
    }, 0);
  });
}

function wireUpTriggers() {
  containers.forEach(container => {

    let btn = container.querySelector(".trigger");
    let content = container.querySelector(".questions__qa-element-content");
    let arrow = container.querySelector(".questions__qa-element-image");
    btn.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", btn.getAttribute("aria-expanded") === "false" ? "true" : "false");
      container.setAttribute(
          "data-drawer-showing",
          container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
      );
      content.setAttribute(
          "aria-hidden",
          content.getAttribute("aria-hidden") === "true" ? "false" : "true"
      );

      arrow.classList.toggle('active');
      console.log('click');
    });
  });
}