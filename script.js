//앵커 스위치
document.getElementById('toggleButton').addEventListener('click', function(event) {
    event.preventDefault(); // a 태그의 기본 이벤트 방지
    this.parentElement.classList.toggle('active'); // 클릭된 a 태그의 부모 요소에 'active' 클래스 토글
});

document.getElementById('search-button').addEventListener('click', function() {
// 검색어 가져오기
const searchTerm = document.getElementById('search-input').value.toLowerCase();

// 모든 요소의 텍스트 초기화 (기존 하이라이트 제거)
const elements = document.querySelectorAll('.content *');

elements.forEach(element => {
    const text = element.innerHTML;
    element.innerHTML = text.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
});

// 검색어가 빈 문자열인 경우 종료
if (!searchTerm) {
    return;
}

// 검색어와 일치하는 텍스트를 하이라이트
    elements.forEach(element => {

        const text = element.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        }
    });
});