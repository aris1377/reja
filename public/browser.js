console.log("FrontEnd JS ishga tushdi");

function itemTemplat(item) {
  return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn -secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm">
              Ochirish
            </button>
          </div>
        </li>`;
}

//new_reja degan value ni endi qabul qilishimiz kk
let createField = document.getElementById("create-field");

//create formni qolga olamiz
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplat(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function (e) {
  //delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimiisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((respose) => {
          console.log(respose.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling!");
        });
    }
  }

  //edit oper
  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
  }
});
