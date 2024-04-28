// 分享本页
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return document.title + "：" + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 切换全屏状态的函数
function toggleFullScreen() {
    // 判断当前是否全屏
    if (!document.fullscreenElement &&    // 标准模式
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // 兼容Firefox, Chrome/Opera和IE
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen(); // 标准方法
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(); // IE11
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(); // Chrome, Safari (webkit)
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen(); // Firefox
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); // 标准方法
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen(); // IE11
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen(); // Chrome, Safari (webkit)
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen(); // Firefox
        }
    }

    // 切换按钮的显示状态
    updateButton();
}

// 更新按钮显示的函数
function updateButton() {
    var fsButton = document.getElementById('toggleFullScreen');
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        // 如果现在是全屏状态，更新为“退出全屏”的图标和提示
        fsButton.innerHTML = '<i class="fas fa-compress" title="退出全屏"></i>';
    } else {
        // 如果现在是非全屏状态，更新为“全屏”的图标和提示
        fsButton.innerHTML = '<i class="fas fa-expand" title="全屏"></i>';
    }
}

// 为全屏变化事件添加监听器
document.addEventListener('fullscreenchange', updateButton);
document.addEventListener('mozfullscreenchange', updateButton);
document.addEventListener('webkitfullscreenchange', updateButton);
document.addEventListener('MSFullscreenChange', updateButton);

// 页面加载完成后，初始化按钮状态
document.addEventListener('DOMContentLoaded', updateButton);


