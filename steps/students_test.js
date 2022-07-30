Feature('Students');

const { I, login_page, home_page } = inject()
const code = require('../Utils/code.js')
const name = require('../Utils/name.js')

Scenario('Add student with success', () => {

    const codeStudent = code.getCode()
    const nameStudent = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(codeStudent, nameStudent)
    home_page.searchStudent(nameStudent, codeStudent)
});
