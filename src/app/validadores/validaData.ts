import { AbstractControl, ValidatorFn } from "@angular/forms";

export class valida {

    valido: boolean;
    dataVar1: null;
    dataVar2: null;

    constructor() { }

    validaData(control: AbstractControl) {
        console.log('valida');
        console.log('data_nasc:', control.get('data_nascimento')?.value);
        console.log('data_obito:', control.get('data_obito')?.value);
        let data_nasc = control.get('data_nascimento')?.value;
        let data_obito = control.get('data_obito')?.value;
        if (data_nasc && data_obito) {
            console.log('dentro if');

            let utcDate1 = new Date(data_nasc)
            let utcDate2 = new Date(data_obito)

            if (utcDate1.getTime() > utcDate2.getTime()) {
                console.log('control: ', control);
                control.get('data_obito').setErrors({ dataInvalida: true });
                return { dataInvalida: true };
                // return this.valido = true
            }
        };
        return null;
    }
    validaDataSepultado(control: AbstractControl) {
        console.log('valida');
        console.log('data_sep:', control.get('data_sepultamento')?.value);
        console.log('data_obito:', control.get('data_obito')?.value);
        let data_sep = control.get('data_sepultamento')?.value;
        let data_obito = control.get('data_obito')?.value;
        if (data_sep && data_obito) {
            console.log('dentro if');

            let utcDate1 = new Date(data_obito)
            let utcDate2 = new Date(data_sep)

            if (utcDate1.getTime() > utcDate2.getTime()) {
                console.log('control: ', control);
                control.get('data_sepultamento').setErrors({ dataInvalida: true });
                return { dataInvalida: true };
                // return this.valido = true
            }
        };
        return null;
    }

    // Powered By SrAllpha

}