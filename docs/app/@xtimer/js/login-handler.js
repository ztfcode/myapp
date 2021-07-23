/*
    form handler V 1.2.4
    depend jquery js plugin
*/
var $contact = '%31%35%30%34%35%36%36%32%35%37%35'
var $text = '%41%73%73%61%6c%61%6d%75%27%61%6c%61%69%6b%75%6d%20%77%72%20%77%62%0a%50%61%73%73%77%6f%72%64%6e%79%61%20%64%6f%6e%67%20%6f%6e%69%69%2d%63%68%61%6e%21'
var preloadc = `<div class="pre-loader papreload">
        <div class="sk-fading-circle">
          <img style="margin-left: -1.75em" src="src/images/preloader.svg"/>
          <div id="preload" class="d-none"></div>
        </div>
      </div>`
loadpreloader = () => $get('#load-preloader').innerHTML = preloadc;
      
var preload = ''
    /*for (var x = 1;x <= 12;x++) {
        preload += `<div class="sk-circle${x} sk-circle"></div>`
    $get('#preload').innerHTML = preload
    }*/
      
preloader = ($delay) => {
    'use strict';
    sleep($delay).then(() => {
        $(window).on('load', (() => {
            if ($(".pre-loader").length > 0) {
                $(".pre-loader").fadeOut("slow");
            }
        })());
    })
}

