/* Reparteix la posició de la resposta correcta de les preguntes d’opció múltiple de CD2
   (escrites amb la correcta primera), de manera determinista: cada pregunta gira les opcions un nombre diferent de llocs. */
Object.keys(CONTENT).filter(k=>k.startsWith('cd2-')).forEach(k=>{
  CONTENT[k].items.forEach((it,n)=>{
    if(it.type!=='choice')return;
    const len=it.opts.length,shift=(n+k.length)%len;
    if(!shift)return;
    it.opts=it.opts.map((_,i)=>it.opts[(i-shift+len)%len]);
    it.ok=(it.ok+shift)%len;
  });
});
