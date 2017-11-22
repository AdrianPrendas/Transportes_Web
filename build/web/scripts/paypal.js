var DOLARES = 570;

paypal.Button.render({
    env: 'sandbox', // Or 'sandbox',

    commit: true, // Show a 'Pay Now' button

    style: {
        color: 'gold',
        size: 'medium'
    },
    client: {
        sandbox: 'AUHuRn7DRNlzR_BxTUBFK0ouP96fW0Nriom10nINTLEk4Un4MeBlwzfVbmaosQH8KJTLSicbIpR2b341',
        production: '<insert production client id>'
    },
    payment: function (data, actions) {
        // Make a call to the REST api to create the payment
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: {total: (model.viaje.precio/DOLARES).toFixed(2), currency: 'USD'}
                    }
                ]
            }
        });
    },
    onAuthorize: function (data, actions) {
        // Make a call to the REST api to execute the payment
        return actions.payment.execute().then(function () {
            $("#metodo-pago").css("display","none");
            swal({
                type: 'success',
                title: 'Pago realizado correctamente',
                showConfirmButton: false,
                timer: 1500
            })      
            setTimeout(function(){
                location.reload();
            },2000);
        });
    },
    onCancel: function (data, actions) {
        /* 
         * Buyer cancelled the payment 
         */
    },
    onError: function (err) {
        alert("ha ocurrido un error: " + err)
    }

}, '#paypal-button');




