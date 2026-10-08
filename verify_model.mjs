import fs from 'node:fs/promises';
import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const base=new URL('./',import.meta.url).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(base+'output/DuongThiHongVien_Day22_model.xlsx'));
const c=wb.worksheets.getItem('1_Cost_Job'),p=wb.worksheets.getItem('2_Pricing'),g=wb.worksheets.getItem('4_Channel_Fit');
const rows=[];
function check(label,actual,expected){if(Math.abs(actual-expected)>1e-9)throw Error(label+':'+actual+'!='+expected);rows.push({label,actual,expected,result:'PASS'});}
wb.recalculate();check('reopen baseline cost',c.getRange('B66').values[0][0],.0681625);check('reopen baseline CAC',g.getRange('B9').values[0][0],1592.82);
c.getRange('B17:B18').values=[[1],[1]];wb.recalculate();check('no-cache equivalent LLM',c.getRange('B27').values[0][0],.03);check('no-cache direct',c.getRange('B66').values[0][0],.078625);
c.getRange('B17:B18').values=[[1.25],[.1]];c.getRange('B9').values=[[500]];g.getRange('B5').values=[[80]];wb.recalculate();check('half-volume fullcost',c.getRange('B67').values[0][0],.1931625);check('half-volume CACbudget',g.getRange('B9').values[0][0],796.41);
c.getRange('B9').values=[[1000]];g.getRange('B5').values=[[160]];g.getRange('B21').values=[[0]];wb.recalculate();rows.push({label:'zero-winrate-invalid',actual:g.getRange('B22:B24').values,note:'Template zero guard hides undefined CAC. Input invalid; do not use zero as proof sales is affordable.'});
g.getRange('B21').values=[[.2]];c.getRange('B10').values=[[null]];wb.recalculate();rows.push({label:'blank-completion-invalid',actual:c.getRange('B66:B67').values,note:'No valid completion input; economic result undefined.'});
await fs.writeFile(base+'qa/reopen-engine-tests.json',JSON.stringify({engine:'artifact-tool; disposable in-memory copy, no saved mutation',rows},null,2));
console.log(JSON.stringify(rows));
