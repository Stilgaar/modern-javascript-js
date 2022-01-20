import Snackbar from "./fremen-ui/snackbar";
import Tooltip from "./fremen-ui/tooltip";
import Dropdown from "./fremen-ui/dropdown";
import Tabs from "./fremen-ui/tabs";

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'))
tooltip.init()

// create dropdowns : 
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(elem => {
    const instance = new Dropdown(elem)
    instance.init()
})

// create les tabs
const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init()

// create a snackbar
const snack = new Snackbar();
snack.init()
const button = document.querySelector('button')
button.addEventListener('click', () => {
    snack.show("SALE GOAT")
})