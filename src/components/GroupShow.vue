<template>
   <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24" v-for="group in filteredGroups" :key="group.name">
        <el-card>
            <span class="group-name">{{ group.name }}</span>
            <el-button  type="info" plain  @click="goToGroup(group.id)">Group detail</el-button>
          <el-collapse>
            <el-collapse-item>
              <el-row>
                <el-col v-for="(member, index) in group.members" :key="member" :span="6">
                {{ member }}
                <el-button type="primary" plain @click="removeMember(group, index)">Delete</el-button>
              </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button v-if="group.joinable" @click="joinGroup(group)">Join</el-button>
                  <el-button v-if="group.leavable" @click="leaveGroup(group)">Leave</el-button>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: '',
        groups: [
          { id: 1,
            name: 'Group1',
            members: ['Member A', 'Member B', 'Member C'],
            joinable: false,
            leavable: false,
            expanded: false
          },
          { id: 2,
            name: 'Group2',
            members: ['DENG JIAWEI', 'LI HONGCHEN', 'MAO YUHAO', 'SONG YUJIE', 'XIE ZHIRAN', 'QIONGWEN LIANG'],
            joinable: false,
            leavable: false,
            expanded: false
          },
        ]
      };
    },
    computed: {
      filteredGroups() {
        return this.groups.filter(group => group.name.toLowerCase().includes(this.search.toLowerCase()));
      },
    },
    methods: {
      // joinGroup(group) {
      //   // Implement the logic to join a group
      // },
      // leaveGroup(group) {
      //   // Implement the logic to leave a group
      // },
      removeMember(group, index) {
      group.members.splice(index, 1);
    },
    goToGroup(groupId) {
      this.$router.push({ name: 'CommitHistory', params: { id: groupId } });
    }
    }
  };
  </script>


<style>

.group-name:hover {
  color: #66b1ff; /* Hover link color, you can change it */
  text-decoration: underline; /* Adds underline on hover */
}

.group-name {
  font-size: 16px;
  font-weight: bold;
}

.el-button {
  margin-left: 10px;
  font-size: 14px;
  padding: 6px 12px;
}
</style>