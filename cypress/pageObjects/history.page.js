import basePage from "./base.page.js";
class historyPage extends basePage{
    static get url(){
        return "/history.php#history";
    }
    static get noAppointmentText(){
        return cy.get('.col-sm-12.text-center');
    }
   
}
export default historyPage;