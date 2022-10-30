
/* First attempt, included times.
const firstHireDate = new Date('1770-12-16');
const firstDay = firstHireDate.toLocaleString('en-US');
*/



/* Second attempt, too many variables. 
  const firstHireDate = new Date('1770-12-16'); 
  const firstHD = firstHireDate.toISOString();
  const firstSplit = firstHD.split('T');
  const firstDay = firstSplit[0];
*/



/* Third attempt, less global variables but still using 
* the .toISOString when asked to use .toLocaleString.  
const firstHireDate = new Date('1770-12-16').toISOString('en-US').split('T');
const firstDay = firstHireDate[0];
*/  



/* Fourth attempt, best results; but can they be combined? 
  const firstHireDate = new Date('1770-12-16').toLocaleString('en-US');
  const firstDay = firstHireDate.split(',')[0];
*/
