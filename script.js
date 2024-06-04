//앵커 스위치
document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // a 태그의 기본 이벤트 방지
        this.parentElement.classList.toggle('active'); // 클릭된 a 태그의 부모 요소에 'active' 클래스 토글
    });
});

//search
document.addEventListener('DOMContentLoaded', function() {
    var searchBox = document.getElementById('searchBox');
    var content = document.getElementById('content');

    searchBox.addEventListener('input', function() {
        var searchText = searchBox.value.toLowerCase();
        var paragraphs = content.getElementsByTagName('p');

        // 하라이트 제거
        for (var i = 0; i < paragraphs.length; i++) {
            var paragraph = paragraphs[i];
            var text = paragraph.innerHTML.replace(/<\/?span[^>]*>/g, "");
            paragraph.innerHTML = text;
        }

        if (searchText) {
            for (var i = 0; i < paragraphs.length; i++) {
                var paragraph = paragraphs[i];
                var regex = new RegExp('(' + searchText + ')', 'gi');
                paragraph.innerHTML = paragraph.innerHTML.replace(regex, '<span class="highlight">$1</span>');
            }
        }
    });
});

//memo page

//note download
function downloadNote() {
    var text = document.getElementById("notepad").value; //내용 변수
    var filename = document.getElementById("filename").value || "note"; //input 칸에서 파일이름 가져오기
    var blob = new Blob([text], { type: "text/plain" }); //blob 객체 이용 내용 읽기
    var link = document.createElement("a"); //앵커 태그처럼 작동
    link.href = URL.createObjectURL(blob); //내용 만들어 지정
    link.download = filename + ".txt"; //내용 다운로드
    document.body.appendChild(link); //body에 link 변수 생성
    link.click();
    document.body.removeChild(link); //body에 link 변수 삭제
}

//note font-change
function change_font() {
    var note = document.getElementById("notepad");
    note.style.fontSize = document.getElementById("pt_changer").value + "pt";
}

//contact
function address()
{
    alert("Korea. 17035 464-7 102-201");
}
function phone()
{
    alert("+86 10-5915-5446");
}
function email()
{
    alert("kjs511808@kku.ac.kr");
}

//background-slide_show
document.addEventListener('DOMContentLoaded', function change_img(){
    //document.getElementById("wallpaper").style.transition = "1s";
    setTimeout(() => img_set_1(), 5000);
})
// > loop
function img_set_1() {
    document.getElementById('wallpaper').style.backgroundImage = "url('https://cdn.pixabay.com/photo/2022/08/22/07/35/city-7403001_1280.jpg')";
    //사진 변경
    setTimeout(() => img_set_2(), 5000);
    //시간 이후 다음 함수 호출
}
function img_set_2() {
    document.getElementById('wallpaper').style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_1280.jpg')";
    //사진 변경
    setTimeout(() => img_set_3(), 5000);
    //시간 이후 다음 함수 호출
}
function img_set_3() {
    document.getElementById('wallpaper').style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/20/08/34/buildings-1842205_1280.jpg')";
    //사진 변경
    setTimeout(() => img_set_1(), 5000);
    //시간 이후 다음 함수 호출
}

