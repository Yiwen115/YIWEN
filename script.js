// 資源中心的標籤切換
function switchResource(resourceType) {
    document.querySelectorAll('.resource-content').forEach(content => {
        content.style.display = 'none';
    });
    
    document.querySelectorAll('.resource-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(resourceType).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// 其他章節的標籤切換
function showTab(tabId, buttonElement) {
    // 獲取當前section
    const section = buttonElement.closest('.section-container');
    
    // 隱藏當前section內的所有內容
    section.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除當前section內所有按鈕的活動狀態
    section.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 顯示選中的內容
    document.getElementById(tabId).classList.add('active');
    
    // 設置按鈕的活動狀態
    buttonElement.classList.add('active');
}

// 彈窗功能
function showDetails(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeDetails(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 點擊彈窗外部關閉
window.onclick = function(event) {
    if (event.target.classList.contains('details-modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 導航欄連結點擊處理
document.addEventListener('DOMContentLoaded', function() {
    // 預設顯示政策法規
    document.getElementById('policy').style.display = 'block';
    document.getElementById('tech').style.display = 'none';
    document.getElementById('funding').style.display = 'none';

    // 確保每個章節的第一個標籤內容顯示
    document.querySelectorAll('.section-container').forEach(section => {
        const firstContent = section.querySelector('.tab-content');
        if (firstContent) {
            firstContent.classList.add('active');
        }
    });

    // 導航欄連結平滑滾動
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滾動顯示動畫
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.content-card').forEach(card => {
        observer.observe(card);
    });
});

// 平滑滾動效果增強
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 