<template>
  <v-card>
    <v-text-field
      v-model="sizeX"
      label="Please enter size of x axis"
      @input="redrawSquares"
    />

    <v-text-field
      v-model="sizeY"
      label="Please enter size of y axis"
      @input="redrawSquares"
    />

    <div
      class="grid-container"
      :style="{ gridTemplateColumns: `repeat(${sizeX}, 36px)` }"
    >
      <div
        v-for="(square, index) in squares"
        :key="index"
        :class="['grid-square', { 'blue': square.isBlue }]"
        @mouseover="toggleSquareColor(square)"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,
} from 'vue';

const sizeX = ref(2);
const sizeY = ref(2);

const toggleSquareColor = (square: { isBlue: boolean }) => {
  square.isBlue = !square.isBlue;
};

const squares = reactive([...Array(sizeX.value * sizeY.value)].map(() => ({ isBlue: false })));

const redrawSquares = () => {
  squares.splice(
    0,
    squares.length,
    ...[...Array(sizeX.value * sizeY.value)].map(() => ({ isBlue: false })),
  );
};

</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  padding: 20px;
  grid-gap: 10px;
  grid-template-rows: repeat(64, 36px);
  background-color: #333;
}

.grid-square {
  width: 36px;
  height: 36px;
  background-color: white;
  border: 1px solid #111;
}

.grid-square.blue {
  background-color: blue;
}
</style>
