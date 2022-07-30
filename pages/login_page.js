const { I } = inject();

module.exports = {

  fields:{
    email:'~email',
    passord:'~senha'
  },

  buttons:{
    enter:'~entrar'
  },

  messages:{
    loginError:'~lognFail'
  },

  doLogin(email,passord){
    I.waitForElement(this.fields.email,5)
    //fill email fild
    I.fillField(this.fields.email,email)

    //fill passord fild 
    I.fillField(this.fields.passord,passord)

    //tap on enter
    I.tap(this.buttons.enter)
  },

  checkLoginError(){
    //check 
    I.waitForElement(this.messages.loginError,5)
    I.seeElement(this.messages.loginError)
  }
  
}
