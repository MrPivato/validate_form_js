$(document).ready(function()
        {
                $.validator.addMethod("atLeastOneLowercaseLetter", function (value, element) {
                        return this.optional(element) || /[a-z]+/.test(value);
                }, "Digite pelo menos uma letra minúscula");

                $.validator.addMethod("atLeastOneSymbol", function (value, element) {
                        return this.optional(element) || /[!@#$%^&*()_-]+/.test(value);
                }, "Digite pelo menos um caracter especial");

                $.validator.addMethod("atLeastOneNumber", function (value, element) {
                        return this.optional(element) || /[0-9]+/.test(value);
                }, "Digite pelo menos um número");

                $.validator.addMethod("atLeastOneUppercaseLetter", function (value, element) {
                        return this.optional(element) || /[A-Z]+/.test(value);
                }, "Digite pelo menos uma letra maiúscula");

                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();

                if(dd < 10){
                        dd = '0' + dd
                } 
                if(mm < 10){
                        mm = '0' + mm
                } 

                today = yyyy + '-' + mm + '-' + dd;

                document.getElementById("dateToday").setAttribute("max", today);
                $( "#validate" ).validate({
                        debug: true,
                        rules: {
                                password: {
                                        required: true,
                                        atLeastOneLowercaseLetter: true,
                                        atLeastOneUppercaseLetter: true,
                                        atLeastOneNumber: true,
                                        atLeastOneSymbol: true,
                                        minlength: 8,
                                }
                        },
                });
        })
