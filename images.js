function image(obraz, styl) {
  let element = document.createElement("div");
  element.style.backgroundImage = `url(/background/${obraz})`;
  element.style.backgroundPosition = "0 30%"
  element.classList.add(`${styl}`)
  document.querySelector(".bg").appendChild(element);
}

function galleryImage(obraz) {

  const element = document.createElement("a");
  document.querySelector(".gallery").appendChild(element)

  const IMG = document.createElement("img")
  IMG.src = `/gallery/${obraz}`
  IMG.alt = ""
  

  IMG.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("visible")
    document.querySelector(".inner>img").src = `/gallery/${obraz}`
  })

  element.appendChild(IMG)
}



const directoryPath = '/background/';
const fileExtensions = ['.jpg', '.jpeg'];

fetch(directoryPath)
  .then(response => response.text())
  .then(text => {
    const html = new DOMParser().parseFromString(text, 'text/html');
    const obrazy = Array.from(html.querySelectorAll('a'))
      .map(a => a.href.split('/').pop())
      .filter(href => {
        const extension = href.split('.').pop().toLowerCase();
        return fileExtensions.includes('.' + extension);
      });


    let indexVis = 0
    let indexTop = 1


    function createStyle() {
      document.querySelector(".bg").innerHTML = ""

      if (indexTop == 0) {
        indexVis = 0
        indexTop = 1
      } else if (indexTop !== obrazy.length - 1) {

        indexVis += 1
        indexTop += 1

      } else if (indexTop == obrazy.length - 1) {
        indexVis = obrazy.length - 1
        indexTop = 0
      }

      let style = new Array(obrazy.length)
      style.fill("visible", indexVis, indexVis + 1)
      style.fill("visible_top", indexTop, indexTop + 1)


      for (let i = 0; i < style.length; i++) {

        image(obrazy[i], style[i])
      }


    }
    setTimeout(createStyle, 0)
    setInterval(createStyle, 10000)

  });

fetch("./gallery/")
  .then(res => res.text())

  .then(res => {
    const galleryHTML = new DOMParser().parseFromString(res, 'text/html')


    const galeriaTab = Array.from(galleryHTML.querySelectorAll("a"))
      .map(e => e.href.split("/").pop())

      .filter(e => {
        const extension = e.split('.').pop().toLowerCase();
        return fileExtensions.includes('.' + extension);
      });

    galeriaTab.forEach((e)=>{galleryImage(e); console.log(e})


  })

















