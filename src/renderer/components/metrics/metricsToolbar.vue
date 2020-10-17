<template>
  <div class="center grid">
    <vs-row justify="flex-end" align="center">
      <vs-col w="3" order="1">
        <vs-button-group>
          <vs-button icon>
            <span class="material-icons"> arrow_back_ios </span>
          </vs-button>
          <vs-button> Today </vs-button>
          <vs-button icon>
            <span class="material-icons"> arrow_forward_ios </span>
          </vs-button>
        </vs-button-group>
      </vs-col>
      <vs-col w="1">
        <vs-button icon>
          <span class="material-icons"> date_range </span>
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>


<script>
export default {
  name: 'metricsToolbar',
  data: () => ({})
}
</script>