import { createStore } from 'vuex'
import axios from 'axios'
import { getDataPasien, removeDataPasien, setDataPasien } from '../helpers/dataPasien'

export const store = createStore({
    state: {
        pasien: [],
        obat: []
    },
    getters: {
        dataPasien: state => state.pasien,
        lastIdPasien: state => {
            const { dataPasienLocal } = getDataPasien()

            if (state.pasien.length > 0) {
                return state.pasien.at(-1).id_pasien
            } else if (dataPasienLocal.length > 0) {
                return dataPasienLocal.at(-1).id_pasien
            } else {
                alert("data pasien empty, re fetch data required")
            }
        },
        dataObat: state => state.obat
    },
    mutations: {
        setPasien: (state, newDataPasien) => state.pasien = newDataPasien,
        addPasien: (state, newPasien) => state.pasien.push(newPasien),
        updatePasien: (state, updatedPasien) => {
            const targetIndex = state.pasien
                .findIndex(pasien => pasien.id_pasien === updatedPasien.id_pasien)
            state.pasien.splice(targetIndex, 1, updatedPasien)
        },
        deletePasien: (state, id_pasien) => {
            const targetIndex = state.pasien
                .findIndex(pasien => pasien.id_pasien === id_pasien)
            state.pasien.splice(targetIndex, 1)
        }
    },
    actions: {
        fetchPasien: async ({ commit }) => {
            const { dataPasienLocal } = getDataPasien()
            // hanya fetch data apabila dataPasien yang di localStorage masih kosong (belum pernah di fetch)
            // apabila sudah pernah fetch maka data disimpan di localStorage
            if (dataPasienLocal.length == 0) {
                const res = await axios.get('data/pasien.json');
                commit('setPasien', res.data)
                setDataPasien(res.data)
            } else {
                commit('setPasien', dataPasienLocal)
            }
        },
        deletePasienAction: ({ commit, state }, id_pasien) => {
            commit('deletePasien', id_pasien)
            setDataPasien(state.pasien)
        },
        addPasienAction: ({ commit, state }, newPasien) => {
            commit('addPasien', newPasien)
            setDataPasien(state.pasien)
        }
    },
})