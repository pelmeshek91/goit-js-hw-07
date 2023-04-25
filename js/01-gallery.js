import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector("ul");
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
galleryList.insertAdjacentHTML("afterbegin", markup);
galleryList.addEventListener("click", openFullItem);
function openFullItem(e) { 
  e.preventDefault()
  if (e.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${e.target.dataset.source}"
    />
`);
  instance.show();
}
