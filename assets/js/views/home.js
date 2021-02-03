Vue.component('home', {
  template: html`
    <div class='container'>
      <h3>Contacts</h3>
      <contacts :contacts='contacts'></contacts>
    </div>
  `,
  props: ['contacts'],
});