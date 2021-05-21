export class Setup {

    maskedId: any = null;
    DECIMAL_SEPARATOR = ".";
    GROUP_SEPARATOR = ",";
    pureResult: any;

    formatCpfCnpj(valString) {
        if (!valString) {
            return '';
        }
        let val = valString.toString();
        const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
        this.pureResult = parts;
        if (parts[0].length <= 11) {
            this.maskedId = this.cpf_mask(parts[0]);
            return this.maskedId;
        } else {
            this.maskedId = this.cnpj(parts[0]);
            return this.maskedId;
        }
    };

    formatPhone(valString) {
        if (!valString) {
            return '';
        }
        let val = valString.toString();
        const parts = this.unFormat(val);
        this.pureResult = parts;

        if (parts.length <= 10) {
            return this.phoneMask(parts);
        } else {
            return this.celphoneMask(parts);
        }
    };

    formatCep(cep) {
        if (!cep) {
            return '';
        }
        if (cep.length > 7) {
            cep = cep.substring(0, 2) + "." + cep.substring(2, 5) + "-" + cep.substring(5, 9)
        }
        return cep;
    }

    unFormat(val) {
        if (!val) {
            return '';
        }
        val = val.replace(/\D/g, '');

        if (this.GROUP_SEPARATOR === ',') {
            return val.replace(/,/g, '');
        } else {
            return val.replace(/\./g, '');
        }
    };

    cpf_mask(cpf) {
        cpf = cpf.replace(/\D/g, ''); //Remove tudo o que não é dígito
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
        return cpf;
    }

    cnpj(cnpj) {
        cnpj = cnpj.replace(/\D/g, ''); //Remove tudo o que não é dígito
        cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2'); //Coloca ponto entre o segundo e o terceiro dígitos
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); //Coloca ponto entre o quinto e o sexto dígitos
        cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2'); //Coloca uma barra entre o oitavo e o nono dígitos
        cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2'); //Coloca um hífen depois do bloco de quatro dígitos
        return cnpj;
    }

    phoneMask(phone) {
        phone = phone.replace(/\D/g, ''); //Remove tudo o que não é dígito
        phone = "(" + phone.substring(0, 2) + ") " + phone.substring(2, 6) + "-" + phone.substring(6, 10)
        return phone;
    }

    celphoneMask(celphone) {
        celphone = celphone.replace(/\D/g, '') //Remove tudo o que não é dígito       
        celphone = "(" + celphone.substring(0, 2) + ") " + celphone.substring(2, 7) + "-" + celphone.substring(7, 11)
        return celphone;
    }

    validaCpfCnpj(val) {
        var v1 = 0;
        var v2 = 0;
        var aux = false;

        if (val.length == 14) {
            var cpf = val.trim

            cpf = cpf.replace(/\./g, '');
            cpf = cpf.replace('-', '');
            cpf = cpf.split('');



            for (let i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                    aux = true;
                }
            }

            if (aux == false) {
                return false;
            }

            for (let i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                v1 += cpf[i] * p;
            }

            v1 = ((v1 * 10) % 11);

            if (v1 == 10) {
                v1 = 0;
            }

            if (v1 != cpf[9]) {
                return false;
            }

            for (let i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p;
            }

            v2 = ((v2 * 10) % 11);

            if (v2 == 10) {
                v2 = 0;
            }

            if (v2 != cpf[10]) {
                return false;
            } else {
                return true;
            }
        } else if (val.length == 18) {
            var cnpj = val.trim();

            cnpj = cnpj.replace(/\./g, '');
            cnpj = cnpj.replace('-', '');
            cnpj = cnpj.replace('/', '');
            cnpj = cnpj.split('');


            for (let i = 1; cnpj.length > i; i++) {
                if (cnpj[i - 1] != cnpj[i]) {
                    aux = true;
                }
            }

            if (aux == false) {
                return false;
            }

            for (let i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v1 += cnpj[i] * p1;
                } else {
                    v1 += cnpj[i] * p2;
                }
            }

            v1 = (v1 % 11);

            if (v1 < 2) {
                v1 = 0;
            } else {
                v1 = (11 - v1);
            }

            if (v1 != cnpj[12]) {
                return false;
            }

            for (let i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v2 += cnpj[i] * p1;
                } else {
                    v2 += cnpj[i] * p2;
                }
            }

            v2 = (v2 % 11);

            if (v2 < 2) {
                v2 = 0;
            } else {
                v2 = (11 - v2);
            }

            if (v2 != cnpj[13]) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

}
