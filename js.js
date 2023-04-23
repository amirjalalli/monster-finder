showMonster()
notFound()
let allData
const getApi = fetch("./MOCK_DATA.json")
getApi.then((res) => {
    return res.json().then((monsters) => {
        return  handleData(monsters)
    })
}).catch((err) => console.log(err))

function handleData(monster) {
    for (let mon of monster) {
        showMonster(mon)
    }
}

function showMonster(item) {

    let monster = document.createElement("div");
  monster.className = "img";

  const imageTag = document.createElement("img");
  imageTag.src = `https://robohash.org/${item?.id}?set=set2`;
  imageTag.alt = "amir jalali";

  const p1 = document.createElement("p");
  p1.innerText = item?.first_name;

  const p2 = document.createElement("p");
  p2.innerText = item?.last_name;

  monster.append(imageTag, p1, p2);
    document.querySelector(".monster").append(monster)



}

function notFound() {

    const notFoundDiv = document.createElement("div")
    notFoundDiv.className = "not-found"
    notFoundDiv.style.display = "none"
    
    const spanNotFound = document.createElement("span")
    spanNotFound.className = "status-code"
    spanNotFound.innerText = "404"
    
    const h1Elem = document.createElement("h1")
    h1Elem.innerText = " no Monster Found"
    
    
    notFoundDiv.append(spanNotFound,h1Elem)
    document.querySelector(".monster").append(notFoundDiv)

}

document.querySelector(".finder-monster").addEventListener("keyup", (e) => {
    let nameMonster = e.target.value.toLowerCase()



    const findMonster = document.querySelectorAll(".img")
    let not = true
    for (let mon of findMonster) {

        const name = mon.children[1].innerText.toLowerCase()
        const family = mon.children[2].innerText.toLowerCase()
    
        if(name.includes(nameMonster || family.includes(nameMonster))) {
            mon.style.display = "block"
            not =  false
        }else {
            mon.style.display = "none"
        }
    }
    if(not) {
        document.querySelector(".not-found").style.display = "block"
      
    }else {
        document.querySelector(".not-found").style.display = "none"
    }
})

// function handleCapitalizeFirstLetter (letter) {
//     const letters = letter.charAt(0).toUpperCase() + letter.slice(1)
//     return letters
// } 