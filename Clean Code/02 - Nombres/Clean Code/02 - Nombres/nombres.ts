/* 
Utiliaza nombres que revelen la intencion de tu código
*/

{
    //Ejemplo de MAL codigo ❌ 
    {
        const d: number = 3; //Dias desde el registro
    }
    
    //Ejemplo de MEJOR codigo ✅
    {
        const daysSinceRegistration: number = 3;
    }

    //Ejemplo en funcion real
    {
        const getItems = (allItems: any) => {
            return allItems.filter((item: any) => item.status === 1); //Consejo: no tener numeros magicos
        }
    }

    const ACTIVE = 1;
    const getActiveUsers = (users: any) => {
        return users.filter((user: any) => user.status === ACTIVE);
    }

}

/* 
No utilices nombres que puedan desinformar a los lectores de tu codigo 
*/

{
    {
        const accountList = ["account1","account2"]; //Leyendo esto se puede llegar a asumir que estamos tratando con un array cuando realmente es un objeto 
    }
    {
        const accountList = {
            "account1": {},
            "account2": {}

        }
    }
    {
        const accounts = ["account1", "account2"]; //Mejor practica: no poner los tipos en los nombres
    }
    {
        //Consejo: Coloca nombres pensando en el autocompletado
        const handlerUserService;
        const handlerCompanyService;
        const handlerAccountService;

        //vs
        const userServiceHandler;
        const companyServiceHandler;
        const accountServiceHandler;

        /*
        Pensando en el autocompletado si ponermos los prefijos al principio cuando vayamos a escribir algo que tenga que ver con user si ponermos user nos saldra directamente userServiceHandler
        */
    }

}

/*
Distingue correctamenet los nombres de las cosas
*/

{
    // es mejor dar nombres distintos que indiquen claramente
    // el uso, no simplemente ir con los nombres que
    // nos dan las templates
    const accounts = [
        {
            name: 'account1',
            value: 2
        },
        {
            name: 'account2',
            value: 10
        },
        {
            name: 'account3',
            value: 5
        }
    ];

    {
        const totalFromAccounts = accounts
            .reduce((a,b) => a + b.value, 0)
    }
    //vs
    {
        const STARTING_VALUE = 0;
        const totalFromAccounts = accounts 
            .reduce((accomulatedValue, currentAccount) => {
                return accomulatedValue + currentAccount.value
            }, STARTING_VALUE)
    }

    //Evita sinonimos en datos que puedan significar lo mismo
    {
        //Cual es la diferencia?
        type ProductInfo = {
            name: string,
            price: number,
        }
        //vs
        type ProductData = {
            name: string,
            price: number
        }

        // ejemplos
        type Customer = {}
        //vs
        type CustomerObject = {}

        // es mejor simplificar
        let customer;
        // mejor que 
        let customerInfo;

        {
            type Account = {
                name: string,
            }
            let account: Account = {
                name: 'MyAmazingAccount'
            };
            console.log(account.name) //<---- mucho mas limpio
        }
        // mejor que
        {
            type Account = {
                accountName: string
            }
            let account: Account = {
                accountName: 'MyAmazingaccount'
            };
            console.log(account.accountName) //<---- mucho mas ruido visual
        }
    }
}

/*
Utiliza nombres pronunciables
*/
{
        // Es mucho mejor utilizar nombres que se puedan leer,
        // aunque tenga más caracteres
        type Cstmr = {
            gnrtrTmstp: Date;
            mdfcTmstp: Date;
        }
        //vs
        type Customer = {
            generatorTimestamp: Date;
            modificationTimestamp: Date;
        }

        // No ganamos nada acortando partes que no queden lejibles luego
        // es preferible tener algo mas largo pero lejible que algo corto que no se lea bien
}
/*
Utiliza nombres que te permitan buscarlos despues
*/
{
    // Si una variable o constante se utiliza en varios sitios
    // o esta 'harcodeada', se le tiene que dar un
    // nombre con el que poder buscarla despues

    //Mal ejemplo
    let s = 0;
    let t = [/*un array con datos*/]
    for (let j = 0; j < 34; j++){
        s += (t[j]*4/5)
    }

    //vs

    const realDaysPerIdealDay = 4;
    const WORK_DAY_PER_WEEK = 5;
    const NUMBER_OF_TASKS = 34;
    let taskEstimates = [/*un array con datos*/]
    let totalWorkWeeks = 0;
    for (let j = 0; j < NUMBER_OF_TASKS; j++) {
        let realTaskDays = taskEstimates[j] * realDaysPerIdealDay;
        let realTaskWeeks = (realTaskDays / WORK_DAY_PER_WEEK);
        totalWorkWeeks += realTaskWeeks;
    }

    // Aunque el codigo de abajo tenga 'quiza' demasia verbosidad sera mucho mas 
    // facil de enteder cuando haya pasado el tiempo tambien 
    // es mas facil de comprender lo que se esta haciendo
}

/*
No utilices tipos en los nombres (discutible)
*/
{
    //es preferible
    const phone: string = '123456789'
    //a 
    const phoneString: string = '123456789'

    //Quiza alguna excepcion en lenguajes dinamicos?
    {
        //Javascript

        // Con esta excepcion si alguien lee el 
        // codigo puede saber que lo que esperamos es que se nos envie un string
        function getUserByPhone(phoneString) { 
            // do some things
        }
    }
        // TypeScript

        // En este caso con TypeScript no es necesario ya la propia firma de la funcion
        // se le pone el tipo
        function getUserByPhone(phone: string) {

        }
}

/*
Cosas extra
*/
{

    //Una palabra por concepto
{
    // Realmente estas dos cosas son lo mismo lo que deberiamos hacer es escoger una de las dos
    accountService.getAccount() 
    userService.fetchAccount()
}

// Utilizar nombres facilmente reconocibles por el negocio
// o que sean nombres conocidos por la industria
{
    // En este caso estamos hablando de subscritores
    // si ponemos users no se llegara a entender de que hablamos pero si ponemos
    // subscribers hasta alguien que no entienda sabra de lo que hablamos
    const users;
    const subscribers;
    // Con esta excepcion si alguien lee el codigo puede saber que lo que esperamos es que se nos envie un string
}
}