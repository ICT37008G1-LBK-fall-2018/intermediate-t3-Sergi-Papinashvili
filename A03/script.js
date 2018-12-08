let students = [
    {
        FirstName: 'სახელი 1',
        LastName: 'გვარი 1',
        PersonalNumber: '00000000000',
        Grade: 84
    },
    {
        FirstName: 'სახელი 2',
        LastName: 'გვარი 2',
        PersonalNumber: '00000000001',
        Grade: 30
    },
    {
        FirstName: 'სახელი 3',
        LastName: 'გვარი 3',
        PersonalNumber: '00000000002',
        Grade: 55
    },
    {
        FirstName: 'სახელი 4',
        LastName: 'გვარი 4',
        PersonalNumber: '00000000003',
        Grade: 70
    },
    {
        FirstName: 'სახელი 5',
        LastName: 'გვარი 5',
        PersonalNumber: '00000000004',
        Grade: 92
    },
    {
        FirstName: 'სახელი 6',
        LastName: 'გვარი 6',
        PersonalNumber: '00000000005',
        Grade: 88
    },
    {
        FirstName: 'სერგი',
        LastName: 'პაპინაშვილი',
        PersonalNumber: '00000000006',
        Grade: 99
    },
    {
        FirstName: 'სახელი 8',
        LastName: 'გვარი 8',
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