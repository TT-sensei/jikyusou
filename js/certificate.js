window.JikyusouCertificate=(function(){
const BACKGROUND="./syoujyo%20.svg";
function show(m,s,p,name){
 const c=document.getElementById("certificateCanvas"),x=c.getContext("2d"),t=JikyusouRecords.totals(p),w=c.width,h=c.height;
 function draw(){
  x.clearRect(0,0,w,h);
  x.drawImage(bg,0,0,w,h);
  x.textAlign="center";
  x.textBaseline="middle";
  const display=m.unit==="lap"?m.value+"周":m.value.toLocaleString("ja-JP")+"m";
  const person=name||"がんばったきみ";
  x.fillStyle="#22302a";
  x.font="700 42px sans-serif";
  x.fillText(person+" さん",w/2,360);
  x.fillStyle="#2f8f52";
  x.font="900 64px sans-serif";
  x.fillText(display+" 達成",w/2,455);
  x.fillStyle="#22302a";
  x.font="400 22px sans-serif";
  x.fillText("これまでの記録："+t.dist.toLocaleString("ja-JP")+"m（"+JikyusouUI.formatLaps(t.laps)+"）",w/2,535);
  const d=new Date();
  x.fillStyle="#707b73";
  x.font="400 18px sans-serif";
  x.fillText(d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日",w/2,h-72);
  if(s.school||s.grade){
   x.fillText([s.school,s.grade,s.className].filter(Boolean).join(" "),w/2,h-42);
  }
  document.getElementById("certificateDialog").showModal();
 }
 const bg=new Image();
 bg.onload=draw;
 bg.onerror=()=>{
  x.fillStyle="#fffdf8";x.fillRect(0,0,w,h);
  x.fillStyle="#22302a";x.textAlign="center";x.font="700 40px sans-serif";
  x.fillText("認定証を読み込めませんでした",w/2,h/2);
  document.getElementById("certificateDialog").showModal();
 };
 bg.src=BACKGROUND;
}
return{show}
})();