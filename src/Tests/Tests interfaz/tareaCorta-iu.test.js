import fs from "fs";

//ATDD
describe("Añadir tarea corta a Tarea", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("../../LogicaInterfaz/index.js");
  });
  it("deberia tener campo para agregar tarea corta", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const tarea_corta_elem =  document.querySelector("#tareaCorta");  
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Primera tarea"; 
    tarea_corta_elem.value = "tar1"; 
    //form.submit();   
    expect(tarea_corta_elem.value).toEqual("tar1");
  });
//ATDD
  it("deberia tener visualizar tarea corta en la lista ", () => {
    const tarea_elem = document.querySelector("#tarea");  
    const lista_elem = document.querySelector("#lista-tareas");
    const tarea_corta_elem =  document.querySelector("#tareaCorta");  
    const form = document.querySelector("#agregarTareas-form");
    tarea_elem.value = "Primera tarea"; 
    tarea_corta_elem.value = "tar1"; 
    form.submit();   
    expect(lista_elem.innerHTML).toEqual("<ul><li>Primera tarea[Sin categoria]<span class=\"etiquetas\"></span><span class=\"fecha-limite\"><input class=\"checkbox-terminada\" type=\"checkbox\" id=\"tarea-1\" value=\"terminada \"></span>Tarea Corta: tar1</li></ul>");
  });



  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");    
    lista_elem.innerHTML = "";
  });
});