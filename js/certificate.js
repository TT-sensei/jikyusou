window.JikyusouCertificate=(function(){
const BACKGROUND="./syoujyo%20.svg";
const NAVI="https://tt-sensei.github.io/navi-character-/assets/web/groups/group-start-dash.png";
function show(m,s,p,name){
 const c=document.getElementById("certificateCanvas"),
 x=c.getContext("2d"),
 t=JikyusouRecords.totals(p),
 w=c.width,h=c.height;
 function draw(){
  x.clearRect(0,0,w,h);
  x.drawImage(bg,0,0,w,h);
  x.textAlign="center";
  x.fillStyle="#2f8f52";x.font="700 54px sans-serif";
  x.fillText((m.unit==="lap"?m.value:m.value.toLocaleString("ja-JP")+"m")+" 達成証",w/2,160);
  x.fillStyle="#22302a";x.font="700 48px sans-serif";
  x.fillText((name||"がんばったきみ")+" さん",w/2,285);
  x.font="400 25px sans-serif";
  x.fillText("持久走チャレンジで",w/2,370);
  x.fillText((m.unit==="lap"?m.value+"周":m.value.toLocaleString("ja-JP")+"m")+"を達成しました。",w/2,415);
  x.fillText("これまでの記録："+t.dist.toLocaleString("ja-JP")+"m（"+t.laps+"周）",w/2,460);
  if(navi.complete&&navi.naturalWidth){
   const maxW=250,maxH=120,scale=Math.min(maxW/navi.naturalWidth,maxH/navi.naturalHeight);
   const nw=navi.naturalWidth*scale,nh=navi.naturalHeight*scale;
   x.drawImage(navi,(w-nw)/2,500,nw,nh);
  }
  x.font="400 20px sans-serif";x.fillStyle="#707b73";
  const d=new Date();
  x.fillText(d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日",w/2,h-90);
  if(s.school||s.grade)x.fillText([s.school,s.grade,s.className].filter(Boolean).join(" "),w/2,h-55);
  document.getElementById("certificateDialog").showModal();
 }
 const bg=new Image(),navi=new Image();
 navi.onload=draw;
 navi.onerror=draw;
 bg.onload=()=>{navi.src=NAVI};
 bg.onerror=()=>{navi.src=NAVI};
 bg.src=BACKGROUND;
}
return{show}
})();