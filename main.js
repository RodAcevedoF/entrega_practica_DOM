const navHeader = document.querySelector(".header-nav")
const navMenu = `<nav class="nav-hidden">
<ul>
<li><a href="https://www.norsegarde.com/en-es">HOME</a></li>
<li><a href="https://www.norsegarde.com/en-es/collections/odins-choice-1">BEST SELLERS</a></li>
<li><a href="https://www.norsegarde.com/en-es/collections/handcrafted-viking-jewelry">HANDCRAFTED</a></li>
<li><a href="https://www.norsegarde.com/en-es/pages/reviews">REVIEWS</a></li>
</ul>
</nav>`

navHeader.insertAdjacentHTML("beforeend", navMenu)
const insNav = document.querySelector(".nav-hidden")
if (navHeader && insNav) {
  navHeader.addEventListener("mouseover", () => {
    insNav.classList.remove("nav-hidden")
    insNav.classList.add("nav-hover")
  })

  navHeader.addEventListener("mouseout", () => {
    insNav.classList.remove("nav-hover")
    insNav.classList.add("nav-hidden")
  })
}

const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
btn.addEventListener("click", () => {
  search.classList.toggle("active")
  input.focus();
});

document.addEventListener("scroll", () => {
  const container = document.querySelector("header")

  const containerRect = container.getBoundingClientRect()
  const navRect = navHeader.getBoundingClientRect()

  if (containerRect.bottom <= navRect.height) {
    navHeader.style.position = "fixed"
  } else {
    navHeader.style.position = "sticky"
  }
})

const dropCart = `<ul class="cart-drop">
      <li>Your cart is empty</li>
  </ul>`
const cart = document.querySelector(".cart")
navHeader.insertAdjacentHTML("beforeend", dropCart)
cart.addEventListener("click", () => {
  let dropdown = document.querySelector(".cart-drop")
  dropdown.classList.toggle("drop")
})

const burgerBtn = document.querySelector(".burger-button");
burgerBtn.insertAdjacentHTML(
  "afterend",
  `
<ul class="burger-menu">
  <li><a href="https://www.norsegarde.com/en-es">HOME</a></li>
  <li><a href="https://www.norsegarde.com/en-es/collections/odins-choice-1">BEST SELLERS</a></li>
  <li><a href="https://www.norsegarde.com/en-es/collections/handcrafted-viking-jewelry">HANDCRAFTED</a></li>
  <li><a href="https://www.norsegarde.com/en-es/pages/reviews">REVIEWS</a></li>
  <li>
        <select name="currency" id="currency-burger">
          <option value="US" data-content="">US $</option>
          <option value="EUR">EUR €</option>
          <option value="GBP">GBP £</option>
        </select>
  </li>
</ul>`
);
const burgerMenu = document.querySelector(".burger-menu");
burgerBtn.addEventListener("click", () => {
  let firstSpan = document.querySelector(".burger-button span:first-child")
  let midSpan = document.querySelector(".burger-button span:nth-child(2)")
  let lastSpan = document.querySelector(".burger-button span:last-child")
  firstSpan.classList.toggle("anim-first")
  midSpan.classList.toggle("anim-mid")
  lastSpan.classList.toggle("anim-last")
  burgerMenu.classList.toggle("drop")
})

