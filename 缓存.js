/*
* @Author: Administrator
* @Date:   2017-07-18 09:59:27
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-18 10:00:30
*/
var sy = sy || {};  
sy.data = sy.data || {};// 用于存放临时的数据或者对象  
/** 
 * 0:当前窗口 
 * 1:所有窗口共享 
 * 2:指定域名结尾允许访问,配置domain,需要支持html5 
 */  
sy.getDataScope = function(){  
    return 1;  
}  
/** 
 * 范围 
 */  
sy.getDomain = function(){  
    return ".com";  
}  
/** 
 * 当前窗口缓存 
 */  
sy.setItem = function(key,value){  
    if(key!=undefined){  
        if(sy.data==undefined){  
            sy.data = {};  
        }  
        sy.data[key]=value;  
    }  
}  
/** 
 * 当前窗口获取缓存 
 */  
sy.getItem = function(key){  
    if(key!=undefined){  
        if(sy.data==undefined){  
            return undefined;  
        }  
        return sy.data[key];  
    }  
}  
/** 
 * 缓存数据 
 * @param key 键 
 * @param value 值 
 */  
sy.cookie = function(key,value){  
    switch(sy.getDataScope()){  
        case 0:  
            if(sessionStorage){  
                return storage(sessionStorage,key,value);  
            }else{  
                if(value==undefined){  
                    return sy.data[key];  
                }else{  
                    sy.data[key]=value;  
                    return value;  
                }  
            }  
            break;  
        case 2:  
            if(globalStorage){  
                return storage(globalStorage[sy.getDomain()],key,value);  
            }//如果域对象不可用则存储为全局  
        case 1:  
            if(localStorage){  
                return storage(localStorage,key,value);  
            }else{  
                if(value==undefined){  
                    return $.cookie(key);;  
                }else{  
                    $.cookie(key,value);;  
                    return value;  
                }  
                  
            }  
            break;  
    }  
    function storage(obj,key,value){  
        if(obj){  
            if(value==undefined){  
                return obj.getItem(key);  
            }else{  
                obj.setItem(key,value);  
                return value;  
            }  
        }  
    }  
}  
/** 
 * 仅用于存储cookie,会将对象转为jsonString 
 */  
sy.cookieString = function(key,value){  
    if(value!=undefined){  
        sy.cookie(key,toJsonString(value));  
    }  
}  
/** 
 * 仅用于读取cookie,会将jsonString转为对象 
 */  
sy.cookieParse = function(key){  
    var cv = sy.cookie(key);  
    if(cv==undefined){  
        return undefined;  
    }  
    return JSON.parse(cv);  
}  
/** 
 * 清除所有缓存 
 */  
sy.clearCookies = function(){  
    switch(sy.getDataScope()){  
    case 0:  
        if(sessionStorage){  
            sessionStorage.clear();  
        }else{  
            sy.data={};  
        }  
        break;  
    case 2:  
        if(globalStorage){  
            globalStorage[sy.getDomain()].clear();  
            break;  
        }//如果域对象不可用则清理全局  
    case 1:  
        if(localStorage){  
            localStorage.clear();  
        }else{  
            clearCookies();  
            function clearCookies(){  
                var cookies = document.cookie.split(";");  
                for (var i = 0; i < cookies.length; i++) {  
                    var cookie = cookies[i];  
                    var eqPos = cookie.indexOf("=");  
                    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;  
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";  
                }  
                if(cookies.length > 0)  
                {  
                    for (var i = 0; i < cookies.length; i++) {  
                        var cookie = cookies[i];  
                        var eqPos = cookie.indexOf("=");  
                        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;  
                        var domain = location.host.substr(location.host.indexOf('.'));  
                        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;  
                    }  
                }  
            }  
        }  
        break;  
    }  
}  
/** 
 * 删除cookie 
 */  
sy.removeCookie = function(key){  
    switch(sy.getDataScope()){  
    case 0:  
        if(sessionStorage){  
            sessionStorage.removeItem(key);  
        }else{  
            sy.data[key]=undefined;  
        }  
        break;  
    case 2:  
        if(globalStorage){  
            globalStorage[sy.getDomain()].removeItem(key);  
            break;  
        }//如果域对象不可用则删除全局cookie  
    case 1:  
        if(localStorage){  
            localStorage.removeItem(key);  
        }else{  
            $.cookie(key,null);  
        }  
        break;  
    }  
}  