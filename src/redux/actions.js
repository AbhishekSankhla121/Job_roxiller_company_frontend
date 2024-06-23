import { server } from "./store";

export const getTransactionStatistics = (month = 0, year = 2022) => async dispatch => {
    try {
        dispatch({ type: 'getTransactionStatisticsRequest' });


        const query = `${server}/gettransactionStatistics?month=${month}&year=${year}`
        const response = await fetch(query);
        const { data } = await response.json();
        console.log(data)
        dispatch({
            type: 'getTransactionStatisticsSuccess', payload: data
        });
    } catch (error) {
        dispatch({
            type: 'getTransactionStatisticsFail',
            payload: error.data,
        });
    }
};





export const getBarChart = (month = 0, year = 2022) => async dispatch => {
    try {
        dispatch({ type: 'getTransactionBarChartRequest' });


        const query = `${server}/gettransactionbarchart?month=${month}&year=${year}`
        const response = await fetch(query);
        const { data } = await response.json();
        console.log(data)
        dispatch({
            type: 'getTransactionBarChartSuccess', payload: data
        });
    } catch (error) {
        dispatch({
            type: 'getTransactionBarChartFail',
            payload: error.message,
        });
    }
};



export const getTable = (page = 1, perPage = 5, search = "") => async dispatch => {
    try {
        dispatch({ type: 'getTansactionTableRequest' });


        const query = `${server}/gettansactiontable?page=${page}&perPage=${perPage}&search=${search}`
        const response = await fetch(query);
        const { data } = await response.json();

        dispatch({
            type: 'getTansactionTableSuccess', payload: data
        });
    } catch (error) {
        dispatch({
            type: 'getTansactionTableFail',
            payload: error.message,
        });
    }
};



export const getPieChart = (month = 5, year = 2022) => async dispatch => {
    try {
        dispatch({ type: 'getTransactionPieChartRequest' });


        const query = `${server}/gettransactionpiechart?month=${month}&year=${year}`;
        const response = await fetch(query);
        const { data } = await response.json();
        dispatch({
            type: 'getTransactionPieChartSuccess', payload: data
        });
    } catch (error) {
        dispatch({
            type: 'getTransactionPieChartFail',
            payload: error.message,
        });
    }
};




export const combineAllData = (month = 5, year = 2022, page = 1, perPage = 5, search = "") => async dispatch => {
    try {
        dispatch({ type: 'combineAllDataRequest' });


        const query = `${server}/combinealldata?month=${month}&year=${year}&page=${page}&perPage=${perPage}&search=${search}`;
        const response = await fetch(query);
        const data = await response.json();
        console.log(data)
        dispatch({
            type: 'combineAllDataSuccess', payload: data
        });
    } catch (error) {
        dispatch({
            type: 'combineAllDataFail',
            payload: error.message,
        });
    }
};
