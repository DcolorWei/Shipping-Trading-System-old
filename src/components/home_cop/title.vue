<template>
  <div class="btn">
    <span style="font-size:30px;color:#78ffcd" @click="manage()">船舶区块链应用系统</span>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  methods:{
    manage(){
      location.assign('#/Subject/Apperance/InfoShow');
    }
  }
};
</script>

<style scoped>
:root {
  --primary: #78ffcd;
  --solid: #fff;
  --btn-w: 10em;
  --dot-w: calc(var(--btn-w) * 0.2);
  --tr-X: calc(var(--btn-w) - var(--dot-w));
}
* {
  box-sizing: border-box;
}
*:before,
*:after {
  box-sizing: border-box;
}

.btn {
  position: relative;
  margin: 0 auto;
  width: var(--btn-w);
  color: var(--primary);
  border: 0.15em solid var(--primary);
  border-radius: 5em;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.3em;
  line-height: 2em;
  cursor: pointer;
}
.dot {
  content: "";
  position: absolute;
  top: 0;
  width: var(--dot-w);
  height: 100%;
  border-radius: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  display: none;
}
.dot:after {
  content: "";
  position: absolute;
  left: calc(50% - 0.4em);
  top: -0.4em;
  height: 0.8em;
  width: 0.8em;
  background: var(--primary);
  border-radius: 1em;
  border: 0.25em solid var(--solid);
  box-shadow: 0 0 0.7em var(--solid), 0 0 2em var(--primary);
}
.btn:hover .dot,
.btn:focus .dot {
  -webkit-animation: atom 2s infinite linear;
  animation: atom 2s infinite linear;
  display: block;
}
@-webkit-keyframes atom {
  0% {
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
  }
  30% {
    -webkit-transform: translateX(var(--tr-X)) rotate(0);
    transform: translateX(var(--tr-X)) rotate(0);
  }
  50% {
    -webkit-transform: translateX(var(--tr-X)) rotate(180deg);
    transform: translateX(var(--tr-X)) rotate(180deg);
  }
  80% {
    -webkit-transform: translateX(0) rotate(180deg);
    transform: translateX(0) rotate(180deg);
  }
  100% {
    -webkit-transform: translateX(0) rotate(360deg);
    transform: translateX(0) rotate(360deg);
  }
}
@keyframes atom {
  0% {
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
  }
  30% {
    -webkit-transform: translateX(var(--tr-X)) rotate(0);
    transform: translateX(var(--tr-X)) rotate(0);
  }
  50% {
    -webkit-transform: translateX(var(--tr-X)) rotate(180deg);
    transform: translateX(var(--tr-X)) rotate(180deg);
  }
  80% {
    -webkit-transform: translateX(0) rotate(180deg);
    transform: translateX(0) rotate(180deg);
  }
  100% {
    -webkit-transform: translateX(0) rotate(360deg);
    transform: translateX(0) rotate(360deg);
  }
}
</style>