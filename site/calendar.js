/* Meeting dates transcribed from the two supplied B Block screenshots.
   Topics below are planning windows, not assigned deadlines. */
const CALENDAR_MONTHS={
'2026-09':[3,8,10,14,16,18,23,25,29], '2026-10':[1,5,7,9,13,15,19,22,26,28],
'2026-11':[2,4,6,10,12,16,18,20], '2026-12':[1,3,7,9,11,15,17],
'2027-01':[7,11,13,19,21,25,27,29], '2027-02':[2,4,8,10,12,17,19,23,25],
'2027-03':[1,3,5,9,11,15,17], '2027-04':[5,7,9,13,15,19,21,23,27,29],
'2027-05':[3,5,7,11,13,17,19,21,25,27], '2027-06':[1,3]
};
const MEETINGS=Object.entries(CALENDAR_MONTHS).flatMap(([month,days])=>days.map(d=>month+'-'+String(d).padStart(2,'0')));
const WINDOWS=[
 ['2026-09-03','2026-09-29','Opening, transfer, composition, input',9,1,'respond'],
 ['2026-10-01','2026-10-28','Repetition and useful functions',10,1,'organize'],
 ['2026-11-02','2026-12-17','Classes and object populations',15,2,'population'],
 ['2027-01-07','2027-02-12','Modes, debugging, revision, Java transfer',13,1,'integrate'],
 ['2027-02-17','2027-03-17','Pathway investigations and feasibility',11,1,'pathway'],
 ['2027-04-05','2027-05-13','Capstone construction, testing, revision',15,2,'capstone'],
 ['2027-05-17','2027-06-03','Presentation, portfolio, consolidation',7,1,'capstone']
];
function dateLabel(date){return new Date(date+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});}
function localISO(){const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');}
