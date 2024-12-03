let count = localStorage.length

const Submit = () =>{
    count = localStorage.length
    console.log(count)
    if (document.getElementById("task").value!=""){
        localStorage.setItem(count,`${document.getElementById("task").value}/in progress`)
    }

    display()
    document.getElementById("task").value = ""
}

const display = ()=>{
    const table = document.getElementsByTagName('table')[0]
    table.innerHTML = `<tr>
                    <th class="s-no">No.</th>
                    <th class="item">Todo item</th>
                    <th class="status">Status</th>
                    <th class="action">Actions</th>
                </tr>`
    for (let i = 0;i<localStorage.length;i++){
        k = localStorage.key(i)
        console.log(i,localStorage[i])
        table.innerHTML+=`<tr>
                    <td class="s-no">${i+1}</td>
                    <td class="item">${localStorage.getItem(k).split("/")[0]}</td>
                    <td class="status">${localStorage.getItem(k).split("/")[1]}</td>
                    <td class="action">
                    <button class="delete" onclick="deleted(${k})">DELETE</button>
                    <button class="finished" onclick="finished(${k})">FINISHED</button>
                    </td>
                </tr>`
    }
}
const deleted = (key)=>{

    localStorage.removeItem(key)
    console.log(localStorage)
    display()
}
const finished = (key)=>{
    value = localStorage.getItem(key).split("/")[0]
    localStorage.setItem(key,value+"/finished")
    display()
}

display()