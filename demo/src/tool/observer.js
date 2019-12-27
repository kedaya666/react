var observer = {
    arr:{},
    $on(event,cb){
        /* this.arr.push({[event]:cb}) */
        if(!this.arr[event]){
            this.arr[event]=[cb]
        }else{
            this.arr[event].push(cb)
        }
    },
    $emit(event,...msg){
        /* this.arr.forEach((i)=>{
            if(Object.keys(i)[0]==event){
                i[Object.keys(i)[0]](msg)
            }
        }) */
        if(this.arr[event]){
            this.arr[event].forEach(function(cb){
                cb(...msg)
            },this);
        }
    },
    $destory(event){
        delete this.arr[event]
    }
}
export default observer
// 订阅者：做一个事件的监听 
// observer.$on('up',(data)=>{
//     console.log(data)
// })
// observer.$on('down',(data)=>{
//     console.log(data)
// })
// observer.$destory('up')
// 发布者：做一个事件的触发 
// observer.$emit('up',1234)
// observer.$emit('up',1234)
// observer.$emit('down',5678)

