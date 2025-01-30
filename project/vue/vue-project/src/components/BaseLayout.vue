<template>
    <div class="container">
      <header>
        <h2>{{ number }}</h2>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
      <slot name="content" :slot-props="slotProps">{{ slotProps }}</slot>
    </div>
  </template>
  
  <script>
    export default {
        data() {
            return {
                number: 100,
                slotProps: 'slot child'
            }
        }
    }
  </script>
  <style>
    footer {
      border-top: 1px solid #ccc;
      color: #666;
      font-size: 0.8em;
    }
  </style>