// 현재 날짜 정보 가져옴
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth() + 1; // 0부터 시작하므로 +1을 해준다.

var monthdown = document.querySelector('.MonthDown');
var monthup = document.querySelector('.MonthUp');

var Year = currentYear;
var Month = currentMonth;

var YearText = document.getElementById('YearText');
var MonthText = document.getElementById('MonthText');

YearText.innerHTML = `<h1 class="YearText">${Year}</h1>`;
MonthText.innerHTML = `<h1 class="MonthText">${Month}월</h1>`;


monthdown.onclick = () => {
    if (Month > 1) {
        Month--;
    } else {
        Month = 12;
        Year--;
    }
    updateCalendar();
};

monthup.onclick = () => {
    if (Month < 12) {
        Month++;
    } else {
        Month = 1;
        Year++;
    }
    updateCalendar();
};

// 달력 생성 함수
function generateCalendar(year, month) {
    var calenderYear = year;
    var calMonth = month;

    var MonthLastDate = new Date(calenderYear, calMonth, 0);
    console.log(MonthLastDate);

    var calMonthLastDate = MonthLastDate.getDate();
    console.log(calMonthLastDate);

    // 주의 시작 요일을 일요일(0)로 설정
    var calMonthStartDate = new Date(calenderYear, calMonth - 1, 1).getDay();

    console.log(calMonthStartDate);

    var calWeekCount = Math.ceil((calMonthStartDate + calMonthLastDate) / 7);
    console.log(calWeekCount);

    var html = '';
    html +=
        '<table style="border-collapse: collapse; margin-left: auto; margin-right: auto;">';
    //위치
    var calendarPos = 0;
    //날짜
    var calendarDay = 0;
    html +=
        '<tr class="days" style="height:50px";><th style="color: red;">일요일</th><th>월요일</th><th>화요일</th><th>수요일</th><th>목요일</th><th>금요일</th><th style="color: blue;">토요일</th></tr>';
    for (var index1 = 0; index1 < calWeekCount; index1++) {
        //tr을 weekCount만큼 반복해줌 즉 6번
        html += '<tr>';

        for (var index2 = 0; index2 < 7; index2++) {
            var isSunday = index2 === 0; // 일요일 확인
            var isSaturday = index2 === 6; // 토요일 확인
            var cellStyle =
                'border: solid 1px black; width:150px; height:150px;';
            if (isSunday) {
                cellStyle += 'color: red;';
            } else if (isSaturday) {
                cellStyle += 'color: blue;';
            }
            html += `<td style="${cellStyle}">`;
            if (
                calMonthStartDate <= calendarPos &&
                calendarDay < calMonthLastDate
            ) {
                calendarDay++;
                html +=
                    '<span style="display: flex; padding: 10px; position: relative; bottom: 20px;">' +
                    calendarDay +
                    '</span>';
                if (calendarDay === 10 && calMonth === 1) {
                    html += '<span class="sch" style="display:flex"> 면접 일정</span>'
                    html += '<span class="sch" style="display:flex"> 면접 일정</span>'
                    html += '<span class="sch" style="display:flex"> 면접 일정</span>';
                }
            } else {
                html +=
                    '<span style="display: block; padding: 10px 10px;"></span>';
            }
            html += '</td>';
            calendarPos++;
        }
        html += '</tr>';
    }
    html += '</table>';
    return html;
}

// 달력 업데이트 함수
function updateCalendar() {
    YearText.innerHTML = `<h1 class="YearText">${Year}</h1>`;
    MonthText.innerHTML = `<h1 class="MonthText">${Month}</h1>`;

    // 새로운 월과 연도에 대한 달력을 생성하고 업데이트합니다.
    var calendar = generateCalendar(Year, Month);
    $('#calendar').html(calendar);
}

// 페이지 로드 시 달력 업데이트
updateCalendar();
