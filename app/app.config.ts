export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    },
    prose: {
      codeIcon: {
        mise: 'i-vscode-icons-file-type-shell'
      }
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'AI Factory'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/lee-to/ai-factory',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `AI Factory • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/lee-to/ai-factory',
      'target': '_blank',
      'aria-label': 'ai-factory on GitHub'
    }, {
      'icon': 'i-lucide-bug',
      'to': 'https://github.com/lee-to/ai-factory/issues',
      'target': '_blank',
      'aria-label': 'ai-factory issues'
    }, {
      'icon': 'i-lucide-tag',
      'to': 'https://github.com/lee-to/ai-factory/releases',
      'target': '_blank',
      'aria-label': 'ai-factory releases'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Project',
      // edit: 'https://github.com/lee-to/ai-factory/edit/main',
      edit: '',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/lee-to/ai-factory',
        target: '_blank'
      }]
    }
  }
})
