export function dragDrop() {
  console.log("dragDrop works");

  const zone1 = document.querySelector(".zone1");
  const zone2 = document.querySelector(".zone2");
  const photo = document.querySelector(".photo");

  zone1.ondragover = dragOver;
  zone2.ondragover = dragOver;

  function dragOver(e) {
    e.preventDefault();
  }

  photo.ondragstart = drag;

  function drag(e) {
    e.dataTransfer.setData("id", e.target.id);
  }

  zone1.ondrop = drop;
  zone2.ondrop = drop;

  function drop(e) {
    let id = e.dataTransfer.getData("id");
    e.target.append(document.getElementById(id));
  }
}
