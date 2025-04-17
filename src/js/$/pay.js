export function pay() {
    console.log('pay works');

    // https://wiki.wayforpay.com/wiki/default/test

    const payBtn = document.querySelector('.payBtn');
    let wayforpay = new Wayforpay();

    payBtn.addEventListener('click', () => {
        pay();
    });

    function pay() {
        wayforpay.run(
            {
                merchantAccount: 'test_merch_n1',
                merchantAuthType: 'SimpleSignature',
                merchantDomainName: 'www.market.ua',
                orderReference: 'DH1744902541',
                orderDate: '1415379863',
                amount: 1547.36,
                currency: 'UAH',
                orderTimeout: 49000,
                productName: [
                    'Процесор Intel Core i5-4670 3.4GHz',
                    'Память Kingston DDR3-1600 4096MB PC3-12800'
                ],
                productPrice: [1000, 547.36],
                productCount: [1, 1],
                clientFirstName: 'Василь',
                clientLastName: 'Пібаренко',
                clientAddress: 'пр. Науки, 12',
                clientCity: 'Дніпро',
                clientEmail: 'some@mail.com',
                defaultPaymentSystem: 'card',
                merchantSignature: '13bd4d785efeb849536cadd160eb112e'
                // merchantSignature: '13bd4d785efeb849536cadd160eb112e',
            },
            function (response) {
                // on approved - успешная оплата
                console.log('Payment approved:', response);
                // Здесь можно выполнить redirect на страницу успешной оплаты
            },
            function (response) {
                // on declined - отклонено
                console.log('Payment declined:', response);
            },
            function (response) {
                // on pending or processing - ожидает обработки
                console.log('Payment pending:', response);
            }
        );
    }
}
