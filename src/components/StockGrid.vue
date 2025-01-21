<template>
  <div>
    <ag-grid-vue
      class="ag-theme-alpine"
      style="width: 100%; height: 500px"
      :rowData="rowData"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :modules="modules"
      :animateRows="true"
      rowModelType="clientSide"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import api from "@/services/api";

export default {
  name: "StockGrid",
  components: {
    AgGridVue,
  },
  data() {
    return {
      rowData: [],
      columnDefs: [
        { headerName: "Symbol", field: "symbol", sortable: true, filter: true },
        {
          headerName: "TimeStamp",
          field: "timeStamp",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Open Price",
          field: "openPrice",
          sortable: true,
          filter: true,
        },
        {
          headerName: "High Price",
          field: "highPrice",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Low Price",
          field: "lowPrice",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Close Price",
          field: "closePrice",
          sortable: true,
          filter: true,
        },
        { headerName: "Volume", field: "volume", sortable: true, filter: true },
      ],
      defaultColDef: {
        resizable: true,
        sortable: true,
        filter: true,
      },
      modules: [ClientSideRowModelModule],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await api.get("/stock");
        this.rowData = response.data;
      } catch (error) {
        console.error("Erro ao carregar os dados: ", error);
      }
    },
  },
};
</script>

<style scoped>
@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-alpine.css";
</style>
