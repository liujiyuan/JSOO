/**
 * Created with JetBrains WebStorm.
 * User: Jiyuan
 * Date: 14-2-12
 * Time: 下午4:30
 * To change this template use File | Settings | File Templates.
 */
(function(H){
    H.namespace("First.Class",
        function(ns){


            ns.GreatWall = H.Class({
                //共有属性
                name : "GreatWall",

                //构造函数
                _construct : function(){
                    alert("construct GreatWall!");

                },

                //共有方法
                show : function(){
                    this.base.show();  //调用父类方法
                    //ns.GreatWall.superClass.show();
                    alert(this.name);
                }

            }).base(ns.Car);



        }
    );
}(HexStudy));
