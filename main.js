const tarea = new Vue({
  el: "#app",
  data: {
    title: "Keep",
    listas: [
      { nombre: "Lavar el Auto" },
      { nombre: "Cocinar" },
      { nombre: "Hacer la cena" },
    ],
    tarea: "",
    tareas: [],
  },
  methods: {
    agregarTareas() {
      if (this.tarea.trim()) {
        this.tareas.push(this.tarea);
        this.tarea = "";
      } else {
        alert("Debes ingresar una tarea");
      }
    },
    
  },
});
