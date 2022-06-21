/*darkMode-------------------------------------------------------*/ 
function changeBG() {
   let x = document.getElementById("global");
   let y = document.getElementById("head");
   let z1 = document.getElementById("sett");
   let z2 = document.getElementById("sett2");
      if (y.style.color === "black") {
          x.style.backgroundImage = "url(phone.png)";
          y.style.color = "white";
          z1.style.backgroundColor = "#202020";
          z2.style.backgroundColor = "#202020";
          z1.style.color = "white";
          z2.style.color = "white";
      }  
      else {
          x.style.backgroundImage = "url(phone2.png)";
          y.style.color = "black";
          z1.style.backgroundColor = "white";
          z2.style.backgroundColor = "white";
          z1.style.color = "black";
          z2.style.color = "black";
           if (ecro.value==0) {
            ecro.value=0;
           }

      }
}

/*bottonat--------------------------------------------------------*/ 
   let zero= document.getElementById("zero").innerText;
   let un= document.getElementById("un").innerText;
   let deux= document.getElementById("deux").innerText;
   let trois= document.getElementById("trois").innerText;
   let quatre= document.getElementById("quatre").innerText;
   let cinq= document.getElementById("cinq").innerText;
   let six= document.getElementById("six").innerText;
   let sept= document.getElementById("sept").innerText;
   let huit= document.getElementById("huit").innerText;
   let neuf= document.getElementById("neuf").innerText;
   let ecro=document.getElementById("sett");
   let ecro2=document.getElementById("sett2");

/*opparateurs-----------------------------------------------------*/

   let sum= document.getElementById("addition").innerText;
   let sos= document.getElementById("soustraction").innerText;
   let prod= document.getElementById("multiplier").innerText;
   let divs= document.getElementById("diviser").innerText;
   let mod= document.getElementById("pourcentage").innerText;


   let oper=[sum,sos,prod,divs,mod];

/*zero------------------------------------------------------------*/  
function brk(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= zero;
   }
   else{
      ecro.value= zero;
   }
}

/*un--------------------------------------------------------------*/ 
function brk1(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= un;
   }
   else{
      ecro.value= un;
   }
}

/*deux------------------------------------------------------------*/ 
function brk2(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= deux;
   }
   else{
      ecro.value= deux;
   }
}

/*trois-----------------------------------------------------------*/ 
function brk3(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= trois;
   }
   else{
      ecro.value= trois;
   }
}

/*quatre----------------------------------------------------------*/ 
function brk4(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= quatre;
   }
   else{
      ecro.value= quatre;
   }
}

/*cinq------------------------------------------------------------*/ 
function brk5(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= cinq;
   }
   else{
      ecro.value= cinq;
   }
}

/*six-------------------------------------------------------------*/ 
function brk6(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= six;
   }
   else{
      ecro.value= six;
   }
}

/*sept------------------------------------------------------------*/ 
function brk7(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= sept;
   }
   else{
      ecro.value= sept;
   }
}

/*huit------------------------------------------------------------*/ 
function brk8(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= huit;
   }
   else{
      ecro.value= huit;
   }
}

/*neuf------------------------------------------------------------*/ 
function brk9(){
   if (ecro.value != 0 || ecro.value[ecro.value.length-1]=="." || ecro.value[1]==".") {
      ecro.value+= neuf;
   }
   else{
      ecro.value= neuf;
   }
}

/*clear-----------------------------------------------------------*/
function ms7(){

if(ecro.value[ecro.value.length-1]==" "){
     ecro.value=ecro.value.slice(0,-3);
     }
     else{
      ecro.value=ecro.value.slice(0,-1);
     }
if (ecro.value==0) {
   ecro2.value="";
}
}

function ms77(){
   ecro.value=0;
}

function ms7all(){
   ecro2.value="";
   ecro.value=0;
}

/*virgule---------------------------------------------------------*/
function vrgl(){
   if (ecro.value=="") {
      ecro.value=0;
   }
   ecro.value+= ".";  
}

