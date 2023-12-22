export default new class {
    async load(filename){
        let data = localStorage.getItem(filename)
        let obj = JSON.parse(data) 
        return obj
    }
    async save(filename, content){
        localStorage.setItem(filename, JSON.stringify({content, lastModified: Date.now()}))
    }
    async trash(filename){
        localStorage.removeItem(filename)
    }
    async list(){
        let currentFiles = []
        for(let i = 0; i < localStorage.length; i++){
            let k = localStorage.key(i)
            let data = localStorage.getItem(k)
            let obj = JSON.parse(data) 
            obj.name = k
            currentFiles.push(obj)
        }
        return currentFiles
    }
}()