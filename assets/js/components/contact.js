Vue.component('contact', {
  template: html`
    <tr>
      <td>{{ contact.name }}</td>
      <td>{{ contact.phone }}</td>
    </tr>
  `,
  props: ['contact']
});