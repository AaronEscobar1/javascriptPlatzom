
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
  it('Primera condicion, si la palabra termina en "ar", se le quitan esos dos caracteres.', function () {
    const translation = platzom("programar")
    expect(translation).to.equal("program")
  })
  it('Segunda condicion, si la palabra inicia con "Z", se le añade "pe" al final.', function () {
    const translation = platzom("zonar")
    expect(translation).to.equal("zonpe")
  })
  it('Tercera condicion, si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guión medio.', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Cuarta condicion, si la palabra original es un palindromo, se devuelve la misma pero intercambiando letras mayúsculas y minúsculas.', function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})
