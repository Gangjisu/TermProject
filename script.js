//앵커 스위치
document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // a 태그의 기본 이벤트 방지
        this.parentElement.classList.toggle('active'); // 클릭된 a 태그의 부모 요소에 'active' 클래스 토글
    });
});



// Search
document.getElementById('search-button').addEventListener('click', function() {
    // 검색어 가져오기
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // 모든 요소 초기화
    const elements = document.querySelectorAll('.content *');
    elements.forEach(element => {
        element.classList.remove('highlight'); // 기존 하이라이트 제거
    });

    // 검색어가 빈 문자열인 경우 종료
    if (!searchTerm) {
        return;
    }

    // 검색어와 일치하는 첫 번째 요소로 스크롤 이동
    let found = false;
    elements.forEach(element => {
        if (!found && element.textContent.toLowerCase().includes(searchTerm)) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('highlight');
            found = true;
        }
    });
});
