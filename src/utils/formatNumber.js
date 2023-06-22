export default (number) => {

    const currentLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    const formatNumbering  = new Intl.NumberFormat('id-ID');
    const formatCurrency = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: currentLocale === 'en-US' ? 'USD' : 'IDR',
        minimumFractionDigits: 0
    });

    // if number is string return formatCurrency
    if (typeof number === 'string') {
        if (number === 'undefined') {
            return formatCurrency.format(0);
        }
        return formatCurrency.format(number);
    }
    
    return formatNumbering.format(number);
}