/*Somme-----------------------------------------------------------*/ 
function jm3(){
   if(ecro.value[ecro.value.length-1]==" " || ecro.value==0){
      ecro.value=ecro.value;
   }
   else{
   ecro.value+= " "+sum+" ";
   }
}

/*Soustraction----------------------------------------------------*/
function n9s(){
   if(ecro.value[ecro.value.length-1]==" " || ecro.value==0){
      ecro.value=ecro.value;
   }
   else{
   ecro.value+= " "+sos+" ";
   }
}

/*Multiplication--------------------------------------------------*/ 
function drb(){
   if(ecro.value[ecro.value.length-1]==" " || ecro.value==0){
      ecro.value=ecro.value;
   }
   else{
   ecro.value+= " "+prod+" ";
   }
}

/*division--------------------------------------------------------*/ 
function dvs(){
   if(ecro.value[ecro.value.length-1]==" " || ecro.value==0){
      ecro.value=ecro.value;
   }
   else{
   ecro.value+= " "+divs+" ";
   }
}

/*modulo----------------------------------------------------------*/ 
function modu(){
   if(ecro.value[ecro.value.length-1]==" " || ecro.value==0){
      ecro.value=ecro.value;
   }
   else{
   ecro.value+= " "+mod+" ";
   }
}

/*nepo------------------------------------------------------------*/
function nepo(){
   if (ecro.value==0) {
      ecro.value=1;
      ecro.value*=(-1);
      ecro.value=ecro.value.slice(0,-1);
   }
   else{
   ecro.value*=(-1);
   }
}

/*puissance-------------------------------------------------------*/ 
function puiss(){
   ecro.value*=ecro.value;
}

/*racine----------------------------------------------------------*/ 
function rass(){
   ecro.value=Math.sqrt(ecro.value).toFixed(5);
}

/*fraction--------------------------------------------------------*/ 
function fraq(){
   ecro.value=(1/ecro.value).toFixed(5);
}

/*egale-----------------------------------------------------------*/ 

function tosawi(){

let result=0;
var i;

   if (ecro.value==0){
      ecro.value=0;
   }
   if (ecro.value==0) {
      ecro2.value="";
   }
   else{
   ecro2.value=ecro.value+" = ";
   }

let table=ecro.value.split(" ");

   i = 0;
   while (i < table.length){
        if (table[i] == "%"){
            result = parseFloat(table[i-1])%parseFloat(table[i+1]);
            table.splice(i,0,result.toString());
            table.splice(i-1,1);
            table.splice(i,1);
            table.splice(i,1);
            i--;
         }
         i++;
   }

   i = 0;
   while (i < table.length){
        if (table[i] == "x"){
            result = parseFloat(table[i-1])*parseFloat(table[i+1]);
            table.splice(i,0,result.toString());
            table.splice(i-1,1);
            table.splice(i,1);
            table.splice(i,1);
            i--;
         }
         i++;
   }

   i = 0;
   while (i < table.length){
        if (table[i] == "÷"){
            result = parseFloat(table[i-1])/parseFloat(table[i+1]);
            table.splice(i,0,result.toString());
            table.splice(i-1,1);
            table.splice(i,1);
            table.splice(i,1);
            i--;
         }
         i++;
   }

   i = 0;
   while (i < table.length){
        if (table[i] == "-"){
            result = parseFloat(table[i-1])-parseFloat(table[i+1]);
            table.splice(i,0,result.toString());
            table.splice(i-1,1);
            table.splice(i,1);
            table.splice(i,1);
            i--;
         }
         i++;
   }

   i = 0;
   while (i < table.length){
        if (table[i] == "+"){
            result = parseFloat(table[i-1])+parseFloat(table[i+1]);
            table.splice(i,0,result.toString());
            table.splice(i-1,1);
            table.splice(i,1);
            table.splice(i,1);
            i--;
         }
         i++;
   }
   ecro.value=parseFloat(table);
   
}

