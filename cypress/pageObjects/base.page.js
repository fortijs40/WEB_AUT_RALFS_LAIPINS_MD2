class basePage{
    static get url(){
        return "";
    }
    static visit(){
        cy.visit(this.url);
    }
    static get makeAppointmentButton(){
       return cy.get('#btn-make-appointment');
    }
    static get facilitySelector(){
       return cy.get('#combo_facility');
    }
    static get hospitalAdmissionCheckbox(){
        return cy.get('[name="hospital_readmission"]');
    }
    static get medicaidButton(){
        return cy.get('#radio_program_medicaid');
    }
    static get dateWidget(){
        return cy.get('#txt_visit_date');
    }
    static get dateButton(){
        return cy.get('.day');
    }
    static get commentHeading(){
        return cy.get('[for="txt_comment"]');
    }
    static get commentField(){
        return cy.get('#txt_comment');
    }
    static get bookAppointmentButton(){
        return cy.get('#btn-book-appointment');
    }
    static get menuStackIcon(){
        return cy.get('#menu-toggle');
    }
    static get activeSideBar(){
        return cy.get('.active');
    }
    static get historyLink(){
        return cy.get('[href="history.php#history"]');
    }
}
export default basePage;