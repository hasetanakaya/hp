<template>
  <div class="clm">
    <slot />
  </div>
</template>

<style lang="sass">
@import '~assets/scss/_mixin.scss';
.clm
  max-width: 1126px
  margin-right: auto
  margin-left: auto
  @include mediaQuery-down(md)
    padding-left: 36px
    padding-right: 36px
</style>