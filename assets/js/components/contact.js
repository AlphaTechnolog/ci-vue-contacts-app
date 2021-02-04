Vue.component('contact', {
    template: html`
        <tr>
            <td>{{ contact.name }}</td>
            <td>{{ contact.phone }}</td>
            <td>
                <button class="btn btn-danger" @click='deleteContact'>
                    {{ deletemsg }}
                </button>
                <button class="btn btn-warning">
                    Update
                </button>
            </td>
        </tr>
    `,
    props: ['contact'],
    data() {
        return {
            baseUrl: window.BASE_URL,
            deletemsg: 'Delete'
        }
    },
    methods: {
        $pif(cond) {
            return new Promise(resolve => {
                if (cond) {
                    resolve();
                }
            });
        },

        async deleteContact() {
            const confirmation = confirm('Do you want to remove it contact?');
            await this.$pif(confirmation);
            const req = await fetch(`${this.baseUrl}api/removeContact/index/${this.contact.id}`)
            window.location.reload();
        }
    }
});