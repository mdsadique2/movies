const utils = {
    debounce: function (func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    throttle: function(func, wait = 100) {
        let timer = null;
        return function(...args) {
            if (timer === null) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, wait); 
            }
        };
    },

    redirect: (toUrl) => {
        window.location.href = toUrl;
    },

    redirectToPath: (toPath) => {
        window.location.pathname = toPath;
    },

  
    findIndexInArray: (data, keyToCheck, valToFind) => {
        var index = data.findIndex( elm => {
          return elm[keyToCheck] === valToFind;
        })
        return index;
    },

  

    objectToUrlParams: (obj) => {
        let str = '';
        for (var key in obj) {
            var val = obj[key];
            if (val === undefined || val === null) {
                val = '';
            }
            str = `${str}${key}=${encodeURIComponent(val)}&`
        }
        str = str.substr(0, str.length - 1);
        return str;
    },

    urlParamsToObject: (params) => {
        if (params[0] === '?') {
            params = params.substr(1);
        }
        
        let paramsArr = params.split('&');
        let objToReturn = {}
        
        paramsArr.forEach( elm => {
            var arr = elm.split('=');
            objToReturn[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1]);
        })
        return objToReturn;
    },

  

    formatFileSize: (bytes,decimalPoint) => {
        if (!bytes) {
            return '0 Bytes';
        }
        if(bytes === 0) return '0 Bytes';
        var k = 1000,
            dm = decimalPoint || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },

    createElement:  (elmType, classList, innerText) => {
		var elm = document.createElement(elmType);
		elm.setAttribute('class', classList);
		if (innerText !== undefined) {
			elm.innerText =  innerText
		}
		return elm;
    },
    
    jsTimeToEpoch: (date) => {
        let d = new Date(date);
        let time = d.getTime();
        let epoch = Math.round(time / 1000) ;
        return epoch; 
    },
    epochToJsTime: (epoch) => {
        return (new Date(epoch * 1000)).toLocaleDateString(undefined, { 
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric', 
            minute: 'numeric',
            second: 'numeric'
        })
    }
}

export default utils;