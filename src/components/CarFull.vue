<template>
  <div class="container">
    <textarea
      class="textareaFull form-control"
      v-model="text"
      placeholder="Write please new description or 
edit it"
    ></textarea>
    <br />
    <h2 for="text">Description</h2>
    <p id="text">{{text||"This save your description"}}</p>
  </div>
</template>
<script>
export default {
  props: ["id"],

  data() {
    return {
      text: ""
    };
  }
};
</script>
<style >
.textareaFull {
  margin: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  white-space: pre;
}
</style>