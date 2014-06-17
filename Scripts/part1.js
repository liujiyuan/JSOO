/**
 * Created with JetBrains WebStorm.
 * User: JiYuan
 * Date: 14-2-12
 * Time: 下午4:29
 * To change this template use File | Settings | File Templates.
 */
//以闭包的方式声明以避免H全局变量的冲突
(function(H){
    H.namespace("First.Class",
        function(ns){

            ns.Car = H.Class({

                //共有属性
                name : "car",

                //构造函数
                _construct : function(){
                    alert("construct car!");

                },

                //共有方法
                show : function(){
                    alert(this.name);
                }
            }).base(null);

        }
    );
}(HexStudy));