const bestSellers = [
  {
    name: "Thor's Mjölnir",
    price: "138.90€",
    reviews: 300,
    mostWanted: true,
    url: "https://northlord.com/products/mjolnir-pendant-hand-forged-steel",
    image:
      "https://www.vikingwarriorshirts.com/cdn/shop/files/elegant-knotwork-small-thors-hammer-pendant-necklace-1_5000x.jpg?v=1705549521"
  },
  {
    name: "Jörmungandr bracelet",
    price: "152.85€",
    reviews: 120,
    mostWanted: false,
    url: "https://www.norsegarde.com/en-es/products/viking-serpent-bracelet-steel",
    image:
      "https://i.postimg.cc/DyQyqBqK/Silver-vintage-mens-jewellery-hip-hop-punk-head-variants-1.jpg"
  },
  {
    name: "Fenrir bracelet",
    price: "162.85€",
    reviews: 80.0,
    mostWanted: true,
    url: "https://www.vikingwarriorshirts.com/products/wolf-ragnarok-bracelet?variant=43190480044181",
    image:
      "https://www.vikingwarriorshirts.com/cdn/shop/files/fenrir-sun-eater-wolf-of-ragnarok-bracelet-viking-jewelry-1_300x.jpg?v=1704837939"
  },
  {
    name: "Asgard runic ring",
    price: "62.90€",
    reviews: 325,
    mostWanted: false,
    url: "https://skullvikings.com/products/sterling-silver-vegvisir-ring",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Spiral_form_double_head_wolf_ring_2_1000x.JPG?v=1599823024"
  }
]
const newArrivals = [
  {
    name: "Lost runes",
    price: "98.90€",
    reviews: 5,
    new: true,
    url: "https://www.northanvikingsilver.com/collections/rings/products/rune-ring",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Rune_ring_3_1000x.JPG?v=1599066780"
  },
  {
    name: "Valknut Odin",
    price: "118.90€",
    reviews: 3,
    new: true,
    url: "https://www.northanvikingsilver.com/collections/rings/products/valknut-of-odin-ring",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Valknut_of_Odin_ring_2_1000x.JPG?v=1550326856"
  },
  {
    name: "Viking raven",
    price: "118.90€",
    reviews: 3,
    new: true,
    url: "https://www.northanvikingsilver.com/collections/rings/products/viking-raven-ring-with-interlace-pattern",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Ravens_Sterling_Silver_Viking_ring_2_1000x.jpg?v=1570972987"
  },
  {
    name: "Mask of Oding",
    price: "170.90€",
    reviews: 3,
    new: true,
    url: "https://www.northanvikingsilver.com/collections/pendants/products/mask-of-odin-pendant",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Mask_of_Odin_pendant_5_1000x.jpg?v=1548853605"
  }
]
const bestNew = document.querySelector(".best-new > ul");
for (let bestItem of bestSellers) {
  if (bestItem.mostWanted) {
    let newLi = `<li class="best-sellers onlysell">
              <p>MOST WANTED</p>
              <a href=${bestItem.url} target="_blank"
            rel="noopener noreferrer"><img src=${bestItem.image} alt=${bestItem.name}></a>
            <div class="div-tag">  
            <a href=${bestItem.url} target="_blank"
            rel="noopener noreferrer">${bestItem.name}</a>
              <p>${bestItem.price}</p>
              </div>
              </li>`;
    bestNew.insertAdjacentHTML("afterbegin", newLi)
  } else {
    let newLi = `<li class="best-sellers onlysell">
                <a href=${bestItem.url} target="_blank"
            rel="noopener noreferrer"><img src=${bestItem.image} alt=${bestItem.name}></a>
            <div class="div-tag">    
            <a href=${bestItem.url} target="_blank"
            rel="noopener noreferrer">${bestItem.name}</a>
                <p>${bestItem.price}</p>
                </div>
                </li>`
    bestNew.insertAdjacentHTML("afterbegin", newLi)
  }
}
for (let newItem of newArrivals) {
  let newLi = `<li class="best-sellers onlyarrive">
  <p>NEW ARRIVAL</p>
  <a href=${newItem.url} target="_blank"
            rel="noopener noreferrer"><img src=${newItem.image} alt=${newItem.name}></a>
            <div class="div-tag">
            <a href=${newItem.url} target="_blank"
            rel="noopener noreferrer">${newItem.name}</a>
    <p>${newItem.price}</p>
    </div>
                          </li>`
  bestNew.insertAdjacentHTML("afterbegin", newLi)
}

const btnBestSell = document.querySelector("#bestsell")
const onlySell = document.querySelectorAll(".onlysell")
const btnNewArrival = document.querySelector("#newarrival")
const onlyArrive = document.querySelectorAll(".onlyarrive")

