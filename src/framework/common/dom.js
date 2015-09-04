(function (global, undefined) {

    var dom = {

        get: function (id) {
            return document.getElementById(id);
        },

        setHtml: function (id, content) {
            this.get(id).innerHTML = content;
        },

        closeLoading: function (id) {
            this.get(id || 'loading').style.display = "none";
        }
    }

    global.Dom = dom;

})
(window);
