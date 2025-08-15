const listsContainer = document.getElementById("lists");
const addBtn = document.getElementById("addListBtn");
const saveBtn = document.getElementById("saveBtn");

function renderLists(lists = []) {
  listsContainer.innerHTML = "";

  lists.forEach((list, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "list";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "List name";
    nameInput.value = list.name || "";

    const urlTextarea = document.createElement("textarea");
    urlTextarea.placeholder = "One URL per line";
    urlTextarea.value = (list.urls || []).join("\n");

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      wrapper.remove();
    });

    buttonsDiv.appendChild(removeBtn);

    wrapper.appendChild(nameInput);
    wrapper.appendChild(urlTextarea);
    wrapper.appendChild(buttonsDiv);

    listsContainer.appendChild(wrapper);
  });
}

function gatherData() {
  const wrappers = document.querySelectorAll(".list");
  const newLists = [];

  wrappers.forEach((wrapper) => {
    const name = wrapper.querySelector("input").value.trim();
    const urls = wrapper
      .querySelector("textarea")
      .value.split(/\n+/)
      .map((u) => u.trim())
      .filter(Boolean);

    if (name && urls.length) {
      newLists.push({ name, urls });
    }
  });
  return newLists;
}

function loadSaved() {
  chrome.storage.sync.get({ lists: [] }, ({ lists }) => {
    renderLists(lists);
  });
}

addBtn.addEventListener("click", () => {
  renderLists([...gatherData(), { name: "", urls: [] }]);
});

saveBtn.addEventListener("click", () => {
  const data = gatherData();
  chrome.storage.sync.set({ lists: data }, () => {
    alert("Lists saved!");
  });
});

document.addEventListener("DOMContentLoaded", loadSaved); 