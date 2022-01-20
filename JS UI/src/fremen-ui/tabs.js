import './styles/tabs.css'

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener("click", e => {
                if (e.target.tagName === "LI") {
                    this.toggleTabs(e);
                    this.toggleContent(e)
                }
            })
        });
    }
    toggleTabs(e) {
        // virer les classes actives. 
        this.tabs.forEach(tab => tab.classList.remove('active'))
        // ajouter une classe active à ce qu'on a cliqué
        e.target.classList.add('active')
    }
    toggleContent(e) {
        // virer les classes actives
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active')
        })
        // puis activer le bon \o/ avec les ID ! 
        const selector = e.target.getAttribute('data-target')
        const content = this.container.querySelector(selector)
        content.classList.add('active')
    }
}

export { Tabs as default }