Vue.component('add-contact-form', {
    template: html`
        <div>
            <div class="row">
                <div class="col-sm-12" v-if='message !== ""'>
                    <div class="alert alert-info">
                        {{ message }}
                    </div>
                </div>
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
            message: '',
        }
    },
    methods: {
        checkData() {
            return new Promise((resolve, reject) => {
                if (this.name !== '' &&
                    this.phone !== ''
                ) {
                    resolve();
                } else {
                    this.message = 'Invalid data';
                }
            });
        },

        async submit() {
            await this.checkData();

            const url =
                `${this.baseUrl}index.php/api/addContact/index/${this.name}/${this.phone}`

            const req = await fetch(url);
            const res = await req.text();

            this.message = res
        }
    }
});