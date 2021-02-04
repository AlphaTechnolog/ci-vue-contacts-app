Vue.component('navbar', {
  template: html`
    <div>
      <div class='navbar navbar-dark bg-dark'>
        <div class="container-fluid">
          <a :href='base_url' class='navbar-brand'>
            {{ msg }}
          </a>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      msg: document.title,
      base_url: window.BASE_URL
    }
  }
})