import {html, css, LitElement} from 'lit-element';
import "google-maps-limited/google-maps-limited.js";

class MapComponent extends LitElement {
    static get styles() {
        return css`
        `
    }

    static get properties() {
        return {
            apiKey:{type: String} ,
            markers: {type: Array}
        }
    }

    constructor() {
        super();
        this.apiKey = 'AIzaSyBgmI1bWkGcebNPjwZpxSpCQ2yCWDGSJ1I';
        this.markers = [
            {
              position: {lat:41, lng:-112},
              InfoWindowContent: "<h3>The Salt Lake City, UT Temple</h3>"
            },
            {
              position: {lat:33, lng:-117},
              InfoWindowContent: "<h3>The San Diego, CA Temple</h3>"
            },
            {
              position: {lat:29, lng:-82},
              InfoWindowContent: "<h3>The Orlando, FL Temple</h3>"
            },
            {
              position: {lat:43, lng:-70},
              InfoWindowContent: "<h3>The Cape Elizabeth, ME Temple</h3>"
            }
          ];
    }

    render(){
        return html`
            <h1>Map</h1>
            <google-maps-limited 
                style="height:65vh;width:80vw" 
                selectLocationMode 
                .apiKey="${this.apiKey}" 
                .markers="${this.markers}">
            </google-maps-limited>
        `
    }
}

window.customElements.define("map-component", MapComponent);