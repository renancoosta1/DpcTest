function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}
function fMascEx() {
    obj.value = masc(obj.value)
}
function mTel(tel) {
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;
}
function mCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, "")
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2")
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2")
    return cnpj
}
function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}
function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2")
    return cep
}
function mNum(num) {
    num = num.replace(/\D/g, "")
    return num
}



function Comma(Num, event) { //function to add commas to textboxes
    var array = Num.split(/\,(?=[^\,]+$)/);

    if (array[0].charAt(0) === '0' && array[0].length > 1)
        array[0] = array[0].substr(1);

    if (event.keyCode == 8) {
        array[0] = array[0].substring(0, array[0].length - 1);
    }
    else {
        if (array.length > 1) {
            var uou = array[1].substr(2);
            //alert(uou);
            if (!isNaN(uou)) {
                if (uou != ' ') {
                    array[0] += uou;
                }
            }
        }
    }

    if (array[0].length === 0) {
        return '';
    }

    array[0] += '';
    array[0] = array[0].replace('.', ''); array[0] = array[0].replace('.', ''); array[0] = array[0].replace('.', '');
    array[0] = array[0].replace('.', ''); array[0] = array[0].replace('.', ''); array[0] = array[0].replace('.', '');
    x = array[0].split(',');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    return x1 + x2 + ',00';
}