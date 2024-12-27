const input = document.querySelector("input")
const btn = document.querySelector("button")
const list = document.querySelector(".list")


const arrList = [];

btn.onclick = ()=> {
    if(!input.value.trim())return alert("Напиши что нибудь");

    arrList.push(input.value);
    input.value = "";
    console.log(arrList);

    list.innerHTML = '';
    arrList.forEach(item =>{
        const p = document.createElement("p")
        p.innerHTML = item.split("").reverse().join("")
        list.append(p)
    })
}






