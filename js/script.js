const spesaOut = document.getElementById("spesa");
let i = 0;
const list = [
  "carciofi",
  "mele",
  "peperoni",
  "pollo",
  "gelato"
]

while (i < list.length ) {
  const item = list[i];
  spesaOut.innerHTML += "<li class=\"list-group-item\">" + item + "</li>";
  i++;
}