// Bibliotecas
import pet from '../fixtures/pet.json'
import petPut from '../fixtures/petPut.json'
import listaPet from '../fixtures/listaPet.json'

describe('CRUD da entidade Pet', () => {

  // POST Pet
  it('POST Pet', () => {
    cy.request({
      method: 'POST',
      url: '/pet', // endpoint
      body: pet
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(pet.id)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })
  })
  // GET Pet
  it('GET Pet', () => {
    cy.request({
      method: 'GET',
      url: `/pet/${pet.id}`
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(pet.id)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })
  })

  // PUT Pet
  it('PUT Pet', () => {
    cy.request({
      method: 'PUT',
      url: '/pet',
      body: petPut
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(petPut.id)
      expect(body.name).to.eq(petPut.name)
      expect(body.category.id).to.eq(petPut.category.id)
      expect(body.category.name).to.eq(petPut.category.name)
      expect(body.tags[0].id).to.eq(petPut.tags[0].id)
      expect(body.tags[0].name).to.eq(petPut.tags[0].name)
      expect(body.status).to.eq(petPut.status)
    })
  })

  // DELETE petPut
  it('DELETE Pet0', () => {
    cy.request({
      method: 'DELETE',
      url: `/pet/${petPut.id}`
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.code).to.eq(200)
      expect(body.type).to.eq('unknown')
      expect(body.message).to.eq(String(petPut.id))
    })
  })
  // POST Pet Data Driven
  listaPet.forEach((element) => {
    it(`POST Pet Data Driven - ${element.name}`, () => {
      cy.request({
        method: 'POST',
        url: '/pet', // endpoint
        body: element
      }).then(({ status, body }) => {
        expect(status).to.eq(200)
        expect(body.id).to.eq(element.id)
        expect(body.name).to.eq(element.name)
        expect(body.category.id).to.eq(element.category.id)
        expect(body.category.name).to.eq(element.category.name)
        expect(body.tags[0].id).to.eq(element.tags[0].id)
        expect(body.tags[0].name).to.eq(element.tags[0].name)
        expect(body.status).to.eq(element.status)
      })
    })
  })
})