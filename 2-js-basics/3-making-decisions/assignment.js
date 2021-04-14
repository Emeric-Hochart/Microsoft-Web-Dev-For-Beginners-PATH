let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
  let studentsWhoPass = [];
  
  allStudents.map(student=>{
      if((typeof student == 'string' && (student == 'A' || student == 'A-' || student == 'B' || student == 'B-'))||(typeof student == 'number')&& (student == 3 || student == 4 || student == 5)){
              studentsWhoPass.push(student);     
      }
  });
