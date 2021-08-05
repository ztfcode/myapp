try {
    //$(document).ready(() => console.log('use jquery please!'));
} catch (e) {/*console.log('include jquery plugin!')*/
}
$img = 'src/images/love-alert.webp'
_loveAlert = 
`<style>
    .love-alert {
        background-color: #001f35;border: solid 1px #5f65ff;color: #9b9fff;border: 0;padding: 0.55rem;
    }
    .modal-dialog.centered {
        display: -ms-flexbox;display: flex;-ms-flex-align: center;align-items: center;min-height: calc(100% - 1rem);top: -45px;
    }
    .fade2 {
        transform: scale(0.9);opacity: 0;transition: all 0.25s linear;display: block;
    }
    .fade2.show {
        opacity: 1;transform: scale(1);
    }
    .btn.btn-sm.la-btn, .btn.btn-sm.la-btn:hover {
        width: 60px;
    }
    .btn.btn-sm.la-btn:hover, .btn.btn-sm.la-btn:focus {
        background-color: #9b9fff;color: #001f35;
    }
    .btn.btn-sm.la-btn:active {
        background-color: rgba(65, 66, 225, 0.25);color: #9b9fff;
    }
    .la-blink {
        animation: lablink 1s linear infinite;
    }
    @keyframes lablink {
        0% {
            opacity: 1;
        }
        /*50% {
            opacity: 0;
        }*/
        100% {
            opacity: 0;
        }
    }
    .bg-love-alert {
        position: relative;z-index: 1;
    }
    .bg-love-alert:before {
        content: "";position: absolute;z-index: -1;top: 0;bottom: 0;left: 0;right: 0;background: url(${$img}) no-repeat center center;-webkit-background-size: 100% 100%;opacity: 0.2;
    }
</style>
<div id="love-alert"></div>`
document.write(_loveAlert)

loveAlert = $content => {
    _header = $content => `<p class="h6 text-uppercase la-blink pb-2">${$content}<span style="font-size: 1.2rem" class="bi-exclamation-circle ml-2"></span></p>`;
    _footer = $content => `<div class="row"><div class="col"><a id="btn-no" type="button" data-dismiss="modal" class="btn btn-sm la-btn">${$content}</a></div><div class="col"><a id="btn-yes" data-dismiss="modal" type="button" class="btn btn-sm la-btn mr-5">ok</a></div></div>`;
    _alertType = ['', _header('warning'), _header('notification')]
    _alertFooter = [_footer(''), _footer('batal'), _footer('tutup')]
    var $bgimg = ''
    if ($content[3] == true || $content[3] == 'true') {
        $content[3] = `<img src="${$img}" class="mb-2 rounded" style="opacity: 0.5;" width="245px">`
    } else if ($content[3] == 'bgfill') {
        $bgimg = 'bg-love-alert'
        $content[3] = ''
    } else {
        $content[3] = ''
    }
    _alert = 
    `<div class="modal fade2 text-dark p-2" id="love-alert-display" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog centered modal-dialog-sm">
                  <div class="modal-content love-alert ${$bgimg}">
                    <div class="modal-header border-bottom-0">
                    </div>
                    <div class="modal-body pt-0 pb-0">
                      <div style="padding: 0 1rem 0 1rem">
                        ${_alertType[$content[0]]}
                        ${$content[3]}
                        <p><small>${$content[2]}</small></p>
                      </div>
                    </div>
                    <div class="modal-footer border-top-0 pb-1 text-uppercase h6 small">
                      ${_alertFooter[$content[1]]}
                    </div>
                  </div>
                </div>
              </div>`;
    $('#love-alert-display').show((() => {
        $('#love-alert').html(_alert)
        $('#love-alert-display').modal('show')
    })())
    
    //$(document).ready(() => $('#love-alert-display').modal('show'))
}
