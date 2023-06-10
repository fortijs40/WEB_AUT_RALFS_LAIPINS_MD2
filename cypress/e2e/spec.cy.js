import basePage from "../pageObjects/base.page";
import loginPage from "../pageObjects/login.page";
import appointmentSummaryPage from "../pageObjects/appointmentSummary.page";
import historyPage from "../pageObjects/history.page";
describe('MD2 spec', () => {
  context("MD2 scenarios", () => {
    beforeEach(() => {
      basePage.visit();
    });
    it('Make an Appointment - case', () => {
      //Click “Make Appointment”
      basePage.makeAppointmentButton.click();
      //Set demo account username and password
      loginPage.usernameField.type('John Doe');
      loginPage.passwordField.type('ThisIsNotAPassword');
      //Click “Login”
      loginPage.loginButton.click();
      //Set the facility to "Seoul CURA Healthcare Center"
      basePage.facilitySelector.select('Seoul CURA Healthcare Center');
      //Check - Apply for hospital readmission
      basePage.hospitalAdmissionCheckbox.click();
      //Select medicaid
      basePage.medicaidButton.click();
      //Set Date value by using the widget - 30
      basePage.dateWidget.click();
      basePage.dateButton.contains('30').click();
      //Set comment - CURA Healthcare Service
      basePage.commentHeading.click();
      basePage.commentField.type('CURA Healthcare Service');
      //Click - Book Appointment
      basePage.bookAppointmentButton.click();
      //Validation that previously set values are correct
      appointmentSummaryPage.facility.should('have.text','Seoul CURA Healthcare Center');
      appointmentSummaryPage.hospitalAdmission.get('#hospital_readmission').should('have.text', 'Yes');
      appointmentSummaryPage.healthCareProgram.should('have.text', 'Medicaid');
      appointmentSummaryPage.visitDate.should('contain', '30');
      appointmentSummaryPage.comment.should('have.text', 'CURA Healthcare Service');
    });
    it('Make an Appointment - case', () => {
      //Click “Make Appointment”
      basePage.makeAppointmentButton.click();
      //Set demo account username and password
      loginPage.usernameField.type('John Doe');
      loginPage.passwordField.type('ThisIsNotAPassword');
      //Click “Login”
      loginPage.loginButton.click();
      //Click - Menu/Stack/Burger icon
      basePage.menuStackIcon.click();
      //Validate that the sidebar is active
      basePage.activeSideBar.should('be.visible');
      //Click - History
      basePage.historyLink.click();
      //Validate that - No appointment - is visible
      historyPage.noAppointmentText.contains('No appointment').should('be.visible');
    });
  });
});