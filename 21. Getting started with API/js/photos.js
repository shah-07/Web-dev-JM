function loadPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
}
loadPhotos();
function displayPhotos(photos) {
  const photosContainer = document.getElementById("photos");

  for (const photo of photos) {
    if (photo.id > 10) {
      break;
    }
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = `
    <img src='${photo.thumbnailUrl}'>
    `;
    photosContainer.appendChild(div);
  }
}
