function domDFS(node) {
  // console.log(node.nodeName);
  let child = node.firstChild;

  if (child == null)
    if (node.textContent) {
      let searchMask = new RegExp("ё", "ig");
      node.textContent = node.textContent.replace(searchMask, "е");

      for (let entry of swearDictionary.entries) {
        searchMask = new RegExp(entry.key, "ig");
        node.textContent = node.textContent.replace(searchMask, entry.value);
      }
    }
    
  while (child) {
    domDFS(child);
    child = child.nextSibling;
  }
}

domDFS(document.documentElement);
