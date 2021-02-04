Vue.component('contacts', {
    template: html`
        <table class='table striped'>
            <thead>
                <tr>
                    <th v-for='(item, i) of head' :key='i'>
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if='contacts == null'>
                    <td :colspan='head.length'>
                        Don't have a contacts to show
                    </td>
                </tr>

                <contact
                    v-else
                    v-for='(contact, idx) of contacts'
                    :key='idx'
                    :contact='contact'
                ></contact>
            </tbody>
        </table>
  `,
    props: ['contacts'],
    data: () => ({
        head: [
            'Name',
            'Phone',
            'Actions',
        ],
    }),
});