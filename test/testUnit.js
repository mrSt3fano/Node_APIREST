
// import chai from 'chai';
// import chaiHttp from 'chai-http'
const chai=require('chai')
const chaiHttp=require('chai-http')
const expect=require('chai').expect
chai.use(chaiHttp);

describe('Validacion de entradas',()=>{
  it('Mensaje de validacion exitosas',(done)=>{
    console.log('message A')

    chai.request('http://localhost:3001')
    .post('/api/v1/products/enviar')
    .send({nombre: 'nonono', precio: 11})
    .end((err,res)=>{
      console.log('error encontrado:',res.body.mensaje)
      
      expect(res).to.have.status(200)
      done()
    })
  })
})


// describe('Pruebas para las APIs',()=>{
    
//     it('Esto corre despues de la prueba aceptada', () => {
//   console.log('B');
  
//   return chai.request('http://localhost:3001')
//     .get('/')
//     .then((aas) => {
      
//       chai.assert.equal(aas.text, 'js es usna basura')
      
//         console.log('A')
//     })
    
// });

// })
