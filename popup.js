// Fetch saved lists from storage and render buttons
function loadLists() {
  chrome.storage.sync.get({ lists: [] }, ({ lists }) => {
    const container = document.getElementById("lists");
    container.innerHTML = "";

    if (!lists.length) {
      container.textContent = "No lists saved yet.";
      return;
    }

    lists.forEach((list, index) => {
      const btn = document.createElement("button");
      btn.textContent = list.name || `List ${index + 1}`;
      btn.addEventListener("click", () => openList(list.urls));
      container.appendChild(btn);
    });
  });
}

// Open each URL in a new tab
function openList(urls = []) {
  urls.forEach((url) => {
    const normalized = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    chrome.tabs.create({ url: normalized, active: false });
  });
}

document.addEventListener("DOMContentLoaded", loadLists); 