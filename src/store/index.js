import { createStore } from 'vuex'
import axios from 'axios'
import { getDataPasien, setDataPasienLocal } from '../helpers/dataPasien'

export const store = createStore({
    state: {
        pasien: [],
        obat: []
    },
    getters: {
        allDataPasien: state => state.pasien,
        lastIdPasien: state => {
            const { dataPasienLocal } = getDataPasien()

            if (state.pasien.length > 0) {
                return state.pasien.at(-1).id_pasien
            } else if (dataPasienLocal.length > 0) {
                return dataPasienLocal.at(-1).id_pasien
            } else {
                alert("data pasien kosong, isi data akan di reset ke default")
                window.location.reload()
            }
        },
        dataPasien: state => (id_pasien) => {
            return state.pasien.find(pasien => pasien.id_pasien == id_pasien)
        },
        dataObat: state => state.obat
    },
    mutations: {
        setPasien: (state, newDataPasien) => state.pasien = newDataPasien,
        addPasien: (state, newPasien) => state.pasien.push(newPasien),

        updatePasien: (state, payload) => {
            const targetIndex = state.pasien
                .findIndex(pasien => pasien.id_pasien == payload.id_pasien)
            state.pasien.splice(targetIndex, 1, payload.updatedPasien)
        },

        deletePasien: (state, id_pasien) => {
            const targetIndex = state.pasien
                .findIndex(pasien => pasien.id_pasien == id_pasien)
            state.pasien.splice(targetIndex, 1)
        }
    },
    actions: {
        fetchPasien: async ({ commit }) => {
            const { dataPasienLocal } = getDataPasien()

            // hanya fetch data apabila dataPasien yang di localStorage masih kosong (belum pernah di fetch)
            // apabila sudah pernah fetch maka ambil data dari localStorage
            if (!dataPasienLocal || dataPasienLocal.length == 0) {
                const res = await axios.get('data/pasien.json');
                commit('setPasien', res.data)
                setDataPasienLocal(res.data)
            } else {
                commit('setPasien', dataPasienLocal)
            }
        },
        deletePasienAction: ({ commit, state }, id_pasien) => {
            commit('deletePasien', id_pasien)
            setDataPasienLocal(state.pasien)
        },
        addPasienAction: ({ commit, state }, newPasien) => {
            commit('addPasien', newPasien)
            setDataPasienLocal(state.pasien)
        },
        updatePasienAction: ({ commit, state }, updatedPasien) => {
            commit('updatePasien', updatedPasien)
            setDataPasienLocal(state.pasien)
        }
    },
})