btnNewArrival.addEventListener("click", () => {
  onlySell.forEach((elem) => elem.classList.add("onlyarrive"))
  onlyArrive.forEach((elem) => elem.classList.remove("onlyarrive"))
})
btnBestSell.addEventListener("click", () => {
  onlyArrive.forEach((elem) => elem.classList.add("onlyarrive"))
  onlySell.forEach((elem) => elem.classList.remove("onlyarrive"))
})
const handcraftedColl = [
  {
    name: "Handcrafted Pendants",
    itemsColl: 36,
    url: "https://www.northanvikingsilver.com/collections/pendants/products/odin-horned-warrior-pendant",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Odin_pendant_with_horned_Viking_warrior_4_1000x.JPG?v=1549033158",
    imageB:
      "https://www.northanvikingsilver.com/cdn/shop/products/Lovers_teardrop_pendant_5_1000x.jpg?v=1548868518"
  },
  {
    name: "Handcrafted Rings",
    itemsColl: 19,
    url: "https://www.northanvikingsilver.com/collections/rings/products/winged-viking-raven-wing",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Winged_Viking_Raven_Ring_nature_5_1000x.jpg?v=1542124717",
    imageB:
      "https://www.northanvikingsilver.com/cdn/shop/products/Vikingloverunering1_1000x.jpg?v=1589730421"
  },
  {
    name: "Handcrafted Bracelets",
    itemsColl: 5,
    url: "https://norsespirit.com/products/stainless-steel-valknut-and-celtic-design-bracelet",
    image:
      "https://odins-hall.es/cdn/shop/products/bracelet-viking-valknut-ajustable-en-acier-inoxydable-31552036896919.jpg?v=1652889675&width=750",
    imageB:
      "https://www.northanvikingsilver.com/cdn/shop/products/Viking_Wolf_Armring_1_1000x.JPG?v=1542123067"
  },
  {
    name: "Handcrafted Necklaces",
    itemsColl: 3,
    url: "https://www.northanvikingsilver.com/collections/chains/products/3mm-diameter-silver-viking-chain-with-wolf-head-terminals",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Silver_viking_chain_with_wolf_heads_3mm_3_1000x.JPG?v=1542121912",
    imageB:
      "https://www.northanvikingsilver.com/cdn/shop/products/Viking_warrior_mask_pendant_from_Trelleborg_1_1000x.JPG?v=1549388881"
  },
  {
    name: "Handcrafted Armrings",
    itemsColl: 9,
    url: "https://www.northanvikingsilver.com/collections/armrings/products/viking-armring-with-two-ravens",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Silver_viking_Raven_Arm_ring_2_1000x.jpg?v=1581773903",
    imageB:
      "https://www.northanvikingsilver.com/cdn/shop/products/5_9f02a49b-cc69-48b9-938f-c812e34cf8ee_1000x.jpg?v=1551373084"
  },
  {
    name: "Handcrafted Earrings",
    itemsColl: 4,
    url: "https://www.northanvikingsilver.com/collections/earrings/products/urnes-wolf-viking-earrings",
    image:
      "https://www.northanvikingsilver.com/cdn/shop/products/Silver_Wolf_Viking_Earrings_2_1000x.JPG?v=1616164038",
    imageB:
      "https://www.northanvikingsilver.com/cdn/shop/products/Viking_Raven_Earrings_1_1000x.JPG?v=1551807563"
  }
]
const collUl = document.querySelector(".collections > article > ul");
for (let collItem of handcraftedColl) {
  let newLi = `
    <li class="coll-li">
      <a href="${collItem.url}" target="_blank" rel="noopener noreferrer">
        <img src="${collItem.image}" alt="${collItem.name}">
      </a>
      <div class="div-coll">
        <p>PREMIUM COLLECTION</p>
        <a href="${collItem.url}" target="_blank" rel="noopener noreferrer">${collItem.name}</a>
        <a href="${collItem.url}" target="_blank" rel="noopener noreferrer">VIEW PRODUCTS</a>
      </div>
    </li>`
  collUl.insertAdjacentHTML("afterbegin", newLi)
}

const collLiImgs = document.querySelectorAll(".coll-li img")

collLiImgs.forEach((img, index) => {
  img.addEventListener("mouseover", () => {
    img.src = handcraftedColl[index].imageB;
  })
  img.addEventListener("mouseout", () => {
    img.src = handcraftedColl[index].image;
  })
})

const showCase = [
  {
    name: "The truster",
    price: "75.99€",
    url: "https://outlaws.amsterdam/products/the-truster-necklace",
    image:
      "https://i.postimg.cc/FKr8LHqM/compass-of-life-necklace-155282.jpg",
    imageB:
      "https://outlaws.amsterdam/cdn/shop/files/the-truster-necklace-920453_77162dd3-814e-4def-b153-991e881f0dc0.jpg?v=1692192822&width=700"
  },
  {
    name: "Wolfhead Ring",
    price: "80.90€",
    url: "https://www.northanvikingsilver.com/collections/rings/products/viking-wolf-head-ring",
    image:
      "https://i.postimg.cc/L8PbnxWz/royal-flush-884025.jpg",
    imageB:
      "https://www.northanvikingsilver.com/cdn/shop/products/Viking_wolf_head_ring_2_1000x.JPG?v=1550324463"
  },
  {
    name: "Norseman Ring",
    price: "25.99€",
    image:
      "https://i.postimg.cc/hGq3x9FN/vikings-gold-366990.jpg",
    imageB:
      "https://outlaws.amsterdam/cdn/shop/products/vikings-silver-516596.jpg?v=1643350266&width=1000"
  }
]

let i = 0

const memberLooks = document.querySelector(".member-look")

const renderItem = (index) => {
  const { name, price, url, image, imageB } = showCase[index];
  memberLooks.innerHTML = `
    <button class="btn-member-left" type="button">◄</button>
    <div class="fades">
    <img src="${image}" alt="${name}" id="member-pic">
    <article>
      <img src="${imageB}" alt="${name}" id="prod-pic">
      <h4><a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a></h4>
      <p>${price}</p>
      <a href="${url}" target="_blank" rel="noopener noreferrer">VIEW PRODUCT</a>
    </article>
    </div>
    <button class="btn-member-right" type="button">►</button>
  `
}

const updateIdx = (direction) => {
  const fades = document.querySelector(".fades")
  fades.classList.add("fade-out")
  setTimeout(() => {
    if (direction === "next") {
      i = (i + 1) % showCase.length;
    } else if (direction === "prev") {
      i = (i - 1 + showCase.length) % showCase.length;
    }
    renderItem(i)

    fades.classList.remove("fade-out")
    fades.classList.add("fade-in")

    setTimeout(() => {
      fades.classList.remove("fade-in")
    }, 250)
  }, 250)
}

renderItem(i)

memberLooks.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-member-right")) {
    updateIdx("next")
  } else if (event.target.classList.contains("btn-member-left")) {
    updateIdx("prev")
  }
})
