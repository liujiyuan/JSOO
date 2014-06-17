/**
 * JavaScript OO Lib
 * version: 1.0
 * User: JiYuan
 * Date: 14-2-11
 * reference jquery.js
 */
(function(win){

    /**
     * @namespace HexStudy
     * 是框架内部所有类的全局命名空间。在全局H未被占用的情况下，也可以使用其缩写H。
     */
    var HexStudy = {};


    /**
     * @method namespace 声明命名空间。
     * @name namespace 声明命名空间。
     * @param {String} ns_string String对象。
     * @param {Function} declareClass 声明类表达式。
     */
    HexStudy.namespace = function(ns_string, declareClass){
        var parts = ns_string.split('.');
        var parent = { };
        var i;
        for(i=0;i<parts.length;i += 1){
            if( i == 0){
                if(typeof win[parts[i]] === "undefined"){
                    win[parts[i]] = {};
                }
                parent = win[parts[i]];
            }
            else{
                if(typeof parent[parts[i]] === "undefined"){
                    parent[parts[i]] = {};
                }
                parent = parent[parts[i]];
            }
        }
        if(typeof declareClass !== "undefined")
            declareClass(parent);
        return parent;
    };

    /**
     * @method Class 声明命名空间。
     * @name Class 声明命名空间。
     * @param {Function} classDeclare 声明类表达式。
     */
    HexStudy.Class = function(classDeclare){

        var parentBuilder = {};
        parentBuilder.base = function(parent){
            //构建新类构造函数
            var Child = function(){
                if(Child.sinerClass
                    //&& Child.sinerClass.hasOwnProperty("_construct")
                    &&
                    !(arguments.length != 0
                        && typeof arguments[0] !== "undefined"
                        && typeof arguments[0].zaqwsxcderfv !== "undefined") ){
                    Child.sinerClass.constructor.apply(this, arguments);
                }
                if(Child.prototype.hasOwnProperty("_construct")
                    &&
                    !(arguments.length != 0
                        && typeof arguments[0] !== "undefined"
                        && typeof arguments[0].zaqwsxcderfv !== "undefined")
                    ) {
                    Child.prototype._construct.apply(this, arguments);
                }
            }

            //继承
            H.inherit(Child, parent);

            //设置子类成员
            if(typeof classDeclare === "function"){
                var tmpClassDeclare = new classDeclare({zaqwsxcderfv:{}});
                setChildPrototype(tmpClassDeclare);
            }
            else{
                setChildPrototype(classDeclare);
            }

            //设置子类成员方法
            function setChildPrototype(childClassDeclare) {
                //处理父类
                if(typeof parent === "function"){
                    var parentObj = new parent({zaqwsxcderfv:{}});
                    if(parentObj.hasOwnProperty("_construct")){
                        Child.sinerClass._construct = parentObj._construct;
                    }
                    //设置父类静态成员
                    if(parentObj.hasOwnProperty("static")){
                        for(var j in parentObj["static"]) {
                            Child[j] = parentObj["static"][j];
                        }
                    }
                }

                //处理子类
                //设置成员
                for (var i in childClassDeclare) {
                    if (childClassDeclare.hasOwnProperty(i) && i !=="static") {
                        Child.prototype[i] = childClassDeclare[i];
                    }
                }

                //设置静态成员

                if(childClassDeclare.hasOwnProperty("static")){
                    var staticCollection = childClassDeclare["static"];
                    for(var j in staticCollection) {
                        Child[j] = staticCollection[j];
                    }
                }

            }

            return Child;
        }
        return parentBuilder;
    }


    /**
     * @method usingNS 引用命名空间。
     * @name usingNS 引用命名空间。
     * @param {String} ns String对象。
     */
    HexStudy.using = function(ns){
        var nsParts = ns.split("."), nsObj = win;
        for(var i = 0; i < nsParts.length; i++)
        {
            var part = nsParts[i];
            nsObj = nsObj[part] || (nsObj[part] = {});
        }
        return nsObj;
    };

    var emptyConstructor = function() {};
    /**
     * HexStudy框架的继承方法。必须在childClass的prototype扩展前调用。
     * @param {Function} childClass 子类。
     * @param {Function} parentClass 父类。
     */
    HexStudy.inherit = function(childClass, parentClass)
    {
        if(parentClass == undefined || childClass == undefined)
        {return;}
        emptyConstructor.prototype = parentClass.prototype;
        childClass.prototype = new emptyConstructor();
        childClass.sinerClass = parentClass.prototype;
        childClass.prototype.constructor = childClass;
        childClass.prototype.base = parentClass.prototype;
    };

    /**
     * 调用父类构造函数。
     * @param {Function} childClass 子类。
     * @param {Object} contextObj 函数执行上下文。
     * @param {Object} contextArguments 函数执行上下文参数。
     */
    HexStudy.callSuperConstructor = function(childClass, contextObj, contextArguments)
    {
        if(childClass.sinerClass == undefined)
        {
            //alert("非继承类！");
            return;
        }
        childClass.sinerClass.constructor.apply(contextObj, contextArguments);
    };

    /**
     * 默认的全局namespace为HexStudy或H（当H没有被占据的情况下）。
     */
    if(win.H == undefined) win.H = HexStudy;
    /**
     * 强制将HexStudy设置为全局命名空间。
     */
    win.HexStudy = HexStudy;
}(window));