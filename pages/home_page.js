const { I } = inject();

module.exports = {

  button: {
    save: '~salvar'
  },

  fields: {
    code: { android: '~codigo', ios: 'batata' }, // consegue diferenciar qual o seletor usar
    name: '~aluno',
    search: '~search'
  },

  registerStudent(code, name) {
    I.waitForElement(this.fields.name, 5)
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save);
  },

  searchStudent(search, check) {
    I.fillField(this.fields.search, search)

    I.runOnIOS(() => {
      I.seeElement('alguma coisa')
    })

    I.runOnAndroid(() => {
      I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
    })
  },

  checkLoginSuccess() {
    //check 
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  }

}
