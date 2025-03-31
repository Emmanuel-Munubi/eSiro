export default class EsiroNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['section'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        // Clean up any event listeners if added in the future
    }

    render() {
        this.shadowRoot.innerHTML = `
        <nav>
            <button onclick="document.querySelector('esiro-network').showSection('stores')">
                🏪 Stores
            </button>
            <button onclick="document.querySelector('esiro-network').showSection('products')">
                📦 Products
            </button>
            <button onclick="document.querySelector('esiro-network').showSection('data')">
                📊 Data
            </button>
            <button onclick="document.querySelector('esiro-network').showSection('cart')">
                🛒 Cart
            </button>
        </nav>
        <style>
            nav {
                display: flex;
                flex-direction: column;
                width: 200px;
                border-right: 1px solid #ccc;
                padding: 10px;
            }
            nav button {
                display: flex;
                align-items: center;
                gap: 12px;
                width: 100%;
                padding: 12px;
                margin-bottom: 8px;
                border: none;
                background: transparent;
                color: var(--text-primary);
                transition: all var(--transition-speed);
            }
            nav button:hover {
                background: var(--primary-accent);
                transform: translateX(4px);
            }
            .nav-icon {
                width: 20px;
                height: 20px;
            }
            @media (max-width: 768px) {
                nav {
                    display: none;
                }
            }
        </style>`;
    }
}
