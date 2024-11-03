let str="";
let input=document.getElementById("input1");
const func=(data)=>
{
    str=str+data;
    input.value=str;   
}
const result=()=>
{
let result=eval(str);
input.value=result;

}
const ce=()=>
    {
        str="";
        input.value=str;
    }