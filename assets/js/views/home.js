Vue.component('home', {
  template: html`
    <div class='container'>
      <contacts-title></contacts-title>
      <contacts :contacts='contacts'></contacts>
    </div>
  `,
  props: ['contacts'],
});