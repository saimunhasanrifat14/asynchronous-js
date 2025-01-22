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
function display(data){
    console.log("from display function", data);
}
fetchData().then((data)=>{
    return data;
}).then((finalData)=>{
    display(finalData)
})