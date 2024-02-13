// 현재 날짜 정보 가져옴
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth() + 1; // 0부터 시작하므로 +1을 해준다.

var monthdown = document.querySelector(".MonthDown");
var monthup = document.querySelector(".MonthUp");


const Year = parseInt(prompt("년도를 입력하세요"));
const Month = parseInt(prompt("달을 입력하세요"));

var YearText = document.getElementById("YearText");
var MonthText = document.getElementById("MonthText");

YearText.innerHTML = `<h1 class="YearText">${Year}</h1>`;
MonthText.innerHTML = `<h1 class="MonthText">${Month}</h1>`;

monthdown.onclick = () =>{
	MonthText.innerHTML = `<h1 class="MonthText">${Month-1}</h1>`;
}




// 달력 생성 함수
function generateCalendar(year, month) {
    var calenderYear = year;
    var calMonth = month;

    var MonthLastDate = new Date(calenderYear, calMonth, 0);
	console.log(MonthLastDate);

    var calMonthLastDate = MonthLastDate.getDate();
	console.log(calMonthLastDate);

    var MonthStartDate = new Date(calenderYear, calMonth - 1, 1); // -1을 해줘야 원하는 달의 시작일을 얻을 수 있다.
	console.log(MonthStartDate);

    var calMonthStartDate = MonthStartDate.getDay();
	console.log(calMonthStartDate)

    var calWeekCount = Math.ceil((calMonthStartDate + calMonthLastDate) / 7);
	console.log(calWeekCount)

    var html = "";
    html += "<table style=\"border-collapse: collapse; margin-left: auto; margin-right: auto;\">";
	//위치
    var calendarPos = 0;
	//날짜
    var calendarDay = 0;
	html = "<tr><th>월</th> <th>화</th><th>수</th><th>목</th><th>금</th><th>토</th><th>일</th></tr>"
	// html = "<tr><th>수</th></tr>"
	// html = "<tr><th>목</th></tr>"
	// html = "<tr><th>금</th></tr>"
	// html = "<tr><th>토</th></tr>"
	// html = "<tr><th>일</th></tr>"
    for (var index1 = 0; index1 < calWeekCount; index1++) {  //tr을 weekCount만큼 반복해줌 즉 6번 
        html += "<tr>";
		
        for (var index2 = 0; index2 < 7; index2++) {
            html += "<td style=\"border: solid 1px black; padding: 10px 10px; text-align: center;\">";
            if (calMonthStartDate <= calendarPos && calendarDay < calMonthLastDate) {
                calendarDay++;
                html += "<span style=\"display: block; padding: 10px 10px;\">" + calendarDay + "</span>";
            }
            html += "</td>";
            calendarPos++;
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
}

// 해당 년도와 달의 달력을 생성하여 페이지에 추가
var calendar = generateCalendar(Year, Month);
$("#calendar").html(calendar);

monthup.onclick = () => {
    Month++;
    if (Month > 12) {
        Month = 1;
        Year++;
    }
    YearText.innerHTML = `<h1 class="YearText">${Year}</h1>`;
    MonthText.innerHTML = `<h1 class="MonthText">${Month}</h1>`;

    // 새로운 월과 연도에 대한 달력을 생성하고 업데이트합니다.
    var calendar = generateCalendar(Year, Month);
    $("#calendar").html(calendar);
}