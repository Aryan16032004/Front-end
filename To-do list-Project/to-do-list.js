const a1=[{name: 'Aryan',bdate:'2004-6-16'},{
    name: 'Ayush',bdate:'2005-11-4'
}];
renderlist();
function renderlist(){
    let todolistHtml='';
    a1.forEach((todoObject,index) => {
    const {name,bdate}=todoObject;
    const html= `
        <div>${name}</div>
        <div>${bdate} </div>
            <button onclick="
        a1.splice(${index},1);
        renderlist();
        " class="delete-btn">Delete</button>
        `;
     todolistHtml+=html;
    });
//     for(let i=0;i<a1.length;i++){
//     const todoObject=a1[i];
//     // const name=todoObject.name;
//     // const bdate=todoObject.bdate;
//     const {name,bdate}=todoObject;
//     const html= `
//         <div>${name}</div>
//         <div>${bdate} </div>
//             <button onclick="
//         a1.splice(${i},1);
//         renderlist();
//         " class="delete-btn">Delete</button>
//         `;
//      todolistHtml+=html;
// }
document.querySelector('.display-name').innerHTML=todolistHtml;
}

function addelement(){
   const inputValue=document.querySelector('.js-input');
   const name=inputValue.value;
   const inputDate=document.querySelector('.js-date');
   const bdate=inputDate.value;
   a1.push({name: name,bdate: bdate});
   console.log(a1);
   inputValue.value = '';
   renderlist();
}