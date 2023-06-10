import basePage from "./base.page";
class appointmentSummaryPage extends basePage{
    static get url(){
        return "/appointment.php#summary";
    }
    static get facility(){
        return cy.get('#facility');
    }
    static get hospitalAdmission(){
        return cy.get('#hospital_readmission');
    }
    static get healthCareProgram(){
        return cy.get('#program');
    }
    static get visitDate(){
        return cy.get('#visit_date');
    }
    static get comment(){
        return cy.get('#comment');
    }
}
export default appointmentSummaryPage;