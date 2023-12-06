<template>
    <div>
      <input type="file" @change="leerArchivo" />
      <table v-if="contenido.length > 0">
        <thead>
          <tr>
            <th>Line</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(line, index) in contenido.split('\n')">
            <td>{{ index + 1 }}</td>
            <td>{{ line }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        No content to display.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contenido: "",
      };
    },
    methods: {
      leerArchivo(e) {
        const archivo = e.target.files[0];
        if (!archivo) {
          return;
        }
        const lector = new FileReader();
        lector.onload = (e) => {
          this.contenido = e.target.result;
        };
        lector.readAsText(archivo);
      },
    },
  };
  </script>
  