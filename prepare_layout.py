import json,math
from pathlib import Path
import openpyxl
P=Path(__file__).parent
w=openpyxl.load_workbook(P/'templates/model.xlsx')
v=json.loads((P/'inputs.json').read_text(encoding='utf8'))
d={}
for name,cells in v.items():
 for addr,text in cells.items():
  if not isinstance(text,str):continue
  cell=w[name][addr];width=8.71
  for cd in w[name].column_dimensions.values():
   if cd.min<=cell.column<=cd.max:width=cd.width;break
  # Allow word-boundary wrapping, not only continuous character length.
  lines=math.ceil(len(text)/max(7,width-3))
  d.setdefault(name,{})[str(cell.row)]=max(d.get(name,{}).get(str(cell.row),22),lines*17+10)
(P/'layout.json').write_text(json.dumps(d,indent=2),encoding='utf8')
print(d)
