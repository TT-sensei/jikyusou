/* 持久走用のバッジ表示。教科ではなく、見た目で選べる2種類にしています。 */
const EDU_BADGE="https://tt-sensei.github.io/edu-assets/";
const BADGES=[
"common/accuracy","common/adventurer","common/breakthrough","common/challenger","common/champion",
"common/clear","common/combo","common/comeback","common/connection","common/courage",
"common/creative","common/curiosity","common/deep-thinker","common/discovery","common/explainer",
"common/explorer","common/first-step","common/focus","common/great-answer","common/growth",
"common/hard-worker","common/helper","common/idea","common/independent","common/keep-going",
"common/knowledge","common/level-up","common/mastery","common/mission-complete","common/never-give-up",
"common/new-skill","common/observer","common/perfect","common/power-up","common/practice-master",
"common/problem-solver","common/review-master","common/special","common/speed","common/steady-progress",
"common/streak","common/teamwork","common/treasure","common/try-again",
"japanese/active-listening","japanese/book-lover","japanese/expression","japanese/key-point",
"japanese/language-explorer","japanese/reading-aloud","japanese/word-detective","japanese/word-sprout",
"math/calculation","math/geometry","math/logical-thinking","math/math-discovery","math/measurement",
"math/mental-math","math/number-sense","math/pattern","math/strategy","math/verification",
"science/experiment","science/evidence","science/energy","science/life-science","science/prediction",
"science/science-discovery","science/science-observer","science/wonder","social/citizens",
"social/change-over-time","social/compare-society","social/future-thinking","social/history-connection",
"social/local-explorer","social/map-reader","social/people-of-history","social/world-connection"
].map(x=>EDU_BADGE+"assets/badges/"+x+"/badge.png");

/* 「ランダム」は毎回変わるのではなく、100段階の順番が固定されるランダム配置です。 */
function shuffle(list){
 const a=[...list];
 let seed=20260927;
 for(let i=a.length-1;i>0;i--){
  seed=(seed*1664525+1013904223)>>>0;
  const j=seed%(i+1);
  [a[i],a[j]]=[a[j],a[i]];
 }
 return a;
}
const RANDOM100=Array.from({length:100},(_,i)=>BADGES[i%BADGES.length]);
const SHUFFLED100=shuffle(RANDOM100);

window.JIKYUSOU_MEDAL_COLLECTIONS={
 edu:{label:"いろいろなバッジ",images:SHUFFLED100},
 simple:{label:"シンプルな印",images:Array(100).fill("")}
};