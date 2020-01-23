// high-level test
// comes from hardware testing where it was assumed things were working if there was no smoke
beforeEach(() => {
  cy.visit('/') // this works because we configured baseUrl in cypress.json
  cy.injectAxe()
  cy.wait(500)
})

describe('Home page', () => {
  it('loads the correct URL', () => {
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  // // it.only will run only this test
  // it('is accessible', () => {
  //   cy.checkA11y()
  // })

  it('contains only 1 h1 element', () => {
    cy.get('h1').should('have.length', 1)
  })
})

describe('Accordion buttons', () => {
  it('open and close when clicked', () => {
    // example using a custom function
    const toggle = (el, shouldCondition) => {
      cy.wrap(el)
        .click()
        .next()
        .should(shouldCondition)
    }

    cy.get('[data-test-id="accordion-button"]').each(el => {
      toggle(el, 'be.visible')
      toggle(el, 'not.be.visible')
    })
  })
})

describe('Accessibility panel', () => {
  it('is hidden on page load', () => {
    cy.get('[data-test-id="accessibility-panel"]').should('not.be.visible')
  })
  it('opens and closes when button is clicked', () => {
    cy.get('[data-test-id="accessibility-panel-button"]').click()
    cy.get('[data-test-id="accessibility-panel"]').should('be.visible')
    cy.get('[data-test-id="accessibility-panel-button"]').click()
    cy.get('[data-test-id="accessibility-panel"]').should('not.be.visible')
  })
})

function getIds() {
  let ids = []
  return new Cypress.Promise(resolve => {
    cy.get('[data-test-id*="blog-post-"]')
      .each($el =>
        cy
          .wrap($el)
          .invoke('attr', 'data-test-id')
          .then(id => ids.push(id)),
      )
      .then(() => resolve(ids))
  })
}

describe('Blog post cards', () => {
  it('link to their own page which is accessible and has a button to link home', () => {
    getIds().then(ids =>
      ids.forEach(id => {
        cy.get(`[data-test-id="${id}"]`)
          .click()
          .checkA11y()
          .findByText(/back home/i)
          .click()
      }),
    )
  })
})

// // doesn't work
// describe('Dark theme', () => {
//   it('is accessible', () => {
//     cy.get('[data-test-id="themeToggle"]')
//       .click()
//       .checkA11y()
//   })
// })
