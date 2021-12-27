import { createStore } from 'vuex'
import { modulePasien } from './modulePasien'
import { moduleObat } from './moduleObat'

export const store = createStore({
    modules: {
        pasien: modulePasien,
        obat: moduleObat
    }
})