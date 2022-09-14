import ListaTareas from "../../LogicaNegocio/ListaTareas.js";
import Tarea from  "../../LogicaNegocio/Tarea.js"
//TDD
describe("Añadir tarea corta a Tarea ", () => {
    it("debe permitir crear tarea con tareaCorta ", () => {
        var tarea = new Tarea("primera tarea");
        tarea.setTareaCorta("tar1");
        expect(tarea.getTareaCorta()).toEqual( "tar1" );
    });

    it("debe permitir crear tarea con tareaCorta ", () => {
        var tarea = new Tarea("primera tarea");
        tarea.setTareaCorta("tar2");
        expect(tarea.getTareaCorta()).toEqual( "tar2" );
    });

    it("debe permitir crear tarea con tareaCorta y visualizarla en la lista de tareas", () => {
        var listaTareas = new ListaTareas();
        listaTareas.agregarTarea("primera tarea","","","","","tar2");
        expect(listaTareas.getTareaPorId("tarea-1").getTareaCorta()).toEqual( "tar2" );
    });
});