<template>
  <el-table
  ref="singleTable"
  height="191"
  stripe
  :data="users"
  style="width: 100%; max-height: 250px; color: white">
    <el-table-column>
      <template slot="header" slot-scope="scope">
        <el-input
          size="mini"
          placeholder="Type to search"></el-input>
      </template>
      <template slot-scope="scope">
        <el-image
            style="width: 26px; height: 26px; border-radius: 10px; padding: 2px;" src="/static/images/EC2_32.png"
            fit="fill"></el-image>
        <span class="name">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Instance Id" width="150">
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
</style>