<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search"
          class="ml-4"
          outlined
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="stocks"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Stock Data</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:[`header.symbol`]>
          <strong>Stock</strong>
        </template>
        <template v-slot:[`header.timeStamp`]>
          <strong>Time Stamp</strong>
        </template>
        <template v-slot:[`header.openPrice`]>
          <strong>Open Price</strong>
        </template>
        <template v-slot:[`header.highPrice`]>
          <strong>High Price</strong>
        </template>
        <template v-slot:[`header.lowPrice`]>
          <strong>Low Price</strong>
        </template>
        <template v-slot:[`header.closePrice`]>
          <strong>Close Price</strong>
        </template>
        <template v-slot:[`header.volume`]>
          <strong>Volume</strong>
        </template>
        <template v-slot:[`item.openPrice`]="{ item }">
          {{ `$${item.openPrice}` }}
        </template>
        <template v-slot:[`item.highPrice`]="{ item }">
          {{ `$${item.highPrice}` }}
        </template>
        <template v-slot:[`item.lowPrice`]="{ item }">
          {{ `$${item.lowPrice}` }}
        </template>
        <template v-slot:[`item.closePrice`]="{ item }">
          {{ `$${item.closePrice}` }}
        </template>
        <template v-slot:[`item.timeStamp`]="{ item }">
          {{ new Date(item.timeStamp).toLocaleString() }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api";

export default {
  name: "StockGrid",
  data() {
    return {
      search: "",
      stocks: [],
      headers: [
        { text: "Symbol", value: "symbol", sortable: true },
        { text: "TimeStamp", value: "timeStamp", sortable: true },
        { text: "Open Price", value: "openPrice", sortable: true },
        { text: "High Price", value: "highPrice", sortable: true },
        { text: "Low Price", value: "lowPrice", sortable: true },
        { text: "Close Price", value: "closePrice", sortable: true },
        { text: "Volume", value: "volume", sortable: true },
      ],
    };
  },
  async mounted() {
    await this.fetchStocks();
  },
  methods: {
    async fetchStocks() {
      try {
        const response = await api.get("/stock");
        this.stocks = response.data;
      } catch (error) {
        console.error("Error loading stock data: ", error);
      }
    },
  },
};
</script>
<style scoped></style>
