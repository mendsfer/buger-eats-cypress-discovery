var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '87030070',
                street: 'Rua Saldanha Marinho',
                number: '784',
                details: 'kitnet 06',
                district: 'Zona 07',
                city_state: 'Maringá/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}