let value = prompt("enter and number")
let array = [ 1,2,3,2,4,2,5 ];
function count_element_in_array(array, x){
    let count = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]==x) 
        count ++;
    }
}
alert("Phan tu " +  x  + " xuat hien " + count +  " lan");
