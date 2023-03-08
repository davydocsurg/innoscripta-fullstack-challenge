interface IInterval {
    index: number;
    count: number;
}

export default class Mask {

    public static CEP      = '00000-000';
    public static PHONE    = '(00) 00000-0000';
    public static CNPJ     = '00.000.000/0000-00';
    public static CURRENCY = '$';
    
    public static MASK_ONLY_NUMBERS = [
        Mask.CEP,
        Mask.PHONE,
        Mask.CNPJ,
    ]
    
    public static removeMask(texto: string, mask: string)
    {
        if (Mask.MASK_ONLY_NUMBERS.includes(mask)) {
            return Mask.getOnlyNumbers(texto);
        }

        if (mask === Mask.CURRENCY) {
            return texto.replaceAll('.', '').replace(',', '.');
        }

        return '';
    }
    
    public static applyMask(texto: string, mask: string)
    {
        const numbers   = Mask.getOnlyNumbers(texto);
        const specials = Mask.getOnlySpecials(mask).split('');

        if (specials.includes('$')) {
            return Mask.getCurrencyPattern(numbers)
        }

        const intervals = Mask.getPattern(mask, numbers.length);
        
        const regex = Mask.buildRegex(intervals);
        const substitute = Mask.buildSubstitute(intervals, specials);

        return numbers.replace(regex, substitute);
    }

    public static getOnlyNumbers(text: string)
    {
        return text.replace(/\D/g, '');
    }

    public static getOnlySpecials(text: string) 
    {
        return text.replace(/\d/g, '');
    }

    public static getCurrencyPattern(value: string)
    {
        value = value.replace(/(\d)(\d{2})$/, '$1,$2');
        value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

        return value;
    }

    public static buildRegex(intervals: IInterval[]) {
        let regex = '^';
        intervals.forEach((interval, index) => {
            if ((intervals.length - 1) != index) {
                regex += `(\\d{${interval.count}})`;
            } else {
                regex += `(\\d)`;
            }
        });
        return new RegExp(regex);
    }

    public static buildSubstitute(intervals: IInterval[], special: string[]) {
        let text = '';
        
        let countSpecial = 0
        intervals.forEach((interval, index) => {
            text += `$${index + 1}`;

            if ((intervals.length - 1) != index) {
                text += special[countSpecial];
                countSpecial += 1;
            }
        });
        return text;
    }

    public static getPattern(mask: string, tam: number): IInterval[]
    {
        let intervals = [];
        const maskSplit = mask.split('');
        let count = 0;    
        let countTam = 0;    

        for (let index = 0; index < maskSplit.length; index++) {
            const actual = maskSplit[index];
            if (actual == '0') {
                count++;
                if (countTam < tam) {
                    if ((maskSplit.length - 1) == index) {
                        intervals.push({ index: index-count, count });
                    }            
                }

            } else {
                if (countTam < tam) {
                    countTam += count ;
                    intervals.push({ index: index-count, count });
                } else {
                    break;
                }

                count = 0;
            }    
        }

        return intervals;
    }

}
