// var h = document.createElement('h1')
// var myValue = document.createTextNode('hello world...')

// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)
var ul = document.getElementById('list')
var list;


var addButton = document.getElementById('add')
addButton.addEventListener('click',additem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeitem)

document.getElementById('removeAll').addEventListener('click',removeallItems)

function additem()
{
    var input = document.querySelector('input')   
    var item = input.value
    ul = document.getElementById('list')
    var textNode = document.createTextNode(item)

    if (item === ''){
        return false
        //
    }
    else{
        //creating an li
        li = document.createElement('li')
        //creating a checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')
        //creating a label
        var label = document.createElement('label')
        label.setAttribute('for','item')

        //add these elements in webpage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className = 'visual'
        }, 5);
        input.value = ''
    }
}

function removeitem()
{
    list = ul.children;
    for (let index = 0; index < list.length; index++) {
        while (list[index] && list[index].children[0].checked) {
            ul.removeChild(list[index])
        }
    }
}

function removeallItems(){
    list=ul.children
    for (let index = 0; index < list.length; index++) {
        list[index].remove()
    }
}