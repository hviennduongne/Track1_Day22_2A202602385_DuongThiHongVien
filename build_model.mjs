import fs from 'node:fs/promises';
import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const root = new URL('./',import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(root+'templates/model.xlsx'));
await fs.mkdir(root+'qa/previews',{recursive:true});
if(process.argv.includes('--preview-only')) {
 const p=await wb.render({sheetName:'1_Cost_Job',range:'A1:E31',scale:1.5,format:'png'});
 await fs.writeFile(root+'qa/previews/original-cost.png',new Uint8Array(await p.arrayBuffer()));
 console.log('Original template rendered');
} else {
 const inputs=JSON.parse(await fs.readFile(root+'inputs.json','utf8'));
 const layout=JSON.parse(await fs.readFile(root+'layout.json','utf8'));
 for(const [name,cells] of Object.entries(inputs)) for(const [cell,value] of Object.entries(cells)) {
  const range=wb.worksheets.getItem(name).getRange(cell);range.values=[[value]];
  if(typeof value==='string') range.format.wrapText=true;
 }
 for(const [name,rows] of Object.entries(layout)) for(const [row,height] of Object.entries(rows)) wb.worksheets.getItem(name).getRange(`A${row}:H${row}`).format.rowHeight=height;
 // Materialize the original formula expressions to invalidate imported shared-
 // formula child caches. Formula text and final OOXML remain the template's.
 const originalFormulas=JSON.parse(await fs.readFile(root+'original-formulas.json','utf8'));
 for(const [name,cells] of Object.entries(originalFormulas)) for(const [addr,formula] of Object.entries(cells)) wb.worksheets.getItem(name).getRange(addr).formulas=[[formula]];
 wb.recalculate();
 const results={};
 for(const name of ['0_README','1_Cost_Job','2_Pricing','3_Value_Metric','4_Channel_Fit','5_90Day_Plan','6_Benchmarks']) {
  results[name]=wb.worksheets.getItem(name).getUsedRange().values;
  const p=await wb.render({sheetName:name,range:name==='1_Cost_Job'?'A1:E78':name==='2_Pricing'?'A1:E53':name==='6_Benchmarks'?'A1:F43':name==='3_Value_Metric'?'A1:D34':name==='4_Channel_Fit'?'A1:E42':name==='5_90Day_Plan'?'A1:D32':'A1:C24',scale:1.5,format:'png'});
  await fs.writeFile(root+'qa/previews/'+name+'.png',new Uint8Array(await p.arrayBuffer()));
 }
 await fs.writeFile(root+'qa/calculated-values.json',JSON.stringify(results,null,2));
 const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:100},summary:'Formula errors'});
 await fs.writeFile(root+'qa/formula-error-scan.ndjson',errors.ndjson);
 await fs.mkdir(root+'output',{recursive:true});
 await (await SpreadsheetFile.exportXlsx(wb)).save(root+'qa/artifact-export.xlsx');
 const baseline={cost:wb.worksheets.getItem('1_Cost_Job').getRange('B66:B67').values,gm:wb.worksheets.getItem('2_Pricing').getRange('B21').values};
 const stress=[];const cost=wb.worksheets.getItem('1_Cost_Job');
 for(const r of [.5,.6,.7,.8,.9]) {cost.getRange('B10').values=[[r]];wb.recalculate();stress.push({case:'containment',rate:r,cost:cost.getRange('B66:B67').values,gm:wb.worksheets.getItem('2_Pricing').getRange('B21').values});}
 cost.getRange('B10').values=[[.8]];cost.getRange('B6').values=[['B']];wb.recalculate();stress.push({case:'variantB',cost:cost.getRange('B66:B67').values});
 cost.getRange('B6').values=[['A']];cost.getRange('B30').values=[[1]];wb.recalculate();stress.push({case:'batch',cost:cost.getRange('B66:B67').values});
 cost.getRange('B30').values=[[0]];cost.getRange('B59').values=[[100]];wb.recalculate();stress.push({case:'overhead2x',cost:cost.getRange('B66:B67').values});
 cost.getRange('B59').values=[[50]];cost.getRange('B10').values=[[0]];wb.recalculate();stress.push({case:'zero-containment-invalid',cost:cost.getRange('B66:B67').values,note:'Template guards return0 but economic cost is undefined; do not interpret as free jobs.'});
 await fs.writeFile(root+'qa/engine-stress.json',JSON.stringify({baseline,stress},null,2));
 console.log(JSON.stringify({baseline,stress,errors:errors.ndjson}));
}
