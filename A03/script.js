let students = [
    {
        FirstName: 'name 1',
        LastName: 'lname 1',
        PersonalNumber: '00000000000',
        Grade: 84
    },
    {
        FirstName: 'name 2',
        LastName: 'lname 2',
        PersonalNumber: '00000000001',
        Grade: 30
    },
    {
        FirstName: 'name 3',
        LastName: 'lname 3',
        PersonalNumber: '00000000002',
        Grade: 55
    },
    {
        FirstName: 'name 4',
        LastName: 'lname 4',
        PersonalNumber: '00000000003',
        Grade: 70
    },
    {
        FirstName: 'name 5',
        LastName: 'lname 5',
        PersonalNumber: '00000000004',
        Grade: 92
    },
    {
        FirstName: 'name 6',
        LastName: 'lname 6',
        PersonalNumber: '00000000005',
        Grade: 88
    },
    {
        FirstName: 'name 7',
        LastName: 'lname 7',
        PersonalNumber: '00000000006',
        Grade: 99
    },
    {
        FirstName: 'name 8',
        LastName: 'lname 8',
        PersonalNumber: '00000000007',
        Grade: 65
    }

];
function compare(a,b) {
    if (a.Grade > b.Grade)
      return -1;
    if (a.Grade < b.Grade)
      return 1;
    return 0;
  }
  
  
function generate() {
    students.sort(compare);
    create_table(students);
}

function create_table(list) {
    let html = ``;
    let simbols = ['A','B','C','D','E','F','Fx'];
    for (let i=0;i<list.length;i++) {
        let symbol;
        let style;
        if (list[i].Grade>=91) {
            symbol = simbols[0];
            style = 'style="color: green;"'
          }
          if (list[i].Grade>=81&&list[i].Grade<91) {
            symbol = simbols[1];
            style = 'style="color: green;"'
          }
          if (list[i].Grade>=71&&list[i].Grade<81) {
            symbol = simbols[2];
            style = 'style="color: yellow;"'
          }
          if (list[i].Grade>=61&&list[i].Grade<71) {
            symbol = simbols[3];
            style = 'style="color: yellow;"'
          }
          if (list[i].Grade>=51&&list[i].Grade<61) {
            symbol = simbols[4];
            style = 'style="color: orange;"'
          }
          if (list[i].Grade>=41&&list[i].Grade<51) {
            symbol = simbols[5];
            style = 'style="color: red;"'
          }
          if (list[i].Grade<41) {
            symbol = simbols[5];
            style = 'style="color: red;"'
          }
        html += 
        `
        <tr>
            <td>${list[i].PersonalNumber}</td>
            <td>${list[i].FirstName}</td>
            <td>${list[i].LastName}</td>
            <td>${list[i].Grade}</td>
            <td ${style}>${symbol}</td>
        </tr>
        `;
    }
    document.getElementById("table_body").innerHTML = html;
}