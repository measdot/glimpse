<template>
    <div>
      <h2>Preferneces</h2>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="Connected AWS Accounts" name="1">
          <p>Sync your aws accounts with an access key id and secret access key.
            Glimpse app uses Mac KeyChain to securely store your AWS Secret Access Keys.<p>
          <p>You should be able to enable/disable the accounts. 
            Glimpse would ignore to see through services from disabled accounts.</p> 
          <el-row :gutter="12">
            <el-col :span="12">
              <el-card>
                Staging
                <el-popover
                  placement="right"
                  trigger="click">
                  <el-form :inline="false" :model="formInline" class="demo-form-inline">
                    <el-form-item label="" class="lbl">
                      <el-input  size="mini" v-model="formInline.alias" placeholder="Account Alias"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input size="mini" v-model="formInline.id" placeholder="Access Key Id"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button size="mini" type="info" @click="onSubmit">Store Secret Access Key</el-button>
                    </el-form-item>
                  </el-form>
                  <el-button type="info" style="float: right; padding: 2px" icon="el-icon-info" slot="reference"></el-button>
                </el-popover>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                Production
                <el-popover
                  placement="right"
                  trigger="click">
                  <el-form :inline="false" :model="formInline" class="demo-form-inline">
                    <el-form-item label="" class="lbl">
                      <el-input  size="mini" v-model="formInline.alias" placeholder="Account Alias"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input size="mini" v-model="formInline.id" placeholder="Access Key Id"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button size="mini" type="info" @click="onSubmit">Store Secret Access Key</el-button>
                    </el-form-item>
                  </el-form>
                  <el-button type="info" style="float: right; padding: 2px" icon="el-icon-info" slot="reference"></el-button>
                </el-popover>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                Team
                <el-popover
                  placement="right"
                  trigger="click">
                  <el-form :inline="false" :model="formInline" class="demo-form-inline">
                    <el-form-item label="" class="lbl">
                      <el-input  size="mini" v-model="formInline.alias" placeholder="Account Alias"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input size="mini" v-model="formInline.id" placeholder="Access Key Id"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button size="mini" type="info" @click="onSubmit">Store Secret Access Key</el-button>
                    </el-form-item>
                  </el-form>
                  <el-button type="info" style="float: right; padding: 2px" icon="el-icon-info" slot="reference"></el-button>
                </el-popover>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                Test
                <el-popover
                  placement="right"
                  trigger="click">
                  <el-form :inline="false" :model="formInline" class="demo-form-inline">
                    <el-form-item label="" class="lbl">
                      <el-input  size="mini" v-model="formInline.alias" placeholder="Account Alias"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input size="mini" v-model="formInline.id" placeholder="Access Key Id"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button size="mini" type="info" @click="onSubmit">Store Secret Access Key</el-button>
                    </el-form-item>
                  </el-form>
                  <el-button type="info" style="float: right; padding: 2px" icon="el-icon-info" slot="reference"></el-button>
                </el-popover>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                Sync A New AWS Account
                <el-popover
                  placement="right"
                  trigger="click">
                  <el-form :inline="false" :model="formInline" class="demo-form-inline">
                    <el-form-item label="" class="lbl">
                      <el-input  size="mini" v-model="formInline.alias" placeholder="Account Alias"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input size="mini" v-model="formInline.id" placeholder="Access Key Id"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button size="mini" type="info" @click="onSubmit">Store Secret Access Key</el-button>
                    </el-form-item>
                  </el-form>
                  <el-button type="success" style="float: right; padding: 2px"  icon="el-icon-circle-plus" slot="reference"></el-button>
                </el-popover>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="Allowed AWS Services" name="2">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Allow Glimpse to read all the services</el-checkbox>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>
const cityOptions = ['EC2', 'ECS', 'RDS', 'Cloudwatch']
export default {
  name: 'app-prefs',
  data () {
    return {
      checkAll: false,
      checkedCities: ['EC2', 'ECS', 'RDS'],
      cities: cityOptions,
      isIndeterminate: true,
      formInline: {
        user: '',
        region: ''
      },
      activeNames: ['1', '2']
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    onSubmit () {
      console.log('submit!')
    },
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style>

h2 {
  color: orange
}

.el-collapse-item__header, 
.el-collapse-item__wrap, 
.el-collapse-item__content,
.el-checkbox__label,
.el-checkbox__input.is-checked+.el-checkbox__label{
  background: transparent;
  color: lightcyan;
}

.el-card__body {
  padding: 7px;
}
.el-form-item {
  margin-bottom: 0px;
}
.el-col{
  margin: 5px 0;
}
.el-collapse{
  height: 82vh;
  overflow-y: scroll;
}
.el-collapse-item {
  /* height: fit-content; */
  overflow-y: scroll;
}
</style>