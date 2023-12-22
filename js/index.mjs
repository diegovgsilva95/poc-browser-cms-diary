import fileInterface from "./file-interface-localstorage.mjs"

feather.replace()

let fileListElm = $("#file-list")
let editor = $(".content-editor")
let titleElm = $("#content-title") 
let autosaveTimer = null

async function listFiles(){
    let currentFiles = await fileInterface.list()
    currentFiles.sort((a,b)=>b.lastModified - a.lastModified)
    fileListElm.empty()
    for(let file of currentFiles){
        fileListElm.append($("<option />").val(file.name).text(file.name))
    }

}
async function saveFile(content, filename){
    await fileInterface.save(filename, content)
}
async function loadFile(filename){
    let obj = await fileInterface.load(filename)
    if(!obj){
        console.warn(`Failed to load ${filename}`)
        return
    }
    editor.empty().html(obj.content)
    titleElm.val(filename)
}
async function deleteFile(filename){
    await fileInterface.trash(filename)
    newFile()
    listFiles()
}
async function autosave(){
    let title = titleElm.val()
    autosaveTimer = null
    saveFile(editor.html().trim(), title)
    await listFiles()
    for(let opt of fileListElm[0].options){
        if(opt.value == title){
            opt.selected = true
            break
        }
    }
}
function newFile(){
    titleElm.val(`Untitled ${moment().format("YYYY-MM-DD HH:mm:ss")}`)
    editor.empty().append("<p />")
    editor[0].focus()
    fileListElm[0].selectedIndex=-1
}

fileListElm.on("change", function(ev){
    loadFile(this.value)
})

document.execCommand('defaultParagraphSeparator', false, 'p'); 
editor.on("input", function(ev){
    let html = this.innerHTML.trim()
    if(html.length == 0){
        let para = $("<p />").text("")
        $(this).append(para)
    }
    if(autosaveTimer)
        clearTimeout(autosaveTimer)
    
    autosaveTimer = setTimeout(autosave, 1000)
})

newFile()
listFiles()

$("#btn-new").on("click", function(){
    newFile()
})
$("#btn-del").on("click", function(){
    let selectedFile = fileListElm[0].value
    if(selectedFile)
        if(confirm(`Are you sure to delete ${selectedFile}?`)){
            deleteFile(selectedFile)
        }
})
fileListElm.on("click", function(ev){
    if(ev.target == this){
        this.selectedIndex=-1
        newFile()
    }
})