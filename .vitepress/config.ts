import { defineConfig } from 'vitepress'

const minimalToc = [
  { text: 'Front', link: '/front/' },
  { text: 'Back', link: '/back/' },
  { text: 'Base de données', link: '/bdd/' },
  { text: 'Devops', link: '/devops/' },
]

const frontToc = [
  { text: 'Conventions', link: '/front/conventions' },
  { text: 'Guides', link: '/front/guide' },
]

const backToc = [
  { text: 'Docker', link: '/back/docker' },
  { text: 'Formatage', link: '/back/formatage' },
  { text: 'Nommage', link: '/back/regles' },
  { text: 'Tests', link: '/back/regles' },
]
const transverseToc = [
  { text: 'Git', link: '/transverse/git' },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Retour vers l'accueil",
  description: "Conventions, guides et règles de développement d'un projet informatique",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Qu’est-ce que la FDR ?', link: '/fdr-origin' },
      { text: 'Sommes-nous dans une simulation ?', link: '/simulation' },
      { text: 'Comment réinitialiser ses paramètres d’usinage ?', link: '/reset' }
    ],

    sidebar: {
      '/bac.': minimalToc.map(item => item.text === 'Front' ? { ...item, items: frontToc } : item),
      '/': minimalToc
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
