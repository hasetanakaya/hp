<template>
  <div
    class="btn"
    :class="{ 'btn-bl': bl, 'btn-tl': tl, 'btn-ig': ig, 'btn_en': $i18n.locale === 'en'}"
  >
    <slot />
  </div>
</template>

<script>
export default {

  props: {
    bl: { type: Boolean, default: false },
    tl: { type: Boolean, default: false },
    ig: { type: Boolean, default: false }
  }

}
</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';


  
.btn
  @include wf-ten()
  white-space: nowrap
  width: 174px
  height: 48px
  border: 2px solid $key
  border-radius: 4px
  padding: 12px 31px
  background-color: $white
  &:hover
    background-color: $key
    & a
      color: $white
  &_en
    width: 194px
  & a
    display: flex
    justify-content: center
    align-items: center
    font-size: 16px
    height: 100%
    text-decoration: none
    color: $key
  &-bl a
    background-color: $gray-bg
    &:hover
      background-color: $white
  &.btn-ig
    width: 180px
    height: 48px
    border-radius: 15px
    padding: 12px 14px
    background-color: $ig
    border: none
    &:hover
      opacity: .7
    & a
      @include wf-gen()
      color: $white
      font-size: 20px

</style>
