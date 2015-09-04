(function (global) {

    var Home={
        domain:'http://999game.sinaapp.com/api/',
        getFreeList:function(freeId,count,callback){
            SmartNativeAPI.httpPost(this.domain+'free.php',{action:'image', freeId:freeId, count:count},function (response) {
                console.log('>>>getList getFreeList:' + JSON.stringify(response));
                callback(response);
            });
        },
        getList:function(categoryId,freeId, pageIndex, pageSize, orderBy,callback){
            SmartNativeAPI.httpPost(this.domain+'list.php',{action:'list', freeId:freeId, i:pageIndex,p:pageSize,o:orderBy},function (response) {
                console.log('>>>getList response:' + JSON.stringify(response));
                callback(response);
            });
        },
        init:function(){
            Home.getFreeList(100,5,function(responseText){
                var height = (document.body.clientWidth*9)/16;
                var data = {heigth:height, list:JSON.parse(responseText)};
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

            Home.getList(0,101,1,5,1,function(responseText){
                var data = {title:'编辑推荐', list:JSON.parse(responseText)};
                View.render('recommendList','data', data);
            });

            Home.getList(0,0,1,5,1,function(responseText){
                var data = {title:'最新游戏', list:JSON.parse(responseText)};
                View.render('newList','data', data);
            });

            Home.getList(0,0,1,5,2,function(responseText){
                var data = {title:'热门游戏', list:JSON.parse(responseText)};
                View.render('hotList','data', data);
            });
        },
        openWindow:function(gameId,name, url){
            SmartNativeAPI.openWindow(name, url, {gameId:gameId,gameName:name}, 'common');
        },

        open:function(name, url){
            SmartNativeAPI.openWindow(name, url, {}, 'common');
        }
    };


    Home.init();


    global.Home=Home;

})(window);
