<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal__mask"></div>
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header"></slot>
            <div class="modal__x" @click="$emit('toggle')">
              &times;
            </div>
          </div>
          <div class="modal__body">
            <slot name="body"></slot>
          </div>
          <div class="modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
