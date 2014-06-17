/**
 * Created with JetBrains WebStorm.
 * User: Jiyuan
 * Date: 14-2-12
 * Time: 下午4:31
 * To change this template use File | Settings | File Templates.
 */
(function(H){
    H.namespace("First.Class",
        function(ns){

            ns.H8 = H.Class(function(){
                //构造函数
                this._construct = function(){
                    this.name = "H8";
                    alert("construct H8!");
                };

                //共有方法
                this.show = function(){
                    this.base.show();
                    //ns.GreatWall.superClass.show();
                    alert("car "+this.name );
                }
            }).base(ns.GreatWall);

        }
    );
}(HexStudy));
