<template>
  <el-table
  ref="singleTable"
  stripe
  :data="users"
  style="width: 100%; color: white; opacity: 0.8;">
    <el-table-column>
      <!-- <template slot="header" slot-scope="scope">
        <el-input
          size="mini"
          style="max-height: 10px; height: 10px;"
          placeholder="Type to search"></el-input>
      </template> -->
      <template slot-scope="scope">
        <el-image
            style="width: 26px; height: 26px; border-radius: 10px; padding: 2px;" :src="'/static/images/'+scope.row.icon"
            fit="fill"></el-image>
        <span class="name">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column width="150">
      <template slot-scope="scope">
        <span class="name">i-0987654321</span>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>

export default {
  name: 'serviceList',
  data: () => ({
    selected: null,
    users: [
      {
        'id': 1,
        'name': 'tf-stage-website-mysql',
        'icon': 'RDS_32.png'
      },
      {
        'id': 2,
        'name': 'tf-stage-website-ecs',
        'icon': 'ECS_32.png'
      },
      {
        'id': 3,
        'name': 'tf-stage-website-elb',
        'icon': 'ELB_32.png'
      },
      {
        'id': 4,
        'name': 'tf-stage-website-ec2',
        'icon': 'EC2_32.png'
      },
      {
        'id': 5,
        'name': 'tf-stage-website-cw',
        'icon': 'CW_32.png'
      },
      {
        'id': 6,
        'name': 'tf-stage-website-elb',
        'icon': 'ELB_32.png'
      }
    ]
  })
}
</script>

<style lang="css">
.name {
  /* display: inline-block;
  box-sizing: border-box; */
  vertical-align: bottom;
  /* color: #fff; */
  /* background: #C0C4CC; */
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding-left: inherit;
}
.el-table td, .el-table th {
    padding: 1px 1px;
}
 .el-table th {
   height: 15px; 
   background-color: rgb(45, 45, 45);
   color: white;
 }
 .el-table .el-table__body tr.el-table__row td {
  background: rgb(30, 30, 30);
}

.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgb(41, 41, 41);
}
.el-table td, .el-table th.is-leaf {
  border-bottom: none;
}
.el-input__inner {
  background-color: transparent;;
}
.list-container {
  background-color: rgb(40, 40, 40);
}
.el-table, .el-table__expanded-cell {
  background-color: rgb(40, 40, 40);
}
</style>