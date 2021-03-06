import axios from 'axios'
import { getDataObat, setDataObatLocal } from '../helpers/dataObat'

export const moduleObat = {
    state: {
        obat: [],
        order: null
    },
    getters: {
        allDataObat: state => state.obat,
        lastIdObat: state => {
            const { dataObatLocal } = getDataObat()

            if (state.obat.length > 0) {
                return state.obat.at(-1).id_resep
            } else if (dataObatLocal.length > 0) {
                return dataObatLocal.at(-1).id_resep
            }
        },
        dataObat: state => (id_resep) => {
            return state.obat.find(obat => obat.id_resep == id_resep)
        },
        dataOrder: state => state.order
    },
    mutations: {
        setObat: (state, newDataObat) => state.obat = newDataObat,
        addObat: (state, newObat) => state.obat.push(newObat),

        updateObat: (state, payload) => {
            const targetIndex = state.obat
                .findIndex(obat => obat.id_resep == payload.id_resep)
            state.obat.splice(targetIndex, 1, payload.updatedObat)
        },

        deleteObat: (state, id_resep) => {
            const targetIndex = state.obat
                .findIndex(obat => obat.id_resep == id_resep)
            state.obat.splice(targetIndex, 1)
        },

        setOrder: (state, newDataOrder) => state.order = newDataOrder,
    },
    actions: {
        fetchObat: async ({ commit }) => {
            const { dataObatLocal } = getDataObat()
            if (!dataObatLocal || dataObatLocal.length == 0) {
                const res = await axios.get('data/obat.json');
                commit('setObat', res.data)
                setDataObatLocal(res.data)
            } else {
                commit('setObat', dataObatLocal)
            }
        },
        deleteObatAction: ({ commit, state }, id_resep) => {
            commit('deleteObat', id_resep)
            setDataObatLocal(state.obat)
        },
        addObatAction: ({ commit, state }, newObat) => {
            commit('addObat', newObat)
            setDataObatLocal(state.obat)
        },
        updateObatAction: ({ commit, state }, updatedObat) => {
            commit('updateObat', updatedObat)
            setDataObatLocal(state.obat)
        },
        setOrderAction: ({ commit }, newOrder) => {
            commit('setOrder', newOrder)
        }
    },
}