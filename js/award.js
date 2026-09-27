window.JikyusouAward=(function(){
let queue=[],page=0,settings;
function fmt(n){return n.toLocaleString("ja-JP")}
function displayLabel(m){return fmt(settings.medalUnit==="lap"?m.lap:m.meters)+(settings.medalUnit==="lap"?"周":"m")}
function show(items,s){queue=items;page=0;settings=s;render();document.getElementById("awardDialog").showModal()}
function render(){
 const start=page*5,items=queue.slice(start,start+5);
 const grid=document.getElementById("awardGrid"),title=document.getElementById("awardTitle"),text=document.getElementById("awardText"),next=document.getElementById("awardNext");
 grid.innerHTML="";
 items.forEach(m=>{
  const i=JIKYUSOU_MEDALS.findIndex(x=>x.id===m.id);
  const collection=JIKYUSOU_MEDAL_COLLECTIONS[settings.medalCollection]||JIKYUSOU_MEDAL_COLLECTIONS.edu;
  const src=collection.images[i]||"";
  const card=document.createElement("div");
  card.className="award-item";
  if(src){
   const img=document.createElement("img");
   img.src=src;img.alt="";
   card.appendChild(img);
  }else{
   const ph=document.createElement("span");
   ph.className="award-item__simple";
   ph.textContent=i+1;
   card.appendChild(ph);
  }
  const label=document.createElement("span");
  label.textContent=displayLabel(m);
  card.appendChild(label);
  grid.appendChild(card);
 });
 const count=items.length,total=queue.length;
 title.textContent=count===1?displayLabel(items[0])+" 達成！":count+"個のバッジを獲得！";
 text.textContent=start+count<total?"まだバッジがあります！":"おめでとう！";
 next.textContent=start+count<total?"つぎの5枚":"バッジをしまう";
 grid.classList.remove("award-pop");
 void grid.offsetWidth;
 grid.classList.add("award-pop");
}
function next(){
 page++;
 if(page*5>=queue.length){document.getElementById("awardDialog").close();return}
 render();
}
document.getElementById("awardNext").addEventListener("click",next);
return{show}
})();