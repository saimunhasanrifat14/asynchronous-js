// const p = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject({data : null})
//     }, 2000);
// })
// p.then((data)=>{
//     console.log(data); 
// }).catch((err)=>{
//     console.log(err);
    
// })

// function dataFetch (){
//     const fetchPromise = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//            resolve("Data Fetch done")
//         }, 2000);
//     })
//     return fetchPromise
// }
// dataFetch().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// console.log(fetch());

// function feetch (){
//     const p = new Promise((res, rej)=>{
//       if(true){
//         res( url)
//       }else{
//         rej("")
//       }
//       return p
//     })
// }
// console.log(feetch());


// fetch('https://dummyjson.com/products').then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

function dataFetch (url){
    return new Promise((resolve, reject)=>{
        fetch('https://dummyjson.com/products').then((res)=>{
            resolve(res)
            
        }).catch((err)=>{
            reject(err)
        })
    })
}
function categorywise (){
    return new Promise((resolve, reject)=>{
        fetch('https://dummyjson.com/products/category-list').then((res)=>{
            resolve(res)
            
        }).catch((err)=>{
            reject(err)
            
        })
    })
}
function categorywiseData(){
    return new Promise((resolve, reject)=>{
        fetch('https://dummyjson.com/products/category/smartphones').then((res)=>{
            resolve(res)
            
        }).catch((err)=>{
            reject(err)
        })
        
    })
}
// dataFetch()
// categorywise()
// categorywiseData()

dataFetch().then((data1)=>{
    console.log(data1.url);
    return categorywise()
}).then((data2)=>{
    console.log(data2.url);
    return categorywiseData()
}).then((data3)=>{
    console.log(data3.url);
    
}).catch((err)=>{
    console.log(err);
    
})