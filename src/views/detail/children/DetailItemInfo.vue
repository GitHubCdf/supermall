<template>
  <div v-if="Object.keys(itemParams).length != 0" class="detail-item-info">
    <table class="rule">
      <thead>
        <tr>
          <th colspan="5">{{ itemParams.rule.key }}</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(array, index) in itemParams.rule.tables[0]" :key="index">
          <td v-for="(item, index) in array" :key="index">{{ item }}</td>
        </tr>
      </tbody>
    </table>
    <p>{{ itemParams.rule.disclaimer }}</p>
    <table class="params">
      <thead>
        <tr>
          <th colspan="2">{{ itemParams.info.key }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemParams.info.set" :key="index">
          <td>{{ item.key }}:</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-item-info {
  padding: 0 20px;
}
table th {
  padding-top: 20px;
}
table {
  width: 100%;
}
.params td {
  font-size: 12px;
}
.params td:nth-child(1) {
  padding-left: 5px;
  width: 50px;
  text-align: center;
}
.rule {
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid #eee;
}
.rule th {
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
.rule td {
  padding: 2px;
  color: #333;
}
.detail-item-info p {
  padding: 10px 30px;
  font-size: 12px;
  color: #333;
}
</style>