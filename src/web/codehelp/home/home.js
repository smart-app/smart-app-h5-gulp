(function (global) {

    var Home={
        init:function(){
            API.getList('list.php','list', 89, 116, 0, 1, 5, 1,function(responseText){
                var width = (document.body.clientWidth*9)/16;
                var data = {width:width, heigth:width*9/16, list:JSON.parse(responseText)};
                View.render('swiperPanel','swiper', data);
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 30,
                    loop: true
                });
                View.get('loading').style.display="none";
            });

            API.getList('latest.php','rec', 0, 0, 0, 1, 10, 1,function(responseText){
                var data = {title:'编辑推荐', list:JSON.parse(responseText)};
                View.render('recommendList','data', data);
                View.get('loading').style.display="none";
            });

            API.getList('latest.php','new', 0, 0, 0, 1, 10, 1,function(responseText){
                var data = {title:'最新文章', list:JSON.parse(responseText)};
                View.render('newList','data', data);
            });

            API.getList('hot.php','hot', 0, 0, 0, 1, 10, 1,function(responseText){
                var data = {title:'热门文章', list:JSON.parse(responseText)};
                View.render('hotList','data', data);
            });
        },

        openWindow:function(id, title){
            var url = "file:///android_asset/app/web/codehelp/detail/detail.html?id="+id+"&title="+encodeURIComponent(title);
            SmartNativeAPI.openWindow(title, url, {}, 'common');
        }

    };


    Home.init();


    global.Home=Home;

})(window);
