require.config({
    'baseUrl': 'app/',
    'paths': {
        'jquery': '../js/jquery' //只写文件名，不用带后缀
    },
    shim: { //依赖关系
        'qs': {
            // exports: 'modal'    //单个方法
            init: function() { //多个函数，优先级比exports高
                return {
                    modal: modal,
                    success: success
                }
            }
        }
        /*'bootstrap': {
            'deps': ['jquery', 'css!../css/bootstrap.min.css', 'css!../css/font-awesome.min.css']
        }*/
    }
});