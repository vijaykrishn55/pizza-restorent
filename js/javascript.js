let arr=[
  {id:1,name:"john",age:"18",profession:"developer"},
  {id:2, name:"jack",age:"20", profession:"developer"},
  {id:3, name:"karen", age:"19",profession:"admin"}
  ]
  
  function printDeveloperbyMap(){
  arr.map((value)=>{
      if(value.profession==="developer"){
          console.log(value);
      }
  })
  }
  function printDeveloperbyforEach(){ 
      arr.forEach((callback)=>{
      if(callback.profession==="developer"){
          console.log(callback)
      }
  });
  }
  
  
  function addData(){
      arr.push({ id:4,name:"susan",age:"20",profession:"intern"})
      console.log(arr);
             
  }
  function removeAdmin(){
      arr=arr.filter((rem)=>rem.profession!=="admin");
      console.log(arr);
  }
  function concatinateArray(){
  let newArr=arr.concat([
  {id:4,name:"kas",age:"21",profession:"admin"},
  {id:5, name:"les",age:"23", profession:"intern"},
  {id:6, name:"tes", age:"22",profession:"admin"}]);
  console.log(newArr)
  }