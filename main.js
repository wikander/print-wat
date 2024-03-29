function handlePrintChange(isPrint) {
  console.log(isPrint);
  const container = document.querySelector("body > div");
  if (container) {
    container.innerHTML = JSON.stringify(isPrint);
  }
}

const mql = globalThis.matchMedia("print");
handlePrintChange(mql.matches);
mql.addEventListener("change", (evt) => {
  console.log(evt);
  handlePrintChange(evt.matches);
});

window.addEventListener("beforeprint", () => console.debug("Before print"));
window.addEventListener("afterprint", () => console.debug("After print"));

document.querySelector("button#print").addEventListener("click", () => window.print());
