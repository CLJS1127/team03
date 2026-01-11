// 신청 폼 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('신청 페이지 로드됨');

    // 글자 수 카운터
    initCharCounter();

    // 파일 업로드
    initFileUpload();

    // 전체 동의 체크박스
    initAgreeAll();

    // 폼 제출
    initFormSubmit();
});

// 글자 수 카운터
function initCharCounter() {
    const motivationTextarea = document.getElementById('motivation');
    const charCount = document.getElementById('charCount');

    if (motivationTextarea && charCount) {
        motivationTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;

            if (count > 500) {
                charCount.style.color = '#FF6B6B';
            } else {
                charCount.style.color = '#666';
            }
        });
    }
}

// 파일 업로드
function initFileUpload() {
    const fileInput = document.getElementById('portfolio');
    const fileText = document.getElementById('fileName');

    if (fileInput && fileText) {
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                const fileName = this.files[0].name;
                const fileSize = (this.files[0].size / 1024 / 1024).toFixed(2);

                if (fileSize > 10) {
                    alert('파일 크기는 10MB를 초과할 수 없습니다.');
                    this.value = '';
                    fileText.textContent = '파일을 선택하거나 드래그하세요';
                } else {
                    fileText.textContent = `${fileName} (${fileSize}MB)`;
                }
            } else {
                fileText.textContent = '파일을 선택하거나 드래그하세요';
            }
        });
    }
}

// 전체 동의
function initAgreeAll() {
    const agreeAll = document.getElementById('agreeAll');
    const agreeItems = document.querySelectorAll('.agree-item');

    if (agreeAll) {
        agreeAll.addEventListener('change', function() {
            agreeItems.forEach(item => {
                item.checked = this.checked;
            });
        });

        agreeItems.forEach(item => {
            item.addEventListener('change', function() {
                const allChecked = Array.from(agreeItems).every(i => i.checked);
                agreeAll.checked = allChecked;
            });
        });
    }
}

// 폼 제출
function initFormSubmit() {
    const form = document.getElementById('applicationForm');
    const modal = document.getElementById('successModal');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // 유효성 검사
            if (!validateForm()) {
                return;
            }

            // 폼 데이터 수집 (실제로는 서버로 전송)
            const formData = new FormData(form);
            console.log('신청 데이터:', Object.fromEntries(formData));

            // 성공 모달 표시
            if (modal) {
                modal.style.display = 'flex';

                // 배경 클릭 시 모달 닫기
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            }
        });
    }
}

// 폼 유효성 검사
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const motivation = document.getElementById('motivation').value.trim();
    const agreeTerms = document.querySelector('input[name="agreeTerms"]').checked;
    const agreePrivacy = document.querySelector('input[name="agreePrivacy"]').checked;

    if (!name) {
        alert('이름을 입력해주세요.');
        document.getElementById('name').focus();
        return false;
    }

    if (!email) {
        alert('이메일을 입력해주세요.');
        document.getElementById('email').focus();
        return false;
    }

    if (!validateEmail(email)) {
        alert('올바른 이메일 형식이 아닙니다.');
        document.getElementById('email').focus();
        return false;
    }

    if (!phone) {
        alert('전화번호를 입력해주세요.');
        document.getElementById('phone').focus();
        return false;
    }

    if (motivation.length < 100) {
        alert('지원 동기는 최소 100자 이상 작성해주세요.');
        document.getElementById('motivation').focus();
        return false;
    }

    if (!agreeTerms || !agreePrivacy) {
        alert('필수 약관에 동의해주세요.');
        return false;
    }

    return true;
}

// 이메일 유효성 검사
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
