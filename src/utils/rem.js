// rem布局（比例为100:1）100px=1rem
export let rem = () => {;
    (function () {
        var size = 100;
        var baseWidth = 750 / 100; //设计图尺寸
        document.documentElement.style.fontSize = size + 'px';

        function setSize() {
            var clientWidth = document.documentElement.clientWidth;
            // 限制字体大小范围
            if (clientWidth > 750) {
                clientWidth = 750;
            }
            size = clientWidth / baseWidth;
            document.documentElement.style.fontSize = size + 'px';
        }
        window.addEventListener('DOMContentLoaded', setSize, false);
        window.addEventListener('resize', setSize, false);
    })();
}
