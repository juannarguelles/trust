		 
			 document.getElementById("wpcf7-f102-p49-o1").setAttribute("v-on:submit.prevent", "submitForm");
new Vue({
        el: '#wpcf7-f102-p49-o1',
        data() {
            return {
                submit: "Quiero que me contacten",
                tasas: {
                    "tasa12": 0.75,
                    "tasa18": 1.13,
                    "tasa24": 1.50,
                    "tasa36": 2.25,
                    "tasa48": 3,
                    "tasa60": 3.75,
                },
                provincias: null,
                localidades: null,
                urlLocal: 'http://localhost:8000/api',
                url: 'https://eugenie.com.ar/api_backend/public/api',
                form: {
                    "name": '',
                    "dni": '',
                    "nameentrepreneurship": '',
                    "rubro": '',
                    "antiguedad": '',
                    "mail": '',
                    "prefijo": '',
                    "telephone": '',
                    "message": '',
                    "amount": 25000,
                    "prov_selected": 6,
                    "loc_selected": 6441030,
                    "provincia": 'cargando...',
                    "localidad": 'cargando...',
                    "meses": "12",
                    "cuota": null,
                    "total": null
                },
                errors: {
                    "name": '',
                    "dni": '',
                    "nameentrepreneurship": '',
                    "rubro": '',
                    "antiguedad": '',
                    "mail": '',
                    "message": '',
                    "telephone": '',
                    "prefijo": '',
                },
                sended: false
            }
        },
        methods: {
            calcularCuota(mes, tasa) {
                this.form.cuota = ((this.form.amount * tasa) + this.form.amount) / mes
                this.form.cuota = parseFloat(this.form.cuota).toFixed(2);
                this.form.total = this.form.cuota * mes;
                this.form.total = parseFloat(this.form.total).toFixed(2);
            },
            setProvincia() {
                for (var i = 0; i < this.provincias.length; i++) {
                    if (this.provincias[i].id == this.form.prov_selected) {
                        this.form.provincia = this.provincias[i].name;
                        break;
                    }
                }
            },
            setLocalidad() {
                for (var i = 0; i < this.localidades.length; i++) {
                    if (this.localidades[i].id == this.form.loc_selected) {
                        this.form.localidad = this.localidades[i].name;
                        break;
                    }
                }
            },
            onChangeProvincia(event) {
                this.form.prov_selected = event.target.value;
                axios
                    .get(this.url + '/provincia/' + this.form.prov_selected)
                    .then(response => {
                        this.setProvincia();
                        this.localidades = response.data.localidades
                        this.form.loc_selected = this.localidades[0].id
                        this.setLocalidad();
                    })
            },
            onChangeLocalidad(event) {
                this.form.loc_selected = event.target.value;
                this.setLocalidad();
            },
            onChangeMonto(event) {
                this.form.amount = parseInt(this.form.amount);
                var tasa = this.tasas.tasa12;
                var mes = this.form.meses;
                switch (mes) {
                    case "12":
                        tasa = this.tasas.tasa12
                        break;
                    case "18":
                        tasa = this.tasas.tasa18
                        break;
                    case "24":
                        tasa = this.tasas.tasa24
                        break;
                    case "36":
                        tasa = this.tasas.tasa36
                        break;
                    case "48":
                        tasa = this.tasas.tasa48
                        break;
                    case "60":
                        tasa = this.tasas.tasa60
                        break;
                    default:
                        console.log("error");
                        console.log(mes + " " + tasa)
                }
                this.calcularCuota(mes, tasa);
            },
            onChangeMeses(event) {
                var mes = event.target.value;
                switch (mes) {
                    case "12":
                        this.calcularCuota(mes, this.tasas.tasa12);
                        break;
                    case "18":
                        this.calcularCuota(mes, this.tasas.tasa18);
                        break;
                    case "24":
                        this.calcularCuota(mes, this.tasas.tasa24);
                        break;
                    case "36":
                        this.calcularCuota(mes, this.tasas.tasa36);
                        break;
                    case "48":
                        this.calcularCuota(mes, this.tasas.tasa48);
                        break;
                    case "60":
                        this.calcularCuota(mes, this.tasas.tasa60);
                        break;
                    default:
                        console.log("error");
                }
            },
            signInButtonPressed() {
                console.log("Sign In Button Pressed");
            },
            checkForm: function () {
                this.errors = [];
                if (this.validName(this.errors.name)) {
                    this.errors.name = 'Ingrese un nombre y apellido válido!';
                }
                if (this.form.dni.length < 8) {
                    this.errors.dni = 'Ingrese un dni válido';
                }
                if (this.form.nameentrepreneurship < 3) {
                    this.errors.nameentrepreneurship = 'Ingrese un nombre válido!';
                }
                if (this.form.rubro < 3) {
                    this.errors.rubro = 'Ingrese un rubro válido!';
                }
                if (this.form.antiguedad < 1) {
                    this.errors.antiguedad = 'Ingrese una antiguedad válida!';
                }
                if (!this.validTelefono(this.form.telephone)) {
                    this.errors.telephone = 'Ingrese un teléfono válido!';
                }
                if (!this.validTelefono(this.form.prefijo)) {
                    this.errors.prefijo = 'Ingrese un Prefijo válido';
                }
                if (!this.validEmail(this.form.mail)) {
                    this.errors.mail = 'Ingrese un email válido!';
                }
                if (this.form.message.length < 10) {
                    this.errors.message = 'Ingrese un mensaje válido!';
                }
                if (!this.errors.name && !this.errors.dni && !this.errors.nameentrepreneurship && !this.errors.rubro && !this.errors.antiguedad && 
                    !this.errors.mail && !this.errors.telephone && !this.errors.message && !this.errors.prefijo) {
                    // si no hay errores enviamos el form
                    return false;
                } else {
                    this.submit = "Quiero que me contacten"
                    return true;
                }
            },
            validName: function (name) {
                var re = /^([A-Za-zÑñ]+[áéíóú]?[A-Za-z]*){3,18}\s+([A-Za-zÑñ]+[áéíóú]?[A-Za-z]*){3,36}$/;
                return re.test(name);
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validTelefono: function (e) {
                if (!/^([0-9])*$/.test(e)) {
                    return false;
                } else {
                    return true;
                }
            },
            submitForm() {
                this.sended = true
                this.submit = "enviando..."
                var check = this.checkForm();
                if (check) {
                    this.sended = false
                    return false;
                }
                axios.post(this.url + '/credito', this.form)
                    .then((res) => {
                        //console.log("formulario enviado.");
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                    }).finally(() => {
                        //Perform action in always
                        this.submit = "Quiero que me contacten"
                        this.sended = false
                        this.resetForm();
                        modalContacto();
                    });
            },
            resetForm() {
                console.log('Reseting the form')
                this.form.name = '';
                this.form.dni = '';
                this.form.nameentrepreneurship = '';
                this.form.rubro = '';
                this.form.antiguedad = '';
                this.form.mail = '';
                this.form.prefijo = '';
                this.form.telephone = '';
                this.form.message = '';
                this.form.amount = 0;
                this.form.meses = 12;
                this.form.cuota = 7291.67;

            }
        },
        filters: {
            numero_con_coma: function (value) {
                if (!value) return ''
                value = value.toString()
                value = value.replace('.', ',');
                return value
            },
            numero_con_puntos_mil(value) {
                value = parseInt(value);
                let val = (value / 1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
            monto_con_puntos_mil(value) {
                let val = (value / 1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        },
        mounted() {
            axios
                .get(this.url + '/provincia/')
                .then(response => {
                    this.provincias = response.data;

                    this.setProvincia();

                    //this.form.provincia = this.provincias[this.form.prov_selected].name;
                }).finally(() => {
                    axios
                        .get(this.url + '/provincia/' + this.form.prov_selected)
                        .then(response => {
                            this.localidades = response.data.localidades
                            this.setLocalidad();
                        })
                });

            this.calcularCuota(this.form.meses, this.tasas.tasa12);
        },

    })