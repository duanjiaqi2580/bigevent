
var user = {
    /**
     * 用户登录
     * @param {*} userName 
     * @param {*} password 
     * @param {*} callBack 
     */
    login: function (userName, password,callBack) {
        $.post('http://localhost:8000/admin/login', {
            user_name: userName,
            password: password
        },
            function (res) {
                // res是响应体,是$.post这个方法决定的
                callBack(res);
               
            }
        );
    },
    /**
     * 用户退出
     * @param {*} callBack 
     */
    logout: function(callBack){
        $.post('http://localhost:8000/admin/logout',function(res){
            callBack(res);
        });
    }
};