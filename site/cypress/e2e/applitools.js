describe('Main pages', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "Luke's Portfolio",
      testName: 'Portfolio Site - Home Page',
      // browser: {width: 800, height: 600},
      browser: [
        {width: 800, height: 600, name: 'firefox'},
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'ie'},
        {
          deviceName: 'iPhone X',
          screenOrientation: 'portrait',
        },
      ],
    })
    afterEach(() => {
      cy.eyesClose()
    })
  })
  it('works', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.eyesCheckWindow('Main Page')
    cy.get('[data-test-id="accessibility-panel-button"]').click()
    cy.eyesCheckWindow('Main Page: A11y panel open')
  })
})
