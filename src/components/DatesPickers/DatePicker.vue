<template>
  <div class="demo-date-picker max-w-1/3 h-full">
    <el-date-picker
      v-if="selectedService === 'Staying' || selectedService === 'Babysitter at home' "
      v-model="value1"
      type="daterange"
      range-separator=" - " 
      start-placeholder="From"
      end-placeholder="To"
      :popper-options="{ modifiers: [{ name: 'flip', options: { fallbackPlacements: ['bottom'] } }] }"
      style="height: 100% !important; width: 100% !important;"
    />
    <el-date-picker
      v-else
      v-model="value1"
      type="dates"
      :placeholder="placeholderText"
      :popper-options="{ modifiers: [{ name: 'flip', options: { fallbackPlacements: ['bottom'] } }] }"
      style="height: 100% !important; width: 100% !important;"
    />
  </div>
</template>


<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

const value1 = ref(['', '']) 

const nightCount = ref(0)


//Watch on value to calculate amounts of nights 
watch(value1, (newVal, oldVal) => {
  if (newVal[0] && newVal[1]) {
    const [startDate, endDate] = newVal.map(dateStr => new Date(dateStr).getTime())
    
    if (!isNaN(startDate) && !isNaN(endDate)) {
      const diffTime = Math.abs(endDate - startDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      nightCount.value = diffDays
    } else {
      nightCount.value = 0
    }
  } else {
    nightCount.value = 0
  }
})


const placeholderText = computed(() => `Select at least one date (${nightCount.value} nights)`)


</script>

<script lang="ts">

export default {
  props: {
    selectedService: String, 
  },
  setup() {

  }
}
</script>


<style scoped>
.demo-date-picker {
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  height: 100% !important;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.el-range-editor--large.el-input__wrapper{
  height: 100% !important;
}

.el-date-table td.end-date .el-date-table-cell__text,
.el-date-table td.start-date .el-date-table-cell__text
 {
  background-color: #519B7A !important;
}

</style>