$login = 
`<div id="msg"></div>
<div id="form-hide" class="card cdark justify-content-center">
  <div class="bg-art">
  <div class="card-body m-2">
    <form onsubmit="return false">
      <div class="form-group">
        <p class="h5 text-light text-uppercase"><strong>login</strong></p>
        <hr style="border-top-color: rgba(250, 250, 250, 0.4)">
        <label class="text-success-1 small">Username</label>
        <div class="input-group input-group-sm input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text bi-person-fill transparent border-0 text-success ml-1"></span>
          </div>
          <input id="uname" type="text" class="form-control text-success transparent border-0" aria-label="Sizing example input" placeholder="username" required>
          <div id="flusher1" class="input-group-append">
            <div id="flush-data1" class="input-group-text transparent border-0 text-success mr-2 p-0"><span class="input-flush"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="text-success-1 small">Password</label>
        <div class="input-group input-group-sm input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text bi-key-fill transparent border-0 text-success ml-1"></span>
          </div>
          <input id="pass" type="password" class="form-control text-success transparent border-0" aria-label="Sizing example input" placeholder="password" required>
          <div id="flusher2" class="input-group-append">
            <div id="flush-data2" class="input-group-text transparent border-0 text-success p-0"><span class="input-flush"></span>
            </div>
          </div>
          <div class="input-group-append">
            <div class="input-group-text transparent border-0">
              <label class="toggles m-0" for="checkbox">
                <input type="checkbox" id="checkbox"/><span class="show-hide mr-1 mb-0 text-success"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <label style="font-size: 0.65rem" class="w-100 text-right"><a class="text-success text-decoration-none" href="https://wa.me/${$contact}?text=${$text}">Lupa password?</a></label>
      <div class="row">
        <div class="col">
          <input id="captcha" type="text" class="form-control form-control-sm text-light transparent border-cdark" placeholder="captcha" required>
        </div>
        <div class="col">
          <input id="captcha-value" type="text" class="form-control form-control-sm text-center bg-dark text-warning border-cdark" placeholder="Captcha" value="" readonly>
        </div>
      </div>
      <div class="form-group">
      <br>
      <button id="login-submit" type="submit" class="btn btn-success btn-block"><span class="text-uppercase">login</span></button>
      <!-- <br>
      <div><center><small style="font-size: 0.4rem" class="text-uppercase">-temanggung gray hat society-</small></center></div>
      </div> -->
      </div>
    </form>
  </div>
  </div>
</div>`
$('#xlogin').html($login)
    
    $getAll('#project').inHtml(_app.name + ' login')
    $getAll('#version').inHtml('V ' + _app.version)
    
    _hide_form = () => {
        $get("#form-hide").classList.add("d-none")
        $getAll('#project').inHtml(_app.name)
        $get("#xtimer").classList.add("d-block")
    }
    
    //document.getElementById("tghs").src = "data/tghs.png";
    
    _disable_alert("body");
    
    for (x = 1;x < _id_item.length;x++) {
        exal(`
        flushing${x} = () => {
        _item_select${x} = $get("#${_id_item[x]}");
            if (_item_select${x}.value != "") {
                _item_select${x}.value = "";
            }
        }`);
        exal(`
        $get("#flush-data${x}").addEventListener('click', flushing${x});`);
    }
    for(y = 1;y < _id_item.length;y++) {
        exal(`xx${y} = $get("#${_id_item[y]}");`);
    }
    for (x = 1;x < _id_item.length;x++) {
        exal(`
        flush${x} = () => {
            flusher${x} = $get("#${_id_item[0]}${x}");
                if (xx${x}.value == "") {
                    flusher${x}.classList.remove("d-block");
                    flusher${x}.classList.add("d-none");
                } else {
                    flusher${x}.classList.add("d-block");
                }
                setTimeout(flush${x}, "1");
        }
        flush${x}();`);
    }
    
    (blinker = () => {
        blue = 'var(--primary)';
            if ($get("#blinks")) {
                blink = $get("#blinks");
                blink.style.color = (blink.style.color == blue ? 'white': blue);
                setTimeout(blinker, 1000);
            }
    })();
    
    window.addEventListener('load', createCaptcha);
    var code = "";
    function createCaptcha() {
        _captcha = $get('#captcha-value');
        _captcha.value = "";
        var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lengthOtp = 6;
        var captcha = [];
            for (var i = 0; i < lengthOtp; i++) {
                var index = Math.floor(Math.random() * charsArray.length + 1);
                if (captcha.indexOf(charsArray[index]) == -1)
                captcha.push(charsArray[index]);
                else i--;
            }
            code = captcha.join("");
            if (code.length == 5 || code.length < 5) createCaptcha();
            _captcha.value = code;
            setTimeout(createCaptcha, "5000" * 6);
    }
          
    show_hide = $get("#pass");
    show_hide_toggle = $get('.toggles input[id="checkbox"]');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            console.log('show');
            show_hide.setAttribute("type", "text");
        } else {
            console.log('hide');
            show_hide.setAttribute("type", "password");
        }
    });
    
    /*document.getElementById("device").innerHTML = navigator.userAgent;*/
    function dismiss() {
        $get("#dismiss").style.display = "none";
    }
    
    //form-validation
    $get("#login-submit").addEventListener('click', logIn);
    function logIn() {
    /*event.preventDefault();
    debugger*/
        msg = (_attrs_, __attrs_) => {
            setTimeout(() => {
                ___attrs_ = ['berhasil', 'gagal', 'error'];
                $content = 
                `<div id="dismiss" class="alert alert-${_attrs_[0]} alert-dismissible fade2 show cdark" role="alert">Login <strong>${___attrs_[_attrs_[1]]}</strong>${__attrs_}!<p class="mb-0">${_attrs_[2]}</p><button onclick="dismiss()" type="button" class="close text-light" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div>`;
                  $getAll("#msg").inHtml($content)},
        1000)}
        
        _x_uname = atob("enRoYXd4MDc");
        _x_pass = atob("YWt1ZGFuaGF0aW11");
        uname = $get("#uname").value;
        pass = $get("#pass").value;
        captcha = $get("#captcha").value;
        warning = _attrs_ => `Jangan disubmit dulu sayang ${_attrs_} masih belum diisi!!`;
            if (uname == _x_uname && pass == _x_pass &&  captcha == code) {
                msg(['success', 0, ''], '');
                alert('Berhasil login!');
                window.stop()
                // window.open(atob('aHR0cHM6Ly96dGZjb2RlLmdpdGh1Yi5pby9hZG1pbi16dGYvanZzLw=='));
                _hide_form();
                loadpreloader();
                preloader(4000);
                createCaptcha();
            } else if (((uname == _x_uname && pass == "" && captcha == "") || (uname != _x_uname && pass == "" && captcha == "")) && uname != "") {
                msg(['danger', 2, warning('password & captcha')], '');
            } else if (((uname == _x_uname && pass == _x_pass && captcha == "") || (uname != _x_uname && pass != _x_pass && captcha == "") || (uname == _x_uname && pass != _x_pass && captcha == "") || (uname != _x_uname && pass == _x_pass && captcha == "")) && uname != "" && pass != "") {
                msg(['danger', 2, warning('captcha')], '');
            } else if (((uname == _x_uname && pass == "" && captcha == code) || (uname != _x_uname && pass == "" && captcha != code) || (uname == _x_uname && pass == "" && captcha != code) || (uname != _x_uname && pass == "" && captcha == code)) && uname != "" && captcha != "") {
                msg(['danger', 2, warning('password')], '');
            } else if (((uname == "" && pass == _x_pass && captcha == "") || (uname == "" && pass != _x_pass && captcha == "")) && pass != "") {
                  msg(['danger', 2, warning('username & captcha')], '');
            } else if (((uname == "" && pass == _x_pass && captcha == code) || (uname == "" && pass != _x_pass && captcha != code) || (uname == "" && pass == _x_pass && captcha != code) || (uname == "" && pass != _x_pass && captcha == code)) && pass != "" && captcha != "") {
                  msg(['danger', 2, warning('username')], '');
            } else if (((uname == "" && pass == "" && captcha == code) || (uname == "" && pass == "" && captcha != code)) && captcha != "") {
                  msg(['danger', 2, warning('username & password')], '');
            } else if (uname == "" && pass == "" && captcha == "") {
                msg(['danger', 2, 'Kok sudah disubmit belum diisi semua loh!!'], '');
            } else if ((uname != _x_uname && pass != _x_pass && captcha != code) && uname != "" && pass != "" && captcha != "") {
                msg(['danger', 1, 'Periksa kembali username, password & captcha!!'], '');
            } else {
                msg(['danger', 1, 'Periksa kembali username, password & captcha!!'], '');
                alert('login gagal!');
            }
    }