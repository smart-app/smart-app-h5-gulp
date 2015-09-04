(function (global) {

    var List = {
        init: function () {
            var m = Utils.getParameter("m") || '';
            var c = Utils.getParameter("c") || '';
            var s = Utils.getParameter("s") || '';
            var pager = new Pager();
            pager.init(function (successCallback) {
                API.getList('list.php', 'list', m, c, s, pager.pageIndex, pager.pageSize, 1, function (responseText) {

                    var data = {list: JSON.parse(responseText)};

                    View.render('listPanel', 'data', data);

                    successCallback(data.list.length == 0);
                });
            });

        },
        openWindow: function (id, title) {
            var url = "file:///android_asset/app/web/codehelp/detail/detail.html?id=" + id + "&title=" + encodeURIComponent(title);
            SmartNativeAPI.openWindow(title, url, {}, 'common');
        }
    };


    List.init();


    global.List = List;

})(window);
