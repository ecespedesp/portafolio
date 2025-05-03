window.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button');
    const visor = document.getElementById('visor-input');

    //variable para guardar la operacion actual
    let operacion = '';
    
    // Función para evaluar
    function evaluarOperacion() {
        try {
            const resultado = eval(operacion);
            operacion = String(resultado);
        } catch (e) {
            operacion = 'Error';
        }
        visor.value = operacion;

        const cont = visor.parentElement;
        cont.scrollLeft = cont.scrollWidth;
    }


    botones.forEach (btn => {
        btn.addEventListener('click', () => {
            const valor =btn.textContent;

            if (visor.value === 'Error' && valor !== '=') {
                operacion = '';
            }
        

            switch (valor) {
                case '=':
                    //Evaluar la operacion
                    try{
                        // esLint-disable-next-line no-eval
                        const resultado = eval(operacion);
                        operacion = String(resultado);
                    } catch (e) {
                        operacion = 'Error'
                    }
                    break;

                    default:
                        operacion += valor;
            }

            //Mostrar en el visor
            visor.value = operacion;

            visor.scrollLeft = visor.scrollWidth;
        });
    });

    //escuchar escritura con teclado
    visor.addEventListener('input', () => {
        // Solo permitir números, punto y operadores básicos
        visor.value = visor.value.replace(/[^0-9+\-*/.]/g, '');

        if (visor.value === 'Error') {
            visor.value = '';
        }

        operacion = visor.value;
    });

    // 👉 Escuchar el teclado (Enter)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            evaluarOperacion();
        }
    });

});