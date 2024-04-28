// 分享本页
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return document.title + "：" + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 切换全屏状态的函数
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        localStorage.setItem('isFullScreen', 'true');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        localStorage.setItem('isFullScreen', 'false');
    }
}

// 尝试根据本地存储的状态进入全屏
function attemptFullScreen() {
    if (localStorage.getItem('isFullScreen') === 'true') {
        document.documentElement.requestFullscreen().catch(e => {
            console.log(e);
            localStorage.setItem('isFullScreen', 'false'); // 无法进入全屏时重置状态
        });
    }
}

// 在页面加载完成后尝试进入全屏
document.addEventListener('DOMContentLoaded', attemptFullScreen);

