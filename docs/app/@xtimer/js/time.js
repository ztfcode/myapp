var _date = new Date()
var $date = () => {
    //setTimeout($date, 1000);
    return {
        hh : _date.getHours(),
        ss : _date.getSeconds(),
        mm : _date.getMinutes() ,
        ms : _date.getMilliseconds(),
        hhf : () => ($date().hh < 10) ? ('0').concat($date().hh) : $date().hh,
        mmf : () => ($date().mm < 10) ? ('0').concat($date().mm) : $date().mm,
        ssf : () => ($date().ss < 10) ? ('0').concat($date().ss) : $date().ss,
        msf : () => {
            var conv = parseInt($date().ms / 10)
            return xsf = (conv < 10) ? ('0').concat(conv) : conv
        }
    };
}
var format = {
    t12 : value => {
        value = (value > 12) ? value - 12 : value
        //value = (value < 10) ? ('0').concat(value) : value
        return value
    },
    t24 : value => value
}
var session = (args, _custom_args) => {
    var sess = ''
    if (args == true || args == 'true') {
        sess = ($date().hh >= 0 && $date().hh < 12) ? sess = 'am' : sess = 'pm'
    } else {
        sess = _custom_args
        if (_custom_args == undefined) sess = ''
    }
    return {
        Up : sess.toUpperCase(), 
        Low : sess.toLowerCase()
    };
}
var example_clock = [format.t12($date().hhf()), $date().mmf(), $date().ssf()]
//console.log((example_clock.join(':')).concat('.', $date().msf(),' ',session(false, 'wib').Up));