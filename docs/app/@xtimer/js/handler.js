/*
    handler: v1.2.4
*/
{
    $get = $selector => document.querySelector($selector),
    window.$getAll = ($selector,callback) => {
        var selectors = document.querySelectorAll($selector);
        command = callback => [].forEach.call(selectors, callback);
        return {
            inHtml: $content => command(el => el.innerHTML = $content),
            inText: $content => command(el => el.innerText = $content),
            addAttr: $content => command(el => el.setAttribute($content, 'true')),
            removeAttr: $content => command(el => el.removeAttribute($content, 'true')),
            addEvent : ($content, callback) => command(el => el.addEventListener($content, callback)),
            removeEvent : ($content, callback) => command(el => el.removeEventListener($content, callback)),
            show : () => command(el => el.style.display = 'block'),
            hide : () => command(el => el.style.display = 'none'),
        }
    },
    _app = {
        version : '1.2.4',
        name : 'xtimer',
    },
    exal = args => eval(args),
    textTransform = ['.toUpperCase()', '.toLowerCase()', ''],
    _id_item = ["flusher", "uname", "pass"],
    _alert = ($content, $index) => alert(eval(`$content${textTransform[$index]}`)),
    _disable_alert = $selector => {
        $get($selector).addEventListener('focused', () => {
            alert("you are don't have acces for copy this source\ncontact developer please!");
        });
    }
}

var system = {
    jscrypt : {
        enc16 : s => {
            let h = ''
            for (let i = s.length - 1; i >= 0; i--)
            h = '%'+ s.charCodeAt(i).toString(16) + h;
            return h
        },
        dec16 : h => decodeURIComponent(unescape(h)),
        encbyte64 : e => btoa(e),
        decbyte64 : e => atob(e)
    },
    
}

sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));