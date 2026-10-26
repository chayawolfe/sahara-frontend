import numeral from 'numeral';

// ----------------------------------------------------------------------

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
    return numeral(number).format();
}

export function fCurrency(number: InputValue) {
    const format = Number(number) >= 0 ? numeral(number).format('$0,0.00') : '';

    return result(format, '.00');
}

export function fPercent(number: InputValue) {
    const format = Number(number) >= 0 ? numeral(Number(number) / 100).format('0.0%') : '';

    return result(format, '.0');
}

export function fShortenNumber(number: InputValue) {
    const format = Number(number) >= 0 ? numeral(number).format('0.00a') : '';

    return result(format, '.00');
}

export function fData(number: InputValue) {
    const format = Number(number) >= 0 ? numeral(number).format('0.0 b') : '';

    return result(format, '.0');
}

function result(format: string, key = '.00') {
    const isInteger = format.includes(key);

    return isInteger ? format.replace(key, '') : format;
}

export function fcustomCurrency(number: number) {
    const formatter = new Intl.NumberFormat('it-IT', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const formattedBalance = formatter.format(number);

    return formattedBalance;
}
