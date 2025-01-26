function fetchData (){
    return new Promise((resolve, reject)=>{
        fetch('https://dummyjson.com/products').then((res)=>{
            return res.json()
        }).then((data)=>{
            return data.products
        }).then((product)=>{
            resolve(product)
        }).catch((err)=>{
            reject(err)
        })
    })
}
function singleData (id){
    return new Promise((resolve, reject)=>{
        fetch(`https://dummyjson.com/products/${id}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            return data.products
        }).catch((err)=>{
            reject(err)
        })
    })
}
function display(data){
    console.log("from display function", data);
}
fetchData().then((data)=>{
    return data;
}).then((finalData)=>{
    singleData(1)
})