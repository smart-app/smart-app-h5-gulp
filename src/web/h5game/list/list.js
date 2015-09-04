(function (global) {

    var List={
        domain:'http://999game.sinaapp.com/api/',
        getList:function(categoryId,freeId, pageIndex, pageSize, orderBy,callback){
            SmartNativeAPI.httpPost(this.domain+'list.php',{action:'list', freeId:freeId, i:pageIndex,p:pageSize,o:orderBy},function (response) {
                console.log('>>>getList response:' + JSON.stringify(response));
                callback(response);
            });
        },

        init:function(){
            var pager = new Pager();
            pager.init(function(successCallback){
                List.getList(0,0,pager.pageIndex, pager.pageSize,1,function(responseText){

                    var data = {list:JSON.parse(responseText)};

                    View.render('listPanel','data', data);

                    successCallback(data.list.length==0);
                });
            });

        },
        openWindow:function(gameId,name, url){
            SmartNativeAPI.openWindow(name, url, {gameId:gameId,gameName:name}, 'common');
        }
    };


    List.init();


    global.List=List;

})(window);
