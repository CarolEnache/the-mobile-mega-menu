menu1 = [
  ...document.querySelectorAll('.wedding-navigation .parentLink')
].map(parentLink => {
  let mainLink = parentLink.querySelector('.mainLink')
  let dropdownHeader = parentLink.querySelector('.dropdownHeader')
  let colList = [...parentLink.querySelectorAll('.col')]
  // check if the next title in the mainLink has text, if not return empty string 
  let dropdownHeaderText = dropdownHeader ? dropdownHeader.innerText : ''
  if (mainLink) {
    return {
      level1: mainLink.innerText,
      link1: mainLink.href,
      dropdownHeaderText,
      list: colList.map(col => {
        return [...col.querySelectorAll('a')].map(a => ({
          link: a.href,
          text: a.innerText
        }))
      })
    }
  }
})
