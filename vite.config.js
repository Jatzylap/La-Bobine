import { defineConfig } from 'vite'

export default defineConfig(
{
    // base defaults to "/"
    // base: "/",
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                contact: 'contact.html',
                'info-pratique/a-propos': 'info-pratique/a-propos.html',
                'programme/2025-2026': 'programme/2025-2026.html',
                'programme/2026-2027': 'programme/2026-2027.html',
                'film/125_rue_montmartre': 'film/125_rue_montmartre.html',
                'film/ama_gloria': 'film/ama_gloria.html',
                'film/as_bestas': 'film/as_bestas.html',
                'film/cesar_et_rosalie': 'film/cesar_et_rosalie.html',
                'film/de_lautre_cote_du_ciel': 'film/de_lautre_cote_du_ciel.html',
                'film/flow': 'film/flow.html',
                'film/la_regle_du_jeu': 'film/la_regle_du_jeu.html',
                'film/la_tete_contre_les_murs': 'film/la_tete_contre_les_murs.html',
                'film/le_diable_boiteux': 'film/le_diable_boiteux.html',
                'film/le_moine_et_le_fusil': 'film/le_moine_et_le_fusil.html',
                'film/le_nom_de_la_rose': 'film/le_nom_de_la_rose.html',
                'film/les_pires': 'film/les_pires.html',
                'film/une_vie_difficile': 'film/une_vie_difficile.html'
            }
        }
    }
})