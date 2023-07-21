const button = document.querySelectorAll('.filter_button button');
const filter_card =document.querySelector('.filter_card');
console.log(Products)
import {Products} from './data.js'

button.forEach(element=>{
    element.addEventListener('click', (e)=>{
        

        let filterdata = Products.filter(element=>{
            if(e.target.value === 'All'){
                return element;
             

            }else if(e.target.value === 'phone'){
                 return element.id === 'phone'
            }else if (e.target.value === 'cloth'){
                return element.id === 'cloth'
            }else if (e.target.value === 'shoes'){
                return element.id === 'shoes'
            }else if(e.target.value === 'heigh_to_low'){
                return Products.sort((a, b)=>{
                    return b.price.mrp - a.price.mrp;
                })
            }else if(e.target.value === 'low_to_heigh'){
                return Products.sort((a, b)=>{
                    return a.price.mrp - b.price.mrp;
                })
            }

        })
       
        filter_card.innerHTML = "";
        getdata()
        
         function getdata(){
            for(let i = 0; i < filterdata.length; i++){
            const div1 = document.createElement("div")
            console.log(filterdata[i])
            div1.innerHTML = ` <div class="card" data-name="phone">
                                      <img src= ${filterdata[i].url} alt="">
                                        <div class="card_body">
                                           <h6 class="car_title">${filterdata[i].title.shortTitle}</h6>
                                           <p class="card_text">${filterdata[i].price.mrp}</p>
                                                </div>
                                            </div>
       
                                        `

                        filter_card.appendChild(div1)
        }
    }
    })


})