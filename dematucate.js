function domDFS(node) {
  let child = node.firstChild;

  if (child == null)
    if (node.textContent) {
      let words = node.textContent.split(/([ ,:;\-\?\!\.])/g);
      let result = "";
      let changes = false;
      for (let word of words) {
        let adjustedWord = word.toLowerCase().replace("ё", "е");
        if (wordlist.includes(adjustedWord)) {
          for (let entry of swearDictionary.entries) {
            if (adjustedWord.includes(entry.key))
              changes = true;
            adjustedWord = adjustedWord.replace(entry.key, entry.value);
          }
          result += adjustedWord + " ";
        } else
          result += word + " ";
      }
      if (changes)
        node.textContent = result;
    }

  while (child) {
    domDFS(child);
    child = child.nextSibling;
  }
}

domDFS(document.documentElement);
