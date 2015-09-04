(function (global) {

    var id  = Utils.getParameter("id");
    var title = Utils.getParameter("title");
    Dom.setHtml('title', title);
    API.getDetail(id, function(responseText){
        Dom.closeLoading();
        Dom.setHtml('content', responseText);
    });

})(window);
