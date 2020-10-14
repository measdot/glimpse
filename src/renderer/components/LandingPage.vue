<template>
    <div class="noselect center grid">
      <vs-row justify="center" align="center">
        <vs-col offset="1" w="2">
          <vs-button-group >
            <vs-button icon flat dark>
              <span class="material-icons">
                navigate_before
              </span>
            </vs-button>
            <vs-button icon flat dark> 
              <span class="material-icons">
                navigate_next
              </span>
            </vs-button>
          </vs-button-group>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="1">
          <vs-button icon flat dark>
            <span class="material-icons">
                cloud
            </span>
          </vs-button>
        </vs-col>
        <vs-col background="dark" vs-type="flex" vs-justify="center" vs-align="center" w="4">
          Cloud Glimpse
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
          <div class="center content-inputs">
            <vs-input state="dark" placeholder="Search">
            </vs-input>
          </div>
        </vs-col>
      </vs-row>
    </div>
</template>
<script>
// import SystemInformation from './LandingPage/SystemInformation'

export default {
  name: 'landing-page',
  data: () => ({
    active: 'guide'
  }),
  methods: {}
}
</script>

<style>
.noselect {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  /* height: 40px; */
  /* background: rgb(45, 45, 45); */
}
body{
  margin:0px
}
:root {
    /* --vs-primary: 60, 60, 60; */
}

</style>
