const allTags = (listArray, tags) => {
  let listTotal = []
  for (element of listArray) {
    for (let el of element) {
      if (tags in el) {
        listTotal = listTotal.concat(el.tags)
      }
    }
  }
  const listTagsUnique = []
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      listTagsUnique.push(el)
    }
  })
  return listTagsUnique
}
export default allTags