// Source/schema/interaction verification. This does not replace browser or Processing QA.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=__dirname,elements=new Map();
function el(id){if(!elements.has(id))elements.set(id,{id,value:'',textContent:'',innerHTML:'',disabled:false,attrs:{},setAttribute(k,v){this.attrs[k]=String(v)},removeAttribute(k){delete this.attrs[k]},focus(){},classList:{toggle(){}},files:[]});return elements.get(id)}
const saved=new Map();const storage={getItem:k=>saved.get(k)||null,setItem:(k,v)=>saved.set(k,v),removeItem:k=>saved.delete(k)};
const c={console,Date,URLSearchParams,URL,Blob,setTimeout,clearTimeout,location:{hash:'#home'},confirm:()=>true,document:{getElementById:el,querySelector:s=>el(s),querySelectorAll:()=>[],addEventListener(){},body:{classList:{toggle(){}}}},window:{localStorage:storage,scrollTo(){},print(){},addEventListener(){}},matchMedia:()=>({matches:true})};vm.createContext(c);
const scripts=['app.js','expansion.js','lessons.js','course-data.js','calendar.js','notebook-store.js','fullsite.js'];
for(const file of [...scripts,'boot.js']){const text=fs.readFileSync(path.join(root,file),'utf8');new vm.Script(text,{filename:file});if(file!=='boot.js')vm.runInContext(text,c,{filename:file});}
const run=s=>vm.runInContext(s,c);
const rendered=run(`Object.assign(Object.fromEntries(Object.entries(pages).map(([k,f])=>[k,f()])),Object.fromEntries(LESSONS.map(l=>['lesson/'+l.id,study(l)])),Object.fromEntries(COURSE.phases.map(p=>['phase/'+p[0],phasePage(p[0])])))`);
assert.equal(Object.keys(rendered).length,46);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,file]of html.matchAll(/<script src="([^"]+)"/g))assert(fs.existsSync(path.join(root,file)),file);
for(const [route,body]of Object.entries(rendered)){
 assert(!body.includes('undefined'),route+' contains undefined');assert(body.includes('<h1>'),route+' lacks a title');
 for(const[,link]of (html+body).matchAll(/(?:href|src)="([^"]+)"/g)){
  if(link.startsWith('https:'))continue;
  if(link.startsWith('#')){const target=link.slice(1).split('?')[0];assert(target==='main'||rendered[target],route+' → '+link);}
  else assert(fs.existsSync(path.join(root,link)),route+' missing '+link);
 }
}
run(`for(const l of LESSONS){if(!l.prediction.prompt||!l.prediction.reveal||l.missions.length<3||!l.checks.length)throw Error('Incomplete lesson '+l.id);const s=slides(l);if(s[1][0]!=='Predict'||s[2][0]!=='Reason it through')throw Error('Reveal ordering');if(!s.every(x=>x.length===3))throw Error('Slide shape');}`);
run(`if(MEETINGS.length!==80||new Set(MEETINGS).size!==80)throw Error('Calendar count');if(WINDOWS.reduce((s,w)=>s+w[4],0)!==9)throw Error('Flexible count');for(const w of WINDOWS)if(MEETINGS.filter(d=>d>=w[0]&&d<=w[1]).length!==w[3])throw Error('Window mismatch');`);
// Existing interactive array model and escaped portfolio preview.
run("initPage('arrays')");assert(el('array-back').disabled);el('array-next').onclick();el('array-next').onclick();assert.equal((el('array-slots').innerHTML.match(/constructed/g)||[]).length,1);el('array-next').onclick();assert(el('array-next').disabled);el('array-reset').onclick();assert(el('array-back').disabled);
run("initPage('story')");el('story-intent').value='<img src=x onerror=alert(1)>';el('story-intent').oninput();assert(!el('story-preview').innerHTML.includes('<img'));assert(el('story-preview').innerHTML.includes('&lt;img'));
el('coord-x').value='600';el('coord-y').value='360';run("initPage('coordinates')");assert.equal(el('coord-dot').attrs.cx,'600');assert.equal(el('coord-dot').attrs.cy,'360');
run("initPage('input')");el('input-press').onclick();for(let i=0;i<3;i++)el('input-step').onclick();el('input-release').onclick();el('input-step').onclick();assert.equal(el('held-count').textContent,3);assert.equal(el('release-count').textContent,1);
run("initFullPage('loop-lab')");for(let i=0;i<17;i++)el('loop-step').onclick();assert(el('loop-step').disabled);assert.equal((el('loop-marks').innerHTML.match(/constructed/g)||[]).length,5);el('loop-reset').onclick();assert(!el('loop-step').disabled);
// Notebook roundtrip, validation, merge, and unavailable/corrupt storage.
run(`{
 const x=NotebookStore.empty();x.drafts.restart.now='A circle';x.lessons.compose={prediction:'rectangle'};
 const mem={value:null,getItem(){return this.value},setItem(k,v){this.value=v}};
 if(!NotebookStore.save(mem,x).ok)throw Error('save');const restored=NotebookStore.load(mem);if(restored.data.drafts.restart.now!=='A circle')throw Error('restore');
 const json=JSON.stringify(restored.data);if(NotebookStore.parse(json).lessons.compose.prediction!=='rectangle')throw Error('roundtrip');
 const incoming=NotebookStore.empty();incoming.drafts.restart.now='';incoming.drafts.restart.next='Move it';
 const merged=NotebookStore.merge(x,incoming);if(merged.drafts.restart.now!=='A circle'||merged.drafts.restart.next!=='Move it')throw Error('merge');
 for(const bad of ['{}','not json',JSON.stringify({...x,version:99}),JSON.stringify({...x,drafts:{restart:{now:5},story:{}}}),JSON.stringify({...x,lessons:{constructor:{prediction:'bad'}}})]){let rejected=false;try{NotebookStore.parse(bad)}catch(e){rejected=true}if(!rejected)throw Error('invalid backup accepted');}
 const blocked={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};
 if(NotebookStore.load(blocked).ok||NotebookStore.save(blocked,x).ok)throw Error('storage failure reporting');
 const broken={getItem(){return 'corrupt'},setItem(){throw Error('must not write')}};if(NotebookStore.load(broken).ok)throw Error('corrupt load');
 if(!NotebookStore.markdown(x).includes('A circle'))throw Error('Markdown missing content');
}`);
// Present rendering has no prediction reveal on the prediction slide.
run(`currentSlide=1`);assert(!run("present(LESSONS[0])").includes(run("LESSONS[0].prediction.reveal")));
// Current course links remain unavailable unless a valid Classroom destination is configured.
assert(!run("classroom('compose')").includes('href='));
// Test typed workbook persistence and cross-workflow handoff.
run("wireStudy(LESSONS[0])");el('lesson-prediction').value='The rectangle';el('lesson-prediction').oninput();assert(saved.size===1);assert(run("notebook.lessons.compose.prediction")==='The rectangle');
run("initFullPage('investigation')");el('inv-hypothesis').oninput({target:{value:'Holding repeats'}});el('inv-b').oninput({target:{value:'Move to release'}});el('investigation-story').onclick();assert(run('drafts.story.investigation').includes('Move to release'));
run("initFullPage('library')");el('lesson-search').value='no-such-concept';el('lesson-search').oninput();assert(el('lesson-results').innerHTML.includes('No matching lessons'));
console.log('PASS: 46 routes, 11 complete lesson schemas and slide order, local targets, calendar 80/9, original tools, notebook roundtrip/merge/error handling, escaped preview, workbook storage, and investigation handoff.');
// Execute application routing/initialization with inert canvas primitives.
// This catches startup errors but makes no claim about visual rendering.
c.devicePixelRatio=1;c.requestAnimationFrame=()=>1;c.cancelAnimationFrame=()=>{};
el('canvas').clientWidth=600;el('canvas').clientHeight=240;el('canvas').getContext=()=>({setTransform(){},clearRect(){},beginPath(){},arc(){},fill(){},scale(){},moveTo(){},lineTo(){},stroke(){}});
for(const route of Object.keys(rendered)){c.location.hash='#'+route;run('render()');assert(el('#main').innerHTML.includes('<h1>'),route+' failed mount');}
c.location.hash='#lesson/compose?view=present';run('render()');assert(el('#main').innerHTML.includes('presentation'));c.location.hash='#not-a-page';run('render()');assert(el('#main').innerHTML.includes('Page not found'));
console.log('PASS: all route initializers, presentation entry, and unknown-route fallback execute without errors.');
