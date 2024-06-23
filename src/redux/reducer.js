import { createReducer } from "@reduxjs/toolkit";


export const getInfoReducer = createReducer({}, (builder) => {
    builder




        .addCase("getTransactionStatisticsRequest", (state) => {
            state.loading = true;
        })
        .addCase("getTransactionStatisticsSuccess", (state, action) => {
            state.loading = false;
            state.transactionStatistics = action.payload;
        })
        .addCase("getTransactionStatisticsFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })





        .addCase("getTransactionBarChartRequest", (state) => {
            state.loading = true;
        })
        .addCase("getTransactionBarChartSuccess", (state, action) => {
            state.loading = false;
            state.BarChart = action.payload;
        })
        .addCase("getTransactionBarChartFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })





        .addCase("getTansactionTableRequest", (state) => {
            state.loading = true;
        })
        .addCase("getTansactionTableSuccess", (state, action) => {
            state.loading = false;
            state.Table = action.payload;
        })
        .addCase("getTansactionTableFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })




        .addCase("combineAllDataRequest", (state) => {
            state.loading = true;
        })
        .addCase("combineAllDataSuccess", (state, action) => {
            state.loading = false;
            state.combine = action.payload;
        })
        .addCase("combineAllDataFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })




        .addCase("getTransactionPieChartRequest", (state) => {
            state.loading = true;
        })
        .addCase("getTransactionPieChartSuccess", (state, action) => {
            state.loading = false;
            state.pieChart = action.payload;
        })
        .addCase("getTransactionPieChartFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })





        .addCase('clearError', (state) => {
            state.error = null;
        })
});