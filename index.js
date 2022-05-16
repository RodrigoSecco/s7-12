const productsCart = [
    {
        id: 1,
        name: "tv 4k 50 polegadas",
        price: 3000.00
    },
    {
        id: 2,
        name: "notebook gamer",
        price: 5000.00
    },
    {
        id: 3,
        name: "playstation 5",
        price: 4500.00
    },
    {
        id: 4,
        name: "ar condicionado",
        price: 1500.00
    },
    {
        id: 5,
        name: "geladeira",
        price: 2000.00
    }
]

const body = document.querySelector("body")

const principal = document.createElement("main")

body.appendChild(principal)

const lista = document.createElement("ul")

principal.appendChild(lista)

const item0 = document.createElement("li")

lista.appendChild(item0)

item0.id = "MENU"

const item1 = document.createElement("li")

lista.appendChild(item1)

const item2 = document.createElement("li")

lista.appendChild(item2)

const item3 = document.createElement("li")

lista.appendChild(item3)

const item4 = document.createElement("li")

lista.appendChild(item4)

const item5 = document.createElement("li")

lista.appendChild(item5)

let soma = 0

for(let i = 0; i<productsCart.length; i++){
    soma = soma + productsCart[i].price
}

const seccao = document.createElement("section")

principal.appendChild(seccao)

const valor = document.createElement("p")

seccao.appendChild(valor)

const botao = document.createElement("button")

seccao.appendChild(botao)

valor.innerText = "Valor total:  " + soma

botao.innerText = "Finalizar"

item0.innerText = "Item _______________________ Valor"

item1.innerText = productsCart[0].name + "..........................." + productsCart[0].price

item2.innerText = productsCart[1].name + "..............................." + productsCart[1].price

item3.innerText = productsCart[2].name + "...................................." + productsCart[2].price

item4.innerText = productsCart[3].name + "..............................." + productsCart[3].price

item5.innerText = productsCart[4].name + ".........................................." + productsCart[4].price

