const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenuItemsHTML=breakfastMenu.map((item,index)=>`<p>Itmes ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuItemsHTML;
let mainCourseItem="";
mainCourseMenu.forEach((item,index)=>{mainCourseItem+=`<p> article ${index + 1} : ${item}</p> `;});
document.getElementById('maincourseMenuItems').innerHTML=mainCourseItem;
let dessertItems='';
for(let i=0;i<dessertMenu.length;i++){
    dessertItems+=`<p> article ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML=dessertItems;
