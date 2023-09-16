export const skeletonSetup = () => 
`<script setup>

</script>

<template>

</template>
<style>

</style>
`;

export const skeletondf = (name: string) => 
`<template>

</template>

<script>
export default {
name: '${name}',
  data() {
  return {
  }
},
methods: {

}
}
</script>`;
