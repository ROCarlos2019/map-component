import {html, css, LitElement} from 'lit-element';
import '@em-polymer/google-map/google-map.js'
import '@em-polymer/google-map/google-map-marker.js'

class MapComponent extends LitElement {
    static get styles() {
        return css`
        `
    }

    static get properties() {
        return {
            apiKey:{type: String} 
        }
    }

    constructor() {
        super();
        this.apiKey = 'AIzaSyBgmI1bWkGcebNPjwZpxSpCQ2yCWDGSJ1I';
    }

    render(){
        return html`
            <h1>Map</h1>
            <google-map api-key="${this.apiKey}"></google-map>
        `
    }
}

window.customElements.define("map-component", MapComponent);