<template>
    <div>
        <h1>Hello World:)</h1>
    </div>
</template>

<script lang="ts">

</script>

<style>
      h1 {
        animation-name: rainbow;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }

      @keyframes rainbow {
        0% { color: #ff0000; }
        17% { color: #ffff00; }
        33% { color: #00ff00; }
        50% { color: #00ffff; }
        67% { color: #0000ff; }
        83% { color: #ff00ff; }
        100% { color: #ff0000; }
      }
</style>