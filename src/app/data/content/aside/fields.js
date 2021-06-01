// #generic

// Faire liste exhaustive

// Filter Fields
export const allFields = (listArray) => {
  let listTotal = []
  for (let element of listArray) {
    for (let el of element.items) {
      if ("fields" in el) {
        listTotal = listTotal.concat(el.fields)
      }
    }
  }
  const listFieldsUnique = []
  listTotal.forEach((el) => {
    if (!listFieldsUnique.includes(el)) {
      listFieldsUnique.push(el)
    }
  })
  return listFieldsUnique
}

export const fields = [
  "Filter by field",
  "Filtrar por campo",
  "Filtrer par domaine",
]
