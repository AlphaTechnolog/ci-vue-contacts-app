Vue.component('add-contact-button', {
    template: html`
        <div class='text-right'>
            <a
                class="btn btn-success"
                :href='baseUrl + "index.php/addContact"'
            >
                Add contact
            </a>
        </div>
    `,
    data: () => ({
        baseUrl: window.BASE_URL
    }),
});