<template>
  <vs-table v-model="selected" striped>
    <template #tbody>
      <vs-tr
        square
        :key="i"
        v-for="(tr, i) in users"
        :data="tr"
        :is-selected="selected == tr"
      >
        <vs-td>
          {{ tr.name }}
        </vs-td>
        <vs-td>
          {{ tr.email }}
        </vs-td>
        <vs-td>
          {{ tr.id }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>

export default {
  name: 'serviceList',
  data: () => ({
    selected: null,
    users: [
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 2,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 3,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 4,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 5,
        'name': 'Meanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 6,
        'name': 'Neanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      }
    ]
  })
}
</script>