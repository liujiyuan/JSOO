/**
 * JavaScript event Lib part of OO Lib
 * version: 1.0
 * User: JiYuan
 * Date: 14-2-11
 *reference jquery.js
 */
(function(H){

    H.Event = {
        eventMap:{},
        /**
         * 注册事件侦听器对象，以使侦听器能够接收事件通知。
         * @name attach
         * @param {String} eventType 要注册的事件类型。
         * @param {Function} callback 要注册的事件类型。
         */
        attach:function(eventType, callback) {
            if (typeof eventType === "string" && typeof callback === "function") {
                var map = this.eventMap[eventType];
                if(map == null) map = this.eventMap[eventType] = [];
                if(map.indexOf(callback) == -1)
                {
                    map.push(callback);
                    return true;
                }
            }
            return false;
        },

        /**
         * 移除监听的事件。
         * @name remove
         * @param {String} eventType 要注册的事件类型。
         * @param {Function} callback 要注册的事件类型。
         */
        remove:function(eventType, callback) {

            if(arguments.length == 1) return false;
            var map = this.eventMap[eventType];
            if(map == null) return false;

            for(var i = 0; i < map.length; i++)
            {
                var li = map[i];
                if(li === callback)
                {
                    map.splice(i, 1);
                    if(map.length == 0) delete this.eventMap[eventType];
                    return true;
                }
            }
            return false;
        },

        /**
         * 触发事件。
         * @name fire
         * @param {String} eventType 要触发的事件类型。
         * @param {Object} data 要触发的事件类型。
         */
        fire: function(eventType, data) {
            if(typeof eventType === "undefined") return false;
            var map = this.eventMap[eventType];
            if (map) {
                var event = {
                    type: eventType,
                    target: this,
                    data: data
                };

                for (var length = map.length, start=0; start<length; start+=1) {
                    var callBack = this.eventMap[eventType][start];
                    if(typeof callBack === "function"){
                        callBack.call(this, event);
                    }
                }
            }
            return true;
        }
    };

}(HexStudy));