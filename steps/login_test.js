Feature('login');

//Tudo que será usado globalmente
const {I,login_page} = inject() 

//Executado antes da suite
BeforeSuite(() => { 
    console.log("Iniciando o BeforeSuite")
});

//Executado antes de cada teste
Before(() => {                 
    console.log("Iniciando o Before")
});

//Executado depois da suite
AfterSuite(() => { 
    console.log("Iniciando o AfterSuite")
});

//Executado depois de cada teste
After(() => {                 
    console.log("Iniciando o After")
});


Scenario('Login with sucess', (home_page) => {

   login_page.doLogin('teste@teste.com','123456')

   // pause() //usado para debugar. A cada enter ele executa uma das ações e podemos fazer ações como I nos testes

   home_page.checkLoginSuccess()

});

Scenario('Login with error', () => {
    
    login_page.doLogin('xteste@teste.com','123456')

    login_page.checkLoginError()
});
