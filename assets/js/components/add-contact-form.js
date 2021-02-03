Vue.component('add-contact-form', {
    template: html`
        <div>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <input
                            type='text'
                            placeholder='Enter the name.'
                            v-model='name'
                            @keyup.enter='submit'
                            class='form-control'
                        >
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <input
                            type='text'
                            placeholder='Enter the phone.'
                            v-model='phone'
                            @keyup.enter='submit'
                            class='form-control'
                        >
                    </div>
                </div>
                <div class="col-sm-12">
                    <button class='btn btn-success btn-block' @click='submit'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            baseUrl: window.BASE_URL,
            name: '',
            phone: '',
        }
    },
    methods: {
        submit() {
            const url =
                `${this.baseUrl}index.php/api/addContact/index/${this.name}/${this.phone}`

            window.location = url;
        }
    }
});